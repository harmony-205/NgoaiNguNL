import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationData, ConversationTurn, ConversationSection } from '../../models/lesson.data';
import { AudioService } from '../../../../core/services/audio';

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conversation.html',
  styleUrls: ['./conversation.scss']
})
export class ConversationComponent implements OnInit {
  @Input() data!: ConversationData;

  activeSectionId: string = '';
  recordingTurnId: string | null = null;
  recordingScore: number | null = null;
  isRecording: boolean = false;

  constructor(public audioService: AudioService) {}

  ngOnInit() {
    if (this.data && this.data.sections && this.data.sections.length > 0) {
      this.activeSectionId = this.data.sections[0].id;
    }
  }

  selectSection(sectionId: string) {
    this.activeSectionId = sectionId;
    this.recordingTurnId = null;
    this.isRecording = false;
  }

  playAudio(turn: ConversationTurn) {
    this.audioService.speakChinese(turn.hanzi);
  }

  playFullSection(section: ConversationSection) {
    const fullText = section.turns.map(t => t.hanzi).join('，');
    this.audioService.speakChinese(fullText);
  }

  startRecording(turn: ConversationTurn) {
    this.recordingTurnId = turn.id;
    this.isRecording = true;
    this.recordingScore = null;

    this.audioService.evaluatePronunciation(turn.hanzi).then(res => {
      this.isRecording = false;
      this.recordingScore = res.score * 10; // scale to 100
      if (this.recordingScore >= 80) {
        this.audioService.playSuccessSound();
      }
    });
  }
}
