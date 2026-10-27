import { Injectable, signal, computed } from '@angular/core';

export interface CourseMaterial {
  id: string;
  title: string;
  description: string;
  courseCategory: 'tieng-trung' | 'tieng-nhat' | 'on-tap';
  level: string; // 'hsk1' | 'hsk2' | 'hsk3' | 'hsk4' | 'hsk5' | 'hsk6' | 'n5' | 'n4' | 'n3' | 'on-thi' | 'all'
  fileType: 'pdf' | 'doc' | 'mp3' | 'zip' | 'drive' | 'link';
  fileUrl: string;
  fileSize?: string;
  uploadDate: string;
  author: string;
  downloadCount: number;
}

const DEFAULT_MATERIALS: CourseMaterial[] = [
  // HSK 4
  {
    id: 'mat_hsk4_1',
    title: 'Giáo trình Chuẩn HSK 4 (Thượng + Hạ) PDF & Audio MP3',
    description: 'Trọn bộ 20 bài học HSK 4 kèm file nghe giọng chuẩn Bắc Kinh, file dịch nghĩa và ngữ pháp chi tiết.',
    courseCategory: 'tieng-trung',
    level: 'hsk4',
    fileType: 'pdf',
    fileUrl: 'https://drive.google.com/drive/folders/example-hsk4-textbook',
    fileSize: '45.8 MB',
    uploadDate: '2026-10-20',
    author: 'Cô Nghiêm Linh',
    downloadCount: 142
  },
  {
    id: 'mat_hsk4_2',
    title: 'Bộ 10 Đề thi thử HSK 4 mô phỏng sát đề thi thật 2026',
    description: 'Có đáp án giải thích từng câu, phần Nghe có transcript tiếng Trung - phiên âm pinyin.',
    courseCategory: 'tieng-trung',
    level: 'hsk4',
    fileType: 'pdf',
    fileUrl: 'https://drive.google.com/file/d/example-hsk4-exam/view',
    fileSize: '18.2 MB',
    uploadDate: '2026-10-22',
    author: 'Cô Nghiêm Linh',
    downloadCount: 89
  },
  // HSK 5
  {
    id: 'mat_hsk5_1',
    title: 'Tuyển tập 2500 Từ vựng HSK 5 cốt lõi kèm câu ví dụ',
    description: 'Bảng từ vựng phân loại theo chủ đề: Kinh tế, Xã hội, Đời sống, Văn hóa có pinyin chuẩn.',
    courseCategory: 'tieng-trung',
    level: 'hsk5',
    fileType: 'pdf',
    fileUrl: 'https://drive.google.com/file/d/example-hsk5-vocab/view',
    fileSize: '24.5 MB',
    uploadDate: '2026-10-18',
    author: 'Cô Nghiêm Linh',
    downloadCount: 215
  },
  {
    id: 'mat_hsk5_2',
    title: 'Chuyên đề Ngữ pháp HSK 5 nâng cao & Phân biệt từ đồng nghĩa',
    description: 'So sánh các cặp từ dễ nhầm lẫn thường xuất hiện trong đề thi HSK5 thực tế.',
    courseCategory: 'tieng-trung',
    level: 'hsk5',
    fileType: 'doc',
    fileUrl: 'https://drive.google.com/file/d/example-hsk5-grammar/view',
    fileSize: '12.3 MB',
    uploadDate: '2026-10-24',
    author: 'Cô Nghiêm Linh',
    downloadCount: 160
  },
  // HSK 6
  {
    id: 'mat_hsk6_1',
    title: '100 Bài văn mẫu HSK 6 đạt điểm tối đa (Tóm tắt đoạn văn 400 chữ)',
    description: 'Bí kíp tóm tắt văn bản HSK 6 phần Viết do cô Nghiêm Linh trực tiếp biên soạn và đúc kết.',
    courseCategory: 'tieng-trung',
    level: 'hsk6',
    fileType: 'pdf',
    fileUrl: 'https://drive.google.com/file/d/example-hsk6-writing/view',
    fileSize: '31.0 MB',
    uploadDate: '2026-10-15',
    author: 'Cô Nghiêm Linh (HSK 6)',
    downloadCount: 310
  },
  // Tiếng Nhật
  {
    id: 'mat_nihon_1',
    title: 'Trọn bộ Giáo trình Minna no Nihongo I & II (N5 - N4) PDF Bản quyền',
    description: 'Gồm sách Honsatsu, sách Giải thích ngữ pháp tiếng Việt, và bài tập Bunkei Renshuuchou.',
    courseCategory: 'tieng-nhat',
    level: 'n5',
    fileType: 'zip',
    fileUrl: 'https://drive.google.com/drive/folders/example-minna-nihongo',
    fileSize: '88.5 MB',
    uploadDate: '2026-10-16',
    author: 'Cô Nghiêm Linh (JLPT N1)',
    downloadCount: 198
  },
  {
    id: 'mat_nihon_2',
    title: 'Tổng hợp 150 Mẫu Ngữ pháp JLPT N3 trọng điểm & Đề thi thử',
    description: 'Tài liệu độc quyền của Ngoại Ngữ Nghiêm Linh dành cho học viên chuyển tiếp từ N4 lên N3.',
    courseCategory: 'tieng-nhat',
    level: 'n3',
    fileType: 'pdf',
    fileUrl: 'https://drive.google.com/file/d/example-jlpt-n3/view',
    fileSize: '16.7 MB',
    uploadDate: '2026-10-19',
    author: 'Cô Nghiêm Linh (JLPT N1)',
    downloadCount: 145
  },
  // Khóa Ôn tập
  {
    id: 'mat_ontap_1',
    title: 'Cẩm nang Ôn thi CSCA (Toán - Lý bằng tiếng Trung) Đỗ Học Bổng TQ',
    description: 'Hệ thống thuật ngữ Toán học, Vật lý bằng tiếng Trung và tuyển tập đề thi CSCA các năm trước.',
    courseCategory: 'on-tap',
    level: 'on-thi',
    fileType: 'pdf',
    fileUrl: 'https://drive.google.com/file/d/example-csca-guide/view',
    fileSize: '29.4 MB',
    uploadDate: '2026-10-21',
    author: 'Cô Nghiêm Linh',
    downloadCount: 275
  },
  {
    id: 'mat_ontap_2',
    title: 'Bí kíp Chinh phục Học bổng Chính phủ Trung Quốc (CSC & CIS) 2026',
    description: 'Hướng dẫn viết Kế hoạch học tập (Study Plan), viết Thư giới thiệu và kinh nghiệm phỏng vấn giáo sư.',
    courseCategory: 'on-tap',
    level: 'on-thi',
    fileType: 'pdf',
    fileUrl: 'https://drive.google.com/file/d/example-scholarship-handbook/view',
    fileSize: '15.1 MB',
    uploadDate: '2026-10-23',
    author: 'Cô Nghiêm Linh',
    downloadCount: 420
  }
];

@Injectable({
  providedIn: 'root'
})
export class CourseMaterialService {
  private readonly STORAGE_KEY = 'nl_course_materials';

  materials = signal<CourseMaterial[]>([]);

  constructor() {
    this.loadMaterials();
  }

  private loadMaterials() {
    let list: CourseMaterial[] = [];
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        try {
          list = JSON.parse(saved);
        } catch {
          list = [];
        }
      }
    }

    if (!list || list.length === 0) {
      list = [...DEFAULT_MATERIALS];
    }
    this.materials.set(list);
    this.saveToStorage(list);
  }

  private saveToStorage(list: CourseMaterial[]) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
    }
  }

  addMaterial(material: Omit<CourseMaterial, 'id' | 'uploadDate' | 'downloadCount'>): CourseMaterial {
    const newMaterial: CourseMaterial = {
      ...material,
      id: 'mat_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      uploadDate: new Date().toISOString().split('T')[0],
      downloadCount: 0
    };
    const updated = [newMaterial, ...this.materials()];
    this.materials.set(updated);
    this.saveToStorage(updated);
    return newMaterial;
  }

  deleteMaterial(id: string) {
    const updated = this.materials().filter(m => m.id !== id);
    this.materials.set(updated);
    this.saveToStorage(updated);
  }

  updateMaterial(id: string, updates: Partial<CourseMaterial>) {
    const updated = this.materials().map(m => {
      if (m.id === id) {
        return { ...m, ...updates };
      }
      return m;
    });
    this.materials.set(updated);
    this.saveToStorage(updated);
  }

  incrementDownload(id: string) {
    this.updateMaterial(id, {
      downloadCount: (this.materials().find(m => m.id === id)?.downloadCount || 0) + 1
    });
  }

  getMaterials(courseCategory?: string, level?: string): CourseMaterial[] {
    return this.materials().filter(m => {
      if (courseCategory && m.courseCategory !== courseCategory) return false;
      if (level && level !== 'all' && m.level !== level) return false;
      return true;
    });
  }
}
