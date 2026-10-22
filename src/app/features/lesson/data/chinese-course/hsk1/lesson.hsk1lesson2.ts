import { LessonData } from '../../../models/lesson.data';

export const hsk1lesson2Data: LessonData = {
    lessonId: 'lesson-2-hsk-1',
    lessonName: { hanzi: '我叫李文', pinyin: 'Wǒ jiào Lǐ Wén', meaning: 'Tên tôi là Lý Văn' },

    warmUp: {
        title: 'Khởi động',
        description: 'Bấm chọn một chữ Hán (A-F) bên dưới, rồi bấm vào ô nghĩa tương ứng.',
        items: [
            { id: 'wu1', meaning: 'xin hỏi', expectedVocabId: 'v1' },
            { id: 'wu2', meaning: 'bạn', expectedVocabId: 'v2' },
            { id: 'wu3', meaning: 'tên là, gọi là', expectedVocabId: 'v3' },
            { id: 'wu4', meaning: 'cái gì, gì', expectedVocabId: 'v4' },
            { id: 'wu5', meaning: 'tên', expectedVocabId: 'v5' },
            { id: 'wu6', meaning: 'tôi', expectedVocabId: 'v6' }
        ],
        choices: [
            { id: 'v1', hanzi: '请问', pinyin: 'qǐngwèn', meaning: 'xin hỏi', examples: [] },
            { id: 'v2', hanzi: '你', pinyin: 'nǐ', meaning: 'bạn', examples: [] },
            { id: 'v3', hanzi: '叫', pinyin: 'jiào', meaning: 'tên là, gọi là', examples: [] },
            { id: 'v4', hanzi: '什么', pinyin: 'shénme', meaning: 'cái gì, gì', examples: [] },
            { id: 'v5', hanzi: '名字', pinyin: 'míngzi', meaning: 'tên', examples: [] },
            { id: 'v6', hanzi: '我', pinyin: 'wǒ', meaning: 'tôi', examples: [] }
        ]
    },

    vocabulary: {
        title: 'Từ mới',
        words: [
            {
                id: 'v1', hanzi: '请问', pinyin: 'qǐngwèn', meaning: 'xin hỏi', wordType: 'Động từ', sinoVietnamese: 'Thỉnh vấn', examples: [
                    { hanzi: '请问，你叫什么名字？', pinyin: 'Qǐngwèn, nǐ jiào shénme míngzi?', meaning: 'Xin hỏi, bạn tên là gì?' },
                    { hanzi: '请问，洗手间在哪里？', pinyin: 'Qǐngwèn, xǐshǒujiān zài nǎlǐ?', meaning: 'Xin hỏi, nhà vệ sinh ở đâu?' }
                ]
            },
            {
                id: 'v2', hanzi: '你', pinyin: 'nǐ', meaning: 'bạn', wordType: 'Đại từ', sinoVietnamese: 'Nhĩ', examples: [
                    { hanzi: '请问，你叫什么名字？', pinyin: 'Qǐngwèn, nǐ jiào shénme míngzi?', meaning: 'Xin hỏi, bạn tên là gì?' },
                    { hanzi: '你是学生吗？', pinyin: 'Nǐ shì xuésheng ma?', meaning: 'Bạn là học sinh phải không?' }
                ]
            },
            {
                id: 'v3', hanzi: '叫', pinyin: 'jiào', meaning: 'tên là, gọi là', wordType: 'Động từ', sinoVietnamese: 'Khiếu', examples: [
                    { hanzi: '我叫陈天中。', pinyin: 'Wǒ jiào Chén Tiānzhōng.', meaning: 'Tôi tên là Trần Thiên Trung.' },
                    { hanzi: '她叫什么名字？', pinyin: 'Tā jiào shénme míngzi?', meaning: 'Cô ấy tên là gì?' }
                ]
            },
            {
                id: 'v4', hanzi: '什么', pinyin: 'shénme', meaning: 'cái gì, gì', wordType: 'Đại từ', sinoVietnamese: 'Thập ma', examples: [
                    { hanzi: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', meaning: 'Bạn tên là gì?' },
                    { hanzi: '这是什么？', pinyin: 'Zhè shì shénme?', meaning: 'Đây là cái gì?' }
                ]
            },
            {
                id: 'v5', hanzi: '名字', pinyin: 'míngzi', meaning: 'tên', wordType: 'Danh từ', sinoVietnamese: 'Danh tự', examples: [
                    { hanzi: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', meaning: 'Bạn tên là gì?' },
                    { hanzi: '我的名字是李文。', pinyin: 'Wǒ de míngzi shì Lǐ Wén.', meaning: 'Tên tôi là Lý Văn.' }
                ]
            },
            {
                id: 'v6', hanzi: '我', pinyin: 'wǒ', meaning: 'tôi', wordType: 'Đại từ', sinoVietnamese: 'Ngã', examples: [
                    { hanzi: '我叫陈天中。', pinyin: 'Wǒ jiào Chén Tiānzhōng.', meaning: 'Tôi tên là Trần Thiên Trung.' },
                    { hanzi: '我是学生。', pinyin: 'Wǒ shì xuésheng.', meaning: 'Tôi là học sinh.' }
                ]
            },
            {
                id: 'v7', hanzi: '不', pinyin: 'bù', meaning: 'không', wordType: 'Phó từ', sinoVietnamese: 'Bất', examples: [
                    { hanzi: '我不是安妮。', pinyin: 'Wǒ bú shì Ānnī.', meaning: 'Tôi không phải Annie.' },
                    { hanzi: '我不是老师。', pinyin: 'Wǒ bú shì lǎoshī.', meaning: 'Tôi không phải giáo viên.' }
                ]
            },
            {
                id: 'v8', hanzi: '是', pinyin: 'shì', meaning: 'là', wordType: 'Động từ', sinoVietnamese: 'Thị', examples: [
                    { hanzi: '我是白家月。', pinyin: 'Wǒ shì Bái Jiāyuè.', meaning: 'Tôi là Bạch Gia Nguyệt.' },
                    { hanzi: '他是我的同学。', pinyin: 'Tā shì wǒ de tóngxué.', meaning: 'Anh ấy là bạn học của tôi.' }
                ]
            },
            {
                id: 'v9', hanzi: '对不起', pinyin: 'duìbuqǐ', meaning: 'xin lỗi', wordType: 'Động từ', sinoVietnamese: 'Đối bất khởi', examples: [
                    { hanzi: '对不起！', pinyin: 'Duìbuqǐ!', meaning: 'Xin lỗi!' },
                    { hanzi: '对不起，我错了。', pinyin: 'Duìbuqǐ, wǒ cuò le.', meaning: 'Xin lỗi, tôi sai rồi.' }
                ]
            },
            {
                id: 'v10', hanzi: '没关系', pinyin: 'méi guānxi', meaning: 'không sao', wordType: 'Cụm từ', sinoVietnamese: 'Một quan hệ', examples: [
                    { hanzi: '没关系！', pinyin: 'Méi guānxi!', meaning: 'Không sao!' },
                    { hanzi: '没关系，慢慢来。', pinyin: 'Méi guānxi, mànman lái.', meaning: 'Không sao, cứ từ từ.' }
                ]
            },
            {
                id: 'v11', hanzi: '没事', pinyin: 'méishì', meaning: 'không sao đâu', wordType: 'Động từ', sinoVietnamese: 'Một sự', examples: [
                    { hanzi: '没事，别担心。', pinyin: 'Méishì, bié dānxīn.', meaning: 'Không sao đâu, đừng lo.' },
                    { hanzi: 'A：对不起！B：没事！', pinyin: 'A: Duìbuqǐ! B: Méishì!', meaning: 'A: Xin lỗi! B: Không sao!' }
                ]
            },
            {
                id: 'v12', hanzi: '很', pinyin: 'hěn', meaning: 'rất', wordType: 'Phó từ', sinoVietnamese: 'Ngận', examples: [
                    { hanzi: '很高兴认识你。', pinyin: 'Hěn gāoxìng rènshi nǐ.', meaning: 'Rất vui được quen bạn.' },
                    { hanzi: '今天天气很好。', pinyin: 'Jīntiān tiānqì hěn hǎo.', meaning: 'Hôm nay thời tiết rất đẹp.' }
                ]
            },
            {
                id: 'v13', hanzi: '高兴', pinyin: 'gāoxìng', meaning: 'vui, cao hứng', wordType: 'Tính từ', sinoVietnamese: 'Cao hứng', examples: [
                    { hanzi: '很高兴认识你。', pinyin: 'Hěn gāoxìng rènshi nǐ.', meaning: 'Rất vui được quen bạn.' },
                    { hanzi: '认识你我也很高兴。', pinyin: 'Rènshi nǐ wǒ yě hěn gāoxìng.', meaning: 'Quen biết bạn tôi cũng rất vui.' }
                ]
            },
            {
                id: 'v14', hanzi: '认识', pinyin: 'rènshi', meaning: 'quen biết', wordType: 'Động từ', sinoVietnamese: 'Nhận thức', examples: [
                    { hanzi: '很高兴认识你。', pinyin: 'Hěn gāoxìng rènshi nǐ.', meaning: 'Rất vui được quen bạn.' },
                    { hanzi: '我认识他。', pinyin: 'Wǒ rènshi tā.', meaning: 'Tôi quen anh ấy.' }
                ]
            },
            {
                id: 'v15', hanzi: '也', pinyin: 'yě', meaning: 'cũng', wordType: 'Phó từ', sinoVietnamese: 'Dã', examples: [
                    { hanzi: '认识你我也很高兴。', pinyin: 'Rènshi nǐ wǒ yě hěn gāoxìng.', meaning: 'Quen biết bạn tôi cũng rất vui.' },
                    { hanzi: '她也是学生。', pinyin: 'Tā yě shì xuésheng.', meaning: 'Cô ấy cũng là học sinh.' }
                ]
            }
        ]
    },

    flashcards: {
        title: 'Thẻ nhớ nhanh',
        words: [
            { id: 'v1', hanzi: '请问', pinyin: 'qǐngwèn', meaning: 'xin hỏi', examples: [{ hanzi: '请问，你叫什么名字？', pinyin: 'Qǐngwèn, nǐ jiào shénme míngzi?', meaning: 'Xin hỏi, bạn tên là gì?' }] },
            { id: 'v2', hanzi: '你', pinyin: 'nǐ', meaning: 'bạn', examples: [{ hanzi: '你是学生吗？', pinyin: 'Nǐ shì xuésheng ma?', meaning: 'Bạn là học sinh phải không?' }] },
            { id: 'v3', hanzi: '叫', pinyin: 'jiào', meaning: 'tên là, gọi là', examples: [{ hanzi: '我叫陈天中。', pinyin: 'Wǒ jiào Chén Tiānzhōng.', meaning: 'Tôi tên là Trần Thiên Trung.' }] },
            { id: 'v4', hanzi: '什么', pinyin: 'shénme', meaning: 'cái gì, gì', examples: [{ hanzi: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', meaning: 'Bạn tên là gì?' }] },
            { id: 'v5', hanzi: '名字', pinyin: 'míngzi', meaning: 'tên', examples: [{ hanzi: '我的名字是李文。', pinyin: 'Wǒ de míngzi shì Lǐ Wén.', meaning: 'Tên tôi là Lý Văn.' }] },
            { id: 'v6', hanzi: '我', pinyin: 'wǒ', meaning: 'tôi', examples: [{ hanzi: '我是学生。', pinyin: 'Wǒ shì xuésheng.', meaning: 'Tôi là học sinh.' }] },
            { id: 'v7', hanzi: '不', pinyin: 'bù', meaning: 'không', examples: [{ hanzi: '我不是老师。', pinyin: 'Wǒ bú shì lǎoshī.', meaning: 'Tôi không phải giáo viên.' }] },
            { id: 'v8', hanzi: '是', pinyin: 'shì', meaning: 'là', examples: [{ hanzi: '我是白家月。', pinyin: 'Wǒ shì Bái Jiāyuè.', meaning: 'Tôi là Bạch Gia Nguyệt.' }] },
            { id: 'v9', hanzi: '对不起', pinyin: 'duìbuqǐ', meaning: 'xin lỗi', examples: [{ hanzi: '对不起，我错了。', pinyin: 'Duìbuqǐ, wǒ cuò le.', meaning: 'Xin lỗi, tôi sai rồi.' }] },
            { id: 'v10', hanzi: '没关系', pinyin: 'méi guānxi', meaning: 'không sao', examples: [{ hanzi: '没关系！', pinyin: 'Méi guānxi!', meaning: 'Không sao!' }] },
            { id: 'v11', hanzi: '没事', pinyin: 'méishì', meaning: 'không sao đâu', examples: [{ hanzi: '没事，别担心。', pinyin: 'Méishì, bié dānxīn.', meaning: 'Không sao đâu, đừng lo.' }] },
            { id: 'v12', hanzi: '很', pinyin: 'hěn', meaning: 'rất', examples: [{ hanzi: '很高兴认识你。', pinyin: 'Hěn gāoxìng rènshi nǐ.', meaning: 'Rất vui được quen bạn.' }] },
            { id: 'v13', hanzi: '高兴', pinyin: 'gāoxìng', meaning: 'vui, cao hứng', examples: [{ hanzi: '认识你我也很高兴。', pinyin: 'Rènshi nǐ wǒ yě hěn gāoxìng.', meaning: 'Quen biết bạn tôi cũng rất vui.' }] },
            { id: 'v14', hanzi: '认识', pinyin: 'rènshi', meaning: 'quen biết', examples: [{ hanzi: '我认识他。', pinyin: 'Wǒ rènshi tā.', meaning: 'Tôi quen anh ấy.' }] },
            { id: 'v15', hanzi: '也', pinyin: 'yě', meaning: 'cũng', examples: [{ hanzi: '她也是学生。', pinyin: 'Tā yě shì xuésheng.', meaning: 'Cô ấy cũng là học sinh.' }] }
        ]
    },

    grammar: {
        title: 'Ngữ pháp',
        rules: [{
            id: 'g1',
            title: 'Trật tự từ cơ bản',
            explanation: 'Công thức: Chủ ngữ (S) + Vị ngữ (V) + Tân ngữ (O) — giống trật tự cơ bản của tiếng Việt.',
            usage: 'Trật tự S-V-O giống tiếng Việt, dễ nhớ! Chủ ngữ luôn đứng đầu câu.',
            examples: [
                { hanzi: '我叫陈天中。', pinyin: 'Wǒ jiào Chén Tiānzhōng.', meaning: 'Tôi tên là Trần Thiên Trung.' },
                { hanzi: '我是学生。', pinyin: 'Wǒ shì xuésheng.', meaning: 'Tôi là học sinh.' }
            ],
            practice: [
                { questionText: 'Câu 1 · Tôi tên là Trần Thiên Trung.', wordsToOrder: [{ id: '1', text: '我', pinyin: 'wǒ' }, { id: '2', text: '叫', pinyin: 'jiào' }, { id: '3', text: '天', pinyin: 'tiān' }, { id: '4', text: '陈', pinyin: 'Chén' }, { id: '5', text: '中', pinyin: 'zhōng' }], correctOrderIds: ['1', '2', '4', '3', '5'] },
                { questionText: 'Câu 2 · Tôi là học sinh.', wordsToOrder: [{ id: '1', text: '我', pinyin: 'wǒ' }, { id: '2', text: '学生', pinyin: 'xuésheng' }, { id: '3', text: '是', pinyin: 'shì' }], correctOrderIds: ['1', '3', '2'] },
                { questionText: 'Câu 3 · Xin hỏi, bạn tên là gì?', wordsToOrder: [{ id: '1', text: '叫', pinyin: 'jiào' }, { id: '2', text: '什么', pinyin: 'shénme' }, { id: '3', text: '名字', pinyin: 'míngzi' }, { id: '4', text: '请问', pinyin: 'qǐngwèn' }, { id: '5', text: '你', pinyin: 'nǐ' }], correctOrderIds: ['4', '5', '1', '2', '3'] },
                { questionText: 'Câu 4 · Chào! Tôi tên là Bạch Gia Nguyệt.', wordsToOrder: [{ id: '1', text: '白', pinyin: 'Bái' }, { id: '2', text: '月', pinyin: 'yuè' }, { id: '3', text: '家', pinyin: 'jiā' }, { id: '4', text: '你好', pinyin: 'nǐ hǎo' }, { id: '5', text: '叫', pinyin: 'jiào' }, { id: '6', text: '我', pinyin: 'wǒ' }], correctOrderIds: ['4', '6', '5', '1', '3', '2'] },
                { questionText: 'Câu 5 · Rất vui được quen bạn.', wordsToOrder: [{ id: '1', text: '高兴', pinyin: 'gāoxìng' }, { id: '2', text: '很', pinyin: 'hěn' }, { id: '3', text: '认识', pinyin: 'rènshi' }, { id: '4', text: '你', pinyin: 'nǐ' }], correctOrderIds: ['2', '1', '3', '4'] }
            ]
        }]
    },

    conversation: {
        title: 'Hội thoại',
        sections: [{
            id: 's1',
            title: 'Trong lớp học — Vương Nhất Phi làm quen với học sinh',
            turns: [
                { id: 't1', role: 'Vương Nhất Phi (cô Vương)', avatar: '王', hanzi: '请问，你叫什么名字？', pinyin: 'Qǐngwèn, nǐ jiào shénme míngzi?', meaning: 'Xin hỏi, bạn tên là gì?' },
                { id: 't2', role: 'Trần Thiên Trung', avatar: '陈', hanzi: '我叫陈天中。', pinyin: 'Wǒ jiào Chén Tiānzhōng.', meaning: 'Tôi tên là Trần Thiên Trung.' }
            ]
        }]
    },

    fillBlank: {
        title: 'Điền vào chỗ trống',
        choices: [
            { id: 'c1', text: '请问', pinyin: 'qǐngwèn' }, { id: 'c2', text: '叫', pinyin: 'jiào' },
            { id: 'c3', text: '是', pinyin: 'shì' }, { id: 'c4', text: '对不起', pinyin: 'duìbuqǐ' },
            { id: 'c5', text: '没关系', pinyin: 'méi guānxi' }
        ],
        questions: [
            { id: 'q1', speaker: '1', parts: [{ type: 'blank' }, { type: 'text', content: '，你叫什么名字 (nǐ jiào shénme míngzi)？' }], expectedChoiceId: 'c1', hint: 'Gợi ý: 请问 (qǐngwèn) / 叫 (jiào) / 是 (shì)' },
            { id: 'q2', speaker: '2', parts: [{ type: 'text', content: '我 (Wǒ) ' }, { type: 'blank' }, { type: 'text', content: ' 陈天中 (Chén Tiānzhōng)。' }], expectedChoiceId: 'c2', hint: 'Gợi ý: 叫 (jiào) / 是 (shì) / 请问 (qǐngwèn)' },
            { id: 'q3', speaker: '3', parts: [{ type: 'text', content: '我不 (wǒ bù) ' }, { type: 'blank' }, { type: 'text', content: ' 安妮 (Ānní)。' }], expectedChoiceId: 'c3', hint: 'Gợi ý: 是 (shì) / 叫 (jiào) / 没关系 (méi guānxi)' },
            { id: 'q4', speaker: '4', parts: [{ type: 'blank' }, { type: 'text', content: '，我错了 (wǒ cuò le)！' }], expectedChoiceId: 'c4', hint: 'Gợi ý: 对不起 (duìbuqǐ) / 没关系 (méi guānxi) / 请问 (qǐngwèn)' },
            { id: 'q5', speaker: '5', parts: [{ type: 'text', content: 'A：对不起 (duìbuqǐ)！B：' }, { type: 'blank' }, { type: 'text', content: '！' }], expectedChoiceId: 'c5', hint: 'Gợi ý: 没关系 (méi guānxi) / 对不起 (duìbuqǐ) / 是 (shì)' }
        ]
    },

    arranging: {
        title: 'Sắp xếp thành câu',
        questions: [
            { id: 'aq1', meaning: 'Tôi là học sinh.', words: [{ id: 'w1', text: '我', pinyin: 'wǒ' }, { id: 'w2', text: '是', pinyin: 'shì' }, { id: 'w3', text: '学生', pinyin: 'xuésheng' }], correctOrderIds: ['w1', 'w2', 'w3'] },
            { id: 'aq2', meaning: 'Bạn tên là gì?', words: [{ id: 'w4', text: '叫', pinyin: 'jiào' }, { id: 'w5', text: '你', pinyin: 'nǐ' }, { id: 'w6', text: '什么', pinyin: 'shénme' }, { id: 'w7', text: '名字', pinyin: 'míngzi' }], correctOrderIds: ['w5', 'w4', 'w6', 'w7'] },
            { id: 'aq3', meaning: 'Tôi tên là Trần Thiên Trung.', words: [{ id: 'w8', text: '中', pinyin: 'zhōng' }, { id: 'w9', text: '天', pinyin: 'tiān' }, { id: 'w10', text: '陈', pinyin: 'Chén' }, { id: 'w11', text: '叫', pinyin: 'jiào' }, { id: 'w12', text: '我', pinyin: 'wǒ' }], correctOrderIds: ['w12', 'w11', 'w10', 'w9', 'w8'] }
        ]
    },

    matching: {
        title: 'Nối câu',
        leftItems: [
            { id: 'l1', content: '请问，你叫什么名字？', pinyin: 'Qǐngwèn nǐ jiào shénme míngzi' },
            { id: 'l2', content: '你好，安妮！', pinyin: 'Nǐ hǎo Ānní' },
            { id: 'l3', content: '对不起！', pinyin: 'Duìbuqǐ' },
            { id: 'l4', content: '你好！我叫李文。', pinyin: 'Nǐ hǎo wǒ jiào Lǐ Wén' },
            { id: 'l5', content: '很高兴认识你。', pinyin: 'Hěn gāoxìng rènshi nǐ' }
        ],
        rightItems: [
            { id: 'r1', content: '我叫陈天中。', pinyin: 'Wǒ jiào Chén Tiānzhōng' },
            { id: 'r2', content: '认识你我也很高兴。', pinyin: 'Rènshi nǐ wǒ yě hěn gāoxìng' },
            { id: 'r3', content: '没关系！', pinyin: 'Méi guānxi' },
            { id: 'r4', content: '你好，陈天中！我不是安妮，我是白家月。', pinyin: 'Nǐ hǎo Chén Tiānzhōng wǒ bú shì Ānní wǒ shì Bái Jiāyuè' },
            { id: 'r5', content: '你好！我叫白家月。', pinyin: 'Nǐ hǎo wǒ jiào Bái Jiāyuè' }
        ],
        pairs: [{ leftId: 'l1', rightId: 'r1' }, { leftId: 'l2', rightId: 'r4' }, { leftId: 'l3', rightId: 'r3' }, { leftId: 'l4', rightId: 'r5' }, { leftId: 'l5', rightId: 'r2' }]
    },

    quiz: {
        title: 'Trắc nghiệm',
        description: 'Chọn đáp án đúng nhất cho các câu hỏi sau.',
        questions: [
            { id: 'q1', questionText: '＿＿，你叫什么名字 (nǐ jiào shénme míngzi)？', options: [{ id: 'o1', text: '是', pinyin: 'shì' }, { id: 'o2', text: '请问', pinyin: 'qǐngwèn' }, { id: 'o3', text: '叫', pinyin: 'jiào' }], correctOptionId: 'o2' },
            { id: 'q2', questionText: '我 (Wǒ) ＿＿陈天中 (Chén Tiānzhōng)。', options: [{ id: 'o1', text: '请问', pinyin: 'qǐngwèn' }, { id: 'o2', text: '叫', pinyin: 'jiào' }, { id: 'o3', text: '是', pinyin: 'shì' }], correctOptionId: 'o2' },
            { id: 'q3', questionText: '我不 (Wǒ bù) ＿＿安妮 (Ānní)。', options: [{ id: 'o1', text: '没关系', pinyin: 'méi guānxi' }, { id: 'o2', text: '叫', pinyin: 'jiào' }, { id: 'o3', text: '是', pinyin: 'shì' }], correctOptionId: 'o3' },
            { id: 'q4', questionText: '＿＿，我错了 (wǒ cuò le)！', options: [{ id: 'o1', text: '没关系', pinyin: 'méi guānxi' }, { id: 'o2', text: '请问', pinyin: 'qǐngwèn' }, { id: 'o3', text: '对不起', pinyin: 'duìbuqǐ' }], correctOptionId: 'o3' },
            { id: 'q5', questionText: 'A：对不起 (duìbuqǐ)！B：＿＿！', options: [{ id: 'o1', text: '对不起', pinyin: 'duìbuqǐ' }, { id: 'o2', text: '是', pinyin: 'shì' }, { id: 'o3', text: '没关系', pinyin: 'méi guānxi' }], correctOptionId: 'o3' }
        ]
    },

    speaking: {
        title: 'Luyện nói',
        description: 'Hãy bấm Nghe mẫu, sau đó bấm Ghi âm để luyện phát âm.',
        readingTasks: [
            { id: 's1', hanzi: '你好！请问，你叫什么名字？', pinyin: 'Nǐ hǎo! Qǐngwèn, nǐ jiào shénme míngzi?', meaning: 'Xin chào! Xin hỏi, bạn tên là gì?' },
            { id: 's2', hanzi: '我叫李文。你呢？', pinyin: 'Wǒ jiào Lǐ Wén. Nǐ ne?', meaning: 'Tôi tên là Lý Văn. Còn bạn thì sao?' },
            { id: 's3', hanzi: '我叫李文。很高兴认识你。', pinyin: 'Wǒ jiào Lǐ Wén. Hěn gāoxìng rènshi nǐ.', meaning: 'Tôi tên là Lý Văn. Rất vui được quen bạn.' },
            { id: 's4', hanzi: '认识你我也很高兴。', pinyin: 'Rènshi nǐ wǒ yě hěn gāoxìng.', meaning: 'Quen biết bạn tôi cũng rất vui.' }
        ],
        freeSpeakingTasks: [
            { id: 'fs1', topic: '你是学生吗？', pinyin: 'Nǐ shì xuésheng ma?', suggestion: 'Bạn có phải là học sinh không? (Ví dụ: 我是学生...)' },
            { id: 'fs2', topic: '你是老师吗？', pinyin: 'Nǐ shì lǎoshī ma?', suggestion: 'Bạn có phải là giáo viên không? (Ví dụ: 我不是老师...)' },
            { id: 'fs3', topic: '你叫什么名字？怎么写？', pinyin: 'Nǐ jiào shénme míngzi? Zěnme xiě?', suggestion: 'Bạn tên là gì? Viết thế nào?' }
        ]
    },

    funFacts: {
        title: 'Có thể bạn chưa biết',
        description: 'Một số thông tin thú vị về văn hóa và ngôn ngữ Trung Quốc.',
        facts: [
            { id: 'ff1', title: 'Họ đứng trước tên', content: 'Người Trung viết họ trước, tên sau: 李文 (Lǐ Wén) thì 李 (Lǐ) là họ, 文 (Wén) là tên. Điều này phản ánh quan niệm gia tộc quan trọng hơn cá nhân.' },
            { id: 'ff2', title: 'Bách gia tính 百家姓 (Bǎi jiā xìng)', content: 'Chỉ khoảng 100 họ phổ biến chiếm phần lớn dân số. Ba họ đông nhất là 王 (Wáng)、李 (Lǐ)、张 (Zhāng) — riêng họ 王 và 李 mỗi họ đã trên 90 triệu người, đông hơn cả dân số Việt Nam.' },
            { id: 'ff3', title: 'Tên mang ước nguyện', content: 'Bố mẹ chọn tên rất kỹ: 强 (qiáng - mạnh mẽ), 娟 (juān - xinh đẹp), 建国 (Jiànguó - dựng nước). Nhìn tên nhiều khi đoán được người đó sinh vào thời nào.' },
            { id: 'ff4', title: 'Cách gọi lịch sự', content: 'Gọi 王老师 (Wáng lǎoshī - cô Vương), 李经理 (Lǐ jīnglǐ - giám đốc Lý) — họ + chức danh. Gọi thẳng tên riêng người lớn tuổi bị coi là bất lịch sự.' }
        ]
    },

    finalTest: {
        title: 'Kiểm tra tổng hợp',
        description: 'Làm đúng toàn bộ các câu hỏi để hoàn thành bài học.',
        questions: [
            { id: 'ft1', type: 'QUIZ', quizData: { title: 'Trắc nghiệm', questions: [{ id: 'q1', questionText: '＿＿，你叫什么名字？', options: [{ id: 'o1', text: '是' }, { id: 'o2', text: '请问' }, { id: 'o3', text: '叫' }], correctOptionId: 'o2' }] } },
            { id: 'ft2', type: 'QUIZ', quizData: { title: 'Trắc nghiệm', questions: [{ id: 'q2', questionText: '我＿＿陈天中。', options: [{ id: 'o1', text: '请问' }, { id: 'o2', text: '叫' }, { id: 'o3', text: '是' }], correctOptionId: 'o2' }] } },
            { id: 'ft3', type: 'QUIZ', quizData: { title: 'Trắc nghiệm', questions: [{ id: 'q3', questionText: '我不＿＿安妮。', options: [{ id: 'o1', text: '没关系' }, { id: 'o2', text: '叫' }, { id: 'o3', text: '是' }], correctOptionId: 'o3' }] } },
            { id: 'ft4', type: 'FILL_BLANK', fillBlankData: { title: 'Điền vào chỗ trống', choices: [{ id: 'c1', text: '对不起', pinyin: 'duìbuqǐ' }, { id: 'c2', text: '没关系', pinyin: 'méi guānxi' }], questions: [{ id: 'fb1', speaker: '1', parts: [{ type: 'blank' }, { type: 'text', content: '，我错了！' }], expectedChoiceId: 'c1', hint: 'Gợi ý: 对不起 / 没关系' }] } },
            { id: 'ft5', type: 'FILL_BLANK', fillBlankData: { title: 'Điền vào chỗ trống', choices: [{ id: 'c1', text: '对不起', pinyin: 'duìbuqǐ' }, { id: 'c2', text: '没关系', pinyin: 'méi guānxi' }], questions: [{ id: 'fb2', speaker: '2', parts: [{ type: 'text', content: 'A：对不起！B：' }, { type: 'blank' }, { type: 'text', content: '！' }], expectedChoiceId: 'c2', hint: 'Gợi ý: 没关系 / 对不起' }] } },
            { id: 'ft6', type: 'ARRANGING', arrangingData: { title: 'Sắp xếp thành câu', questions: [{ id: 'aq1', meaning: 'Tôi là học sinh.', words: [{ id: 'w1', text: '我', pinyin: 'wǒ' }, { id: 'w2', text: '是', pinyin: 'shì' }, { id: 'w3', text: '学生', pinyin: 'xuésheng' }], correctOrderIds: ['w1', 'w2', 'w3'] }] } },
            { id: 'ft7', type: 'ARRANGING', arrangingData: { title: 'Sắp xếp thành câu', questions: [{ id: 'aq2', meaning: 'Bạn tên là gì?', words: [{ id: 'w4', text: '叫', pinyin: 'jiào' }, { id: 'w5', text: '你', pinyin: 'nǐ' }, { id: 'w6', text: '什么', pinyin: 'shénme' }, { id: 'w7', text: '名字', pinyin: 'míngzi' }], correctOrderIds: ['w5', 'w4', 'w6', 'w7'] }] } },
            { id: 'ft8', type: 'MATCHING', matchingData: { title: 'Nối câu', leftItems: [{ id: 'l1', content: '请问，你叫什么名字？', pinyin: 'Qǐngwèn nǐ jiào shénme míngzi' }, { id: 'l2', content: '对不起！', pinyin: 'Duìbuqǐ' }], rightItems: [{ id: 'r1', content: '我叫陈天中。', pinyin: 'Wǒ jiào Chén Tiānzhōng' }, { id: 'r2', content: '没关系！', pinyin: 'Méi guānxi' }], pairs: [{ leftId: 'l1', rightId: 'r1' }, { leftId: 'l2', rightId: 'r2' }] } },
            { id: 'ft9', type: 'WARM_UP', warmUpData: { title: 'Khởi động', description: 'Nối nghĩa tiếng Việt với từ tiếng Trung', items: [{ id: 'wu1', meaning: 'tên là, gọi là', expectedVocabId: 'v1' }, { id: 'wu2', meaning: 'xin lỗi', expectedVocabId: 'v2' }], choices: [{ id: 'v1', hanzi: '叫', pinyin: 'jiào', meaning: 'tên là, gọi là', examples: [] }, { id: 'v2', hanzi: '对不起', pinyin: 'duìbuqǐ', meaning: 'xin lỗi', examples: [] }] } },
            {
                id: 'ft10', type: 'MATCHING', matchingData: {
                    title: 'Nối câu', leftItems: [{ id: 'l1', content: '我姓李。' }], rightItems: [
                        { id: 'r1', content: '我叫安妮。' },
                        { id: 'r2', content: '我姓王。' }
                    ], pairs: [{ leftId: 'l1', rightId: 'r2' }]
                }
            }
        ]
    }
};
