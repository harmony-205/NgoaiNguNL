import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpeakingData, SpeakingTask, FreeSpeakingTask } from '../../models/lesson.data';
import { AudioService } from '../../../../core/services/audio';

interface SpeakingEvaluation {
  score: number;
  message: string;
  pinyinScore: number;
  toneScore: number;
  clarityScore: number;
  pinyinStandard: string;
  pinyinUser: string;
  machineRecognized: string;
}

@Component({
  selector: 'app-speaking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './speaking.html',
  styleUrls: ['./speaking.scss']
})
export class SpeakingComponent implements OnInit {
  @Input() data!: SpeakingData;

  recordingStatus: { [id: string]: 'idle' | 'recording' | 'done' } = {};
  attemptsLeft: { [id: string]: number } = {};
  evaluations: { [id: string]: SpeakingEvaluation } = {};
  freeSpeakingAnswers: { [id: string]: string } = {};

  constructor(private audioService: AudioService) {}

  ngOnInit() {
    if (this.data.readingTasks) {
      this.data.readingTasks.forEach(task => {
        this.attemptsLeft[task.id] = 2;
      });
    }
    if (this.data.freeSpeakingTasks) {
      this.data.freeSpeakingTasks.forEach(task => {
        this.freeSpeakingAnswers[task.id] = localStorage.getItem(`freeSpeaking_${task.id}`) || '';
        this.attemptsLeft[task.id] = 2;
      });
    }
  }

  saveAnswer(taskId: string) {
    localStorage.setItem(`freeSpeaking_${taskId}`, this.freeSpeakingAnswers[taskId]);
  }

  getStatus(taskId: string) {
    return this.recordingStatus[taskId] || 'idle';
  }

  getAttemptsText(taskId: string): string {
    const remaining = this.attemptsLeft[taskId] !== undefined ? this.attemptsLeft[taskId] : 2;
    return `Còn ${remaining}/2 lượt ghi âm`;
  }

  playAudio(task: SpeakingTask) {
    this.audioService.speak(task.hanzi);
  }

  playFreeTopicAudio(task: FreeSpeakingTask) {
    this.audioService.speak(task.topic);
  }

  toggleRecording(taskId: string, targetHanzi: string, pinyinText?: string) {
    const status = this.getStatus(taskId);

    if (status === 'recording') {
      this.finishRecording(taskId, targetHanzi, pinyinText);
      return;
    }

    if (this.attemptsLeft[taskId] <= 0) {
      this.attemptsLeft[taskId] = 2; // Allow reset if desired
    }

    this.recordingStatus[taskId] = 'recording';

    setTimeout(() => {
      if (this.recordingStatus[taskId] === 'recording') {
        this.finishRecording(taskId, targetHanzi, pinyinText);
      }
    }, 2500);
  }

  async finishRecording(taskId: string, targetHanzi: string, pinyinText?: string) {
    this.recordingStatus[taskId] = 'done';
    if (this.attemptsLeft[taskId] > 0) {
      this.attemptsLeft[taskId]--;
    }

    const evalResult = await this.audioService.evaluatePronunciation(targetHanzi);
    const score10 = evalResult.score;
    const pinyinScore10 = evalResult.breakdown?.initialFinal ?? 9;
    const toneScore10 = evalResult.breakdown?.tone ?? 9;
    const clarityScore10 = evalResult.breakdown?.fluency ?? 9;

    this.evaluations[taskId] = {
      score: score10,
      message: evalResult.score >= 9 ? '很棒！ Phát âm rất chuẩn, giữ nguyên phong độ nhé!' : 'Tốt lắm! Chú ý giữ đúng thanh điệu nhé.',
      pinyinScore: pinyinScore10,
      toneScore: toneScore10,
      clarityScore: clarityScore10,
      pinyinStandard: pinyinText || targetHanzi,
      pinyinUser: pinyinText || targetHanzi,
      machineRecognized: targetHanzi
    };
  }
}
