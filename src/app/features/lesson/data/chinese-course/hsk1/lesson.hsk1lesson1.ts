import { LessonData } from '../../../models/lesson.data';

export const hsk1lesson1Data: LessonData = {
  lessonId: 'lesson-1-hsk-1',
  lessonName: { hanzi: 'AI小语, 你好!', pinyin: 'AI Xiǎoyǔ, nǐ hǎo!', meaning: 'Chào AI Tiểu Ngữ!' },
  warmUp: {
    title: 'Khởi động',
    description: 'Bấm chọn một chữ Hán (A-F) bên dưới, rồi bấm vào ô nghĩa tương ứng.',
    items: [
      { id: 'wu1', meaning: 'xin chào', expectedVocabId: 'v1' },
      { id: 'wu2', meaning: 'tạm biệt', expectedVocabId: 'v2' },
      { id: 'wu3', meaning: 'giáo viên', expectedVocabId: 'v3' },
      { id: 'wu4', meaning: 'tốt, khỏe', expectedVocabId: 'v4' },
      { id: 'wu5', meaning: 'mọi người', expectedVocabId: 'v5' },
      { id: 'wu6', meaning: 'cảm ơn', expectedVocabId: 'v6' },
    ],
    choices: [
      { id: 'v1', hanzi: '你好', pinyin: 'nǐ hǎo', meaning: 'xin chào', examples: [] },
      { id: 'v2', hanzi: '再见', pinyin: 'zàijiàn', meaning: 'tạm biệt', examples: [] },
      { id: 'v3', hanzi: '老师', pinyin: 'lǎoshī', meaning: 'giáo viên', examples: [] },
      { id: 'v4', hanzi: '好', pinyin: 'hǎo', meaning: 'tốt, khỏe', examples: [] },
      { id: 'v5', hanzi: '大家', pinyin: 'dàjiā', meaning: 'mọi người', examples: [] },
      { id: 'v6', hanzi: '谢谢', pinyin: 'xièxie', meaning: 'cảm ơn', examples: [] },




    ],
  },
  vocabulary: {
    title: 'Từ mới',
    words: [
      {
        id: 'v1',
        hanzi: '你好',
        pinyin: 'nǐ hǎo',
        meaning: 'xin chào',
        sinoVietnamese: 'Nhĩ hảo',
        examples: [
          { hanzi: 'AI小语，你好！', pinyin: 'AI Xiǎoyǔ, nǐ hǎo!', meaning: 'Chào AI Tiểu Ngữ!' },
          { hanzi: '你好，我是王老师。', pinyin: 'Nǐ hǎo, wǒ shì Wáng lǎoshī.', meaning: 'Xin chào, tôi là cô Vương.' }
        ]
      },
      {
        id: 'v2',
        hanzi: '再见',
        pinyin: 'zàijiàn',
        meaning: 'tạm biệt',
        sinoVietnamese: 'Tái kiến',
        examples: [
          { hanzi: '再见，老师！', pinyin: 'Zàijiàn, lǎoshī!', meaning: 'Tạm biệt, thầy/cô!' },
          { hanzi: '明天见！', pinyin: 'Míngtiān jiàn!', meaning: 'Hẹn gặp ngày mai!' }
        ]
      },
      {
        id: 'v3',
        hanzi: '老师',
        pinyin: 'lǎoshī',
        meaning: 'giáo viên',
        sinoVietnamese: 'Lão sư',
        examples: [
          { hanzi: '王老师，你好！', pinyin: 'Wáng lǎoshī, nǐ hǎo!', meaning: 'Chào cô Vương!' },
          { hanzi: '他是我的老师。', pinyin: 'Tā shì wǒ de lǎoshī.', meaning: 'Anh ấy là giáo viên của tôi.' }
        ]
      },
      {
        id: 'v4',
        hanzi: '好',
        pinyin: 'hǎo',
        meaning: 'tốt, khỏe',
        sinoVietnamese: 'Hảo',
        examples: [
          { hanzi: '你好！', pinyin: 'Nǐ hǎo!', meaning: 'Xin chào!' },
          { hanzi: '我很好。', pinyin: 'Wǒ hěn hǎo.', meaning: 'Tôi rất khỏe.' }
        ]
      },
      {
        id: 'v5',
        hanzi: '大家',
        pinyin: 'dàjiā',
        meaning: 'mọi người',
        sinoVietnamese: 'Đại gia',
        examples: [
          { hanzi: '大家好！', pinyin: 'Dàjiā hǎo!', meaning: 'Chào mọi người!' },
          { hanzi: '我们大家都是朋友。', pinyin: 'Wǒmen dàjiā dōu shì péngyou.', meaning: 'Chúng ta đều là bạn bè.' }
        ]
      },
      {
        id: 'v6',
        hanzi: '谢谢',
        pinyin: 'xièxie',
        meaning: 'cảm ơn',
        sinoVietnamese: 'Tạ tạ',
        examples: [
          { hanzi: '谢谢你的帮助。', pinyin: 'Xièxie nǐ de bāngzhù.', meaning: 'Cảm ơn sự giúp đỡ của bạn.' },
          { hanzi: '不客气。', pinyin: 'Bú kèqi.', meaning: 'Không có gì.' }
        ]
      },
      {
        id: 'v7',
        hanzi: '学生',
        pinyin: 'xuésheng',
        meaning: 'học sinh',
        sinoVietnamese: 'Học sinh',
        examples: [
          { hanzi: '我是学生。', pinyin: 'Wǒ shì xuésheng.', meaning: 'Tôi là học sinh.' },
          { hanzi: '他是一个好学生。', pinyin: 'Tā shì yīgè hǎo xuésheng.', meaning: 'Anh ấy là một học sinh giỏi.' }
        ]
      },
      {
        id: 'v8',
        hanzi: '们',
        pinyin: 'men',
        meaning: 'chỉ số nhiều (sau danh từ)',
        sinoVietnamese: 'Môn',
        examples: [
          { hanzi: '我们', pinyin: 'wǒmen', meaning: 'chúng tôi' },
          { hanzi: '你们', pinyin: 'nǐmen', meaning: 'các bạn' },
          { hanzi: '他们', pinyin: 'tāmen', meaning: 'họ' }
        ]
      },
      {
        id: 'v9',
        hanzi: '您',
        pinyin: 'nín',
        meaning: 'ông/bà/cô/chú (kính trọng)',
        sinoVietnamese: 'Ninh',
        examples: [
          { hanzi: '您好！', pinyin: 'Nín hǎo!', meaning: 'Xin chào! (kính trọng)' },
          { hanzi: '您贵姓？', pinyin: 'Nín guìxìng?', meaning: 'Ông/bà họ gì?' }
        ]
      },
      {
        id: 'v10',
        hanzi: '你们',
        pinyin: 'nǐmen',
        meaning: 'các bạn',
        sinoVietnamese: 'Nhĩ môn',
        examples: [
          { hanzi: '你们好！', pinyin: 'Nǐmen hǎo!', meaning: 'Chào các bạn!' }
        ]
      },
      {
        id: 'v11',
        hanzi: '不客气',
        pinyin: 'bú kèqi',
        meaning: 'không khách khí',
        sinoVietnamese: 'Bất khách khí',
        examples: [
          { hanzi: '谢谢！—— 不客气。', pinyin: 'Xièxie! —— Bú kèqi.', meaning: 'Cảm ơn! —— Không có gì.' }
        ]
      },
      {
        id: 'v12',
        hanzi: '同学',
        pinyin: 'tóngxué',
        meaning: 'học sinh',
        sinoVietnamese: 'Đồng học',
        examples: [
          { hanzi: '他是我的同学。', pinyin: 'Tā shì wǒ de tóngxué.', meaning: 'Anh ấy là học sinh của tôi.' },
          { hanzi: '我们是同学。', pinyin: 'Wǒmen shì tóngxué.', meaning: 'Chúng tôi là học sinh.' }
        ]
      }
    ]
  },
  flashcards: {
    title: 'Thẻ nhớ nhanh',
    words: [
      {
        id: 'v1',
        hanzi: '你好',
        pinyin: 'nǐ hǎo',
        meaning: 'xin chào',
        examples: [
          { hanzi: 'AI小语，你好！', pinyin: 'AI Xiǎoyǔ, nǐ hǎo!', meaning: 'Chào AI Tiểu Ngữ!' }
        ]
      },
      {
        id: 'v2',
        hanzi: '再见',
        pinyin: 'zàijiàn',
        meaning: 'tạm biệt',
        examples: [
          { hanzi: '再见，老师！', pinyin: 'Zàijiàn, lǎoshī!', meaning: 'Tạm biệt, thầy/cô!' },
          { hanzi: '明天见！', pinyin: 'Míngtiān jiàn!', meaning: 'Hẹn gặp ngày mai!' }
        ]
      },
      {
        id: 'v3',
        hanzi: '老师',
        pinyin: 'lǎoshī',
        meaning: 'giáo viên',
        examples: [
          { hanzi: '王老师，你好！', pinyin: 'Wáng lǎoshī, nǐ hǎo!', meaning: 'Chào cô Vương!' },
          { hanzi: '他是我的老师。', pinyin: 'Tā shì wǒ de lǎoshī.', meaning: 'Anh ấy là giáo viên của tôi.' }
        ]
      },
      {
        id: 'v4',
        hanzi: '好',
        pinyin: 'hǎo',
        meaning: 'tốt, khỏe',
        examples: [
          { hanzi: '你好！', pinyin: 'Nǐ hǎo!', meaning: 'Xin chào!' },
          { hanzi: '我很好。', pinyin: 'Wǒ hěn hǎo.', meaning: 'Tôi rất khỏe.' }
        ]
      },
      {
        id: 'v5',
        hanzi: '大家',
        pinyin: 'dàjiā',
        meaning: 'mọi người',
        examples: [
          { hanzi: '大家好！', pinyin: 'Dàjiā hǎo!', meaning: 'Chào mọi người!' },
          { hanzi: '我们大家都是朋友。', pinyin: 'Wǒmen dàjiā dōu shì péngyou.', meaning: 'Chúng ta đều là bạn bè.' }
        ]
      },
      {
        id: 'v6',
        hanzi: '谢谢',
        pinyin: 'xièxie',
        meaning: 'cảm ơn',
        examples: [
          { hanzi: '谢谢你的帮助。', pinyin: 'Xièxie nǐ de bāngzhù.', meaning: 'Cảm ơn sự giúp đỡ của bạn.' },
          { hanzi: '不客气。', pinyin: 'Bú kèqi.', meaning: 'Không có gì.' }
        ]
      },
      {
        id: 'v7',
        hanzi: '学生',
        pinyin: 'xuésheng',
        meaning: 'học sinh',
        examples: [
          { hanzi: '我是学生。', pinyin: 'Wǒ shì xuésheng.', meaning: 'Tôi là học sinh.' },
          { hanzi: '他是一个好学生。', pinyin: 'Tā shì yīgè hǎo xuésheng.', meaning: 'Anh ấy là một học sinh giỏi.' }
        ]
      },
      {
        id: 'v8',
        hanzi: '们',
        pinyin: 'men',
        meaning: 'chỉ số nhiều (sau danh từ)',
        examples: [
          { hanzi: '我们', pinyin: 'wǒmen', meaning: 'chúng tôi' },
          { hanzi: '你们', pinyin: 'nǐmen', meaning: 'các bạn' },
          { hanzi: '他们', pinyin: 'tāmen', meaning: 'họ' }
        ]
      },
      {
        id: 'v9',
        hanzi: '您',
        pinyin: 'nín',
        meaning: 'ông/bà/cô/chú (kính trọng)',
        examples: [
          { hanzi: '您好！', pinyin: 'Nín hǎo!', meaning: 'Xin chào! (kính trọng)' },
          { hanzi: '您贵姓？', pinyin: 'Nín guìxìng?', meaning: 'Ông/bà họ gì?' }
        ]
      },
      {
        id: 'v10',
        hanzi: '你们',
        pinyin: 'nǐmen',
        meaning: 'các bạn',
        examples: [
          { hanzi: '你们好！', pinyin: 'Nǐmen hǎo!', meaning: 'Chào các bạn!' }
        ]
      },
      {
        id: 'v11',
        hanzi: '不客气',
        pinyin: 'bú kèqi',
        meaning: 'không khách khí',
        examples: [
          { hanzi: '谢谢！—— 不客气。', pinyin: 'Xièxie! —— Bú kèqi.', meaning: 'Cảm ơn! —— Không có gì.' }
        ]
      },
      {
        id: 'v12',
        hanzi: '同学',
        pinyin: 'tóngxué',
        meaning: 'học sinh',
        examples: [
          { hanzi: '他是我的同学。', pinyin: 'Tā shì wǒ de tóngxué.', meaning: 'Anh ấy là học sinh của tôi.' },
          { hanzi: '我们是同学。', pinyin: 'Wǒmen shì tóngxué.', meaning: 'Chúng tôi là học sinh.' }
        ]
      }
    ]
  },
  grammar: {
    title: 'Ngữ pháp',
    rules: [
      {
        id: 'g1',
        title: 'Đại từ kính trọng “您”',
        explanation: '“您” là dạng kính trọng của “你”, dùng khi nói với người lớn tuổi, cấp trên, người mới quen cần lịch sự.',
        usage: 'Dùng “您” với thầy cô, người lớn tuổi; dùng “你” với bạn bè cùng trang lứa.',
        examples: [
          { hanzi: '老师，您好！', pinyin: 'Lǎoshī, nín hǎo!', meaning: 'Chào thầy/cô! (kính trọng)' },
          { hanzi: '您叫什么名字？', pinyin: 'Nín jiào shénme míngzi?', meaning: 'Ông/bà tên là gì?' }
        ],
        practice: [
          {
            questionText: 'Câu 1 · Chào thầy/cô! (kính trọng)',
            wordsToOrder: [
              { id: '1', text: '好', pinyin: 'hǎo' },
              { id: '2', text: '您', pinyin: 'nín' },
              { id: '3', text: '老师', pinyin: 'lǎoshī' }
            ],
            correctOrderIds: ['3', '2', '1'] // 老师 您 好
          },
          {
            questionText: 'Câu 2 · Ông/bà tên là gì?',
            wordsToOrder: [
              { id: '1', text: '叫', pinyin: 'jiào' },
              { id: '2', text: '您', pinyin: 'nín' },
              { id: '3', text: '什么', pinyin: 'shénme' },
              { id: '4', text: '名字', pinyin: 'míngzi' }
            ],
            correctOrderIds: ['2', '1', '3', '4'] // 您 叫 什么 名字
          },
          {
            questionText: 'Câu 3 · Chào cô Vương! (kính trọng)',
            wordsToOrder: [
              { id: '1', text: '王老师', pinyin: 'Wáng lǎoshī' },
              { id: '2', text: '您', pinyin: 'nín' },
              { id: '3', text: '好', pinyin: 'hǎo' }
            ],
            correctOrderIds: ['1', '2', '3'] // 王老师 您 好
          },
          {
            questionText: 'Câu 4 · Thưa thầy/cô, thầy/cô khỏe không?',
            wordsToOrder: [
              { id: '1', text: '老师', pinyin: 'lǎoshī' },
              { id: '2', text: '您', pinyin: 'nín' },
              { id: '3', text: '好', pinyin: 'hǎo' },
              { id: '4', text: '吗', pinyin: 'ma' }
            ],
            correctOrderIds: ['1', '2', '3', '4'] // 老师 您 好 吗
          },
          {
            questionText: 'Câu 5 · Xin hỏi, ông/bà họ gì?',
            wordsToOrder: [
              { id: '1', text: '请问', pinyin: 'qǐngwèn' },
              { id: '2', text: '您', pinyin: 'nín' },
              { id: '3', text: '贵姓', pinyin: 'guìxìng' }
            ],
            correctOrderIds: ['1', '2', '3'] // 请问 您 贵姓
          }
        ]
      },
      {
        id: 'g2',
        title: 'Hậu tố số nhiều “们”',
        explanation: 'Thêm “们” sau đại từ/danh từ chỉ người để biểu thị số nhiều: 你→你们, 老师→老师们, 同学→同学们.',
        usage: 'Lỗi thường gặp: “们” chỉ dùng với danh từ chỉ người, không dùng với đồ vật.',
        examples: [
          { hanzi: '你们好！', pinyin: 'Nǐmen hǎo!', meaning: 'Chào các bạn!' },
          { hanzi: '同学们，再见！', pinyin: 'Tóngxuémen, zàijiàn!', meaning: 'Chào các em học sinh!' }
        ],
        practice: [
          {
            questionText: 'Câu 1 · Các bạn học, tạm biệt!',
            wordsToOrder: [
              { id: '1', text: '再见', pinyin: 'zàijiàn' },
              { id: '2', text: '同学们', pinyin: 'tóngxuémen' }
            ],
            correctOrderIds: ['2', '1'] // 同学们 再见
          },
          {
            questionText: 'Câu 2 · Chào các bạn!',
            wordsToOrder: [
              { id: '1', text: '好', pinyin: 'hǎo' },
              { id: '2', text: '你们', pinyin: 'nǐmen' }
            ],
            correctOrderIds: ['2', '1'] // 你们 好
          },
          {
            questionText: 'Câu 3 · Chào các thầy cô!',
            wordsToOrder: [
              { id: '1', text: '老师们', pinyin: 'lǎoshīmen' },
              { id: '2', text: '好', pinyin: 'hǎo' }
            ],
            correctOrderIds: ['1', '2'] // 老师们 好
          },
          {
            questionText: 'Câu 4 · Chúng tôi là học sinh.',
            wordsToOrder: [
              { id: '1', text: '我们', pinyin: 'wǒmen' },
              { id: '2', text: '是', pinyin: 'shì' },
              { id: '3', text: '学生', pinyin: 'xuésheng' }
            ],
            correctOrderIds: ['1', '2', '3'] // 我们 是 学生
          },
          {
            questionText: 'Câu 5 · Tạm biệt các bạn!',
            wordsToOrder: [
              { id: '1', text: '再见', pinyin: 'zàijiàn' },
              { id: '2', text: '你们', pinyin: 'nǐmen' }
            ],
            correctOrderIds: ['2', '1'] // 你们 再见
          }
        ]
      }
    ]
  },
  conversation: {
    title: 'Hội thoại',
    sections: [
      {
        id: 's1',
        title: '1. Ngày khai giảng, tại văn phòng',
        turns: [
          { id: 't1', role: 'Vương Nhất Phi (cô Vương)', avatar: '王', hanzi: 'AI小语，你好！', pinyin: 'AI Xiǎoyǔ, nǐ hǎo!', meaning: 'Chào AI Tiểu Ngữ!' },
          { id: 't2', role: 'AI Tiểu Ngữ', avatar: '语', hanzi: '王老师，你好！', pinyin: 'Wáng lǎoshī, nǐ hǎo!', meaning: 'Chào cô Vương!' }
        ]
      },
      {
        id: 's2',
        title: '2. Ngày khai giảng, trong lớp',
        turns: [
          { id: 't3', role: 'Vương Nhất Phi (cô Vương)', avatar: '王', hanzi: '大家好！', pinyin: 'Dàjiā hǎo!', meaning: 'Chào mọi người!' },
          { id: 't4', role: 'Học sinh', avatar: '学', hanzi: '老师，您好！', pinyin: 'Lǎoshī, nín hǎo!', meaning: 'Chào thầy/cô!' },
          { id: 't5', role: 'AI Tiểu Ngữ', avatar: '语', hanzi: '你们好！', pinyin: 'Nǐmen hǎo!', meaning: 'Chào các bạn!' },
          { id: 't6', role: 'Học sinh', avatar: '学', hanzi: '你好，小语！', pinyin: 'Nǐ hǎo, Xiǎoyǔ!', meaning: 'Chào Tiểu Ngữ!' }
        ]
      },
      {
        id: 's3',
        title: '3. Ngày khai giảng, học cách cảm ơn, tạm biệt',
        turns: [
          { id: 't7', role: 'Học sinh', avatar: '学', hanzi: '谢谢！', pinyin: 'Xièxie!', meaning: 'Cảm ơn!' },
          { id: 't8', role: 'AI Tiểu Ngữ', avatar: '语', hanzi: '不客气！', pinyin: 'Bú kèqi!', meaning: 'Không có gì!' },
          { id: 't9', role: 'Vương Nhất Phi (cô Vương)', avatar: '王', hanzi: '同学们，再见！', pinyin: 'Tóngxué men, zàijiàn!', meaning: 'Các bạn học, tạm biệt!' },
          { id: 't10', role: 'Học sinh', avatar: '学', hanzi: '老师，再见！', pinyin: 'Lǎoshī, zàijiàn!', meaning: 'Tạm biệt thầy/cô!' }
        ]
      }
    ]
  },
  fillBlank: {
    title: 'Điền vào chỗ trống',
    choices: [
      { id: 'c1', text: '你好', pinyin: 'nǐ hǎo' },
      { id: 'c2', text: '不客气', pinyin: 'bú kèqi' },
      { id: 'c3', text: '同学', pinyin: 'tóngxué' },
      { id: 'c4', text: '再见', pinyin: 'zàijiàn' },
      { id: 'c5', text: '谢谢', pinyin: 'xièxie' }
    ],
    questions: [
      {
        id: 'q1',
        speaker: '1',
        parts: [{ type: 'text', content: 'A: ' }, { type: 'blank' }, { type: 'text', content: ' ! B: 你好 (nǐ hǎo)！' }],
        expectedChoiceId: 'c1',
        hint: 'Gợi ý: 你好 (nǐ hǎo) / 谢谢 (xièxie) / 再见 (zàijiàn)'
      },
      {
        id: 'q2',
        speaker: '2',
        parts: [{ type: 'text', content: '谢谢你的帮助 (xièxie nǐ de bāngzhù)！ — A: ' }, { type: 'blank' }, { type: 'text', content: ' ，这是我应该做的 (zhè shì wǒ yīnggāi zuò de)。' }],
        expectedChoiceId: 'c2',
        hint: 'Gợi ý: 不客气 (bú kèqi) / 同学 (tóngxué) / 再见 (zàijiàn)'
      },
      {
        id: 'q3',
        speaker: '3',
        parts: [{ type: 'blank' }, { type: 'text', content: ' 们 (men)，你们好 (nǐmen hǎo)！' }],
        expectedChoiceId: 'c3',
        hint: 'Gợi ý: 同学 (tóngxué) / 老师 (lǎoshī) / 谢谢 (xièxie)'
      },
      {
        id: 'q4',
        speaker: '4',
        parts: [{ type: 'text', content: '老师，明天 (lǎoshī, míngtiān) ' }, { type: 'blank' }, { type: 'text', content: ' ！' }],
        expectedChoiceId: 'c4',
        hint: 'Gợi ý: 再见 (zàijiàn) / 谢谢 (xièxie) / 你好 (nǐ hǎo)'
      },
      {
        id: 'q5',
        speaker: '5',
        parts: [{ type: 'text', content: '你帮了我很多，我要对你说 (nǐ bāng le wǒ hěn duō, wǒ yào duì nǐ shuō)：' }, { type: 'blank' }, { type: 'text', content: ' ！' }],
        expectedChoiceId: 'c5',
        hint: 'Gợi ý: 谢谢 (xièxie) / 再见 (zàijiàn) / 大家 (dàjiā)'
      }
    ]
  },
  arranging: {
    title: 'Sắp xếp thành câu',
    questions: [
      {
        id: 'aq1',
        meaning: 'Chào các bạn!',
        words: [
          { id: 'w1', text: '你们', pinyin: 'nǐmen' },
          { id: 'w2', text: '好', pinyin: 'hǎo' }
        ],
        correctOrderIds: ['w1', 'w2']
      },
      {
        id: 'aq2',
        meaning: 'Các bạn học, tạm biệt!',
        words: [
          { id: 'w3', text: '再见', pinyin: 'zàijiàn' },
          { id: 'w4', text: '同学们', pinyin: 'tóngxuémen' }
        ],
        correctOrderIds: ['w4', 'w3']
      },
      {
        id: 'aq3',
        meaning: 'Chào thầy/cô! (kính trọng)',
        words: [
          { id: 'w5', text: '您', pinyin: 'nín' },
          { id: 'w6', text: '好', pinyin: 'hǎo' },
          { id: 'w7', text: '老师', pinyin: 'lǎoshī' }
        ],
        correctOrderIds: ['w7', 'w5', 'w6']
      },
      {
        id: 'aq4',
        meaning: 'Ông/bà tên là gì?',
        words: [
          { id: 'w8', text: '什么', pinyin: 'shénme' },
          { id: 'w9', text: '您', pinyin: 'nín' },
          { id: 'w10', text: '名字', pinyin: 'míngzi' },
          { id: 'w11', text: '叫', pinyin: 'jiào' }
        ],
        correctOrderIds: ['w9', 'w11', 'w8', 'w10']
      },
      {
        id: 'aq5',
        meaning: 'Xin chào, tôi là cô Vương.',
        words: [
          { id: 'w12', text: '王', pinyin: 'Wáng' },
          { id: 'w13', text: '我', pinyin: 'wǒ' },
          { id: 'w14', text: '你好', pinyin: 'nǐ hǎo' },
          { id: 'w15', text: '老师', pinyin: 'lǎoshī' },
          { id: 'w16', text: '是', pinyin: 'shì' }
        ],
        correctOrderIds: ['w14', 'w13', 'w16', 'w12', 'w15']
      },
      {
        id: 'aq6',
        meaning: 'Chào mọi người, chào mừng đến Bắc Kinh.',
        words: [
          { id: 'w17', text: '好', pinyin: 'hǎo' },
          { id: 'w18', text: '北京', pinyin: 'Běijīng' },
          { id: 'w19', text: '迎', pinyin: 'yíng' },
          { id: 'w20', text: '来', pinyin: 'lái' },
          { id: 'w21', text: '大家', pinyin: 'dàjiā' },
          { id: 'w22', text: '欢', pinyin: 'huān' }
        ],
        correctOrderIds: ['w21', 'w17', 'w22', 'w19', 'w20', 'w18']
      },
      {
        id: 'aq7',
        meaning: 'Hôm nay thời tiết rất đẹp.',
        words: [
          { id: 'w23', text: '今天', pinyin: 'jīntiān' },
          { id: 'w24', text: '很', pinyin: 'hěn' },
          { id: 'w25', text: '好', pinyin: 'hǎo' },
          { id: 'w26', text: '天气', pinyin: 'tiānqì' }
        ],
        correctOrderIds: ['w23', 'w26', 'w24', 'w25']
      }
    ]
  },
  matching: {
    title: 'Nối câu',
    leftItems: [
      { id: 'l1', content: 'AI小语，你好！', pinyin: 'Xiǎoyǔ nǐ hǎo' },
      { id: 'l2', content: '大家好！', pinyin: 'Dàjiā hǎo' },
      { id: 'l3', content: '你们好！', pinyin: 'Nǐmen hǎo' },
      { id: 'l4', content: '谢谢！', pinyin: 'Xièxie' },
      { id: 'l5', content: '同学们，再见！', pinyin: 'Tóngxué men zàijiàn' }
    ],
    rightItems: [
      { id: 'r1', content: '你好，小语！', pinyin: 'Nǐ hǎo Xiǎoyǔ' },
      { id: 'r2', content: '老师，您好！', pinyin: 'Lǎoshī nín hǎo' },
      { id: 'r3', content: '不客气！', pinyin: 'Bú kèqi' },
      { id: 'r4', content: '老师，再见！', pinyin: 'Lǎoshī zàijiàn' },
      { id: 'r5', content: '王老师，你好！', pinyin: 'Wáng lǎoshī nǐ hǎo' }
    ],
    pairs: [
      { leftId: 'l1', rightId: 'r5' },
      { leftId: 'l2', rightId: 'r2' },
      { leftId: 'l3', rightId: 'r1' },
      { leftId: 'l4', rightId: 'r3' },
      { leftId: 'l5', rightId: 'r4' }
    ]
  },
  quiz: {
    title: 'Trắc nghiệm',
    description: 'Chọn đáp án đúng nhất cho các câu hỏi sau.',
    questions: [
      {
        id: 'q1',
        questionText: 'A：＿＿！B：你好 (nǐ hǎo)！',
        options: [
          { id: 'o1', text: '再见', pinyin: 'zàijiàn' },
          { id: 'o2', text: '你好', pinyin: 'nǐ hǎo' },
          { id: 'o3', text: '谢谢', pinyin: 'xièxie' }
        ],
        correctOptionId: 'o2'
      },
      {
        id: 'q2',
        questionText: '谢谢你的帮助 (xièxie nǐ de bāngzhù)！— A：＿＿，这是我应该做的 (zhè shì wǒ yīnggāi zuò de)。',
        options: [
          { id: 'o1', text: '再见', pinyin: 'zàijiàn' },
          { id: 'o2', text: '不客气', pinyin: 'bú kèqi' },
          { id: 'o3', text: '同学', pinyin: 'tóngxué' }
        ],
        correctOptionId: 'o2'
      },
      {
        id: 'q3',
        questionText: '＿＿们 (men)，你们好 (nǐmen hǎo)！',
        options: [
          { id: 'o1', text: '谢谢', pinyin: 'xièxie' },
          { id: 'o2', text: '老师', pinyin: 'lǎoshī' },
          { id: 'o3', text: '同学', pinyin: 'tóngxué' }
        ],
        correctOptionId: 'o3'
      },
      {
        id: 'q4',
        questionText: '老师，明天 (lǎoshī, míngtiān) ＿＿！',
        options: [
          { id: 'o1', text: '谢谢', pinyin: 'xièxie' },
          { id: 'o2', text: '你好', pinyin: 'nǐ hǎo' },
          { id: 'o3', text: '再见', pinyin: 'zàijiàn' }
        ],
        correctOptionId: 'o3'
      },
      {
        id: 'q5',
        questionText: '你帮了我很多，我要对你说 (nǐ bāng le wǒ hěn duō, wǒ yào duì nǐ shuō)：＿＿！',
        options: [
          { id: 'o1', text: '再见', pinyin: 'zàijiàn' },
          { id: 'o2', text: '大家', pinyin: 'dàjiā' },
          { id: 'o3', text: '谢谢', pinyin: 'xièxie' }
        ],
        correctOptionId: 'o3'
      }
    ]
  },
  speaking: {
    title: 'Luyện nói',
    description: 'Hãy bấm Nghe mẫu, sau đó bấm Ghi âm để luyện phát âm.',
    readingTasks: [
      {
        id: 's1',
        hanzi: '你好！',
        pinyin: 'Nǐ hǎo!',
        meaning: 'Xin chào!'
      },
      {
        id: 's2',
        hanzi: '你好！很高兴认识你。',
        pinyin: 'Nǐ hǎo! Hěn gāoxìng rènshi nǐ.',
        meaning: 'Xin chào! Rất vui được quen biết bạn.'
      },
      {
        id: 's3',
        hanzi: '谢谢你！',
        pinyin: 'Xièxie nǐ!',
        meaning: 'Cảm ơn bạn!'
      },
      {
        id: 's4',
        hanzi: '不客气！',
        pinyin: 'Bú kèqi!',
        meaning: 'Không có gì!'
      },
      {
        id: 's5',
        hanzi: '老师，再见！',
        pinyin: 'Lǎoshī, zàijiàn!',
        meaning: 'Thầy/cô, tạm biệt!'
      },
      {
        id: 's6',
        hanzi: '再见！',
        pinyin: 'Zàijiàn!',
        meaning: 'Tạm biệt!'
      }
    ],
    freeSpeakingTasks: [
      {
        id: 'fs1',
        topic: '你叫什么名字？',
        pinyin: 'Nǐ jiào shénme míngzi?',
        suggestion: 'Bạn tên là gì? (Ví dụ: 我叫...)'
      },
      {
        id: 'fs2',
        topic: '你是学生吗？',
        pinyin: 'Nǐ shì xuésheng ma?',
        suggestion: 'Bạn có phải là học sinh không? (Ví dụ: 我是学生...)'
      },
      {
        id: 'fs3',
        topic: '老师，您好吗？',
        pinyin: 'Lǎoshī, nín hǎo ma?',
        suggestion: 'Thưa thầy/cô, thầy/cô khỏe không? (Ví dụ: 我很好...)'
      }
    ]
  },
  funFacts: {
    title: 'Có thể bạn chưa biết',
    description: 'Một số thông tin thú vị về văn hóa và ngôn ngữ Trung Quốc.',
    facts: [
      {
        id: 'ff1',
        title: 'Không chỉ có 你好 (nǐ hǎo)',
        content: 'Trong đời thường, 你好 (nǐ hǎo) nghe khá trang trọng. Bạn bè gặp nhau thường hỏi 吃了吗 (chī le ma)？(Ăn cơm chưa?) hoặc 去哪儿 (qù nǎr)？(Đi đâu đấy?) — đó là cách hỏi thăm, không phải muốn biết bạn ăn gì hay đi đâu, chỉ cần đáp qua loa 吃了 (chī le) / 出去一下 (chūqu yíxià) là đủ.'
      },
      {
        id: 'ff2',
        title: 'Vì sao lại hỏi "ăn cơm chưa"?',
        content: 'Câu chào này ra đời từ thời no đói còn là chuyện lớn. Hỏi nhau đã ăn chưa chính là cách quan tâm thiết thực nhất, và thói quen ấy còn giữ đến tận hôm nay.'
      },
      {
        id: 'ff3',
        title: '您 (nín) – chữ "bạn" có trái tim',
        content: 'Chữ 您 (nín) là 你 (nǐ) đặt trên chữ 心 (xīn - tâm). Dùng 您 (nín) với người lớn tuổi, thầy cô, khách hàng nghĩa là "nói với bạn bằng cả tấm lòng". Người Bắc Kinh dùng 您 (nín) nhiều hơn hẳn người miền Nam.'
      }
    ]
  },
  finalTest: {
    title: 'Kiểm tra tổng hợp',
    description: 'Làm đúng toàn bộ các câu hỏi để hoàn thành bài học.',
    questions: [
      {
        id: 'ft1',
        type: 'QUIZ',
        quizData: {
          title: 'Trắc nghiệm',
          questions: [
            {
              id: 'q1',
              questionText: 'A：＿＿！B：你好 (nǐ hǎo)！',
              options: [
                { id: 'o1', text: '再见', pinyin: 'zàijiàn' },
                { id: 'o2', text: '你好', pinyin: 'nǐ hǎo' },
                { id: 'o3', text: '谢谢', pinyin: 'xièxie' }
              ],
              correctOptionId: 'o2'
            }
          ]
        }
      },
      {
        id: 'ft2',
        type: 'QUIZ',
        quizData: {
          title: 'Trắc nghiệm',
          questions: [
            {
              id: 'q2',
              questionText: '谢谢你的帮助 (xièxie nǐ de bāngzhù)！— A：＿＿，这是我应该做的 (zhè shì wǒ yīnggāi zuò de)。',
              options: [
                { id: 'o1', text: '再见', pinyin: 'zàijiàn' },
                { id: 'o2', text: '不客气', pinyin: 'bú kèqi' },
                { id: 'o3', text: '同学', pinyin: 'tóngxué' }
              ],
              correctOptionId: 'o2'
            }
          ]
        }
      },
      {
        id: 'ft3',
        type: 'QUIZ',
        quizData: {
          title: 'Trắc nghiệm',
          questions: [
            {
              id: 'q3',
              questionText: '＿＿们 (men)，你们好 (nǐmen hǎo)！',
              options: [
                { id: 'o1', text: '谢谢', pinyin: 'xièxie' },
                { id: 'o2', text: '老师', pinyin: 'lǎoshī' },
                { id: 'o3', text: '同学', pinyin: 'tóngxué' }
              ],
              correctOptionId: 'o3'
            }
          ]
        }
      },
      {
        id: 'ft4',
        type: 'FILL_BLANK',
        fillBlankData: {
          title: 'Điền vào chỗ trống',
          choices: [
            { id: 'c4', text: '再见', pinyin: 'zàijiàn' },
            { id: 'c5', text: '谢谢', pinyin: 'xièxie' }
          ],
          questions: [
            {
              id: 'fb1',
              speaker: '1',
              parts: [{ type: 'text', content: '老师，明天 (lǎoshī, míngtiān) ' }, { type: 'blank' }, { type: 'text', content: ' ！' }],
              expectedChoiceId: 'c4',
              hint: 'Gợi ý: 再见 (zàijiàn) / 谢谢 (xièxie) / 你好 (nǐ hǎo)'
            }
          ]
        }
      },
      {
        id: 'ft5',
        type: 'FILL_BLANK',
        fillBlankData: {
          title: 'Điền vào chỗ trống',
          choices: [
            { id: 'c4', text: '再见', pinyin: 'zàijiàn' },
            { id: 'c5', text: '谢谢', pinyin: 'xièxie' }
          ],
          questions: [
            {
              id: 'fb2',
              speaker: '2',
              parts: [{ type: 'text', content: '你帮了我很多，我要对你说 (nǐ bāng le wǒ hěn duō, wǒ yào duì nǐ shuō)：' }, { type: 'blank' }, { type: 'text', content: ' ！' }],
              expectedChoiceId: 'c5',
              hint: 'Gợi ý: 谢谢 (xièxie) / 再见 (zàijiàn) / 大家 (dàjiā)'
            }
          ]
        }
      },
      {
        id: 'ft6',
        type: 'ARRANGING',
        arrangingData: {
          title: 'Sắp xếp thành câu',
          questions: [
            {
              id: 'aq1',
              meaning: 'Chào các bạn!',
              words: [
                { id: 'w1', text: '你们', pinyin: 'nǐmen' },
                { id: 'w2', text: '好', pinyin: 'hǎo' }
              ],
              correctOrderIds: ['w1', 'w2']
            }
          ]
        }
      },
      {
        id: 'ft7',
        type: 'ARRANGING',
        arrangingData: {
          title: 'Sắp xếp thành câu',
          questions: [
            {
              id: 'aq2',
              meaning: 'Các bạn học, tạm biệt!',
              words: [
                { id: 'w3', text: '再见', pinyin: 'zàijiàn' },
                { id: 'w4', text: '同学们', pinyin: 'tóngxuémen' }
              ],
              correctOrderIds: ['w4', 'w3']
            }
          ]
        }
      },
      {
        id: 'ft8',
        type: 'ARRANGING',
        arrangingData: {
          title: 'Sắp xếp thành câu',
          questions: [
            {
              id: 'aq3',
              meaning: 'Chào thầy/cô! (kính trọng)',
              words: [
                { id: 'w5', text: '您', pinyin: 'nín' },
                { id: 'w6', text: '好', pinyin: 'hǎo' },
                { id: 'w7', text: '老师', pinyin: 'lǎoshī' }
              ],
              correctOrderIds: ['w7', 'w5', 'w6']
            }
          ]
        }
      },
      {
        id: 'ft9',
        type: 'MATCHING',
        matchingData: {
          title: 'Nối câu',
          leftItems: [
            { id: 'l1', content: 'AI小语，你好！', pinyin: 'Xiǎoyǔ nǐ hǎo' },
            { id: 'l2', content: '大家好！', pinyin: 'Dàjiā hǎo' },
            { id: 'l3', content: '你们好！', pinyin: 'Nǐmen hǎo' }
          ],
          rightItems: [
            { id: 'r1', content: '你好，小语！', pinyin: 'Nǐ hǎo Xiǎoyǔ' },
            { id: 'r2', content: '老师，您好！', pinyin: 'Lǎoshī nín hǎo' },
            { id: 'r5', content: '王老师，你好！', pinyin: 'Wáng lǎoshī nǐ hǎo' }
          ],
          pairs: [
            { leftId: 'l1', rightId: 'r5' },
            { leftId: 'l2', rightId: 'r2' },
            { leftId: 'l3', rightId: 'r1' }
          ]
        }
      },
      {
        id: 'ft10',
        type: 'WARM_UP',
        warmUpData: {
          title: 'Khởi động',
          description: 'Nối nghĩa tiếng Việt với từ tiếng Trung',
          items: [
            { id: 'wu1', meaning: 'xin chào', expectedVocabId: 'v1' },
            { id: 'wu2', meaning: 'tạm biệt', expectedVocabId: 'v2' },
          ],
          choices: [
            { id: 'v1', hanzi: '你好', pinyin: 'nǐ hǎo', meaning: 'xin chào', examples: [] },
            { id: 'v2', hanzi: '再见', pinyin: 'zàijiàn', meaning: 'tạm biệt', examples: [] },
          ]
        }
      }
    ]
  }
};

