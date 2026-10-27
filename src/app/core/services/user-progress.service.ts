import { Injectable, signal } from '@angular/core';

export interface CourseProgressRecord {
  [levelOrUnitKey: string]: {
    completedLessons: number;
    totalLessons: number;
    isFinished?: boolean;
    lastUpdated?: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class UserProgressService {
  private getStorageKey(userEmail: string): string {
    const cleanEmail = (userEmail || 'guest').toLowerCase().trim();
    return `nl_user_progress_${cleanEmail}`;
  }

  getUserProgress(userEmail: string): CourseProgressRecord {
    if (typeof window === 'undefined' || !window.localStorage) {
      return {};
    }
    const raw = localStorage.getItem(this.getStorageKey(userEmail));
    if (!raw) return {};
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }

  getUnitProgress(userEmail: string, hskLevel: string, unitId: number): { completedLessons: number; totalLessons: number } {
    const progress = this.getUserProgress(userEmail);
    const key = `${hskLevel}_unit_${unitId}`;
    if (progress[key]) {
      return progress[key];
    }
    // Default: for brand new users, 0 lessons are completed!
    return {
      completedLessons: 0,
      totalLessons: 12
    };
  }

  saveUnitProgress(userEmail: string, hskLevel: string, unitId: number, completedCount: number, totalCount = 12) {
    if (typeof window === 'undefined' || !window.localStorage) return;
    const progress = this.getUserProgress(userEmail);
    const key = `${hskLevel}_unit_${unitId}`;
    progress[key] = {
      completedLessons: Math.min(completedCount, totalCount),
      totalLessons: totalCount,
      isFinished: completedCount >= totalCount,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(this.getStorageKey(userEmail), JSON.stringify(progress));
  }

  resetProgress(userEmail: string) {
    if (typeof window === 'undefined' || !window.localStorage) return;
    localStorage.removeItem(this.getStorageKey(userEmail));
  }
}
