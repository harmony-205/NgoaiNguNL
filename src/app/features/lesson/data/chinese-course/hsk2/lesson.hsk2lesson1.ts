import { LessonData } from '../../../models/lesson.data';

export const hsk2lesson1Data: LessonData = {
  "lessonId": "hsk2-lesson-1",
  "lessonName": {
    "hanzi": "她请我们吃了北京烤鸭",
    "pinyin": "Tā qǐng wǒmen chīle Běijīng kǎoyā",
    "meaning": "Cô ấy mời chúng tôi ăn vịt quay Bắc Kinh"
  },
  "warmUp": {
    "title": "Khởi động",
    "description": "Bấm chọn một chữ Hán bên dưới, rồi bấm vào ô nghĩa tương ứng.",
    "items": [
      {
        "id": "wu1",
        "meaning": "Chính là, liền",
        "expectedVocabId": "v1"
      },
      {
        "id": "wu2",
        "meaning": "Cho, dành cho",
        "expectedVocabId": "v2"
      },
      {
        "id": "wu3",
        "meaning": "Bảo, để cho",
        "expectedVocabId": "v3"
      },
      {
        "id": "wu4",
        "meaning": "Đón, tiếp đón",
        "expectedVocabId": "v4"
      },
      {
        "id": "wu5",
        "meaning": "Lần",
        "expectedVocabId": "v5"
      },
      {
        "id": "wu6",
        "meaning": "Du lịch",
        "expectedVocabId": "v6"
      }
    ],
    "choices": [
      {
        "id": "v1",
        "hanzi": "就",
        "pinyin": "jiù",
        "meaning": "Chính là, liền",
        "examples": []
      },
      {
        "id": "v2",
        "hanzi": "给",
        "pinyin": "gěi",
        "meaning": "Cho, dành cho",
        "examples": []
      },
      {
        "id": "v3",
        "hanzi": "让",
        "pinyin": "ràng",
        "meaning": "Bảo, để cho",
        "examples": []
      },
      {
        "id": "v4",
        "hanzi": "接",
        "pinyin": "jiē",
        "meaning": "Đón, tiếp đón",
        "examples": []
      },
      {
        "id": "v5",
        "hanzi": "次",
        "pinyin": "cì",
        "meaning": "Lần",
        "examples": []
      },
      {
        "id": "v6",
        "hanzi": "旅游",
        "pinyin": "lǚyóu",
        "meaning": "Du lịch",
        "examples": []
      }
    ]
  },
  "vocabulary": {
    "title": "Từ mới",
    "words": [
      {
        "id": "v1",
        "hanzi": "就",
        "pinyin": "jiù",
        "sinoVietnamese": "Tựu",
        "wordType": "Phó từ",
        "meaning": "Chính là, liền",
        "examples": [
          {
            "hanzi": "你们有事就找我。",
            "pinyin": "Nǐmen yǒu shì jiù zhǎo wǒ.",
            "meaning": "Có việc gì thì cứ tìm tôi."
          },
          {
            "hanzi": "我说完就走。",
            "pinyin": "Wǒ shuō wán jiù zǒu.",
            "meaning": "Tôi nói xong là đi luôn."
          }
        ]
      },
      {
        "id": "v2",
        "hanzi": "给",
        "pinyin": "gěi",
        "sinoVietnamese": "Cấp",
        "wordType": "Giới từ",
        "meaning": "Cho, dành cho",
        "examples": [
          {
            "hanzi": "一飞给我打电话了。",
            "pinyin": "Yīfēi gěi wǒ dǎ diànhuà le.",
            "meaning": "Nhất Phi đã gọi điện cho tôi."
          },
          {
            "hanzi": "我给你介绍一下。",
            "pinyin": "Wǒ gěi nǐ jièshào yíxià.",
            "meaning": "Để tôi giới thiệu cho bạn."
          }
        ]
      },
      {
        "id": "v3",
        "hanzi": "让",
        "pinyin": "ràng",
        "sinoVietnamese": "Nhượng",
        "wordType": "Động từ",
        "meaning": "Bảo, để cho",
        "examples": [
          {
            "hanzi": "让我来接你们。",
            "pinyin": "Ràng wǒ lái jiē nǐmen.",
            "meaning": "Bảo tôi đến đón các bạn."
          },
          {
            "hanzi": "妈妈让我早点回家。",
            "pinyin": "Māma ràng wǒ zǎodiǎn huí jiā.",
            "meaning": "Mẹ bảo tôi về nhà sớm."
          }
        ]
      },
      {
        "id": "v4",
        "hanzi": "接",
        "pinyin": "jiē",
        "sinoVietnamese": "Tiếp",
        "wordType": "Động từ",
        "meaning": "Đón, tiếp đón",
        "examples": [
          {
            "hanzi": "让我来接你们。",
            "pinyin": "Ràng wǒ lái jiē nǐmen.",
            "meaning": "Bảo tôi đến đón các bạn."
          },
          {
            "hanzi": "我去机场接朋友。",
            "pinyin": "Wǒ qù jīchǎng jiē péngyou.",
            "meaning": "Tôi ra sân bay đón bạn."
          }
        ]
      },
      {
        "id": "v5",
        "hanzi": "次",
        "pinyin": "cì",
        "sinoVietnamese": "Thứ",
        "wordType": "Lượng từ",
        "meaning": "Lần",
        "examples": [
          {
            "hanzi": "这是第几次来北京？",
            "pinyin": "Zhè shì dì jǐ cì lái Běijīng?",
            "meaning": "Đây là lần thứ mấy đến Bắc Kinh?"
          },
          {
            "hanzi": "我去过一次中国。",
            "pinyin": "Wǒ qùguo yí cì Zhōngguó.",
            "meaning": "Tôi đã đến Trung Quốc một lần."
          }
        ]
      },
      {
        "id": "v6",
        "hanzi": "旅游",
        "pinyin": "lǚyóu",
        "sinoVietnamese": "Lữ du",
        "wordType": "Động từ",
        "meaning": "Du lịch",
        "examples": [
          {
            "hanzi": "我们都是来旅游的。",
            "pinyin": "Wǒmen dōu shì lái lǚyóu de.",
            "meaning": "Chúng tôi đều đến để du lịch."
          },
          {
            "hanzi": "暑假我想去旅游。",
            "pinyin": "Shǔjià wǒ xiǎng qù lǚyóu.",
            "meaning": "Nghỉ hè tôi muốn đi du lịch."
          }
        ]
      },
      {
        "id": "v7",
        "hanzi": "帮忙",
        "pinyin": "bāngmáng",
        "sinoVietnamese": "Bang mang",
        "wordType": "Động từ",
        "meaning": "Giúp đỡ",
        "examples": [
          {
            "hanzi": "我想请你帮个忙。",
            "pinyin": "Wǒ xiǎng qǐng nǐ bāng ge máng.",
            "meaning": "Tôi muốn nhờ bạn giúp một việc."
          },
          {
            "hanzi": "谢谢你的帮忙。",
            "pinyin": "Xièxie nǐ de bāngmáng.",
            "meaning": "Cảm ơn sự giúp đỡ của bạn."
          }
        ]
      },
      {
        "id": "v8",
        "hanzi": "不好意思",
        "pinyin": "bù hǎoyìsi",
        "sinoVietnamese": "Bất hảo ý tứ",
        "wordType": "Cụm từ",
        "meaning": "Ngại quá, xin lỗi",
        "examples": [
          {
            "hanzi": "不好意思，我们已经到北京了。",
            "pinyin": "Bù hǎoyìsi, wǒmen yǐjīng dào Běijīng le.",
            "meaning": "Ngại quá, chúng tôi đến Bắc Kinh rồi."
          },
          {
            "hanzi": "不好意思，我来晚了。",
            "pinyin": "Bù hǎoyìsi, wǒ lái wǎn le.",
            "meaning": "Xin lỗi, tôi đến muộn."
          }
        ]
      },
      {
        "id": "v9",
        "hanzi": "已经",
        "pinyin": "yǐjīng",
        "sinoVietnamese": "Dĩ kinh",
        "wordType": "Phó từ",
        "meaning": "Đã, rồi",
        "examples": [
          {
            "hanzi": "我们已经到北京了。",
            "pinyin": "Wǒmen yǐjīng dào Běijīng le.",
            "meaning": "Chúng tôi đã đến Bắc Kinh rồi."
          },
          {
            "hanzi": "他已经走了。",
            "pinyin": "Tā yǐjīng zǒu le.",
            "meaning": "Anh ấy đã đi rồi."
          }
        ]
      },
      {
        "id": "v10",
        "hanzi": "那",
        "pinyin": "nà",
        "sinoVietnamese": "Na",
        "wordType": "Liên từ",
        "meaning": "Vậy thì, thế thì",
        "examples": [
          {
            "hanzi": "那我给李文打个电话。",
            "pinyin": "Nà wǒ gěi Lǐ Wén dǎ ge diànhuà.",
            "meaning": "Vậy thì tôi gọi điện cho Lý Văn."
          },
          {
            "hanzi": "你不去，那我也不去了。",
            "pinyin": "Nǐ bú qù, nà wǒ yě bú qù le.",
            "meaning": "Bạn không đi, vậy tôi cũng không đi."
          }
        ]
      },
      {
        "id": "v11",
        "hanzi": "介绍",
        "pinyin": "jièshào",
        "sinoVietnamese": "Giới thiệu",
        "wordType": "Động từ",
        "meaning": "Giới thiệu",
        "examples": [
          {
            "hanzi": "我给你介绍一下，这是李文。",
            "pinyin": "Wǒ gěi nǐ jièshào yíxià, zhè shì Lǐ Wén.",
            "meaning": "Để tôi giới thiệu, đây là Lý Văn."
          },
          {
            "hanzi": "请介绍一下你自己。",
            "pinyin": "Qǐng jièshào yíxià nǐ zìjǐ.",
            "meaning": "Hãy giới thiệu về bản thân bạn."
          }
        ]
      },
      {
        "id": "v12",
        "hanzi": "有时",
        "pinyin": "yǒushí",
        "sinoVietnamese": "Hữu thời",
        "wordType": "Phó từ",
        "meaning": "Đôi khi, có lúc",
        "examples": [
          {
            "hanzi": "中文不太好，有时不懂她的意思。",
            "pinyin": "Zhōngwén bú tài hǎo, yǒushí bù dǒng tā de yìsi.",
            "meaning": "Tiếng Trung không giỏi, đôi khi không hiểu ý cô ấy."
          },
          {
            "hanzi": "我有时会去健身房。",
            "pinyin": "Wǒ yǒushí huì qù jiànshēnfáng.",
            "meaning": "Đôi khi tôi đi phòng gym."
          }
        ]
      },
      {
        "id": "v13",
        "hanzi": "懂",
        "pinyin": "dǒng",
        "sinoVietnamese": "Đổng",
        "wordType": "Động từ",
        "meaning": "Hiểu",
        "examples": [
          {
            "hanzi": "有时不太懂她的意思。",
            "pinyin": "Yǒushí bú tài dǒng tā de yìsi.",
            "meaning": "Đôi khi không hiểu ý cô ấy."
          },
          {
            "hanzi": "你懂我的意思吗？",
            "pinyin": "Nǐ dǒng wǒ de yìsi ma?",
            "meaning": "Bạn hiểu ý tôi không?"
          }
        ]
      },
      {
        "id": "v14",
        "hanzi": "意思",
        "pinyin": "yìsi",
        "sinoVietnamese": "Ý tứ",
        "wordType": "Danh từ",
        "meaning": "Ý nghĩa, ý tứ",
        "examples": [
          {
            "hanzi": "有时不太懂她的意思。",
            "pinyin": "Yǒushí bú tài dǒng tā de yìsi.",
            "meaning": "Đôi khi không hiểu ý cô ấy."
          },
          {
            "hanzi": "这个词是什么意思？",
            "pinyin": "Zhège cí shì shénme yìsi?",
            "meaning": "Từ này nghĩa là gì?"
          }
        ]
      },
      {
        "id": "v15",
        "hanzi": "北京烤鸭",
        "pinyin": "Běijīng kǎoyā",
        "sinoVietnamese": "Bắc Kinh khảo áp",
        "wordType": "Danh từ riêng",
        "meaning": "Vịt quay Bắc Kinh",
        "examples": [
          {
            "hanzi": "王老师的姐姐请我们吃了北京烤鸭。",
            "pinyin": "Wáng lǎoshī de jiějie qǐng wǒmen chīle Běijīng kǎoyā.",
            "meaning": "Chị gái cô Vương mời chúng tôi ăn vịt quay Bắc Kinh."
          },
          {
            "hanzi": "北京烤鸭很有名。",
            "pinyin": "Běijīng kǎoyā hěn yǒumíng.",
            "meaning": "Vịt quay Bắc Kinh rất nổi tiếng."
          }
        ]
      }
    ]
  },
  "flashcards": {
    "title": "Thẻ nhớ",
    "words": [
      {
        "id": "v1",
        "hanzi": "就",
        "pinyin": "jiù",
        "sinoVietnamese": "Tựu",
        "wordType": "Phó từ",
        "meaning": "Chính là, liền",
        "examples": [
          {
            "hanzi": "你们有事就找我。",
            "pinyin": "Nǐmen yǒu shì jiù zhǎo wǒ.",
            "meaning": "Có việc gì thì cứ tìm tôi."
          },
          {
            "hanzi": "我说完就走。",
            "pinyin": "Wǒ shuō wán jiù zǒu.",
            "meaning": "Tôi nói xong là đi luôn."
          }
        ]
      },
      {
        "id": "v2",
        "hanzi": "给",
        "pinyin": "gěi",
        "sinoVietnamese": "Cấp",
        "wordType": "Giới từ",
        "meaning": "Cho, dành cho",
        "examples": [
          {
            "hanzi": "一飞给我打电话了。",
            "pinyin": "Yīfēi gěi wǒ dǎ diànhuà le.",
            "meaning": "Nhất Phi đã gọi điện cho tôi."
          },
          {
            "hanzi": "我给你介绍一下。",
            "pinyin": "Wǒ gěi nǐ jièshào yíxià.",
            "meaning": "Để tôi giới thiệu cho bạn."
          }
        ]
      },
      {
        "id": "v3",
        "hanzi": "让",
        "pinyin": "ràng",
        "sinoVietnamese": "Nhượng",
        "wordType": "Động từ",
        "meaning": "Bảo, để cho",
        "examples": [
          {
            "hanzi": "让我来接你们。",
            "pinyin": "Ràng wǒ lái jiē nǐmen.",
            "meaning": "Bảo tôi đến đón các bạn."
          },
          {
            "hanzi": "妈妈让我早点回家。",
            "pinyin": "Māma ràng wǒ zǎodiǎn huí jiā.",
            "meaning": "Mẹ bảo tôi về nhà sớm."
          }
        ]
      },
      {
        "id": "v4",
        "hanzi": "接",
        "pinyin": "jiē",
        "sinoVietnamese": "Tiếp",
        "wordType": "Động từ",
        "meaning": "Đón, tiếp đón",
        "examples": [
          {
            "hanzi": "让我来接你们。",
            "pinyin": "Ràng wǒ lái jiē nǐmen.",
            "meaning": "Bảo tôi đến đón các bạn."
          },
          {
            "hanzi": "我去机场接朋友。",
            "pinyin": "Wǒ qù jīchǎng jiē péngyou.",
            "meaning": "Tôi ra sân bay đón bạn."
          }
        ]
      },
      {
        "id": "v5",
        "hanzi": "次",
        "pinyin": "cì",
        "sinoVietnamese": "Thứ",
        "wordType": "Lượng từ",
        "meaning": "Lần",
        "examples": [
          {
            "hanzi": "这是第几次来北京？",
            "pinyin": "Zhè shì dì jǐ cì lái Běijīng?",
            "meaning": "Đây là lần thứ mấy đến Bắc Kinh?"
          },
          {
            "hanzi": "我去过一次中国。",
            "pinyin": "Wǒ qùguo yí cì Zhōngguó.",
            "meaning": "Tôi đã đến Trung Quốc một lần."
          }
        ]
      },
      {
        "id": "v6",
        "hanzi": "旅游",
        "pinyin": "lǚyóu",
        "sinoVietnamese": "Lữ du",
        "wordType": "Động từ",
        "meaning": "Du lịch",
        "examples": [
          {
            "hanzi": "我们都是来旅游的。",
            "pinyin": "Wǒmen dōu shì lái lǚyóu de.",
            "meaning": "Chúng tôi đều đến để du lịch."
          },
          {
            "hanzi": "暑假我想去旅游。",
            "pinyin": "Shǔjià wǒ xiǎng qù lǚyóu.",
            "meaning": "Nghỉ hè tôi muốn đi du lịch."
          }
        ]
      },
      {
        "id": "v7",
        "hanzi": "帮忙",
        "pinyin": "bāngmáng",
        "sinoVietnamese": "Bang mang",
        "wordType": "Động từ",
        "meaning": "Giúp đỡ",
        "examples": [
          {
            "hanzi": "我想请你帮个忙。",
            "pinyin": "Wǒ xiǎng qǐng nǐ bāng ge máng.",
            "meaning": "Tôi muốn nhờ bạn giúp một việc."
          },
          {
            "hanzi": "谢谢你的帮忙。",
            "pinyin": "Xièxie nǐ de bāngmáng.",
            "meaning": "Cảm ơn sự giúp đỡ của bạn."
          }
        ]
      },
      {
        "id": "v8",
        "hanzi": "不好意思",
        "pinyin": "bù hǎoyìsi",
        "sinoVietnamese": "Bất hảo ý tứ",
        "wordType": "Cụm từ",
        "meaning": "Ngại quá, xin lỗi",
        "examples": [
          {
            "hanzi": "不好意思，我们已经到北京了。",
            "pinyin": "Bù hǎoyìsi, wǒmen yǐjīng dào Běijīng le.",
            "meaning": "Ngại quá, chúng tôi đến Bắc Kinh rồi."
          },
          {
            "hanzi": "不好意思，我来晚了。",
            "pinyin": "Bù hǎoyìsi, wǒ lái wǎn le.",
            "meaning": "Xin lỗi, tôi đến muộn."
          }
        ]
      },
      {
        "id": "v9",
        "hanzi": "已经",
        "pinyin": "yǐjīng",
        "sinoVietnamese": "Dĩ kinh",
        "wordType": "Phó từ",
        "meaning": "Đã, rồi",
        "examples": [
          {
            "hanzi": "我们已经到北京了。",
            "pinyin": "Wǒmen yǐjīng dào Běijīng le.",
            "meaning": "Chúng tôi đã đến Bắc Kinh rồi."
          },
          {
            "hanzi": "他已经走了。",
            "pinyin": "Tā yǐjīng zǒu le.",
            "meaning": "Anh ấy đã đi rồi."
          }
        ]
      },
      {
        "id": "v10",
        "hanzi": "那",
        "pinyin": "nà",
        "sinoVietnamese": "Na",
        "wordType": "Liên từ",
        "meaning": "Vậy thì, thế thì",
        "examples": [
          {
            "hanzi": "那我给李文打个电话。",
            "pinyin": "Nà wǒ gěi Lǐ Wén dǎ ge diànhuà.",
            "meaning": "Vậy thì tôi gọi điện cho Lý Văn."
          },
          {
            "hanzi": "你不去，那我也不去了。",
            "pinyin": "Nǐ bú qù, nà wǒ yě bú qù le.",
            "meaning": "Bạn không đi, vậy tôi cũng không đi."
          }
        ]
      },
      {
        "id": "v11",
        "hanzi": "介绍",
        "pinyin": "jièshào",
        "sinoVietnamese": "Giới thiệu",
        "wordType": "Động từ",
        "meaning": "Giới thiệu",
        "examples": [
          {
            "hanzi": "我给你介绍一下，这是李文。",
            "pinyin": "Wǒ gěi nǐ jièshào yíxià, zhè shì Lǐ Wén.",
            "meaning": "Để tôi giới thiệu, đây là Lý Văn."
          },
          {
            "hanzi": "请介绍一下你自己。",
            "pinyin": "Qǐng jièshào yíxià nǐ zìjǐ.",
            "meaning": "Hãy giới thiệu về bản thân bạn."
          }
        ]
      },
      {
        "id": "v12",
        "hanzi": "有时",
        "pinyin": "yǒushí",
        "sinoVietnamese": "Hữu thời",
        "wordType": "Phó từ",
        "meaning": "Đôi khi, có lúc",
        "examples": [
          {
            "hanzi": "中文不太好，有时不懂她的意思。",
            "pinyin": "Zhōngwén bú tài hǎo, yǒushí bù dǒng tā de yìsi.",
            "meaning": "Tiếng Trung không giỏi, đôi khi không hiểu ý cô ấy."
          },
          {
            "hanzi": "我有时会去健身房。",
            "pinyin": "Wǒ yǒushí huì qù jiànshēnfáng.",
            "meaning": "Đôi khi tôi đi phòng gym."
          }
        ]
      },
      {
        "id": "v13",
        "hanzi": "懂",
        "pinyin": "dǒng",
        "sinoVietnamese": "Đổng",
        "wordType": "Động từ",
        "meaning": "Hiểu",
        "examples": [
          {
            "hanzi": "有时不太懂她的意思。",
            "pinyin": "Yǒushí bú tài dǒng tā de yìsi.",
            "meaning": "Đôi khi không hiểu ý cô ấy."
          },
          {
            "hanzi": "你懂我的意思吗？",
            "pinyin": "Nǐ dǒng wǒ de yìsi ma?",
            "meaning": "Bạn hiểu ý tôi không?"
          }
        ]
      },
      {
        "id": "v14",
        "hanzi": "意思",
        "pinyin": "yìsi",
        "sinoVietnamese": "Ý tứ",
        "wordType": "Danh từ",
        "meaning": "Ý nghĩa, ý tứ",
        "examples": [
          {
            "hanzi": "有时不太懂她的意思。",
            "pinyin": "Yǒushí bú tài dǒng tā de yìsi.",
            "meaning": "Đôi khi không hiểu ý cô ấy."
          },
          {
            "hanzi": "这个词是什么意思？",
            "pinyin": "Zhège cí shì shénme yìsi?",
            "meaning": "Từ này nghĩa là gì?"
          }
        ]
      },
      {
        "id": "v15",
        "hanzi": "北京烤鸭",
        "pinyin": "Běijīng kǎoyā",
        "sinoVietnamese": "Bắc Kinh khảo áp",
        "wordType": "Danh từ riêng",
        "meaning": "Vịt quay Bắc Kinh",
        "examples": [
          {
            "hanzi": "王老师的姐姐请我们吃了北京烤鸭。",
            "pinyin": "Wáng lǎoshī de jiějie qǐng wǒmen chīle Běijīng kǎoyā.",
            "meaning": "Chị gái cô Vương mời chúng tôi ăn vịt quay Bắc Kinh."
          },
          {
            "hanzi": "北京烤鸭很有名。",
            "pinyin": "Běijīng kǎoyā hěn yǒumíng.",
            "meaning": "Vịt quay Bắc Kinh rất nổi tiếng."
          }
        ]
      }
    ]
  },
  "grammar": {
    "title": "Ngữ pháp",
    "rules": [
      {
        "id": "g1",
        "title": "1. Trợ từ ngữ khí \"吧\" (2) — Phỏng đoán",
        "explanation": "Đặt cuối câu nghi vấn để diễn đạt sự phỏng đoán, ước tính Chị là chị gái thầy Vương Nhất Phi phải không? Các em là học sinh của cô ấy phải không? Các em đến để học tiếng Trung phải không?",
        "usage": "\"吧\"thể hiện người nói đã đoán được câu trả lời, chỉ hỏi lại cho chắc chắn.",
        "note": "",
        "examples": [
          {
            "hanzi": "您是王一飞老师的姐姐吧",
            "pinyin": "",
            "meaning": "Chị là chị gái của cô Vương Nhất Phi phải không?"
          },
          {
            "hanzi": "你们就是她的学生吧",
            "pinyin": "",
            "meaning": "Các em chính là học sinh của cô ấy phải không?"
          },
          {
            "hanzi": "你们是来学中文的吧",
            "pinyin": "",
            "meaning": "Các em đến để học tiếng Trung phải không?"
          }
        ],
        "practice": [
          {
            "questionText": "Luyện tập 1 · Chị là chị gái của cô Vương Nhất Phi phải không?",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "您"
              },
              {
                "id": "2",
                "text": "是"
              },
              {
                "id": "3",
                "text": "王"
              },
              {
                "id": "4",
                "text": "一"
              },
              {
                "id": "5",
                "text": "飞"
              },
              {
                "id": "6",
                "text": "老"
              },
              {
                "id": "7",
                "text": "师"
              },
              {
                "id": "8",
                "text": "的"
              },
              {
                "id": "9",
                "text": "姐"
              },
              {
                "id": "10",
                "text": "姐"
              },
              {
                "id": "11",
                "text": "吧"
              }
            ],
            "correctOrderIds": [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11"
            ]
          },
          {
            "questionText": "Luyện tập 2 · Các em chính là học sinh của cô ấy phải không?",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "你"
              },
              {
                "id": "2",
                "text": "们"
              },
              {
                "id": "3",
                "text": "就"
              },
              {
                "id": "4",
                "text": "是"
              },
              {
                "id": "5",
                "text": "她"
              },
              {
                "id": "6",
                "text": "的"
              },
              {
                "id": "7",
                "text": "学"
              },
              {
                "id": "8",
                "text": "生"
              },
              {
                "id": "9",
                "text": "吧"
              }
            ],
            "correctOrderIds": [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9"
            ]
          },
          {
            "questionText": "Luyện tập 3 · Các em đến để học tiếng Trung phải không?",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "你"
              },
              {
                "id": "2",
                "text": "们"
              },
              {
                "id": "3",
                "text": "是"
              },
              {
                "id": "4",
                "text": "来"
              },
              {
                "id": "5",
                "text": "学"
              },
              {
                "id": "6",
                "text": "中"
              },
              {
                "id": "7",
                "text": "文"
              },
              {
                "id": "8",
                "text": "的"
              },
              {
                "id": "9",
                "text": "吧"
              }
            ],
            "correctOrderIds": [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9"
            ]
          }
        ]
      },
      {
        "id": "g2",
        "title": "2. Câu \"是……的\"— Nhấn mạnh thời gian, địa điểm, cách thức",
        "explanation": "Cấu trúc: S + 是 + (thời gian/địa điểm/cách thức) + Động từ + 的 📌 Khẳng định/nghi vấn có thể bỏ \"是\"; phủ định KHÔNG được bỏ \"是\"",
        "usage": "Dùng khi sự việc đã xảy ra rồi, chỉ nhấn mạnh chi tiết (khi nào/ở đâu/bằng cách nào).",
        "note": "",
        "examples": [
          {
            "hanzi": "我是今天早上到的",
            "pinyin": "",
            "meaning": "Tôi đến vào sáng nay."
          },
          {
            "hanzi": "你是什么时候到的",
            "pinyin": "",
            "meaning": "Bạn đến lúc nào?"
          },
          {
            "hanzi": "你们是来学中文的吧？",
            "pinyin": "",
            "meaning": "Các bạn đến để học tiếng Trung phải không?"
          }
        ],
        "practice": [
          {
            "questionText": "Luyện tập 1 · Tôi đến vào sáng nay.",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "我"
              },
              {
                "id": "2",
                "text": "是"
              },
              {
                "id": "3",
                "text": "今"
              },
              {
                "id": "4",
                "text": "天"
              },
              {
                "id": "5",
                "text": "早"
              },
              {
                "id": "6",
                "text": "上"
              },
              {
                "id": "7",
                "text": "到"
              },
              {
                "id": "8",
                "text": "的"
              }
            ],
            "correctOrderIds": [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8"
            ]
          },
          {
            "questionText": "Luyện tập 2 · Bạn đến lúc nào?",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "你"
              },
              {
                "id": "2",
                "text": "是"
              },
              {
                "id": "3",
                "text": "什"
              },
              {
                "id": "4",
                "text": "么"
              },
              {
                "id": "5",
                "text": "时"
              },
              {
                "id": "6",
                "text": "候"
              },
              {
                "id": "7",
                "text": "到"
              },
              {
                "id": "8",
                "text": "的"
              }
            ],
            "correctOrderIds": [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8"
            ]
          },
          {
            "questionText": "Luyện tập 3 · Các bạn đến để học tiếng Trung phải không?",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "你"
              },
              {
                "id": "2",
                "text": "们"
              },
              {
                "id": "3",
                "text": "是"
              },
              {
                "id": "4",
                "text": "来"
              },
              {
                "id": "5",
                "text": "学"
              },
              {
                "id": "6",
                "text": "中"
              },
              {
                "id": "7",
                "text": "文"
              },
              {
                "id": "8",
                "text": "的"
              },
              {
                "id": "9",
                "text": "吧"
              }
            ],
            "correctOrderIds": [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9"
            ]
          }
        ]
      },
      {
        "id": "g3",
        "title": "3. Câu kiêm ngữ (兼语句) — 请/让/叫",
        "explanation": "Cấu trúc: Chủ ngữ 1 + 请/让/叫 + Tân ngữ(=Chủ ngữ 2) + Động từ/cụm động từ Tân ngữ của động từ trước vừa là chủ ngữ của động từ sau — dùng để yêu cầu/nhờ ai làm việc gì.",
        "usage": "让我来接你们 = \"让\" + tôi (tân ngữ 1 = chủ ngữ 2) + đến đón các bạn.",
        "note": "",
        "examples": [
          {
            "hanzi": "我想请你帮个忙。",
            "pinyin": "",
            "meaning": "Tôi muốn nhờ bạn giúp một việc."
          },
          {
            "hanzi": "王老师让我说中文。",
            "pinyin": "",
            "meaning": "Cô Vương bảo tôi nói tiếng Trung."
          }
        ],
        "practice": [
          {
            "questionText": "Luyện tập 1 · Tôi muốn nhờ bạn giúp một việc.",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "我"
              },
              {
                "id": "2",
                "text": "想"
              },
              {
                "id": "3",
                "text": "请"
              },
              {
                "id": "4",
                "text": "你"
              },
              {
                "id": "5",
                "text": "帮"
              },
              {
                "id": "6",
                "text": "个"
              },
              {
                "id": "7",
                "text": "忙"
              }
            ],
            "correctOrderIds": [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7"
            ]
          },
          {
            "questionText": "Luyện tập 2 · Cô Vương bảo tôi nói tiếng Trung.",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "王"
              },
              {
                "id": "2",
                "text": "老"
              },
              {
                "id": "3",
                "text": "师"
              },
              {
                "id": "4",
                "text": "让"
              },
              {
                "id": "5",
                "text": "我"
              },
              {
                "id": "6",
                "text": "说"
              },
              {
                "id": "7",
                "text": "中"
              },
              {
                "id": "8",
                "text": "文"
              }
            ],
            "correctOrderIds": [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8"
            ]
          }
        ]
      }
    ]
  },
  "conversation": {
    "title": "Hội thoại",
    "sections": [
      {
        "id": "s1",
        "title": "在机场，王一飞接到了白家月和安妮。",
        "turns": [
          {
            "id": "t1",
            "role": "月",
            "avatar": "月",
            "hanzi": "请问，您是王一飞老师的姐姐吗？",
            "pinyin": "Qǐngwèn, nín shì Wáng Yīfēi lǎoshī de jiějie ma?",
            "meaning": "Xin hỏi, chị là chị gái của thầy Vương Nhất Phi ạ?"
          },
          {
            "id": "t2",
            "role": "雪",
            "avatar": "雪",
            "hanzi": "是的，你们就是她的学生吧？",
            "pinyin": "Shì de, nǐmen jiùshì tā de xuéshēng ba?",
            "meaning": "Đúng vậy, các em là học sinh của cô ấy phải không?"
          },
          {
            "id": "t3",
            "role": "月",
            "avatar": "月",
            "hanzi": "对，我是白家月，她是安妮。",
            "pinyin": "Duì, wǒ shì Bái Jiāyuè, tā shì Ānnī.",
            "meaning": "Vâng, em là Bạch Gia Nguyệt, đây là Annie."
          },
          {
            "id": "t4",
            "role": "雪",
            "avatar": "雪",
            "hanzi": "你们好，我叫王一雪。一飞给我打电话了，让我来接你们。",
            "pinyin": "Nǐmen hǎo, wǒ jiào Wáng Yīxuě. Yīfēi gěi wǒ dǎ diànhuà le, ràng wǒ lái jiē nǐmen.",
            "meaning": "Chào các em, chị tên là Vương Nhất Tuyết. Nhất Phi gọi điện, bảo chị đến đón các em."
          },
          {
            "id": "t5",
            "role": "月/妮",
            "avatar": "月",
            "hanzi": "谢谢您。",
            "pinyin": "Xièxie nín.",
            "meaning": "Cảm ơn chị."
          },
          {
            "id": "t6",
            "role": "雪",
            "avatar": "雪",
            "hanzi": "不客气。",
            "pinyin": "Bú kèqi.",
            "meaning": "Không có gì."
          }
        ]
      },
      {
        "id": "s2",
        "title": "在王一雪的车里，白家月、安妮和王一雪在聊天。",
        "turns": [
          {
            "id": "t1",
            "role": "雪",
            "avatar": "雪",
            "hanzi": "你们是第一次来北京吗？",
            "pinyin": "Nǐmen shì dì yī cì lái Běijīng ma?",
            "meaning": "Đây là lần đầu các em đến Bắc Kinh à?"
          },
          {
            "id": "t2",
            "role": "月",
            "avatar": "月",
            "hanzi": "是的，我们都是第一次来。",
            "pinyin": "Shì de, wǒmen dōu shì dì yī cì lái.",
            "meaning": "Vâng, cả hai chúng em đều là lần đầu."
          },
          {
            "id": "t3",
            "role": "雪",
            "avatar": "雪",
            "hanzi": "你们是来学中文的吧？",
            "pinyin": "Nǐmen shì lái xué Zhōngwén de ba?",
            "meaning": "Các em đến để học tiếng Trung phải không?"
          },
          {
            "id": "t4",
            "role": "妮",
            "avatar": "妮",
            "hanzi": "不是，我们都是来旅游的。",
            "pinyin": "Bú shì, wǒmen dōu shì lái lǚyóu de.",
            "meaning": "Không, chúng em đến để du lịch."
          },
          {
            "id": "t5",
            "role": "雪",
            "avatar": "雪",
            "hanzi": "我这几天都不忙，你们有事就找我。",
            "pinyin": "Wǒ zhè jǐ tiān dōu bù máng, nǐmen yǒu shì jiù zhǎo wǒ.",
            "meaning": "Mấy hôm nay chị không bận, có việc gì cứ tìm chị."
          },
          {
            "id": "t6",
            "role": "月",
            "avatar": "月",
            "hanzi": "好的，谢谢您。",
            "pinyin": "Hǎo de, xièxie nín.",
            "meaning": "Vâng, cảm ơn chị."
          }
        ]
      },
      {
        "id": "s3",
        "title": "在王一雪的车上，白家月接到了一个电话。",
        "turns": [
          {
            "id": "t1",
            "role": "陈",
            "avatar": "陈",
            "hanzi": "喂，家月，你明天有时间吗？我想请你帮个忙。",
            "pinyin": "Wéi, Jiāyuè, nǐ míngtiān yǒu shíjiān ma? Wǒ xiǎng qǐng nǐ bāng ge máng.",
            "meaning": "Alô, Gia Nguyệt, ngày mai bạn có rảnh không? Mình muốn nhờ bạn giúp một việc."
          },
          {
            "id": "t2",
            "role": "月",
            "avatar": "月",
            "hanzi": "不好意思，天中，我们已经到北京了。",
            "pinyin": "Bù hǎoyìsi, Tiānzhōng, wǒmen yǐjīng dào Běijīng le.",
            "meaning": "Ngại quá, Thiên Trung, tụi mình đến Bắc Kinh rồi."
          },
          {
            "id": "t3",
            "role": "陈",
            "avatar": "陈",
            "hanzi": "你是什么时候到的？",
            "pinyin": "Nǐ shì shénme shíhou dào de?",
            "meaning": "Bạn đến lúc nào vậy?"
          },
          {
            "id": "t4",
            "role": "月",
            "avatar": "月",
            "hanzi": "我是今天早上到的。你有事可以叫李文，他还在学校呢。",
            "pinyin": "Wǒ shì jīntiān zǎoshang dào de. Nǐ yǒu shì kěyǐ jiào Lǐ Wén, tā hái zài xuéxiào ne.",
            "meaning": "Mình đến sáng nay. Có việc gì bạn có thể gọi Lý Văn, cậu ấy vẫn còn ở trường."
          },
          {
            "id": "t5",
            "role": "陈",
            "avatar": "陈",
            "hanzi": "好的，那我给李文打个电话。",
            "pinyin": "Hǎo de, nà wǒ gěi Lǐ Wén dǎ ge diànhuà.",
            "meaning": "Được rồi, vậy mình gọi điện cho Lý Văn."
          },
          {
            "id": "t6",
            "role": "月",
            "avatar": "月",
            "hanzi": "好，再见！",
            "pinyin": "Hǎo, zàijiàn!",
            "meaning": "Được, tạm biệt!"
          }
        ]
      },
      {
        "id": "s4",
        "title": "在酒店，白家月给王一飞发信息。",
        "turns": [
          {
            "id": "t1",
            "role": "·",
            "avatar": "·",
            "hanzi": "王老师，我们已经到北京了，是您姐姐来接我们的。她请我们吃了北京烤鸭，还给我们介绍了很多东西。我们的中文不太好，有时不太懂她的意思。",
            "pinyin": "Wáng lǎoshī, wǒmen yǐjīng dào Běijīng le, shì nín jiějie lái jiē wǒmen de. Tā qǐng wǒmen chīle Běijīng kǎoyā, hái gěi wǒmen jièshàole hěn duō dōngxi. Wǒmen de Zhōngwén bú tài hǎo, yǒushí bú tài dǒng tā de yìsi.",
            "meaning": "Cô Vương ơi, chúng em đến Bắc Kinh rồi, là chị gái cô đến đón chúng em. Chị ấy mời chúng em ăn vịt quay Bắc Kinh, còn giới thiệu cho chúng em rất nhiều thứ. Tiếng Trung của chúng em không giỏi lắm, đôi khi không hiểu hết ý chị ấy."
          }
        ]
      }
    ]
  },
  "fillBlank": {
    "title": "Điền vào chỗ trống",
    "questions": [
      {
        "id": "q1",
        "speaker": "1",
        "parts": [
          {
            "type": "text",
            "content": "我"
          },
          {
            "type": "blank"
          },
          {
            "type": "text",
            "content": "去电影院看个电影。"
          }
        ],
        "expectedChoiceId": "c5",
        "hint": "Gợi ý: 帮忙 / 已经 / 意思 / 介绍 / 有时"
      },
      {
        "id": "q2",
        "speaker": "2",
        "parts": [
          {
            "type": "text",
            "content": "上课累了，我说的，你懂我的"
          },
          {
            "type": "blank"
          },
          {
            "type": "text",
            "content": "吗？"
          }
        ],
        "expectedChoiceId": "c8",
        "hint": "Gợi ý: 帮忙 / 已经 / 意思 / 介绍 / 有时"
      },
      {
        "id": "q3",
        "speaker": "3",
        "parts": [
          {
            "type": "text",
            "content": "我很喜欢北京，这"
          },
          {
            "type": "blank"
          },
          {
            "type": "text",
            "content": "是我第三次来北京了。"
          }
        ],
        "expectedChoiceId": "c12",
        "hint": "Gợi ý: 帮忙 / 已经 / 意思 / 介绍 / 有时"
      },
      {
        "id": "q4",
        "speaker": "4",
        "parts": [
          {
            "type": "text",
            "content": "安妮，我给你"
          },
          {
            "type": "blank"
          },
          {
            "type": "text",
            "content": "一下，这是我的中国朋友李文。"
          }
        ],
        "expectedChoiceId": "c19",
        "hint": "Gợi ý: 帮忙 / 已经 / 意思 / 介绍 / 有时"
      },
      {
        "id": "q5",
        "speaker": "5",
        "parts": [
          {
            "type": "text",
            "content": "今天工作太多了，那我们俩来"
          },
          {
            "type": "blank"
          },
          {
            "type": "text",
            "content": "吧。"
          }
        ],
        "expectedChoiceId": "c21",
        "hint": "Gợi ý: 帮忙 / 已经 / 意思 / 介绍 / 有时"
      }
    ],
    "choices": [
      {
        "id": "c1",
        "text": "帮忙",
        "pinyin": ""
      },
      {
        "id": "c2",
        "text": "已经",
        "pinyin": ""
      },
      {
        "id": "c3",
        "text": "意思",
        "pinyin": ""
      },
      {
        "id": "c4",
        "text": "介绍",
        "pinyin": ""
      },
      {
        "id": "c5",
        "text": "有时",
        "pinyin": ""
      },
      {
        "id": "c6",
        "text": "帮忙",
        "pinyin": ""
      },
      {
        "id": "c7",
        "text": "已经",
        "pinyin": ""
      },
      {
        "id": "c8",
        "text": "意思",
        "pinyin": ""
      },
      {
        "id": "c9",
        "text": "介绍",
        "pinyin": ""
      },
      {
        "id": "c10",
        "text": "有时",
        "pinyin": ""
      },
      {
        "id": "c11",
        "text": "帮忙",
        "pinyin": ""
      },
      {
        "id": "c12",
        "text": "已经",
        "pinyin": ""
      },
      {
        "id": "c13",
        "text": "意思",
        "pinyin": ""
      },
      {
        "id": "c14",
        "text": "介绍",
        "pinyin": ""
      },
      {
        "id": "c15",
        "text": "有时",
        "pinyin": ""
      },
      {
        "id": "c16",
        "text": "帮忙",
        "pinyin": ""
      },
      {
        "id": "c17",
        "text": "已经",
        "pinyin": ""
      },
      {
        "id": "c18",
        "text": "意思",
        "pinyin": ""
      },
      {
        "id": "c19",
        "text": "介绍",
        "pinyin": ""
      },
      {
        "id": "c20",
        "text": "有时",
        "pinyin": ""
      },
      {
        "id": "c21",
        "text": "帮忙",
        "pinyin": ""
      },
      {
        "id": "c22",
        "text": "已经",
        "pinyin": ""
      },
      {
        "id": "c23",
        "text": "意思",
        "pinyin": ""
      },
      {
        "id": "c24",
        "text": "介绍",
        "pinyin": ""
      },
      {
        "id": "c25",
        "text": "有时",
        "pinyin": ""
      }
    ]
  },
  "arranging": {
    "title": "Sắp xếp thành câu",
    "questions": [
      {
        "id": "aq1",
        "meaning": "Họ đi bằng ô tô.",
        "words": [
          {
            "id": "w4",
            "text": "去",
            "pinyin": ""
          },
          {
            "id": "w2",
            "text": "是",
            "pinyin": ""
          },
          {
            "id": "w5",
            "text": "的",
            "pinyin": ""
          },
          {
            "id": "w3",
            "text": "开车",
            "pinyin": ""
          },
          {
            "id": "w1",
            "text": "他们",
            "pinyin": ""
          }
        ],
        "correctOrderIds": [
          "w1",
          "w2",
          "w3",
          "w4",
          "w5"
        ]
      },
      {
        "id": "aq2",
        "meaning": "Mẹ bảo các con đi ngủ sớm.",
        "words": [
          {
            "id": "w2",
            "text": "让",
            "pinyin": ""
          },
          {
            "id": "w6",
            "text": "睡觉",
            "pinyin": ""
          },
          {
            "id": "w4",
            "text": "们",
            "pinyin": ""
          },
          {
            "id": "w1",
            "text": "妈妈",
            "pinyin": ""
          },
          {
            "id": "w5",
            "text": "早点",
            "pinyin": ""
          },
          {
            "id": "w3",
            "text": "孩子",
            "pinyin": ""
          }
        ],
        "correctOrderIds": [
          "w1",
          "w2",
          "w3",
          "w4",
          "w5",
          "w6"
        ]
      }
    ]
  },
  "matching": {
    "title": "Nối câu",
    "leftItems": [
      {
        "id": "l1",
        "content": "就",
        "pinyin": "jiù"
      },
      {
        "id": "l2",
        "content": "给",
        "pinyin": "gěi"
      },
      {
        "id": "l3",
        "content": "让",
        "pinyin": "ràng"
      },
      {
        "id": "l4",
        "content": "接",
        "pinyin": "jiē"
      },
      {
        "id": "l5",
        "content": "次",
        "pinyin": "cì"
      },
      {
        "id": "l6",
        "content": "旅游",
        "pinyin": "lǚyóu"
      }
    ],
    "rightItems": [
      {
        "id": "r1",
        "content": "Chính là, liền"
      },
      {
        "id": "r2",
        "content": "Cho, dành cho"
      },
      {
        "id": "r3",
        "content": "Bảo, để cho"
      },
      {
        "id": "r4",
        "content": "Đón, tiếp đón"
      },
      {
        "id": "r5",
        "content": "Lần"
      },
      {
        "id": "r6",
        "content": "Du lịch"
      }
    ],
    "pairs": [
      {
        "leftId": "l1",
        "rightId": "r1"
      },
      {
        "leftId": "l2",
        "rightId": "r2"
      },
      {
        "leftId": "l3",
        "rightId": "r3"
      },
      {
        "leftId": "l4",
        "rightId": "r4"
      },
      {
        "leftId": "l5",
        "rightId": "r5"
      },
      {
        "leftId": "l6",
        "rightId": "r6"
      }
    ]
  },
  "quiz": {
    "title": "Trắc nghiệm",
    "description": "Chọn đáp án đúng nhất cho các câu hỏi sau.",
    "questions": [
      {
        "id": "quiz_1",
        "questionText": "Từ \"就\" (jiù) có nghĩa là gì?",
        "options": [
          {
            "id": "o3",
            "text": "Bảo, để cho"
          },
          {
            "id": "o2",
            "text": "Cho, dành cho"
          },
          {
            "id": "o1",
            "text": "Chính là, liền"
          }
        ],
        "correctOptionId": "o1"
      },
      {
        "id": "quiz_2",
        "questionText": "Từ \"给\" (gěi) có nghĩa là gì?",
        "options": [
          {
            "id": "o3",
            "text": "Bảo, để cho"
          },
          {
            "id": "o2",
            "text": "Chính là, liền"
          },
          {
            "id": "o1",
            "text": "Cho, dành cho"
          }
        ],
        "correctOptionId": "o1"
      },
      {
        "id": "quiz_3",
        "questionText": "Từ \"让\" (ràng) có nghĩa là gì?",
        "options": [
          {
            "id": "o1",
            "text": "Bảo, để cho"
          },
          {
            "id": "o2",
            "text": "Chính là, liền"
          },
          {
            "id": "o3",
            "text": "Cho, dành cho"
          }
        ],
        "correctOptionId": "o1"
      },
      {
        "id": "quiz_4",
        "questionText": "Từ \"接\" (jiē) có nghĩa là gì?",
        "options": [
          {
            "id": "o3",
            "text": "Cho, dành cho"
          },
          {
            "id": "o2",
            "text": "Chính là, liền"
          },
          {
            "id": "o1",
            "text": "Đón, tiếp đón"
          }
        ],
        "correctOptionId": "o1"
      },
      {
        "id": "quiz_5",
        "questionText": "Từ \"次\" (cì) có nghĩa là gì?",
        "options": [
          {
            "id": "o3",
            "text": "Cho, dành cho"
          },
          {
            "id": "o2",
            "text": "Chính là, liền"
          },
          {
            "id": "o1",
            "text": "Lần"
          }
        ],
        "correctOptionId": "o1"
      }
    ]
  },
  "speaking": {
    "title": "Luyện nói",
    "description": "Luyện phát âm chuẩn âm điệu và thanh điệu.",
    "readingTasks": [
      {
        "id": "s1",
        "hanzi": "请问，您是王一飞老师的姐姐吗？",
        "pinyin": "",
        "meaning": "月: 请问，您是王一飞老师的姐姐吗？"
      },
      {
        "id": "s2",
        "hanzi": "是的，你们就是她的学生吧？",
        "pinyin": "",
        "meaning": "雪: 是的，你们就是她的学生吧？"
      },
      {
        "id": "s3",
        "hanzi": "对，我是白家月，她是安妮。",
        "pinyin": "",
        "meaning": "月: 对，我是白家月，她是安妮。"
      },
      {
        "id": "s4",
        "hanzi": "谢谢您。",
        "pinyin": "",
        "meaning": "月/妮: 谢谢您。"
      },
      {
        "id": "s5",
        "hanzi": "不客气。",
        "pinyin": "",
        "meaning": "雪: 不客气。"
      }
    ],
    "freeSpeakingTasks": [
      {
        "id": "fs1",
        "topic": "请问，您是王一飞老师的姐姐吗？",
        "suggestion": "Hãy nói suy nghĩ của bạn về câu hỏi: 请问，您是王一飞老师的姐姐吗？"
      },
      {
        "id": "fs2",
        "topic": "是的，你们就是她的学生吧？",
        "suggestion": "Hãy nói suy nghĩ của bạn về câu hỏi: 是的，你们就是她的学生吧？"
      },
      {
        "id": "fs3",
        "topic": "你们是第一次来北京吗？",
        "suggestion": "Hãy nói suy nghĩ của bạn về câu hỏi: 你们是第一次来北京吗？"
      }
    ]
  },
  "funFacts": {
    "title": "Có thể bạn chưa biết: Vịt quay Bắc Kinh và bàn tiệc Trung Hoa",
    "description": "Những nét văn hoá Trung Quốc gắn với chủ đề bài học.",
    "facts": [
      {
        "id": "ff1",
        "title": "Món ăn của hoàng cung",
        "content": "北京烤鸭 có từ thời Minh, vốn là món ngự thiện. Đầu bếp lành nghề thái đúng 108 lát mỏng, mỗi lát đều có cả da lẫn thịt."
      },
      {
        "id": "ff2",
        "title": "Cách ăn đúng điệu",
        "content": "Cuốn bánh tráng mỏng với hành lá, dưa chuột và tương ngọt 甜面酱. Riêng phần da giòn chấm đường trắng là cách ăn của người sành."
      },
      {
        "id": "ff3",
        "title": "Chủ tiệc gắp cho khách",
        "content": "Người mời khách thường tự tay gắp thức ăn cho khách, dùng đũa chung 公筷. Từ chối thẳng bị coi là khách sáo quá mức — nên nhận rồi ăn ít cũng được."
      }
    ]
  },
  "finalTest": {
    "title": "Kiểm tra tổng hợp",
    "description": "Làm đúng toàn bộ các câu hỏi để hoàn thành bài học.",
    "questions": [
      {
        "id": "ft1",
        "type": "QUIZ",
        "quizData": {
          "title": "Trắc nghiệm",
          "questions": [
            {
              "id": "quiz_1",
              "questionText": "Từ \"就\" (jiù) có nghĩa là gì?",
              "options": [
                {
                  "id": "o3",
                  "text": "Bảo, để cho"
                },
                {
                  "id": "o2",
                  "text": "Cho, dành cho"
                },
                {
                  "id": "o1",
                  "text": "Chính là, liền"
                }
              ],
              "correctOptionId": "o1"
            },
            {
              "id": "quiz_2",
              "questionText": "Từ \"给\" (gěi) có nghĩa là gì?",
              "options": [
                {
                  "id": "o3",
                  "text": "Bảo, để cho"
                },
                {
                  "id": "o2",
                  "text": "Chính là, liền"
                },
                {
                  "id": "o1",
                  "text": "Cho, dành cho"
                }
              ],
              "correctOptionId": "o1"
            }
          ]
        }
      },
      {
        "id": "ft2",
        "type": "FILL_BLANK",
        "fillBlankData": {
          "title": "Điền từ",
          "choices": [
            {
              "id": "c1",
              "text": "帮忙",
              "pinyin": ""
            },
            {
              "id": "c2",
              "text": "已经",
              "pinyin": ""
            },
            {
              "id": "c3",
              "text": "意思",
              "pinyin": ""
            },
            {
              "id": "c4",
              "text": "介绍",
              "pinyin": ""
            }
          ],
          "questions": [
            {
              "id": "q1",
              "speaker": "1",
              "parts": [
                {
                  "type": "text",
                  "content": "我"
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "content": "去电影院看个电影。"
                }
              ],
              "expectedChoiceId": "c5",
              "hint": "Gợi ý: 帮忙 / 已经 / 意思 / 介绍 / 有时"
            },
            {
              "id": "q2",
              "speaker": "2",
              "parts": [
                {
                  "type": "text",
                  "content": "上课累了，我说的，你懂我的"
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "content": "吗？"
                }
              ],
              "expectedChoiceId": "c8",
              "hint": "Gợi ý: 帮忙 / 已经 / 意思 / 介绍 / 有时"
            }
          ]
        }
      },
      {
        "id": "ft3",
        "type": "ARRANGING",
        "arrangingData": {
          "title": "Sắp xếp câu",
          "questions": [
            {
              "id": "aq1",
              "meaning": "Họ đi bằng ô tô.",
              "words": [
                {
                  "id": "w4",
                  "text": "去",
                  "pinyin": ""
                },
                {
                  "id": "w2",
                  "text": "是",
                  "pinyin": ""
                },
                {
                  "id": "w5",
                  "text": "的",
                  "pinyin": ""
                },
                {
                  "id": "w3",
                  "text": "开车",
                  "pinyin": ""
                },
                {
                  "id": "w1",
                  "text": "他们",
                  "pinyin": ""
                }
              ],
              "correctOrderIds": [
                "w1",
                "w2",
                "w3",
                "w4",
                "w5"
              ]
            },
            {
              "id": "aq2",
              "meaning": "Mẹ bảo các con đi ngủ sớm.",
              "words": [
                {
                  "id": "w2",
                  "text": "让",
                  "pinyin": ""
                },
                {
                  "id": "w6",
                  "text": "睡觉",
                  "pinyin": ""
                },
                {
                  "id": "w4",
                  "text": "们",
                  "pinyin": ""
                },
                {
                  "id": "w1",
                  "text": "妈妈",
                  "pinyin": ""
                },
                {
                  "id": "w5",
                  "text": "早点",
                  "pinyin": ""
                },
                {
                  "id": "w3",
                  "text": "孩子",
                  "pinyin": ""
                }
              ],
              "correctOrderIds": [
                "w1",
                "w2",
                "w3",
                "w4",
                "w5",
                "w6"
              ]
            }
          ]
        }
      },
      {
        "id": "ft4",
        "type": "MATCHING",
        "matchingData": {
          "title": "Nối từ",
          "leftItems": [
            {
              "id": "l1",
              "content": "就",
              "pinyin": "jiù"
            },
            {
              "id": "l2",
              "content": "给",
              "pinyin": "gěi"
            },
            {
              "id": "l3",
              "content": "让",
              "pinyin": "ràng"
            }
          ],
          "rightItems": [
            {
              "id": "r1",
              "content": "Chính là, liền"
            },
            {
              "id": "r2",
              "content": "Cho, dành cho"
            },
            {
              "id": "r3",
              "content": "Bảo, để cho"
            }
          ],
          "pairs": [
            {
              "leftId": "l1",
              "rightId": "r1"
            },
            {
              "leftId": "l2",
              "rightId": "r2"
            },
            {
              "leftId": "l3",
              "rightId": "r3"
            }
          ]
        }
      }
    ]
  }
};
