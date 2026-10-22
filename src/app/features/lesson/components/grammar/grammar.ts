import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrammarData, GrammarRule } from '../../models/lesson.data';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { shuffleArray } from '../../../../shared/utils/array.utils';
import { AudioService } from '../../../../core/services/audio';

@Component({
  selector: 'app-grammar',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './grammar.html',
  styleUrls: ['./grammar.scss']
})
export class GrammarComponent implements OnInit {
  @Input() data!: GrammarData;
  displayRules: GrammarRule[] = [];
  
  practiceAnswers: { [key: string]: string[] } = {};
  practiceSubmitted: { [key: string]: boolean } = {};

  constructor(private audioService: AudioService) {}

  ngOnInit() {
    this.setupGrammar();
  }

  setupGrammar() {
    this.displayRules = this.data.rules.map(rule => {
      const clonedRule = JSON.parse(JSON.stringify(rule)); // Deep copy
      if (clonedRule.practice && Array.isArray(clonedRule.practice)) {
        clonedRule.practice.forEach((prac: any, i: number) => {
          const key = `${clonedRule.id}_${i}`;
          this.practiceAnswers[key] = [];
          this.practiceSubmitted[key] = false;
          prac.wordsToOrder = shuffleArray([...prac.wordsToOrder]);
        });
      }
      return clonedRule;
    });
  }

  selectWord(rule: GrammarRule, pIdx: number, wordId: string) {
    const key = `${rule.id}_${pIdx}`;
    if (this.practiceSubmitted[key]) return;
    
    const answers = this.practiceAnswers[key];
    if (!answers.includes(wordId)) {
      answers.push(wordId);
    }
  }

  removeWord(rule: GrammarRule, pIdx: number, wordId: string) {
    const key = `${rule.id}_${pIdx}`;
    if (this.practiceSubmitted[key]) return;
    
    const answers = this.practiceAnswers[key];
    const index = answers.indexOf(wordId);
    if (index !== -1) {
      answers.splice(index, 1);
    }
  }

  getWordText(rule: GrammarRule, pIdx: number, wordId: string): string {
    return rule.practice[pIdx].wordsToOrder.find((w: any) => w.id === wordId)?.text || '';
  }

  getWordPinyin(rule: GrammarRule, pIdx: number, wordId: string): string {
    return rule.practice[pIdx].wordsToOrder.find((w: any) => w.id === wordId)?.pinyin || '';
  }

  getAvailableWords(rule: GrammarRule, pIdx: number) {
    const key = `${rule.id}_${pIdx}`;
    const answers = this.practiceAnswers[key];
    return rule.practice[pIdx].wordsToOrder.filter((w: any) => !answers.includes(w.id));
  }

  checkAnswer(rule: GrammarRule, pIdx: number) {
    const key = `${rule.id}_${pIdx}`;
    this.practiceSubmitted[key] = true;
    const correct = this.isCorrect(rule, pIdx);
    if (correct) {
      this.audioService.playSuccessChime();
    } else {
      this.audioService.playEncouragementChime();
    }
  }

  resetAnswer(rule: GrammarRule, pIdx: number) {
    const key = `${rule.id}_${pIdx}`;
    this.practiceSubmitted[key] = false;
    this.practiceAnswers[key] = [];
    
    const targetRule = this.displayRules.find(r => r.id === rule.id);
    if (targetRule && targetRule.practice && targetRule.practice[pIdx]) {
      targetRule.practice[pIdx].wordsToOrder = shuffleArray([...targetRule.practice[pIdx].wordsToOrder]);
    }
  }

  drop(event: CdkDragDrop<string[]>, rule: GrammarRule, pIdx: number) {
    const key = `${rule.id}_${pIdx}`;
    if (this.practiceSubmitted[key]) return;
    moveItemInArray(this.practiceAnswers[key], event.previousIndex, event.currentIndex);
  }

  getCorrectAnswersHanzi(rule: GrammarRule, pIdx: number): string {
    return rule.practice[pIdx].correctOrderIds
      .map((id: string) => this.getWordText(rule, pIdx, id))
      .join('');
  }

  getCorrectAnswersText(rule: GrammarRule, pIdx: number): string {
    const hanziText = rule.practice[pIdx].correctOrderIds
      .map((id: string) => this.getWordText(rule, pIdx, id))
      .join(' ');
    const pinyinText = rule.practice[pIdx].correctOrderIds
      .map((id: string) => this.getWordPinyin(rule, pIdx, id))
      .filter((p: string) => !!p)
      .join(' ');
    return pinyinText ? `${hanziText} (${pinyinText})` : hanziText;
  }

  speakExample(hanzi: string) {
    this.audioService.speak(hanzi);
  }

  speakPractice(rule: GrammarRule, pIdx: number) {
    this.audioService.speak(this.getCorrectAnswersHanzi(rule, pIdx));
  }

  isCorrect(rule: GrammarRule, pIdx: number): boolean {
    const key = `${rule.id}_${pIdx}`;
    const answers = this.practiceAnswers[key];
    const correct = rule.practice[pIdx].correctOrderIds;
    
    if (answers.length !== correct.length) return false;
    return answers.every((val, index) => val === correct[index]);
  }
}
