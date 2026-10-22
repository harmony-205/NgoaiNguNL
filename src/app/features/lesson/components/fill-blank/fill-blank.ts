import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FillBlankData, FillBlankQuestion, FillBlankChoice } from '../../models/lesson.data';
import { shuffleArray } from '../../../../shared/utils/array.utils';
import { AudioService } from '../../../../core/services/audio';

@Component({
  selector: 'app-fill-blank',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fill-blank.html',
  styleUrls: ['./fill-blank.scss']
})
export class FillBlankComponent implements OnInit {
  @Input() data!: FillBlankData;
  @Input() isFinalTest: boolean = false;
  @Output() answerChecked = new EventEmitter<boolean>();
  
  displayQuestions: FillBlankQuestion[] = [];
  
  // Track selected choice for each question
  selectedChoices: { [questionId: string]: string | null } = {};
  typedAnswers: { [questionId: string]: string } = {};
  submitted: { [questionId: string]: boolean } = {};
  answersRevealed: boolean = false;

  constructor(private audioService: AudioService) {}

  ngOnInit() {
    this.setupFillBlank();
  }

  setupFillBlank() {
    this.selectedChoices = {};
    this.typedAnswers = {};
    this.submitted = {};
    this.answersRevealed = false;
    
    this.displayQuestions = shuffleArray(this.data.questions);
    
    this.displayQuestions.forEach(q => {
      this.selectedChoices[q.id] = null;
      this.typedAnswers[q.id] = '';
      this.submitted[q.id] = false;
    });
  }

  selectChoice(question: FillBlankQuestion, choiceId: string) {
    if (this.submitted[question.id]) return;
    this.selectedChoices[question.id] = choiceId;
    this.typedAnswers[question.id] = ''; // Clear typed answer if they select a choice
  }

  clearSelection(question: FillBlankQuestion) {
    if (this.submitted[question.id]) return;
    this.selectedChoices[question.id] = null;
  }

  getSelectedChoice(question: FillBlankQuestion): FillBlankChoice | undefined {
    const choiceId = this.selectedChoices[question.id];
    if (!choiceId) return undefined;
    return this.data.choices.find(c => c.id === choiceId);
  }

  getExpectedChoice(question: FillBlankQuestion): FillBlankChoice | undefined {
    return this.data.choices.find(c => c.id === question.expectedChoiceId);
  }

  getFilledPinyin(question: FillBlankQuestion): string {
    const selected = this.getSelectedChoice(question);
    if (selected) return selected.pinyin;
    const typed = this.typedAnswers[question.id]?.trim();
    if (!typed) return '';
    const match = this.data.choices.find(c => c.text === typed || c.pinyin.toLowerCase() === typed.toLowerCase());
    return match ? match.pinyin : '';
  }

  getFilledText(question: FillBlankQuestion): string {
    const selected = this.getSelectedChoice(question);
    if (selected) return selected.text;
    return this.typedAnswers[question.id]?.trim() || '';
  }

  getAvailableChoices(question: FillBlankQuestion): FillBlankChoice[] {
    const usedChoiceIds = Object.values(this.selectedChoices);
    return this.data.choices.filter(c => !usedChoiceIds.includes(c.id));
  }

  checkAnswer(question: FillBlankQuestion) {
    if (this.selectedChoices[question.id] || this.typedAnswers[question.id]?.trim()) {
      this.submitted[question.id] = true;
      const correct = this.isCorrect(question);
      if (correct) {
        this.audioService.playSuccessChime();
      } else {
        this.audioService.playEncouragementChime();
      }
      this.answerChecked.emit(correct);
    }
  }

  checkAllAnswers() {
    this.displayQuestions.forEach(q => {
      this.submitted[q.id] = true;
    });
    const allCorrect = this.displayQuestions.every(q => this.isCorrect(q));
    if (allCorrect) {
      this.audioService.playSuccessChime();
    } else {
      this.audioService.playEncouragementChime();
    }
  }

  toggleShowAnswers() {
    this.answersRevealed = !this.answersRevealed;
    if (this.answersRevealed) {
      this.displayQuestions.forEach(q => {
        this.selectedChoices[q.id] = q.expectedChoiceId;
        this.submitted[q.id] = true;
      });
    }
  }

  resetAnswer(question: FillBlankQuestion) {
    this.submitted[question.id] = false;
    this.selectedChoices[question.id] = null;
    this.typedAnswers[question.id] = '';
  }

  resetAll() {
    this.setupFillBlank();
  }

  speakSentence(question: FillBlankQuestion) {
    const expected = this.getExpectedChoice(question);
    const partsText = question.parts.map(p => {
      if (p.type === 'blank') return expected ? expected.text : '';
      return p.content || '';
    }).join('');
    // Remove pinyin in parentheses like (nǐ hǎo) when speaking Chinese
    const cleanedChinese = partsText.replace(/\([a-zA-Zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ\s]+\)/g, '').replace(/[A-B]:/g, '');
    this.audioService.speak(cleanedChinese);
  }

  isCorrect(question: FillBlankQuestion): boolean {
    const expected = this.getExpectedChoice(question);
    if (!expected) return false;

    const typed = this.typedAnswers[question.id]?.trim();
    if (typed && (typed === expected.text || typed.toLowerCase() === expected.pinyin.toLowerCase())) {
      return true;
    }
    return this.selectedChoices[question.id] === question.expectedChoiceId;
  }
}
