import { Injectable, signal } from '@angular/core';
import { LessonData } from '../../features/lesson/models/lesson.data';
import { LessonRegistry } from '../../features/lesson/data/lesson.registry';

export interface AdminLessonSummary {
  key: string;        // e.g. 'hsk4-1'
  level: string;      // e.g. 'hsk4'
  unit: number;       // e.g. 1
  hanziTitle: string;
  meaningTitle: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class LessonManagementService {
  private readonly STORAGE_KEY = 'nl_custom_admin_lessons';

  // Reactive signal of all custom admin-created lessons
  customLessonsMap = signal<Record<string, LessonData>>({});

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        try {
          const parsed: Record<string, LessonData> = JSON.parse(saved);
          this.customLessonsMap.set(parsed);
          
          // Augment LessonRegistry so router can resolve them directly
          Object.keys(parsed).forEach(key => {
            LessonRegistry[key] = parsed[key];
          });
        } catch (e) {
          console.error('Failed to parse saved custom lessons', e);
        }
      }
    }
  }

  private saveToStorage(map: Record<string, LessonData>) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(map));
    }
  }

  /**
   * Check whether a level has data available (either in static registry or admin-added).
   * For HSK 1, 2, 3: always true.
   * For HSK 4, 5, 6: true ONLY IF admin has added data (or static registry exists).
   */
  hasDataForLevel(levelId: string): boolean {
    const norm = (levelId || '').toLowerCase();
    if (['hsk1', 'hsk2', 'hsk3', 'n5', 'n4', 'n3'].includes(norm)) {
      return true;
    }

    // Check custom map
    const custom = this.customLessonsMap();
    const hasCustom = Object.keys(custom).some(k => k.toLowerCase().startsWith(`${norm}-`));
    if (hasCustom) return true;

    // Check static registry
    const hasStatic = Object.keys(LessonRegistry).some(k => k.toLowerCase().startsWith(`${norm}-`));
    return hasStatic;
  }

  /**
   * Get specific lesson by level and unit number
   */
  getLesson(level: string, unit: number): LessonData | null {
    const key = `${level.toLowerCase()}-${unit}`;
    return this.customLessonsMap()[key] || LessonRegistry[key] || null;
  }

  /**
   * Save or update a lesson for a specific level and unit
   */
  saveLesson(level: string, unit: number, data: LessonData): void {
    const key = `${level.toLowerCase()}-${unit}`;
    const updated = { ...this.customLessonsMap(), [key]: data };
    
    // Register to runtime registry
    LessonRegistry[key] = data;
    
    this.customLessonsMap.set(updated);
    this.saveToStorage(updated);
  }

  /**
   * Delete custom lesson
   */
  deleteLesson(level: string, unit: number): void {
    const key = `${level.toLowerCase()}-${unit}`;
    const updated = { ...this.customLessonsMap() };
    delete updated[key];
    delete LessonRegistry[key];

    this.customLessonsMap.set(updated);
    this.saveToStorage(updated);
  }

  /**
   * Check if a lesson was custom-created by Admin
   */
  isCustomLesson(level: string, unit: number): boolean {
    const key = `${level.toLowerCase()}-${unit}`;
    return !!this.customLessonsMap()[key];
  }

  /**
   * Get all custom lessons as a summary list
   */
  getCustomLessonsList(): AdminLessonSummary[] {
    const map = this.customLessonsMap();
    return Object.keys(map).map(key => {
      const parts = key.split('-');
      const level = parts[0];
      const unit = parseInt(parts[1], 10) || 1;
      const data = map[key];
      return {
        key,
        level,
        unit,
        hanziTitle: data.lessonName?.hanzi || `Bài ${unit}`,
        meaningTitle: data.lessonName?.meaning || '',
        createdAt: new Date().toLocaleDateString('vi-VN')
      };
    });
  }

  /**
   * Generate an initial template for Admin when creating a new lesson
   */
  generateTemplate(level: string, unit: number): LessonData {
    const levelUpper = level.toUpperCase();
    return {
      lessonId: `${level.toLowerCase()}-lesson-${unit}`,
      lessonName: {
        hanzi: `第${unit}课`,
        pinyin: `Dì ${unit} kè`,
        meaning: `Bài ${unit} (${levelUpper})`
      },
      warmUp: {
        title: `Khởi động ${levelUpper} - Bài ${unit}`,
        description: 'Bấm chọn một chữ Hán bên dưới, rồi bấm vào ô nghĩa tương ứng.',
        items: [
          { id: 'wu1', meaning: 'du lịch', expectedVocabId: 'v1' },
          { id: 'wu2', meaning: 'kế hoạch', expectedVocabId: 'v2' },
          { id: 'wu3', meaning: 'môi trường', expectedVocabId: 'v3' },
          { id: 'wu4', meaning: 'thành công', expectedVocabId: 'v4' }
        ],
        choices: [
          { id: 'v1', hanzi: '旅游', pinyin: 'lǚyóu', meaning: 'du lịch', examples: [] },
          { id: 'v2', hanzi: '计划', pinyin: 'jìhuà', meaning: 'kế hoạch', examples: [] },
          { id: 'v3', hanzi: '环境', pinyin: 'huánjìng', meaning: 'môi trường', examples: [] },
          { id: 'v4', hanzi: '成功', pinyin: 'chénggōng', meaning: 'thành công', examples: [] }
        ]
      },
      vocabulary: {
        title: `Từ mới ${levelUpper} - Bài ${unit}`,
        description: 'Bấm thẻ để xem nghĩa & câu ví dụ.',
        words: [
          {
            id: 'v1',
            hanzi: '旅游',
            pinyin: 'lǚyóu',
            meaning: 'du lịch',
            wordType: 'Động từ',
            sinoVietnamese: 'Lữ du',
            examples: [
              { hanzi: '我们一起去旅游。', pinyin: 'Wǒmen yìqǐ qù lǚyóu.', meaning: 'Chúng ta cùng đi du lịch.' },
              { hanzi: '云南是一个很好的旅游地方。', pinyin: 'Yúnnán shì yí ge hěn hǎo de lǚyóu dìfang.', meaning: 'Vân Nam là một địa điểm du lịch rất tốt.' }
            ]
          },
          {
            id: 'v2',
            hanzi: '计划',
            pinyin: 'jìhuà',
            meaning: 'kế hoạch',
            wordType: 'Danh từ/Động từ',
            sinoVietnamese: 'Kế hoạch',
            examples: [
              { hanzi: '你有什么计划？', pinyin: 'Nǐ yǒu shénme jìhuà?', meaning: 'Bạn có kế hoạch gì?' },
              { hanzi: '我计划下个月去中国。', pinyin: 'Wǒ jìhuà xià ge yuè qù Zhōngguó.', meaning: 'Tôi lên kế hoạch tháng sau đi Trung Quốc.' }
            ]
          }
        ]
      },
      flashcards: {
        title: `Thẻ nhớ ${levelUpper} - Bài ${unit}`,
        words: [
          {
            id: 'v1',
            hanzi: '旅游',
            pinyin: 'lǚyóu',
            meaning: 'du lịch',
            examples: [
              { hanzi: '我们一起去旅游。', pinyin: 'Wǒmen yìqǐ qù lǚyóu.', meaning: 'Chúng ta cùng đi du lịch.' }
            ]
          },
          {
            id: 'v2',
            hanzi: '计划',
            pinyin: 'jìhuà',
            meaning: 'kế hoạch',
            examples: [
              { hanzi: '你有什么计划？', pinyin: 'Nǐ yǒu shénme jìhuà?', meaning: 'Bạn có kế hoạch gì?' }
            ]
          }
        ]
      },
      grammar: {
        title: `Ngữ pháp ${levelUpper} - Bài ${unit}`,
        rules: [
          {
            id: 'g1',
            title: 'Cách dùng cấu trúc "越来越..."',
            explanation: '"越来越 + Tính từ/Động từ tâm lý" biểu thị mức độ biến đổi tăng dần theo thời gian.',
            usage: 'Dùng để diễn tả sự thay đổi phát triển dần: ngày càng...',
            note: 'Không kết hợp với các phó từ chỉ mức độ như 很, 非常.',
            examples: [
              { hanzi: '天气越来越热了。', pinyin: 'Tiānqì yuè lái yuè rè le.', meaning: 'Thời tiết ngày càng nóng rồi.' },
              { hanzi: '她的汉语越来越好。', pinyin: 'Tā de hànyǔ yuè lái yuè hǎo.', meaning: 'Tiếng Hán của cô ấy ngày càng tốt.' }
            ],
            practice: [
              {
                questionText: 'Câu 1 · Thời tiết ngày càng nóng rồi.',
                wordsToOrder: [
                  { id: '1', text: '天气', pinyin: 'tiānqì' },
                  { id: '2', text: '越来越', pinyin: 'yuè lái yuè' },
                  { id: '3', text: '热', pinyin: 'rè' },
                  { id: '4', text: '了', pinyin: 'le' }
                ],
                correctOrderIds: ['1', '2', '3', '4']
              },
              {
                questionText: 'Câu 2 · Tiếng Hán của cô ấy ngày càng tốt.',
                wordsToOrder: [
                  { id: '1', text: '她的汉语', pinyin: 'tā de hànyǔ' },
                  { id: '2', text: '越来越', pinyin: 'yuè lái yuè' },
                  { id: '3', text: '好', pinyin: 'hǎo' }
                ],
                correctOrderIds: ['1', '2', '3']
              },
              {
                questionText: 'Câu 3 · Cuộc sống ngày càng bận rộn.',
                wordsToOrder: [
                  { id: '1', text: '生活', pinyin: 'shēnghuó' },
                  { id: '2', text: '越来越', pinyin: 'yuè lái yuè' },
                  { id: '3', text: '忙', pinyin: 'máng' }
                ],
                correctOrderIds: ['1', '2', '3']
              },
              {
                questionText: 'Câu 4 · Bạn bè ngày càng nhiều.',
                wordsToOrder: [
                  { id: '1', text: '朋友', pinyin: 'péngyou' },
                  { id: '2', text: '越来越', pinyin: 'yuè lái yuè' },
                  { id: '3', text: '多', pinyin: 'duō' }
                ],
                correctOrderIds: ['1', '2', '3']
              },
              {
                questionText: 'Câu 5 · Tôi ngày càng thích Trung Quốc.',
                wordsToOrder: [
                  { id: '1', text: '我', pinyin: 'wǒ' },
                  { id: '2', text: '越来越', pinyin: 'yuè lái yuè' },
                  { id: '3', text: '喜欢', pinyin: 'xǐhuan' },
                  { id: '4', text: '中国', pinyin: 'zhōngguó' }
                ],
                correctOrderIds: ['1', '2', '3', '4']
              }
            ]
          }
        ]
      },
      conversation: {
        title: `Hội thoại ${levelUpper} - Bài ${unit}`,
        sections: [
          {
            id: 'c1',
            title: '1 · Bàn về kế hoạch du lịch',
            turns: [
              {
                id: 't1',
                role: 'Nghiêm Linh',
                avatar: 'NL',
                hanzi: '假期你有什么计划？',
                pinyin: 'Jiàqī nǐ yǒu shénme jìhuà?',
                meaning: 'Kỳ nghỉ bạn có kế hoạch gì chưa?'
              },
              {
                id: 't2',
                role: 'Học viên',
                avatar: 'HV',
                hanzi: '我想去中国旅游，你觉得哪儿好？',
                pinyin: 'Wǒ xiǎng qù Zhōngguó lǚyóu, nǐ juéde nǎr hǎo?',
                meaning: 'Tôi muốn đi Trung Quốc du lịch, bạn thấy ở đâu đẹp?'
              }
            ]
          }
        ]
      },
      fillBlank: {
        title: `Điền từ ${levelUpper} - Bài ${unit}`,
        choices: [
          { id: 'c1', text: '越来越', pinyin: 'yuè lái yuè' },
          { id: 'c2', text: '计划', pinyin: 'jìhuà' },
          { id: 'c3', text: '旅游', pinyin: 'lǚyóu' }
        ],
        questions: [
          {
            id: 'q1',
            speaker: '1',
            parts: [
              { type: 'text', content: '我们一起去 ' },
              { type: 'blank' },
              { type: 'text', content: ' 吧！' }
            ],
            expectedChoiceId: 'c3',
            hint: 'Gợi ý: 旅游 (lǚyóu) / 计划 (jìhuà)'
          }
        ]
      },
      arranging: {
        title: `Sắp xếp câu ${levelUpper} - Bài ${unit}`,
        questions: [
          {
            id: 'a1',
            meaning: 'Chúng ta cùng đi du lịch.',
            words: [
              { id: 'w1', text: '我们', pinyin: 'wǒmen' },
              { id: 'w2', text: '一起', pinyin: 'yìqǐ' },
              { id: 'w3', text: '去', pinyin: 'qù' },
              { id: 'w4', text: '旅游', pinyin: 'lǚyóu' }
            ],
            correctOrderIds: ['w1', 'w2', 'w3', 'w4']
          }
        ]
      },
      matching: {
        title: `Nối câu ${levelUpper} - Bài ${unit}`,
        leftItems: [
          { id: 'l1', content: '去旅游', pinyin: 'qù lǚyóu' },
          { id: 'l2', content: '做计划', pinyin: 'zuò jìhuà' }
        ],
        rightItems: [
          { id: 'r1', content: 'đi du lịch', pinyin: '' },
          { id: 'r2', content: 'làm kế hoạch', pinyin: '' }
        ],
        pairs: [
          { leftId: 'l1', rightId: 'r1' },
          { leftId: 'l2', rightId: 'r2' }
        ]
      },
      quiz: {
        title: `Trắc nghiệm ${levelUpper} - Bài ${unit}`,
        description: 'Chọn đáp án đúng nhất cho câu hỏi sau.',
        questions: [
          {
            id: 'qz1',
            questionText: 'Từ "旅游" (lǚyóu) có nghĩa là gì?',
            options: [
              { id: 'o1', text: 'du lịch', pinyin: 'lǚyóu' },
              { id: 'o2', text: 'kế hoạch', pinyin: 'jìhuà' },
              { id: 'o3', text: 'nghỉ ngơi', pinyin: 'xiūxi' }
            ],
            correctOptionId: 'o1'
          }
        ]
      },
      speaking: {
        title: `Luyện nói ${levelUpper} - Bài ${unit}`,
        description: 'Luyện phát âm chuẩn âm điệu và thanh điệu.',
        readingTasks: [
          {
            id: 's1',
            hanzi: '我们一起去旅游。',
            pinyin: 'Wǒmen yìqǐ qù lǚyóu.',
            meaning: 'Chúng ta cùng đi du lịch.'
          }
        ]
      },
      funFacts: {
        title: `Có thể bạn chưa biết: Văn hóa ${levelUpper}`,
        description: 'Kiến thức thực tế khi giao tiếp tiếng Trung.',
        facts: [
          {
            id: 'f1',
            title: 'Khái niệm "Du lịch văn hóa" (文化旅游 - wénhuà lǚyóu)',
            content: 'Người Trung Quốc hiện đại rất chuộng hình thức du lịch kết hợp tìm hiểu lịch sử, danh lam thắng cảnh và ẩm thực địa phương.'
          }
        ]
      }
    };
  }
}
