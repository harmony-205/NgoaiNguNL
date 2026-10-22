import { LessonData } from '../../../models/lesson.data';

export const hsk1lesson3Data: LessonData = {
    lessonId: 'lesson-3-hsk-1',
    lessonName: { hanzi: '我是中国人', pinyin: 'Wǒ shì Zhōngguó rén', meaning: 'Tôi là người Trung Quốc' },

    warmUp: {
        title: 'Khởi động',
        description: 'Bấm chọn một chữ Hán (A–F) bên dưới, rồi bấm vào ô nghĩa tương ứng.',
        items: [
            { id: 'wu1', meaning: 'của', expectedVocabId: 'v2' },
            { id: 'wu2', meaning: 'đây, này', expectedVocabId: 'v3' },
            { id: 'wu3', meaning: 'cô ấy', expectedVocabId: 'v8' },
            { id: 'wu4', meaning: 'đúng', expectedVocabId: 'v15' },
            { id: 'wu5', meaning: '(từ nghi vấn)', expectedVocabId: 'v14' }
        ],
        choices: [
            { id: 'v8', hanzi: '她', pinyin: 'tā', meaning: 'cô ấy', examples: [] },
            { id: 'v3', hanzi: '这', pinyin: 'zhè', meaning: 'đây, này', examples: [] },
            { id: 'v15', hanzi: '对', pinyin: 'duì', meaning: 'đúng', examples: [] },
            { id: 'v2', hanzi: '的', pinyin: 'de', meaning: 'của', examples: [] },
            { id: 'v14', hanzi: '吗', pinyin: 'ma', meaning: '(từ nghi vấn)', examples: [] }
        ]
    },

    vocabulary: {
        title: 'Từ mới',
        words: [
            {
                id: 'v1', hanzi: '人', pinyin: 'rén', meaning: 'người', wordType: 'Danh từ', sinoVietnamese: 'Nhân', examples: [
                    { hanzi: '我是中国人。', pinyin: 'Wǒ shì Zhōngguó rén.', meaning: 'Tôi là người Trung Quốc.' },
                    { hanzi: '她是一个好人。', pinyin: 'Tā shì yí ge hǎo rén.', meaning: 'Cô ấy là một người tốt.' }
                ]
            },
            {
                id: 'v2', hanzi: '的', pinyin: 'de', meaning: 'của', wordType: 'Trợ từ', sinoVietnamese: 'Đích', examples: [
                    { hanzi: '我的中文老师也是中国人。', pinyin: 'Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.', meaning: 'Giáo viên tiếng Trung của tôi cũng là người Trung Quốc.' },
                    { hanzi: '这是你的名字吗？', pinyin: 'Zhè shì nǐ de míngzi ma?', meaning: 'Đây là tên của bạn à?' }
                ]
            },
            {
                id: 'v3', hanzi: '这', pinyin: 'zhè', meaning: 'đây, này', wordType: 'Đại từ', sinoVietnamese: 'Giá', examples: [
                    { hanzi: '这是我女朋友。', pinyin: 'Zhè shì wǒ nǚpéngyou.', meaning: 'Đây là bạn gái của tôi.' },
                    { hanzi: '这是什么？', pinyin: 'Zhè shì shénme?', meaning: 'Đây là cái gì?' }
                ]
            },
            {
                id: 'v4', hanzi: '谁', pinyin: 'shéi', meaning: 'ai', wordType: 'Đại từ', sinoVietnamese: 'Thùy', examples: [
                    { hanzi: '这是谁？', pinyin: 'Zhè shì shéi?', meaning: 'Đây là ai?' },
                    { hanzi: '他是谁？', pinyin: 'Tā shì shéi?', meaning: 'Anh ấy là ai?' }
                ]
            },
            {
                id: 'v5', hanzi: '女朋友', pinyin: 'nǚpéngyou', meaning: 'bạn gái', wordType: 'Danh từ', sinoVietnamese: 'Nữ bằng hữu', examples: [
                    { hanzi: '这是我女朋友。', pinyin: 'Zhè shì wǒ nǚpéngyou.', meaning: 'Đây là bạn gái của tôi.' },
                    { hanzi: '她是我的女朋友。', pinyin: 'Tā shì wǒ de nǚpéngyou.', meaning: 'Cô ấy là bạn gái của tôi.' }
                ]
            },
            {
                id: 'v6', hanzi: '哪', pinyin: 'nǎ', meaning: 'nào', wordType: 'Đại từ', sinoVietnamese: 'Na', examples: [
                    { hanzi: '你女朋友是哪国人？', pinyin: 'Nǐ nǚpéngyou shì nǎ guó rén?', meaning: 'Bạn gái bạn là người nước nào?' },
                    { hanzi: '你是哪国人？', pinyin: 'Nǐ shì nǎ guó rén?', meaning: 'Bạn là người nước nào?' }
                ]
            },
            {
                id: 'v7', hanzi: '国', pinyin: 'guó', meaning: 'nước, quốc gia', wordType: 'Danh từ', sinoVietnamese: 'Quốc', examples: [
                    { hanzi: '你女朋友是哪国人？', pinyin: 'Nǐ nǚpéngyou shì nǎ guó rén?', meaning: 'Bạn gái bạn là người nước nào?' },
                    { hanzi: '中国很大。', pinyin: 'Zhōngguó hěn dà.', meaning: 'Trung Quốc rất rộng lớn.' }
                ]
            },
            {
                id: 'v8', hanzi: '她', pinyin: 'tā', meaning: 'cô ấy', wordType: 'Đại từ', sinoVietnamese: 'Tha', examples: [
                    { hanzi: '她也是泰国人。', pinyin: 'Tā yě shì Tàiguó rén.', meaning: 'Cô ấy cũng là người Thái Lan.' },
                    { hanzi: '她是我的同学。', pinyin: 'Tā shì wǒ de tóngxué.', meaning: 'Cô ấy là bạn học của tôi.' }
                ]
            },
            {
                id: 'v9', hanzi: '喂', pinyin: 'wèi', meaning: 'alô, này', wordType: 'Thán từ', sinoVietnamese: 'Úy', examples: [
                    { hanzi: '喂，一飞！', pinyin: 'Wèi, Yīfēi!', meaning: 'Alô, Nhất Phi!' },
                    { hanzi: '喂，你好！', pinyin: 'Wèi, nǐ hǎo!', meaning: 'Alô, xin chào!' }
                ]
            },
            {
                id: 'v10', hanzi: '姐姐', pinyin: 'jiějie', meaning: 'chị gái', wordType: 'Danh từ', sinoVietnamese: 'Tỷ tỷ', examples: [
                    { hanzi: '姐姐！', pinyin: 'Jiějie!', meaning: 'Chị ơi!' },
                    { hanzi: '她是我姐姐。', pinyin: 'Tā shì wǒ jiějie.', meaning: 'Cô ấy là chị gái tôi.' }
                ]
            },
            {
                id: 'v11', hanzi: '工作', pinyin: 'gōngzuò', meaning: 'công việc', wordType: 'Danh từ', sinoVietnamese: 'Công tác', examples: [
                    { hanzi: '你工作还忙吗？', pinyin: 'Nǐ gōngzuò hái máng ma?', meaning: 'Công việc của em vẫn bận chứ?' },
                    { hanzi: '我的工作很忙。', pinyin: 'Wǒ de gōngzuò hěn máng.', meaning: 'Công việc của tôi rất bận rộn.' }
                ]
            },
            {
                id: 'v12', hanzi: '还', pinyin: 'hái', meaning: 'vẫn, còn', wordType: 'Phó từ', sinoVietnamese: 'Hoàn', examples: [
                    { hanzi: '你工作还忙吗？', pinyin: 'Nǐ gōngzuò hái máng ma?', meaning: 'Công việc của em vẫn bận chứ?' },
                    { hanzi: '我还很忙。', pinyin: 'Wǒ hái hěn máng.', meaning: 'Tôi vẫn rất bận.' }
                ]
            },
            {
                id: 'v13', hanzi: '忙', pinyin: 'máng', meaning: 'bận rộn', wordType: 'Tính từ', sinoVietnamese: 'Mang', examples: [
                    { hanzi: '对，还很忙。', pinyin: 'Duì, hái hěn máng.', meaning: 'Vâng, vẫn rất bận.' },
                    { hanzi: '你也很忙吗？', pinyin: 'Nǐ yě hěn máng ma?', meaning: 'Bạn cũng bận lắm phải không?' }
                ]
            },
            {
                id: 'v14', hanzi: '吗', pinyin: 'ma', meaning: '(từ nghi vấn)', wordType: 'Trợ từ', sinoVietnamese: 'Ma', examples: [
                    { hanzi: '你也很忙吗？', pinyin: 'Nǐ yě hěn máng ma?', meaning: 'Bạn cũng bận lắm phải không?' },
                    { hanzi: '你是学生吗？', pinyin: 'Nǐ shì xuésheng ma?', meaning: 'Bạn là học sinh phải không?' }
                ]
            },
            {
                id: 'v15', hanzi: '对', pinyin: 'duì', meaning: 'đúng', wordType: 'Tính từ', sinoVietnamese: 'Đối', examples: [
                    { hanzi: '对，还很忙。', pinyin: 'Duì, hái hěn máng.', meaning: 'Vâng, vẫn rất bận.' },
                    { hanzi: '你说得对。', pinyin: 'Nǐ shuō de duì.', meaning: 'Bạn nói đúng.' }
                ]
            },
            {
                id: 'v16', hanzi: '太', pinyin: 'tài', meaning: 'quá', wordType: 'Phó từ', sinoVietnamese: 'Thái', examples: [
                    { hanzi: '我不太忙。', pinyin: 'Wǒ bú tài máng.', meaning: 'Chị không bận lắm.' },
                    { hanzi: '这个太贵了。', pinyin: 'Zhège tài guì le.', meaning: 'Cái này quá đắt.' }
                ]
            },
            {
                id: 'v17', hanzi: '我们', pinyin: 'wǒmen', meaning: 'chúng tôi', wordType: 'Đại từ', sinoVietnamese: 'Ngã môn', examples: [
                    { hanzi: '我们很想你。', pinyin: 'Wǒmen hěn xiǎng nǐ.', meaning: 'Cả nhà rất nhớ em.' },
                    { hanzi: '我们是同学。', pinyin: 'Wǒmen shì tóngxué.', meaning: 'Chúng tôi là bạn học.' }
                ]
            },
            {
                id: 'v18', hanzi: '想', pinyin: 'xiǎng', meaning: 'nhớ', wordType: 'Động từ', sinoVietnamese: 'Tưởng', examples: [
                    { hanzi: '我们很想你。', pinyin: 'Wǒmen hěn xiǎng nǐ.', meaning: 'Cả nhà rất nhớ em.' },
                    { hanzi: '我也想你们。', pinyin: 'Wǒ yě xiǎng nǐmen.', meaning: 'Em cũng nhớ mọi người.' }
                ]
            }
        ]
    },

    flashcards: {
        title: 'Thẻ nhớ nhanh',
        words: [
            { id: 'v1', hanzi: '人', pinyin: 'rén', meaning: 'người', examples: [{ hanzi: '我是中国人。', pinyin: 'Wǒ shì Zhōngguó rén.', meaning: 'Tôi là người Trung Quốc.' }] },
            { id: 'v2', hanzi: '的', pinyin: 'de', meaning: 'của', examples: [{ hanzi: '我的中文老师也是中国人。', pinyin: 'Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.', meaning: 'Giáo viên tiếng Trung của tôi cũng là người Trung Quốc.' }] },
            { id: 'v3', hanzi: '这', pinyin: 'zhè', meaning: 'đây, này', examples: [{ hanzi: '这是我女朋友。', pinyin: 'Zhè shì wǒ nǚpéngyou.', meaning: 'Đây là bạn gái của tôi.' }] },
            { id: 'v4', hanzi: '谁', pinyin: 'shéi', meaning: 'ai', examples: [{ hanzi: '这是谁？', pinyin: 'Zhè shì shéi?', meaning: 'Đây là ai?' }] },
            { id: 'v5', hanzi: '女朋友', pinyin: 'nǚpéngyou', meaning: 'bạn gái', examples: [{ hanzi: '这是我女朋友。', pinyin: 'Zhè shì wǒ nǚpéngyou.', meaning: 'Đây là bạn gái của tôi.' }] },
            { id: 'v6', hanzi: '哪', pinyin: 'nǎ', meaning: 'nào', examples: [{ hanzi: '你女朋友是哪国人？', pinyin: 'Nǐ nǚpéngyou shì nǎ guó rén?', meaning: 'Bạn gái bạn là người nước nào?' }] },
            { id: 'v7', hanzi: '国', pinyin: 'guó', meaning: 'nước, quốc gia', examples: [{ hanzi: '你女朋友是哪国人？', pinyin: 'Nǐ nǚpéngyou shì nǎ guó rén?', meaning: 'Bạn gái bạn là người nước nào?' }] },
            { id: 'v8', hanzi: '她', pinyin: 'tā', meaning: 'cô ấy', examples: [{ hanzi: '她也是泰国人。', pinyin: 'Tā yě shì Tàiguó rén.', meaning: 'Cô ấy cũng là người Thái Lan.' }] },
            { id: 'v9', hanzi: '喂', pinyin: 'wèi', meaning: 'alô, này', examples: [{ hanzi: '喂，一飞！', pinyin: 'Wèi, Yīfēi!', meaning: 'Alô, Nhất Phi!' }] },
            { id: 'v10', hanzi: '姐姐', pinyin: 'jiějie', meaning: 'chị gái', examples: [{ hanzi: '姐姐！', pinyin: 'Jiějie!', meaning: 'Chị ơi!' }] },
            { id: 'v11', hanzi: '工作', pinyin: 'gōngzuò', meaning: 'công việc', examples: [{ hanzi: '你工作还忙吗？', pinyin: 'Nǐ gōngzuò hái máng ma?', meaning: 'Công việc của em vẫn bận chứ?' }] },
            { id: 'v12', hanzi: '还', pinyin: 'hái', meaning: 'vẫn, còn', examples: [{ hanzi: '你工作还忙吗？', pinyin: 'Nǐ gōngzuò hái máng ma?', meaning: 'Công việc của em vẫn bận chứ?' }] },
            { id: 'v13', hanzi: '忙', pinyin: 'máng', meaning: 'bận rộn', examples: [{ hanzi: '对，还很忙。', pinyin: 'Duì, hái hěn máng.', meaning: 'Vâng, vẫn rất bận.' }] },
            { id: 'v14', hanzi: '吗', pinyin: 'ma', meaning: '(từ nghi vấn)', examples: [{ hanzi: '你也很忙吗？', pinyin: 'Nǐ yě hěn máng ma?', meaning: 'Bạn cũng bận lắm phải không?' }] },
            { id: 'v15', hanzi: '对', pinyin: 'duì', meaning: 'đúng', examples: [{ hanzi: '对，还很忙。', pinyin: 'Duì, hái hěn máng.', meaning: 'Vâng, vẫn rất bận.' }] },
            { id: 'v16', hanzi: '太', pinyin: 'tài', meaning: 'quá', examples: [{ hanzi: '我不太忙。', pinyin: 'Wǒ bú tài máng.', meaning: 'Chị không bận lắm.' }] },
            { id: 'v17', hanzi: '我们', pinyin: 'wǒmen', meaning: 'chúng tôi', examples: [{ hanzi: '我们很想你。', pinyin: 'Wǒmen hěn xiǎng nǐ.', meaning: 'Cả nhà rất nhớ em.' }] },
            { id: 'v18', hanzi: '想', pinyin: 'xiǎng', meaning: 'nhớ', examples: [{ hanzi: 'Chúng tôi rất nhớ em.', pinyin: 'Wǒmen hěn xiǎng nǐ.', meaning: 'Cả nhà rất nhớ em.' }] }
        ]
    },

    grammar: {
        title: 'Ngữ pháp',
        rules: [
            {
                id: 'g1',
                title: 'Câu chữ “是” — đồng nhất/phân loại',
                explanation: '“是” nối chủ ngữ với danh từ để khẳng định là gì/thuộc loại gì; phủ định thêm “不” trước “是”.',
                usage: 'Công thức: A + 是 + B (khẳng định) / A + 不是 + B (phủ định).',
                examples: [
                    { hanzi: '我是法国人。', pinyin: 'Wǒ shì Fǎguó rén.', meaning: 'Tôi là người Pháp.' },
                    { hanzi: '我老师不是法国人。', pinyin: 'Wǒ lǎoshī bú shì Fǎguó rén.', meaning: 'Giáo viên của tôi không phải người Pháp.' }
                ],
                practice: [
                    { questionText: 'Câu 1 · Tôi là người Pháp.', wordsToOrder: [{ id: '1', text: '我', pinyin: 'wǒ' }, { id: '2', text: '是', pinyin: 'shì' }, { id: '3', text: '国', pinyin: 'guó' }, { id: '4', text: '法', pinyin: 'Fǎ' }, { id: '5', text: '人', pinyin: 'rén' }], correctOrderIds: ['1', '2', '4', '3', '5'] },
                    { questionText: 'Câu 2 · Giáo viên của tôi không phải người Pháp.', wordsToOrder: [{ id: '1', text: '不', pinyin: 'bù' }, { id: '2', text: '老师', pinyin: 'lǎoshī' }, { id: '3', text: '我', pinyin: 'wǒ' }, { id: '4', text: '法', pinyin: 'Fǎ' }, { id: '5', text: '是', pinyin: 'shì' }, { id: '6', text: '人', pinyin: 'rén' }, { id: '7', text: '国', pinyin: 'guó' }], correctOrderIds: ['3', '2', '1', '5', '4', '7', '6'] },
                    { questionText: 'Câu 3 · Tôi là người Trung Quốc.', wordsToOrder: [{ id: '1', text: '中', pinyin: 'Zhōng' }, { id: '2', text: '国', pinyin: 'guó' }, { id: '3', text: '人', pinyin: 'rén' }, { id: '4', text: '我', pinyin: 'wǒ' }, { id: '5', text: '是', pinyin: 'shì' }], correctOrderIds: ['4', '5', '1', '2', '3'] },
                    { questionText: 'Câu 4 · Đây là bạn gái của tôi.', wordsToOrder: [{ id: '1', text: '这', pinyin: 'zhè' }, { id: '2', text: '是', pinyin: 'shì' }, { id: '3', text: '女朋友', pinyin: 'nǚpéngyou' }, { id: '4', text: '我', pinyin: 'wǒ' }], correctOrderIds: ['1', '2', '4', '3'] },
                    { questionText: 'Câu 5 · Bạn gái bạn là người nước nào?', wordsToOrder: [{ id: '1', text: '人', pinyin: 'rén' }, { id: '2', text: '是', pinyin: 'shì' }, { id: '3', text: '你', pinyin: 'nǐ' }, { id: '4', text: '国', pinyin: 'guó' }, { id: '5', text: '女朋友', pinyin: 'nǚpéngyou' }, { id: '6', text: '哪', pinyin: 'nǎ' }], correctOrderIds: ['3', '5', '2', '6', '4', '1'] }
                ]
            },
            {
                id: 'g2',
                title: 'Trợ từ kết cấu “的” — sở thuộc',
                explanation: '“的” đặt giữa định ngữ và trung tâm ngữ để biểu thị quan hệ sở thuộc.',
                usage: 'Nếu trước “的” là đại từ nhân xưng, sau là danh từ chỉ người thân/quen thì “的” có thể lược bỏ: 我老师 (=我的老师), 你同学 (=你的同学).',
                examples: [
                    { hanzi: '白家月的中文老师。', pinyin: 'Bái Jiāyuè de Zhōngwén lǎoshī', meaning: 'Giáo viên tiếng Trung của Bạch Gia Nguyệt' },
                    { hanzi: '你的名字。', pinyin: 'Nǐ de míngzi', meaning: 'Tên của bạn' }
                ],
                practice: [
                    { questionText: 'Câu 1 · Tên của bạn', wordsToOrder: [{ id: '1', text: '的', pinyin: 'de' }, { id: '2', text: '名字', pinyin: 'míngzi' }, { id: '3', text: '你', pinyin: 'nǐ' }], correctOrderIds: ['3', '1', '2'] },
                    { questionText: 'Câu 2 · Tôi là người Trung Quốc.', wordsToOrder: [{ id: '1', text: '国', pinyin: 'guó' }, { id: '2', text: '是', pinyin: 'shì' }, { id: '3', text: '人', pinyin: 'rén' }, { id: '4', text: '中', pinyin: 'Zhōng' }, { id: '5', text: '我', pinyin: 'wǒ' }], correctOrderIds: ['5', '2', '4', '1', '3'] },
                    { questionText: 'Câu 3 · Đây là bạn gái của tôi.', wordsToOrder: [{ id: '1', text: '我', pinyin: 'wǒ' }, { id: '2', text: '这', pinyin: 'zhè' }, { id: '3', text: '女朋友', pinyin: 'nǚpéngyou' }, { id: '4', text: '是', pinyin: 'shì' }], correctOrderIds: ['2', '4', '1', '3'] },
                    { questionText: 'Câu 4 · Bạn gái bạn là người nước nào?', wordsToOrder: [{ id: '1', text: '哪', pinyin: 'nǎ' }, { id: '2', text: '人', pinyin: 'rén' }, { id: '3', text: '是', pinyin: 'shì' }, { id: '4', text: '国', pinyin: 'guó' }, { id: '5', text: '你', pinyin: 'nǐ' }, { id: '6', text: '女朋友', pinyin: 'nǚpéngyou' }], correctOrderIds: ['5', '6', '3', '1', '4', '2'] },
                    { questionText: 'Câu 5 · Cô ấy cũng là người Thái Lan.', wordsToOrder: [{ id: '1', text: '人', pinyin: 'rén' }, { id: '2', text: '国', pinyin: 'guó' }, { id: '3', text: '她', pinyin: 'tā' }, { id: '4', text: '也', pinyin: 'yě' }, { id: '5', text: '泰', pinyin: 'Tài' }, { id: '6', text: '是', pinyin: 'shì' }], correctOrderIds: ['3', '4', '6', '5', '2', '1'] }
                ]
            },
            {
                id: 'g3',
                title: 'Câu hỏi có/không với “吗”',
                explanation: 'Thêm “吗” vào cuối câu trần thuật để tạo câu hỏi có/không.',
                usage: 'Công thức: Câu trần thuật + 吗？= câu hỏi có/không — không đảo trật tự từ như tiếng Anh.',
                examples: [
                    { hanzi: '你也很忙吗？', pinyin: 'Nǐ yě hěn máng ma?', meaning: 'Bạn cũng bận lắm à?' },
                    { hanzi: '你是他的中文老师吗？', pinyin: 'Nǐ shì tā de Zhōngwén lǎoshī ma?', meaning: 'Bạn là giáo viên tiếng Trung của anh ấy à?' }
                ],
                practice: [
                    { questionText: 'Câu 1 · Bạn cũng bận lắm à?', wordsToOrder: [{ id: '1', text: '你', pinyin: 'nǐ' }, { id: '2', text: '吗', pinyin: 'ma' }, { id: '3', text: '很', pinyin: 'hěn' }, { id: '4', text: '也', pinyin: 'yě' }, { id: '5', text: '忙', pinyin: 'máng' }], correctOrderIds: ['1', '4', '3', '5', '2'] },
                    { questionText: 'Câu 2 · Tôi là người Trung Quốc.', wordsToOrder: [{ id: '1', text: '中', pinyin: 'Zhōng' }, { id: '2', text: '是', pinyin: 'shì' }, { id: '3', text: '国', pinyin: 'guó' }, { id: '4', text: '我', pinyin: 'wǒ' }, { id: '5', text: '人', pinyin: 'rén' }], correctOrderIds: ['4', '2', '1', '3', '5'] },
                    { questionText: 'Câu 3 · Đây là bạn gái của tôi.', wordsToOrder: [{ id: '1', text: '女朋友', pinyin: 'nǚpéngyou' }, { id: '2', text: '我', pinyin: 'wǒ' }, { id: '3', text: '这', pinyin: 'zhè' }, { id: '4', text: '是', pinyin: 'shì' }], correctOrderIds: ['3', '4', '2', '1'] },
                    { questionText: 'Câu 4 · Bạn gái bạn là người nước nào?', wordsToOrder: [{ id: '1', text: '人', pinyin: 'rén' }, { id: '2', text: '哪', pinyin: 'nǎ' }, { id: '3', text: '国', pinyin: 'guó' }, { id: '4', text: '你', pinyin: 'nǐ' }, { id: '5', text: '是', pinyin: 'shì' }, { id: '6', text: '女朋友', pinyin: 'nǚpéngyou' }], correctOrderIds: ['4', '6', '5', '2', '3', '1'] },
                    { questionText: 'Câu 5 · Cô ấy cũng là người Thái Lan.', wordsToOrder: [{ id: '1', text: '人', pinyin: 'rén' }, { id: '2', text: '泰', pinyin: 'Tài' }, { id: '3', text: '国', pinyin: 'guó' }, { id: '4', text: '也', pinyin: 'yě' }, { id: '5', text: '她', pinyin: 'tā' }, { id: '6', text: '是', pinyin: 'shì' }], correctOrderIds: ['5', '4', '6', '2', '3', '1'] }
                ]
            }
        ]
    },

    conversation: {
        title: 'Hội thoại',
        sections: [
            {
                id: 's1', title: 'Trong khuôn viên trường — Lý Văn và Bạch Gia Nguyệt tiếp tục trò chuyện', turns: [
                    { id: 't1', role: 'Lý Văn', avatar: '李', hanzi: '我是中国人。', pinyin: 'Wǒ shì Zhōngguó rén.', meaning: 'Tôi là người Trung Quốc.' },
                    { id: 't2', role: 'Bạch Gia Nguyệt', avatar: '白', hanzi: '我是法国人。我的中文老师也是中国人。', pinyin: 'Wǒ shì Fǎguó rén. Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén.', meaning: 'Tôi là người Pháp. Giáo viên tiếng Trung của tôi cũng là người Trung Quốc.' }
                ]
            },
            {
                id: 's2', title: 'Trong lớp học, sau giờ học — Annie xem ảnh trong điện thoại của Trần Thiên Trung', turns: [
                    { id: 't1', role: 'Annie', avatar: '安', hanzi: '这是谁？', pinyin: 'Zhè shì shéi?', meaning: 'Đây là ai?' },
                    { id: 't2', role: 'Trần Thiên Trung', avatar: '陈', hanzi: '这是我女朋友。', pinyin: 'Zhè shì wǒ nǚpéngyou.', meaning: 'Đây là bạn gái của tôi.' },
                    { id: 't3', role: 'Annie', avatar: '安', hanzi: '你女朋友是哪国人？', pinyin: 'Nǐ nǚpéngyou shì nǎ guó rén?', meaning: 'Bạn gái bạn là người nước nào?' },
                    { id: 't4', role: 'Trần Thiên Trung', avatar: '陈', hanzi: '她也是泰国人。', pinyin: 'Tā yě shì Tàiguó rén.', meaning: 'Cô ấy cũng là người Thái Lan.' }
                ]
            },
            {
                id: 's3', title: 'Ở nhà — Vương Nhất Tuyết gọi video cho Vương Nhất Phi', turns: [
                    { id: 't1', role: 'Vương Nhất Tuyết', avatar: '雪', hanzi: '喂，一飞！', pinyin: 'Wèi, Yīfēi!', meaning: 'Alô, Nhất Phi!' },
                    { id: 't2', role: 'Vương Nhất Phi', avatar: '飞', hanzi: '姐姐！', pinyin: 'Jiějie!', meaning: 'Chị ơi!' },
                    { id: 't3', role: 'Vương Nhất Tuyết', avatar: '雪', hanzi: '你工作还忙吗？', pinyin: 'Nǐ gōngzuò hái máng ma?', meaning: 'Công việc của em vẫn bận chứ?' },
                    { id: 't4', role: 'Vương Nhất Phi', avatar: '飞', hanzi: '对，还很忙。你也很忙吗？', pinyin: 'Duì, hái hěn máng. Nǐ yě hěn máng ma?', meaning: 'Vâng, vẫn rất bận. Chị cũng bận lắm phải không?' },
                    { id: 't5', role: 'Vương Nhất Tuyết', avatar: '雪', hanzi: '我不太忙。我们很想你。', pinyin: 'Wǒ bú tài máng. Wǒmen hěn xiǎng nǐ.', meaning: 'Chị không bận lắm. Cả nhà rất nhớ em.' },
                    { id: 't6', role: 'Vương Nhất Phi', avatar: '飞', hanzi: '我也想你们。', pinyin: 'Wǒ yě xiǎng nǐmen.', meaning: 'Em cũng nhớ mọi người.' }
                ]
            }
        ]
    },

    fillBlank: {
        title: 'Điền vào chỗ trống',
        choices: [
            { id: 'c1', text: '吗', pinyin: 'ma' }, { id: 'c2', text: '谁', pinyin: 'shéi' },
            { id: 'c3', text: '哪', pinyin: 'nǎ' }, { id: 'c4', text: '想', pinyin: 'xiǎng' },
            { id: 'c5', text: '的', pinyin: 'de' }
        ],
        questions: [
            { id: 'q1', speaker: '1', parts: [{ type: 'text', content: '你工作还忙 (nǐ gōngzuò hái máng) ' }, { type: 'blank' }, { type: 'text', content: '？' }], expectedChoiceId: 'c1', hint: 'Gợi ý: 吗 (ma) / 谁 (shéi) / 哪 (nǎ)' },
            { id: 'q2', speaker: '2', parts: [{ type: 'text', content: '这是 (zhè shì) ' }, { type: 'blank' }, { type: 'text', content: '？' }], expectedChoiceId: 'c2', hint: 'Gợi ý: 谁 (shéi) / 吗 (ma) / 的 (de)' },
            { id: 'q3', speaker: '3', parts: [{ type: 'text', content: '你是 (nǐ shì) ' }, { type: 'blank' }, { type: 'text', content: ' 国人 (guó rén)？' }], expectedChoiceId: 'c3', hint: 'Gợi ý: 哪 (nǎ) / 想 (xiǎng) / 谁 (shéi)' },
            { id: 'q4', speaker: '4', parts: [{ type: 'text', content: '我很 (wǒ hěn) ' }, { type: 'blank' }, { type: 'text', content: ' 你们 (nǐmen)。' }], expectedChoiceId: 'c4', hint: 'Gợi ý: 想 (xiǎng) / 的 (de) / 吗 (ma)' },
            { id: 'q5', speaker: '5', parts: [{ type: 'text', content: '这是我 (zhè shì wǒ) ' }, { type: 'blank' }, { type: 'text', content: ' 中文老师 (Zhōngwén lǎoshī)。' }], expectedChoiceId: 'c5', hint: 'Gợi ý: 的 (de) / 吗 (ma) / 哪 (nǎ)' }
        ]
    },

    arranging: {
        title: 'Sắp xếp thành câu',
        questions: [
            { id: 'aq1', meaning: 'Tôi là người Trung Quốc.', words: [{ id: 'w1', text: '是', pinyin: 'shì' }, { id: 'w2', text: '我', pinyin: 'wǒ' }, { id: 'w3', text: '中国人', pinyin: 'Zhōngguó rén' }], correctOrderIds: ['w2', 'w1', 'w3'] },
            { id: 'aq2', meaning: 'Bạn có bận không?', words: [{ id: 'w4', text: '吗', pinyin: 'ma' }, { id: 'w5', text: '你', pinyin: 'nǐ' }, { id: 'w6', text: '忙', pinyin: 'máng' }], correctOrderIds: ['w5', 'w6', 'w4'] },
            { id: 'aq3', meaning: 'Tôi là người Pháp.', words: [{ id: 'w7', text: '法', pinyin: 'Fǎ' }, { id: 'w8', text: '是', pinyin: 'shì' }, { id: 'w9', text: '人', pinyin: 'rén' }, { id: 'w10', text: '我', pinyin: 'wǒ' }, { id: 'w11', text: '国', pinyin: 'guó' }], correctOrderIds: ['w10', 'w8', 'w7', 'w11', 'w9'] },
            { id: 'aq4', meaning: 'Giáo viên của tôi không phải người Pháp.', words: [{ id: 'w12', text: '国', pinyin: 'guó' }, { id: 'w13', text: '法', pinyin: 'Fǎ' }, { id: 'w14', text: '老师', pinyin: 'lǎoshī' }, { id: 'w15', text: '不', pinyin: 'bù' }, { id: 'w16', text: '是', pinyin: 'shì' }, { id: 'w17', text: '我', pinyin: 'wǒ' }, { id: 'w18', text: '人', pinyin: 'rén' }], correctOrderIds: ['w17', 'w14', 'w15', 'w16', 'w13', 'w12', 'w18'] },
            { id: 'aq5', meaning: 'Giáo viên tiếng Trung của Bạch Gia Nguyệt', words: [{ id: 'w19', text: '家', pinyin: 'Jiā' }, { id: 'w20', text: '月', pinyin: 'yuè' }, { id: 'w21', text: '的', pinyin: 'de' }, { id: 'w22', text: '中文', pinyin: 'Zhōngwén' }, { id: 'w23', text: '白', pinyin: 'Bái' }, { id: 'w24', text: '老师', pinyin: 'lǎoshī' }], correctOrderIds: ['w23', 'w19', 'w20', 'w21', 'w22', 'w24'] },
            { id: 'aq6', meaning: 'Tên của bạn', words: [{ id: 'w25', text: '你', pinyin: 'nǐ' }, { id: 'w26', text: '的', pinyin: 'de' }, { id: 'w27', text: '名字', pinyin: 'míngzi' }], correctOrderIds: ['w25', 'w26', 'w27'] },
            { id: 'aq7', meaning: 'Bạn cũng bận lắm à?', words: [{ id: 'w28', text: '也', pinyin: 'yě' }, { id: 'w29', text: '吗', pinyin: 'ma' }, { id: 'w30', text: '你', pinyin: 'nǐ' }, { id: 'w31', text: '很', pinyin: 'hěn' }, { id: 'w32', text: '忙', pinyin: 'máng' }], correctOrderIds: ['w30', 'w28', 'w31', 'w32', 'w29'] }
        ]
    },

    matching: {
        title: 'Nối câu',
        leftItems: [
            { id: 'l1', content: '我是中国人。', pinyin: 'Wǒ shì Zhōngguó rén' },
            { id: 'l2', content: '这是谁？', pinyin: 'Zhè shì shéi' },
            { id: 'l3', content: '你女朋友是哪国人？', pinyin: 'Nǐ nǚpéngyou shì nǎ guó rén' },
            { id: 'l4', content: '喂，一飞！', pinyin: 'Wèi, Yīfēi' },
            { id: 'l5', content: '你工作还忙吗？', pinyin: 'Nǐ gōngzuò hái máng ma' },
            { id: 'l6', content: '我不太忙。我们很想你。', pinyin: 'Wǒ bù tài máng. Wǒmen hěn xiǎng nǐ' }
        ],
        rightItems: [
            { id: 'r1', content: '这是我女朋友。', pinyin: 'Zhè shì wǒ nǚpéngyou' },
            { id: 'r2', content: '姐姐！', pinyin: 'Jiějie' },
            { id: 'r3', content: '她也是泰国人。', pinyin: 'Tā yě shì Tàiguó rén' },
            { id: 'r4', content: '我也想你们。', pinyin: 'Wǒ yě xiǎng nǐmen' },
            { id: 'r5', content: '对，还很忙。你也很忙吗？', pinyin: 'Duì, hái hěn máng. Nǐ yě hěn máng ma' },
            { id: 'r6', content: '我是法国人。我的中文老师也是中国人。', pinyin: 'Wǒ shì Fǎguó rén. Wǒ de Zhōngwén lǎoshī yě shì Zhōngguó rén' }
        ],
        pairs: [{ leftId: 'l1', rightId: 'r6' }, { leftId: 'l2', rightId: 'r1' }, { leftId: 'l3', rightId: 'r3' }, { leftId: 'l4', rightId: 'r2' }, { leftId: 'l5', rightId: 'r5' }, { leftId: 'l6', rightId: 'r4' }]
    },

    quiz: {
        title: 'Trắc nghiệm',
        description: 'Chọn đáp án đúng nhất cho các câu hỏi sau.',
        questions: [
            { id: 'q1', questionText: '你工作还忙 (nǐ gōngzuò hái máng) ＿＿？', options: [{ id: 'o1', text: '哪', pinyin: 'nǎ' }, { id: 'o2', text: '吗', pinyin: 'ma' }, { id: 'o3', text: '谁', pinyin: 'shéi' }], correctOptionId: 'o2' },
            { id: 'q2', questionText: '这是 (zhè shì) ＿＿？', options: [{ id: 'o1', text: '的', pinyin: 'de' }, { id: 'o2', text: '谁', pinyin: 'shéi' }, { id: 'o3', text: '吗', pinyin: 'ma' }], correctOptionId: 'o2' },
            { id: 'q3', questionText: '你是 (nǐ shì) ＿＿国人 (guó rén)？', options: [{ id: 'o1', text: '谁', pinyin: 'shéi' }, { id: 'o2', text: '想', pinyin: 'xiǎng' }, { id: 'o3', text: '哪', pinyin: 'nǎ' }], correctOptionId: 'o3' },
            { id: 'q4', questionText: '我很 (wǒ hěn) ＿＿你们 (nǐmen)。', options: [{ id: 'o1', text: '的', pinyin: 'de' }, { id: 'o2', text: '吗', pinyin: 'ma' }, { id: 'o3', text: '想', pinyin: 'xiǎng' }], correctOptionId: 'o3' },
            { id: 'q5', questionText: '这是我 (zhè shì wǒ) ＿＿中文老师 (Zhōngwén lǎoshī)。', options: [{ id: 'o1', text: '吗', pinyin: 'ma' }, { id: 'o2', text: '哪', pinyin: 'nǎ' }, { id: 'o3', text: '的', pinyin: 'de' }], correctOptionId: 'o3' }
        ]
    },

    speaking: {
        title: 'Luyện nói',
        description: 'Nói thoải mái theo ý bạn — máy chỉ chấm phát âm (âm + thanh điệu), không chấm nội dung hay ngữ pháp.',
        readingTasks: [
            { id: 's1', hanzi: '你是哪国人？', pinyin: 'Nǐ shì nǎ guó rén?', meaning: 'Bạn là người nước nào?' },
            { id: 's2', hanzi: '我是[国家]人。你也是[国家]人吗？', pinyin: 'Wǒ shì [guójiā] rén. Nǐ yě shì [guójiā] rén ma?', meaning: 'Tôi là người [quốc gia]. Bạn cũng là người [quốc gia] à?' },
            { id: 's3', hanzi: '不，我是[国家]人。这是你的朋友吗？', pinyin: 'Bù, wǒ shì [guójiā] rén. Zhè shì nǐ de péngyou ma?', meaning: 'Không, tôi là người [quốc gia]. Đây là bạn của bạn à?' },
            { id: 's4', hanzi: '是，这是我的朋友，他/她叫[名字]。', pinyin: 'Shì, zhè shì wǒ de péngyou, tā jiào [míngzi].', meaning: 'Đúng, đây là bạn của tôi, anh ấy/cô ấy tên là [tên].' }
        ],
        freeSpeakingTasks: [
            { id: 'fs1', topic: '你的中文老师是谁？', pinyin: 'Nǐ de Zhōngwén lǎoshī shì shéi?', suggestion: 'Giáo viên tiếng Trung của bạn là ai? (Ví dụ: 我的中文老师是...)' },
            { id: 'fs2', topic: '你工作忙吗？', pinyin: 'Nǐ gōngzuò máng ma?', suggestion: 'Công việc của bạn có bận không? (Ví dụ: 我工作还很忙...)' },
            { id: 'fs3', topic: '这是谁的名字？', pinyin: 'Zhè shì shéi de míngzi?', suggestion: 'Đây là tên của ai? (Ví dụ: 这是李文的名字...)' }
        ]
    },

    funFacts: {
        title: 'Có thể bạn chưa biết',
        description: 'Những nét văn hoá Trung Quốc gắn với chủ đề của bài học này.',
        facts: [
            { id: 'ff1', title: 'Một nước, nhiều giờ mặt trời', content: 'Trung Quốc rộng ngang cả châu Âu nhưng chỉ dùng một múi giờ (giờ Bắc Kinh). Vì thế ở Tân Cương phía Tây, 10 giờ sáng trời mới sáng rõ.' },
            { id: 'ff2', title: '56 dân tộc', content: 'Người Hán chiếm khoảng 92%, còn lại là 55 dân tộc thiểu số. Nhiều dân tộc như Tráng, Hồi, Mãn, Duy Ngô Nhĩ có ngôn ngữ và chữ viết riêng.' },
            { id: 'ff3', title: 'Nói cùng chữ, đọc khác âm', content: 'Tiếng Quảng Đông, tiếng Thượng Hải, tiếng Phúc Kiến khác nhau đến mức không hiểu nổi nhau, nhưng viết ra thì cùng một loại chữ Hán. Tiếng phổ thông 普通话 (Pǔtōnghuà) ra đời để cả nước nói chuyện được với nhau.' }
        ]
    },

    finalTest: {
        title: 'Kiểm tra tổng hợp',
        description: 'Làm đúng toàn bộ các câu hỏi để hoàn thành bài học.',
        questions: [
            { id: 'ft1', type: 'QUIZ', quizData: { title: 'Trắc nghiệm', questions: [{ id: 'q1', questionText: '你工作还忙＿＿？', options: [{ id: 'o1', text: '哪' }, { id: 'o2', text: '吗' }, { id: 'o3', text: '谁' }], correctOptionId: 'o2' }] } },
            { id: 'ft2', type: 'QUIZ', quizData: { title: 'Trắc nghiệm', questions: [{ id: 'q2', questionText: '你是＿＿国人？', options: [{ id: 'o1', text: '谁' }, { id: 'o2', text: '想' }, { id: 'o3', text: '哪' }], correctOptionId: 'o3' }] } },
            { id: 'ft3', type: 'FILL_BLANK', fillBlankData: { title: 'Điền vào chỗ trống', choices: [{ id: 'c1', text: '吗', pinyin: 'ma' }, { id: 'c2', text: '谁', pinyin: 'shéi' }], questions: [{ id: 'fb1', speaker: '1', parts: [{ type: 'text', content: '这是' }, { type: 'blank' }, { type: 'text', content: '？' }], expectedChoiceId: 'c2', hint: 'Gợi ý: 谁 / 吗' }] } },
            { id: 'ft4', type: 'FILL_BLANK', fillBlankData: { title: 'Điền vào chỗ trống', choices: [{ id: 'c1', text: '想', pinyin: 'xiǎng' }, { id: 'c2', text: '的', pinyin: 'de' }], questions: [{ id: 'fb2', speaker: '2', parts: [{ type: 'text', content: '我很' }, { type: 'blank' }, { type: 'text', content: '你们。' }], expectedChoiceId: 'c1', hint: 'Gợi ý: 想 / 的' }] } },
            { id: 'ft5', type: 'ARRANGING', arrangingData: { title: 'Sắp xếp thành câu', questions: [{ id: 'aq1', meaning: 'Tôi là người Trung Quốc.', words: [{ id: 'w1', text: '是', pinyin: 'shì' }, { id: 'w2', text: '我', pinyin: 'wǒ' }, { id: 'w3', text: '中国人', pinyin: 'Zhōngguó rén' }], correctOrderIds: ['w2', 'w1', 'w3'] }] } },
            { id: 'ft6', type: 'ARRANGING', arrangingData: { title: 'Sắp xếp thành câu', questions: [{ id: 'aq2', meaning: 'Bạn cũng bận lắm à?', words: [{ id: 'w1', text: '也', pinyin: 'yě' }, { id: 'w2', text: '吗', pinyin: 'ma' }, { id: 'w3', text: '你', pinyin: 'nǐ' }, { id: 'w4', text: '很', pinyin: 'hěn' }, { id: 'w5', text: '忙', pinyin: 'máng' }], correctOrderIds: ['w3', 'w1', 'w4', 'w5', 'w2'] }] } },
            { id: 'ft7', type: 'MATCHING', matchingData: { title: 'Nối câu', leftItems: [{ id: 'l1', content: '这是谁？', pinyin: 'Zhè shì shéi' }, { id: 'l2', content: '喂，一飞！', pinyin: 'Wèi, Yīfēi' }], rightItems: [{ id: 'r1', content: '这是我女朋友。', pinyin: 'Zhè shì wǒ nǚpéngyou' }, { id: 'r2', content: '姐姐！', pinyin: 'Jiějie' }], pairs: [{ leftId: 'l1', rightId: 'r1' }, { leftId: 'l2', rightId: 'r2' }] } },
            { id: 'ft8', type: 'WARM_UP', warmUpData: { title: 'Khởi động', description: 'Nối nghĩa tiếng Việt với từ tiếng Trung', items: [{ id: 'wu1', meaning: 'của', expectedVocabId: 'v1' }, { id: 'wu2', meaning: 'đúng', expectedVocabId: 'v2' }], choices: [{ id: 'v1', hanzi: '的', pinyin: 'de', meaning: 'của', examples: [] }, { id: 'v2', hanzi: '对', pinyin: 'duì', meaning: 'đúng', examples: [] }] } }
        ]
    }
};
