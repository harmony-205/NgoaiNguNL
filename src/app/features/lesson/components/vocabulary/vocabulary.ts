import { Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VocabularyData, VocabItem } from '../../models/lesson.data';
import { AudioService } from '../../../../core/services/audio';

@Component({
  selector: 'app-vocabulary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vocabulary.html',
  styleUrl: './vocabulary.scss'
})
export class VocabularyComponent implements OnDestroy {
  @Input() data!: VocabularyData;
  
  selectedWord: VocabItem | null = null;

  // Stroke Order Modal state
  isStrokeModalOpen = false;
  hanziCharacters: string[] = [];
  private hanziWriters: any[] = [];

  // Audio Recording & Assessment state
  isRecording = false;
  pronunciationResult: { score: number; comment: string; feedback: string } | null = null;

  constructor(public audioService: AudioService) {}

  openDetail(word: VocabItem) {
    this.selectedWord = word;
    this.pronunciationResult = null;
    this.isRecording = false;
  }

  closeDetail() {
    this.selectedWord = null;
    this.isStrokeModalOpen = false;
    this.pronunciationResult = null;
    this.isRecording = false;
  }

  playAudio(event: Event, word: VocabItem | null) {
    if (!word) return;
    event.stopPropagation();
    this.audioService.speakChinese(word.hanzi);
  }

  playExampleAudio(event: Event, text: string) {
    event.stopPropagation();
    this.audioService.speakChinese(text);
  }

  recordAudio() {
    if (!this.selectedWord) return;
    this.isRecording = true;
    this.pronunciationResult = null;

    this.audioService.evaluatePronunciation(this.selectedWord.hanzi).then(res => {
      this.isRecording = false;
      this.pronunciationResult = res;
      if (res.score >= 8) {
        this.audioService.playSuccessSound();
      }
    });
  }

  async openStrokeModal() {
    if (!this.selectedWord) return;
    this.isStrokeModalOpen = true;

    // Split Chinese characters
    this.hanziCharacters = Array.from(this.selectedWord.hanzi).filter(ch => /[\u4e00-\u9fa5]/.test(ch));

    if (typeof window !== 'undefined') {
      setTimeout(async () => {
        try {
          const HanziWriterModule = await import('hanzi-writer');
          const HanziWriter = (HanziWriterModule as any).default || HanziWriterModule;

          this.hanziWriters = [];
          this.hanziCharacters.forEach((char, index) => {
            const container = document.getElementById(`hanzi-target-${index}`);
            if (container) {
              container.innerHTML = '';
              const writer = HanziWriter.create(container, char, {
                width: 140,
                height: 140,
                padding: 10,
                showOutline: true,
                strokeAnimationSpeed: 1,
                delayBetweenStrokes: 120,
                strokeColor: '#0284c7',
                outlineColor: '#cbd5e1'
              });
              writer.animateCharacter();
              this.hanziWriters.push(writer);
            }
          });
        } catch (err) {
          console.error('Error loading HanziWriter:', err);
        }
      }, 100);
    }
  }

  closeStrokeModal() {
    this.isStrokeModalOpen = false;
    this.hanziWriters = [];
  }

  animateStrokes() {
    this.hanziWriters.forEach(w => w.animateCharacter());
  }

  quizStrokes() {
    this.hanziWriters.forEach(w => w.quiz());
  }

  ngOnDestroy() {
    this.hanziWriters = [];
  }
}

