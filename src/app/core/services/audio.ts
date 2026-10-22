import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audioCtx: AudioContext | null = null;

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  // Âm thanh chúc mừng làm đúng (Khen)
  playSuccessSound() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.1);

      gain.gain.setValueAtTime(0, now + idx * 0.1);
      gain.gain.linearRampToValueAtTime(0.3, now + idx * 0.1 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.1);
      osc.stop(now + idx * 0.1 + 0.4);
    });
  }

  // Âm thanh cổ vũ làm sai (Cố gắng lần sau)
  playEncourageSound() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [440, 349.23]; // A4, F4
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.15);

      gain.gain.setValueAtTime(0, now + idx * 0.15);
      gain.gain.linearRampToValueAtTime(0.25, now + idx * 0.15 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.15 + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.15);
      osc.stop(now + idx * 0.15 + 0.35);
    });
  }

  // Đọc mẫu tiếng Trung bằng SpeechSynthesis
  speakChinese(text: string) {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.85; // tốc độ vừa phải cho người học
    utterance.pitch = 1.0;

    // Chọn giọng tiếng Trung chuẩn nếu có
    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find(v => v.lang.startsWith('zh') || v.name.includes('Chinese'));
    if (zhVoice) {
      utterance.voice = zhVoice;
    }

    window.speechSynthesis.speak(utterance);
  }

  // Alias for backward compatibility & semantic chime calls
  playSuccessChime() {
    this.playSuccessSound();
  }

  playEncouragementChime() {
    this.playEncourageSound();
  }

  speak(text: string, lang: string = 'zh-CN') {
    this.speakChinese(text);
  }

  // Đánh giá phát âm
  evaluatePronunciation(expected: string): Promise<{
    score: number;
    comment: string;
    feedback: string;
    breakdown: {
      initialFinal: number;
      tone: number;
      fluency: number;
    };
  }> {
    return new Promise((resolve) => {
      // Giả lập ghi âm & phân tích giọng nói thông minh
      setTimeout(() => {
        // Điểm chuẩn từ 8 đến 10 cho trải nghiệm học sinh
        const score = Math.floor(Math.random() * 3) + 8; // 8, 9 hoặc 10
        const initialFinal = Math.min(10, Math.max(8, score + (Math.random() > 0.5 ? 0 : -1)));
        const tone = Math.min(10, Math.max(8, score + (Math.random() > 0.5 ? 0 : 1)));
        const fluency = Math.min(10, Math.max(8, score));

        let comment = '';
        if (score === 10) {
          comment = '很棒! Phát âm rất chuẩn, giữ nguyên phong độ nhé!';
        } else if (score === 9) {
          comment = 'Tốt lắm! Thanh điệu rõ ràng, phát âm rất tự nhiên.';
        } else {
          comment = 'Khá tốt! Chú ý thêm một chút về độ vang của thanh mẫu nhé.';
        }
        resolve({
          score,
          comment,
          feedback: `Âm (声母+韵母): ${initialFinal}/10 | Thanh điệu: ${tone}/10`,
          breakdown: {
            initialFinal,
            tone,
            fluency
          }
        });
      }, 500);
    });
  }
}
