import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-teacher-intro',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './teacher-intro.html',
  styleUrls: ['./teacher-intro.scss']
})
export class TeacherIntroComponent {
  socialLinks = [
    {
      title: 'Facebook cá nhân',
      subtitle: 'Nghiêm Linh',
      icon: '👤',
      link: 'https://www.facebook.com/share/1EwT9r5Gte/?mibextid=wwXIfr',
      color: '#1877F2'
    },
    {
      title: 'Zalo',
      subtitle: '0385780185',
      icon: '💬',
      link: 'https://zalo.me/0385780185',
      color: '#0068FF'
    },
    {
      title: 'Fanpage Trung tâm',
      subtitle: 'Ngoại Ngữ Nghiêm Linh',
      icon: '🏫',
      link: 'https://www.facebook.com/share/1BshmLRpV2/?mibextid=wwXIfr',
      color: '#E1306C'
    },
    {
      title: 'Group chia sẻ tài liệu',
      subtitle: 'Ngoại Ngữ Nghiêm Linh',
      icon: '📚',
      link: 'https://www.facebook.com/share/g/1EWiZzbywr/?mibextid=wwXIfr',
      color: '#10B981'
    },
    {
      title: 'Group Chinh phục học bổng TQ',
      subtitle: 'Cộng đồng săn học bổng',
      icon: '🎓',
      link: 'https://www.facebook.com/share/g/17sjyE7xxG/?mibextid=wwXIfr',
      color: '#F59E0B'
    }
  ];

  stats = [
    { number: '4 năm', label: 'Kinh nghiệm giảng dạy, biên soạn và phát triển tài liệu tiếng Trung', icon: '📅' },
    { number: '50+', label: 'Lớp giảng dạy tiếng Trung HSK các cấp, tiếng Trung công ty', icon: '🏫' },
    { number: '200+', label: 'Học viên đạt chứng chỉ HSK2 - 5', icon: '🎯' },
    { number: '60+', label: 'Học viên tham gia ôn thi CSCA (Toán - Lý bằng tiếng Trung), đỗ học bổng TQ', icon: '📐' }
  ];

  teachingActivities = [
    'Bắt đầu dạy tiếng Nhật từ năm 2020; dạy tiếng Trung từ năm 2022.',
    'Đã khai giảng tổng cộng hơn 50 lớp học.',
    'Có nhiều kinh nghiệm trong việc hướng dẫn học sinh học ngoại ngữ và ôn thi hiệu quả.',
    'Đang vận hành trung tâm tiếng Trung online với đội ngũ giáo viên có trình độ chuyên môn cao, có kinh nghiệm trong giảng dạy.'
  ];

  educations = [
    {
      school: 'Đại học Ngoại ngữ Bắc Kinh',
      major: 'Tốt nghiệp chuyên ngành Biên phiên dịch Trung - Việt',
      note: 'Học bổng toàn phần Chính phủ Trung Quốc (2022)'
    },
    {
      school: 'Đại học Ký Nam (Quảng Châu)',
      major: 'Chuyên ngành Giáo dục Hán ngữ Quốc tế',
      note: 'Học bổng toàn phần Giáo viên tiếng Trung (2022)'
    },
    {
      school: 'Đại học Thiên Tân (2022)',
      major: 'Chuyên ngành Ngôn ngữ Trung',
      note: 'Đỗ học bổng trường'
    },
    {
      school: 'Đại học Phúc Đán, ĐH Nhân dân TQ, ĐH Nam Kinh (2026)',
      major: 'Chuyên ngành Báo chí và Truyền thông',
      note: 'Đỗ chương trình Thạc sĩ danh giá'
    }
  ];

  certificates = [
    { title: '2 chứng chỉ tiếng Nhật JLPT N1', desc: 'Đạt cấp độ cao nhất tiếng Nhật vào năm 2020 và 2025' },
    { title: 'Chứng chỉ HSK6 & HSKK Cao cấp', desc: 'Đạt chuẩn năng lực Hán ngữ bậc cao nhất vào năm 2022' }
  ];

  awards = [
    'Đại sứ truyền thông của Đài truyền hình Bắc Kinh (2024)',
    'Đạt nhiều giải thưởng trong các cuộc thi làm video ngắn về văn hóa & ngôn ngữ',
    '4 năm kinh nghiệm làm mạng xã hội, sở hữu kênh TikTok 100.000 người theo dõi, Facebook cá nhân 130.000 người theo dõi, Fanpage trung tâm 22.000 người theo dõi'
  ];
}
