import { LessonData } from '../../../models/lesson.data';

export const hsk2lesson2Data: LessonData = {
  "lessonId": "hsk2-lesson-2",
  "lessonName": {
    "hanzi": "还是打车去北大吧",
    "pinyin": "Háishi dǎchē qù Běidà ba",
    "meaning": "Hay là bắt taxi đến Bắc Đại đi"
  },
  "warmUp": {
    "title": "Khởi động",
    "description": "Bấm chọn một chữ Hán bên dưới, rồi bấm vào ô nghĩa tương ứng.",
    "items": [
      {
        "id": "wu1",
        "meaning": "Nhé, đi (gợi ý)",
        "expectedVocabId": "v1"
      },
      {
        "id": "wu2",
        "meaning": "Nhưng",
        "expectedVocabId": "v2"
      },
      {
        "id": "wu3",
        "meaning": "Bến/trạm xe",
        "expectedVocabId": "v3"
      },
      {
        "id": "wu4",
        "meaning": "Xa",
        "expectedVocabId": "v4"
      },
      {
        "id": "wu5",
        "meaning": "Bắt taxi",
        "expectedVocabId": "v5"
      },
      {
        "id": "wu6",
        "meaning": "Nên, hay là (tốt hơn)",
        "expectedVocabId": "v6"
      }
    ],
    "choices": [
      {
        "id": "v1",
        "hanzi": "吧",
        "pinyin": "ba",
        "meaning": "Nhé, đi (gợi ý)",
        "examples": []
      },
      {
        "id": "v2",
        "hanzi": "但",
        "pinyin": "dàn",
        "meaning": "Nhưng",
        "examples": []
      },
      {
        "id": "v3",
        "hanzi": "车站",
        "pinyin": "chēzhàn",
        "meaning": "Bến/trạm xe",
        "examples": []
      },
      {
        "id": "v4",
        "hanzi": "远",
        "pinyin": "yuǎn",
        "meaning": "Xa",
        "examples": []
      },
      {
        "id": "v5",
        "hanzi": "打车",
        "pinyin": "dǎchē",
        "meaning": "Bắt taxi",
        "examples": []
      },
      {
        "id": "v6",
        "hanzi": "还是",
        "pinyin": "háishi",
        "meaning": "Nên, hay là (tốt hơn)",
        "examples": []
      }
    ]
  },
  "vocabulary": {
    "title": "Từ mới",
    "words": [
      {
        "id": "v1",
        "hanzi": "吧",
        "pinyin": "ba",
        "sinoVietnamese": "Ba",
        "wordType": "Trợ từ ngữ khí",
        "meaning": "Nhé, đi (gợi ý)",
        "examples": [
          {
            "hanzi": "我们还是打车去吧。",
            "pinyin": "Wǒmen háishi dǎchē qù ba.",
            "meaning": "Chúng ta hay là bắt taxi đi vậy."
          },
          {
            "hanzi": "我们走吧。",
            "pinyin": "Wǒmen zǒu ba.",
            "meaning": "Chúng ta đi thôi."
          }
        ]
      },
      {
        "id": "v2",
        "hanzi": "但",
        "pinyin": "dàn",
        "sinoVietnamese": "Đãn",
        "wordType": "Liên từ",
        "meaning": "Nhưng",
        "examples": [
          {
            "hanzi": "有，但车站有点儿远。",
            "pinyin": "Yǒu, dàn chēzhàn yǒudiǎnr yuǎn.",
            "meaning": "Có, nhưng trạm xe hơi xa."
          },
          {
            "hanzi": "我很想去，但没时间。",
            "pinyin": "Wǒ hěn xiǎng qù, dàn méi shíjiān.",
            "meaning": "Tôi rất muốn đi, nhưng không có thời gian."
          }
        ]
      },
      {
        "id": "v3",
        "hanzi": "车站",
        "pinyin": "chēzhàn",
        "sinoVietnamese": "Xa trạm",
        "wordType": "Danh từ",
        "meaning": "Bến/trạm xe",
        "examples": [
          {
            "hanzi": "但车站有点儿远。",
            "pinyin": "Dàn chēzhàn yǒudiǎnr yuǎn.",
            "meaning": "Nhưng trạm xe hơi xa."
          },
          {
            "hanzi": "公交车站在哪儿？",
            "pinyin": "Gōngjiāo chēzhàn zài nǎr?",
            "meaning": "Trạm xe buýt ở đâu?"
          }
        ]
      },
      {
        "id": "v4",
        "hanzi": "远",
        "pinyin": "yuǎn",
        "sinoVietnamese": "Viễn",
        "wordType": "Tính từ",
        "meaning": "Xa",
        "examples": [
          {
            "hanzi": "车站有点儿远。",
            "pinyin": "Chēzhàn yǒudiǎnr yuǎn.",
            "meaning": "Trạm xe hơi xa."
          },
          {
            "hanzi": "我家离学校很远。",
            "pinyin": "Wǒ jiā lí xuéxiào hěn yuǎn.",
            "meaning": "Nhà tôi cách trường rất xa."
          }
        ]
      },
      {
        "id": "v5",
        "hanzi": "打车",
        "pinyin": "dǎchē",
        "sinoVietnamese": "Đả xa",
        "wordType": "Động từ",
        "meaning": "Bắt taxi",
        "examples": [
          {
            "hanzi": "这儿好打车吗？",
            "pinyin": "Zhèr hǎo dǎchē ma?",
            "meaning": "Ở đây có dễ bắt taxi không?"
          },
          {
            "hanzi": "下雨了，我们打车回家吧。",
            "pinyin": "Xiàyǔ le, wǒmen dǎchē huí jiā ba.",
            "meaning": "Trời mưa rồi, chúng ta bắt taxi về nhà đi."
          }
        ]
      },
      {
        "id": "v6",
        "hanzi": "还是",
        "pinyin": "háishi",
        "sinoVietnamese": "Hoàn thị",
        "wordType": "Phó từ",
        "meaning": "Nên, hay là (tốt hơn)",
        "examples": [
          {
            "hanzi": "我们还是打车去吧。",
            "pinyin": "Wǒmen háishi dǎchē qù ba.",
            "meaning": "Chúng ta hay là bắt taxi đi vậy."
          },
          {
            "hanzi": "你还是早点休息吧。",
            "pinyin": "Nǐ háishi zǎodiǎn xiūxi ba.",
            "meaning": "Bạn hay là nghỉ sớm một chút đi."
          }
        ]
      },
      {
        "id": "v7",
        "hanzi": "北京大学",
        "pinyin": "Běijīng Dàxué",
        "sinoVietnamese": "Bắc Kinh đại học",
        "wordType": "Danh từ riêng",
        "meaning": "Đại học Bắc Kinh",
        "examples": [
          {
            "hanzi": "去北京大学的公交车在哪儿？",
            "pinyin": "Qù Běijīng Dàxué de gōngjiāochē zài nǎr?",
            "meaning": "Xe buýt đến Đại học Bắc Kinh ở đâu?"
          },
          {
            "hanzi": "北京大学是中国著名的大学。",
            "pinyin": "Běijīng Dàxué shì Zhōngguó zhùmíng de dàxué.",
            "meaning": "Đại học Bắc Kinh là trường đại học nổi tiếng của Trung Quốc."
          }
        ]
      },
      {
        "id": "v8",
        "hanzi": "啊",
        "pinyin": "a",
        "sinoVietnamese": "A",
        "wordType": "Trợ từ",
        "meaning": "Ơi, nhỉ (cảm thán)",
        "examples": [
          {
            "hanzi": "学校里人真多啊！",
            "pinyin": "Xuéxiào lǐ rén zhēn duō a!",
            "meaning": "Trong trường đông người quá nhỉ!"
          },
          {
            "hanzi": "天啊！太便宜了！",
            "pinyin": "Tiān a! Tài piányi le!",
            "meaning": "Trời ơi! Rẻ quá vậy!"
          }
        ]
      },
      {
        "id": "v9",
        "hanzi": "万",
        "pinyin": "wàn",
        "sinoVietnamese": "Vạn",
        "wordType": "Số từ",
        "meaning": "Vạn (mười nghìn)",
        "examples": [
          {
            "hanzi": "北京大学有四万多名学生。",
            "pinyin": "Běijīng Dàxué yǒu sìwàn duō míng xuésheng.",
            "meaning": "Đại học Bắc Kinh có hơn bốn vạn sinh viên."
          },
          {
            "hanzi": "这个城市有一百万人。",
            "pinyin": "Zhège chéngshì yǒu yìbǎi wàn rén.",
            "meaning": "Thành phố này có một triệu người."
          }
        ]
      },
      {
        "id": "v10",
        "hanzi": "名",
        "pinyin": "míng",
        "sinoVietnamese": "Danh",
        "wordType": "Lượng từ",
        "meaning": "(lượng từ chỉ người)",
        "examples": [
          {
            "hanzi": "北京大学有三千多名外国学生。",
            "pinyin": "Běijīng Dàxué yǒu sānqiān duō míng wàiguó xuésheng.",
            "meaning": "Đại học Bắc Kinh có hơn ba nghìn sinh viên nước ngoài."
          },
          {
            "hanzi": "班里有三十名学生。",
            "pinyin": "Bān lǐ yǒu sānshí míng xuésheng.",
            "meaning": "Lớp có ba mươi học sinh."
          }
        ]
      },
      {
        "id": "v11",
        "hanzi": "网上",
        "pinyin": "wǎngshang",
        "sinoVietnamese": "Võng thượng",
        "wordType": "Danh từ",
        "meaning": "Trên mạng",
        "examples": [
          {
            "hanzi": "是我网上看的。",
            "pinyin": "Shì wǒ wǎngshang kàn de.",
            "meaning": "Là tôi xem trên mạng đấy."
          },
          {
            "hanzi": "我网上买了一件衣服。",
            "pinyin": "Wǒ wǎngshang mǎile yí jiàn yīfu.",
            "meaning": "Tôi mua trên mạng một cái áo."
          }
        ]
      },
      {
        "id": "v12",
        "hanzi": "外国",
        "pinyin": "wàiguó",
        "sinoVietnamese": "Ngoại quốc",
        "wordType": "Danh từ",
        "meaning": "Nước ngoài",
        "examples": [
          {
            "hanzi": "北京大学有很多外国学生。",
            "pinyin": "Běijīng Dàxué yǒu hěn duō wàiguó xuésheng.",
            "meaning": "Đại học Bắc Kinh có rất nhiều sinh viên nước ngoài."
          },
          {
            "hanzi": "他是外国人。",
            "pinyin": "Tā shì wàiguó rén.",
            "meaning": "Anh ấy là người nước ngoài."
          }
        ]
      },
      {
        "id": "v13",
        "hanzi": "间",
        "pinyin": "jiān",
        "sinoVietnamese": "Gian",
        "wordType": "Lượng từ",
        "meaning": "(lượng từ chỉ phòng)",
        "examples": [
          {
            "hanzi": "那边就有一间教室。",
            "pinyin": "Nàbiān jiù yǒu yì jiān jiàoshì.",
            "meaning": "Đằng kia có một phòng học."
          },
          {
            "hanzi": "这间房间很大。",
            "pinyin": "Zhè jiān fángjiān hěn dà.",
            "meaning": "Căn phòng này rất rộng."
          }
        ]
      },
      {
        "id": "v14",
        "hanzi": "教室",
        "pinyin": "jiàoshì",
        "sinoVietnamese": "Giáo thất",
        "wordType": "Danh từ",
        "meaning": "Phòng học",
        "examples": [
          {
            "hanzi": "那边就有一间教室。",
            "pinyin": "Nàbiān jiù yǒu yì jiān jiàoshì.",
            "meaning": "Đằng kia có một phòng học."
          },
          {
            "hanzi": "教室里有二十多个学生。",
            "pinyin": "Jiàoshì lǐ yǒu èrshí duō ge xuésheng.",
            "meaning": "Trong phòng học có hơn hai mươi học sinh."
          }
        ]
      },
      {
        "id": "v15",
        "hanzi": "票",
        "pinyin": "piào",
        "sinoVietnamese": "Phiếu",
        "wordType": "Danh từ",
        "meaning": "Vé",
        "examples": [
          {
            "hanzi": "他们卖的电影票很便宜。",
            "pinyin": "Tāmen mài de diànyǐngpiào hěn piányi.",
            "meaning": "Vé xem phim họ bán rất rẻ."
          },
          {
            "hanzi": "请给我两张票。",
            "pinyin": "Qǐng gěi wǒ liǎng zhāng piào.",
            "meaning": "Cho tôi hai vé."
          }
        ]
      },
      {
        "id": "v16",
        "hanzi": "别",
        "pinyin": "bié",
        "sinoVietnamese": "Biệt",
        "wordType": "Phó từ",
        "meaning": "Đừng",
        "examples": [
          {
            "hanzi": "还是别看电影了。",
            "pinyin": "Háishi bié kàn diànyǐng le.",
            "meaning": "Thôi đừng xem phim nữa."
          },
          {
            "hanzi": "你别担心。",
            "pinyin": "Nǐ bié dānxīn.",
            "meaning": "Bạn đừng lo lắng."
          }
        ]
      },
      {
        "id": "v17",
        "hanzi": "过来",
        "pinyin": "guòlái",
        "sinoVietnamese": "Quá lai",
        "wordType": "Động từ",
        "meaning": "Đến đây, qua đây",
        "examples": [
          {
            "hanzi": "你快过来吧。",
            "pinyin": "Nǐ kuài guòlái ba.",
            "meaning": "Bạn nhanh qua đây đi."
          },
          {
            "hanzi": "请你过来一下。",
            "pinyin": "Qǐng nǐ guòlái yíxià.",
            "meaning": "Xin bạn qua đây một chút."
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
        "hanzi": "吧",
        "pinyin": "ba",
        "sinoVietnamese": "Ba",
        "wordType": "Trợ từ ngữ khí",
        "meaning": "Nhé, đi (gợi ý)",
        "examples": [
          {
            "hanzi": "我们还是打车去吧。",
            "pinyin": "Wǒmen háishi dǎchē qù ba.",
            "meaning": "Chúng ta hay là bắt taxi đi vậy."
          },
          {
            "hanzi": "我们走吧。",
            "pinyin": "Wǒmen zǒu ba.",
            "meaning": "Chúng ta đi thôi."
          }
        ]
      },
      {
        "id": "v2",
        "hanzi": "但",
        "pinyin": "dàn",
        "sinoVietnamese": "Đãn",
        "wordType": "Liên từ",
        "meaning": "Nhưng",
        "examples": [
          {
            "hanzi": "有，但车站有点儿远。",
            "pinyin": "Yǒu, dàn chēzhàn yǒudiǎnr yuǎn.",
            "meaning": "Có, nhưng trạm xe hơi xa."
          },
          {
            "hanzi": "我很想去，但没时间。",
            "pinyin": "Wǒ hěn xiǎng qù, dàn méi shíjiān.",
            "meaning": "Tôi rất muốn đi, nhưng không có thời gian."
          }
        ]
      },
      {
        "id": "v3",
        "hanzi": "车站",
        "pinyin": "chēzhàn",
        "sinoVietnamese": "Xa trạm",
        "wordType": "Danh từ",
        "meaning": "Bến/trạm xe",
        "examples": [
          {
            "hanzi": "但车站有点儿远。",
            "pinyin": "Dàn chēzhàn yǒudiǎnr yuǎn.",
            "meaning": "Nhưng trạm xe hơi xa."
          },
          {
            "hanzi": "公交车站在哪儿？",
            "pinyin": "Gōngjiāo chēzhàn zài nǎr?",
            "meaning": "Trạm xe buýt ở đâu?"
          }
        ]
      },
      {
        "id": "v4",
        "hanzi": "远",
        "pinyin": "yuǎn",
        "sinoVietnamese": "Viễn",
        "wordType": "Tính từ",
        "meaning": "Xa",
        "examples": [
          {
            "hanzi": "车站有点儿远。",
            "pinyin": "Chēzhàn yǒudiǎnr yuǎn.",
            "meaning": "Trạm xe hơi xa."
          },
          {
            "hanzi": "我家离学校很远。",
            "pinyin": "Wǒ jiā lí xuéxiào hěn yuǎn.",
            "meaning": "Nhà tôi cách trường rất xa."
          }
        ]
      },
      {
        "id": "v5",
        "hanzi": "打车",
        "pinyin": "dǎchē",
        "sinoVietnamese": "Đả xa",
        "wordType": "Động từ",
        "meaning": "Bắt taxi",
        "examples": [
          {
            "hanzi": "这儿好打车吗？",
            "pinyin": "Zhèr hǎo dǎchē ma?",
            "meaning": "Ở đây có dễ bắt taxi không?"
          },
          {
            "hanzi": "下雨了，我们打车回家吧。",
            "pinyin": "Xiàyǔ le, wǒmen dǎchē huí jiā ba.",
            "meaning": "Trời mưa rồi, chúng ta bắt taxi về nhà đi."
          }
        ]
      },
      {
        "id": "v6",
        "hanzi": "还是",
        "pinyin": "háishi",
        "sinoVietnamese": "Hoàn thị",
        "wordType": "Phó từ",
        "meaning": "Nên, hay là (tốt hơn)",
        "examples": [
          {
            "hanzi": "我们还是打车去吧。",
            "pinyin": "Wǒmen háishi dǎchē qù ba.",
            "meaning": "Chúng ta hay là bắt taxi đi vậy."
          },
          {
            "hanzi": "你还是早点休息吧。",
            "pinyin": "Nǐ háishi zǎodiǎn xiūxi ba.",
            "meaning": "Bạn hay là nghỉ sớm một chút đi."
          }
        ]
      },
      {
        "id": "v7",
        "hanzi": "北京大学",
        "pinyin": "Běijīng Dàxué",
        "sinoVietnamese": "Bắc Kinh đại học",
        "wordType": "Danh từ riêng",
        "meaning": "Đại học Bắc Kinh",
        "examples": [
          {
            "hanzi": "去北京大学的公交车在哪儿？",
            "pinyin": "Qù Běijīng Dàxué de gōngjiāochē zài nǎr?",
            "meaning": "Xe buýt đến Đại học Bắc Kinh ở đâu?"
          },
          {
            "hanzi": "北京大学是中国著名的大学。",
            "pinyin": "Běijīng Dàxué shì Zhōngguó zhùmíng de dàxué.",
            "meaning": "Đại học Bắc Kinh là trường đại học nổi tiếng của Trung Quốc."
          }
        ]
      },
      {
        "id": "v8",
        "hanzi": "啊",
        "pinyin": "a",
        "sinoVietnamese": "A",
        "wordType": "Trợ từ",
        "meaning": "Ơi, nhỉ (cảm thán)",
        "examples": [
          {
            "hanzi": "学校里人真多啊！",
            "pinyin": "Xuéxiào lǐ rén zhēn duō a!",
            "meaning": "Trong trường đông người quá nhỉ!"
          },
          {
            "hanzi": "天啊！太便宜了！",
            "pinyin": "Tiān a! Tài piányi le!",
            "meaning": "Trời ơi! Rẻ quá vậy!"
          }
        ]
      },
      {
        "id": "v9",
        "hanzi": "万",
        "pinyin": "wàn",
        "sinoVietnamese": "Vạn",
        "wordType": "Số từ",
        "meaning": "Vạn (mười nghìn)",
        "examples": [
          {
            "hanzi": "北京大学有四万多名学生。",
            "pinyin": "Běijīng Dàxué yǒu sìwàn duō míng xuésheng.",
            "meaning": "Đại học Bắc Kinh có hơn bốn vạn sinh viên."
          },
          {
            "hanzi": "这个城市有一百万人。",
            "pinyin": "Zhège chéngshì yǒu yìbǎi wàn rén.",
            "meaning": "Thành phố này có một triệu người."
          }
        ]
      },
      {
        "id": "v10",
        "hanzi": "名",
        "pinyin": "míng",
        "sinoVietnamese": "Danh",
        "wordType": "Lượng từ",
        "meaning": "(lượng từ chỉ người)",
        "examples": [
          {
            "hanzi": "北京大学有三千多名外国学生。",
            "pinyin": "Běijīng Dàxué yǒu sānqiān duō míng wàiguó xuésheng.",
            "meaning": "Đại học Bắc Kinh có hơn ba nghìn sinh viên nước ngoài."
          },
          {
            "hanzi": "班里有三十名学生。",
            "pinyin": "Bān lǐ yǒu sānshí míng xuésheng.",
            "meaning": "Lớp có ba mươi học sinh."
          }
        ]
      },
      {
        "id": "v11",
        "hanzi": "网上",
        "pinyin": "wǎngshang",
        "sinoVietnamese": "Võng thượng",
        "wordType": "Danh từ",
        "meaning": "Trên mạng",
        "examples": [
          {
            "hanzi": "是我网上看的。",
            "pinyin": "Shì wǒ wǎngshang kàn de.",
            "meaning": "Là tôi xem trên mạng đấy."
          },
          {
            "hanzi": "我网上买了一件衣服。",
            "pinyin": "Wǒ wǎngshang mǎile yí jiàn yīfu.",
            "meaning": "Tôi mua trên mạng một cái áo."
          }
        ]
      },
      {
        "id": "v12",
        "hanzi": "外国",
        "pinyin": "wàiguó",
        "sinoVietnamese": "Ngoại quốc",
        "wordType": "Danh từ",
        "meaning": "Nước ngoài",
        "examples": [
          {
            "hanzi": "北京大学有很多外国学生。",
            "pinyin": "Běijīng Dàxué yǒu hěn duō wàiguó xuésheng.",
            "meaning": "Đại học Bắc Kinh có rất nhiều sinh viên nước ngoài."
          },
          {
            "hanzi": "他是外国人。",
            "pinyin": "Tā shì wàiguó rén.",
            "meaning": "Anh ấy là người nước ngoài."
          }
        ]
      },
      {
        "id": "v13",
        "hanzi": "间",
        "pinyin": "jiān",
        "sinoVietnamese": "Gian",
        "wordType": "Lượng từ",
        "meaning": "(lượng từ chỉ phòng)",
        "examples": [
          {
            "hanzi": "那边就有一间教室。",
            "pinyin": "Nàbiān jiù yǒu yì jiān jiàoshì.",
            "meaning": "Đằng kia có một phòng học."
          },
          {
            "hanzi": "这间房间很大。",
            "pinyin": "Zhè jiān fángjiān hěn dà.",
            "meaning": "Căn phòng này rất rộng."
          }
        ]
      },
      {
        "id": "v14",
        "hanzi": "教室",
        "pinyin": "jiàoshì",
        "sinoVietnamese": "Giáo thất",
        "wordType": "Danh từ",
        "meaning": "Phòng học",
        "examples": [
          {
            "hanzi": "那边就有一间教室。",
            "pinyin": "Nàbiān jiù yǒu yì jiān jiàoshì.",
            "meaning": "Đằng kia có một phòng học."
          },
          {
            "hanzi": "教室里有二十多个学生。",
            "pinyin": "Jiàoshì lǐ yǒu èrshí duō ge xuésheng.",
            "meaning": "Trong phòng học có hơn hai mươi học sinh."
          }
        ]
      },
      {
        "id": "v15",
        "hanzi": "票",
        "pinyin": "piào",
        "sinoVietnamese": "Phiếu",
        "wordType": "Danh từ",
        "meaning": "Vé",
        "examples": [
          {
            "hanzi": "他们卖的电影票很便宜。",
            "pinyin": "Tāmen mài de diànyǐngpiào hěn piányi.",
            "meaning": "Vé xem phim họ bán rất rẻ."
          },
          {
            "hanzi": "请给我两张票。",
            "pinyin": "Qǐng gěi wǒ liǎng zhāng piào.",
            "meaning": "Cho tôi hai vé."
          }
        ]
      },
      {
        "id": "v16",
        "hanzi": "别",
        "pinyin": "bié",
        "sinoVietnamese": "Biệt",
        "wordType": "Phó từ",
        "meaning": "Đừng",
        "examples": [
          {
            "hanzi": "还是别看电影了。",
            "pinyin": "Háishi bié kàn diànyǐng le.",
            "meaning": "Thôi đừng xem phim nữa."
          },
          {
            "hanzi": "你别担心。",
            "pinyin": "Nǐ bié dānxīn.",
            "meaning": "Bạn đừng lo lắng."
          }
        ]
      },
      {
        "id": "v17",
        "hanzi": "过来",
        "pinyin": "guòlái",
        "sinoVietnamese": "Quá lai",
        "wordType": "Động từ",
        "meaning": "Đến đây, qua đây",
        "examples": [
          {
            "hanzi": "你快过来吧。",
            "pinyin": "Nǐ kuài guòlái ba.",
            "meaning": "Bạn nhanh qua đây đi."
          },
          {
            "hanzi": "请你过来一下。",
            "pinyin": "Qǐng nǐ guòlái yíxià.",
            "meaning": "Xin bạn qua đây một chút."
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
        "title": "1. Cấu trúc cố định \"还是……吧\"— Lựa chọn nghiêng về một phía",
        "explanation": "Diễn đạt sự lựa chọn thiên về một phương án, hàm ý \"làm thế này tốt hơn\"Chúng ta hay là bắt taxi đi vậy. Chiếc áo đó đẹp lắm, hay là mua chiếc đó đi. 📌 Ví dụ khác Bạn lần đầu đến Bắc Kinh, hay là để tôi đi cùng bạn.",
        "usage": "\"还是……吧\"thường dùng khi cân nhắc giữa nhiều lựa chọn rồi quyết định chọn phương án tốt hơn.",
        "note": "",
        "examples": [
          {
            "hanzi": "我们还是打车去吧",
            "pinyin": "",
            "meaning": "Hay là chúng ta đi taxi đi."
          },
          {
            "hanzi": "那件衣服很好看，还是买那件吧",
            "pinyin": "",
            "meaning": "Bộ quần áo kia rất đẹp, hay là mua bộ đó đi."
          },
          {
            "hanzi": "你第一次去北京，还是我陪你去吧",
            "pinyin": "",
            "meaning": "Bạn đi Bắc Kinh lần đầu, hay là để tôi đi cùng bạn."
          }
        ],
        "practice": [
          {
            "questionText": "Luyện tập 1 · Hay là chúng ta đi taxi đi.",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "我"
              },
              {
                "id": "2",
                "text": "们"
              },
              {
                "id": "3",
                "text": "还"
              },
              {
                "id": "4",
                "text": "是"
              },
              {
                "id": "5",
                "text": "打"
              },
              {
                "id": "6",
                "text": "车"
              },
              {
                "id": "7",
                "text": "去"
              },
              {
                "id": "8",
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
              "8"
            ]
          },
          {
            "questionText": "Luyện tập 2 · Bộ quần áo kia rất đẹp, hay là mua bộ đó đi.",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "那"
              },
              {
                "id": "2",
                "text": "件"
              },
              {
                "id": "3",
                "text": "衣"
              },
              {
                "id": "4",
                "text": "服"
              },
              {
                "id": "5",
                "text": "很"
              },
              {
                "id": "6",
                "text": "好"
              },
              {
                "id": "7",
                "text": "看"
              },
              {
                "id": "8",
                "text": "还"
              },
              {
                "id": "9",
                "text": "是"
              },
              {
                "id": "10",
                "text": "买"
              },
              {
                "id": "11",
                "text": "那"
              },
              {
                "id": "12",
                "text": "件"
              },
              {
                "id": "13",
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
              "11",
              "12",
              "13"
            ]
          },
          {
            "questionText": "Luyện tập 3 · Bạn đi Bắc Kinh lần đầu, hay là để tôi đi cùng bạn.",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "你"
              },
              {
                "id": "2",
                "text": "第"
              },
              {
                "id": "3",
                "text": "一"
              },
              {
                "id": "4",
                "text": "次"
              },
              {
                "id": "5",
                "text": "去"
              },
              {
                "id": "6",
                "text": "北"
              },
              {
                "id": "7",
                "text": "京"
              },
              {
                "id": "8",
                "text": "还"
              },
              {
                "id": "9",
                "text": "是"
              },
              {
                "id": "10",
                "text": "我"
              },
              {
                "id": "11",
                "text": "陪"
              },
              {
                "id": "12",
                "text": "你"
              },
              {
                "id": "13",
                "text": "去"
              },
              {
                "id": "14",
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
              "11",
              "12",
              "13",
              "14"
            ]
          }
        ]
      },
      {
        "id": "g2",
        "title": "2. Dùng \"多\" diễn đạt số lượng ước chừng",
        "explanation": "\"多\"đặt sau số từ/lượng từ để biểu thị số lượng không chắc chắn (nhiều hơn số đã nêu) 📌 Ví dụ khác",
        "usage": "Bội số của 10 (万, 十...): \"多\" theo ngay sau số từ. Không phải bội số của 10: \"多\"theo sau lượng từ.",
        "note": "",
        "examples": [
          {
            "hanzi": "北京大学有四万多名学生。",
            "pinyin": "",
            "meaning": "Đại học Bắc Kinh có hơn bốn vạn sinh viên."
          },
          {
            "hanzi": "教室里有二十多个学生。",
            "pinyin": "",
            "meaning": "Trong phòng học có hơn hai mươi học sinh."
          },
          {
            "hanzi": "这两个手机差三十多块钱。",
            "pinyin": "",
            "meaning": "Hai chiếc điện thoại này chênh nhau hơn ba mươi tệ."
          }
        ],
        "practice": [
          {
            "questionText": "Luyện tập 1 · Đại học Bắc Kinh có hơn bốn vạn sinh viên.",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "北"
              },
              {
                "id": "2",
                "text": "京"
              },
              {
                "id": "3",
                "text": "大"
              },
              {
                "id": "4",
                "text": "学"
              },
              {
                "id": "5",
                "text": "有"
              },
              {
                "id": "6",
                "text": "四"
              },
              {
                "id": "7",
                "text": "万"
              },
              {
                "id": "8",
                "text": "多"
              },
              {
                "id": "9",
                "text": "名"
              },
              {
                "id": "10",
                "text": "学"
              },
              {
                "id": "11",
                "text": "生"
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
            "questionText": "Luyện tập 2 · Trong phòng học có hơn hai mươi học sinh.",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "教"
              },
              {
                "id": "2",
                "text": "室"
              },
              {
                "id": "3",
                "text": "里"
              },
              {
                "id": "4",
                "text": "有"
              },
              {
                "id": "5",
                "text": "二"
              },
              {
                "id": "6",
                "text": "十"
              },
              {
                "id": "7",
                "text": "多"
              },
              {
                "id": "8",
                "text": "个"
              },
              {
                "id": "9",
                "text": "学"
              },
              {
                "id": "10",
                "text": "生"
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
              "10"
            ]
          },
          {
            "questionText": "Luyện tập 3 · Hai chiếc điện thoại này chênh nhau hơn ba mươi tệ.",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "这"
              },
              {
                "id": "2",
                "text": "两"
              },
              {
                "id": "3",
                "text": "个"
              },
              {
                "id": "4",
                "text": "手"
              },
              {
                "id": "5",
                "text": "机"
              },
              {
                "id": "6",
                "text": "差"
              },
              {
                "id": "7",
                "text": "三"
              },
              {
                "id": "8",
                "text": "十"
              },
              {
                "id": "9",
                "text": "多"
              },
              {
                "id": "10",
                "text": "块"
              },
              {
                "id": "11",
                "text": "钱"
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
          }
        ]
      },
      {
        "id": "g3",
        "title": "3. Động từ / cụm động từ / cụm chủ-vị làm định ngữ",
        "explanation": "Động từ, cụm động từ, cụm chủ-vị đứng trước danh từ để miêu tả đặc điểm, trạng thái của danh từ đó 📌 Ví dụ khác",
        "usage": "Cấu trúc: (Động từ/cụm ĐT/cụm chủ-vị) + 的 + Danh từ — giống định ngữ tính từ, luôn có \"的\" ở giữa.",
        "note": "",
        "examples": [
          {
            "hanzi": "他们卖的电影票很便宜。",
            "pinyin": "",
            "meaning": "Vé phim họ bán rất rẻ."
          },
          {
            "hanzi": "现在学中文的学生很多。",
            "pinyin": "",
            "meaning": "Sinh viên học tiếng Trung hiện nay rất nhiều."
          },
          {
            "hanzi": "这是刚给我的苹果。",
            "pinyin": "",
            "meaning": "Đây là quả táo vừa mới đưa cho tôi."
          }
        ],
        "practice": [
          {
            "questionText": "Luyện tập 1 · Vé phim họ bán rất rẻ.",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "他"
              },
              {
                "id": "2",
                "text": "们"
              },
              {
                "id": "3",
                "text": "卖"
              },
              {
                "id": "4",
                "text": "的"
              },
              {
                "id": "5",
                "text": "电"
              },
              {
                "id": "6",
                "text": "影"
              },
              {
                "id": "7",
                "text": "票"
              },
              {
                "id": "8",
                "text": "很"
              },
              {
                "id": "9",
                "text": "便"
              },
              {
                "id": "10",
                "text": "宜"
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
              "10"
            ]
          },
          {
            "questionText": "Luyện tập 2 · Sinh viên học tiếng Trung hiện nay rất nhiều.",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "现"
              },
              {
                "id": "2",
                "text": "在"
              },
              {
                "id": "3",
                "text": "学"
              },
              {
                "id": "4",
                "text": "中"
              },
              {
                "id": "5",
                "text": "文"
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
                "text": "很"
              },
              {
                "id": "10",
                "text": "多"
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
              "10"
            ]
          },
          {
            "questionText": "Luyện tập 3 · Đây là quả táo vừa mới đưa cho tôi.",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "这"
              },
              {
                "id": "2",
                "text": "是"
              },
              {
                "id": "3",
                "text": "刚"
              },
              {
                "id": "4",
                "text": "给"
              },
              {
                "id": "5",
                "text": "我"
              },
              {
                "id": "6",
                "text": "的"
              },
              {
                "id": "7",
                "text": "苹"
              },
              {
                "id": "8",
                "text": "果"
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
        "title": "Tại quầy lễ tân khách sạn, Bạch Gia Nguyệt và Annie hỏi thông tin nhân viên.",
        "turns": [
          {
            "id": "t1",
            "role": "月",
            "avatar": "月",
            "hanzi": "请问，这儿有到北京大学的公交车吗？",
            "pinyin": "Qǐngwèn, zhèr yǒu dào Běijīng Dàxué de gōngjiāochē ma?",
            "meaning": "Xin hỏi, ở đây có xe buýt đến Đại học Bắc Kinh không ạ?"
          },
          {
            "id": "t2",
            "role": "台",
            "avatar": "台",
            "hanzi": "有，但车站有点儿远。",
            "pinyin": "Yǒu, dàn chēzhàn yǒudiǎnr yuǎn.",
            "meaning": "Có, nhưng trạm xe hơi xa."
          },
          {
            "id": "t3",
            "role": "月",
            "avatar": "月",
            "hanzi": "这儿好打车吗？",
            "pinyin": "Zhèr hǎo dǎchē ma?",
            "meaning": "Ở đây có dễ bắt taxi không?"
          },
          {
            "id": "t4",
            "role": "台",
            "avatar": "台",
            "hanzi": "好打车。",
            "pinyin": "Hǎo dǎchē.",
            "meaning": "Dễ bắt taxi."
          },
          {
            "id": "t5",
            "role": "月",
            "avatar": "月",
            "hanzi": "谢谢。安妮，我们还是打车去吧。",
            "pinyin": "Xièxie. Ānnī, wǒmen háishi dǎchē qù ba.",
            "meaning": "Cảm ơn. Annie, chúng ta hay là bắt taxi đi vậy."
          },
          {
            "id": "t6",
            "role": "妮",
            "avatar": "妮",
            "hanzi": "好，没问题。",
            "pinyin": "Hǎo, méi wèntí.",
            "meaning": "Được, không vấn đề gì."
          }
        ]
      },
      {
        "id": "s2",
        "title": "Tại Đại học Bắc Kinh, Bạch Gia Nguyệt và Annie đang tham quan khuôn viên trường.",
        "turns": [
          {
            "id": "t1",
            "role": "月",
            "avatar": "月",
            "hanzi": "学校里人真多啊！",
            "pinyin": "Xuéxiào lǐ rén zhēn duō a!",
            "meaning": "Trong trường đông người quá nhỉ!"
          },
          {
            "id": "t2",
            "role": "妮",
            "avatar": "妮",
            "hanzi": "是啊，北京大学有四万多名学生！",
            "pinyin": "Shì a, Běijīng Dàxué yǒu sìwàn duō míng xuésheng!",
            "meaning": "Đúng vậy, Đại học Bắc Kinh có hơn bốn vạn sinh viên!"
          },
          {
            "id": "t3",
            "role": "月",
            "avatar": "月",
            "hanzi": "你是怎么知道的？",
            "pinyin": "Nǐ shì zěnme zhīdào de?",
            "meaning": "Sao bạn biết vậy?"
          },
          {
            "id": "t4",
            "role": "妮",
            "avatar": "妮",
            "hanzi": "是我网上看的，网上说北京大学有三千多名外国学生。",
            "pinyin": "Shì wǒ wǎngshang kàn de, wǎngshang shuō Běijīng Dàxué yǒu sānqiān duō míng wàiguó xuésheng.",
            "meaning": "Là mình xem trên mạng, trên mạng nói Đại học Bắc Kinh có hơn ba nghìn sinh viên nước ngoài."
          },
          {
            "id": "t5",
            "role": "月",
            "avatar": "月",
            "hanzi": "我也想来这儿学习。",
            "pinyin": "Wǒ yě xiǎng lái zhèr xuéxí.",
            "meaning": "Mình cũng muốn đến đây học."
          },
          {
            "id": "t6",
            "role": "妮",
            "avatar": "妮",
            "hanzi": "那边就有一间教室，我们去看一下吧。",
            "pinyin": "Nàbiān jiù yǒu yì jiān jiàoshì, wǒmen qù kàn yíxià ba.",
            "meaning": "Đằng kia có một phòng học, chúng ta đi xem thử đi."
          }
        ]
      },
      {
        "id": "s3",
        "title": "Tại Đại học Bắc Kinh, Bạch Gia Nguyệt và Annie tiếp tục tham quan.",
        "turns": [
          {
            "id": "t1",
            "role": "妮",
            "avatar": "妮",
            "hanzi": "家月，你看，学校里有家电影院！",
            "pinyin": "Jiāyuè, nǐ kàn, xuéxiào lǐ yǒu jiā diànyǐngyuàn!",
            "meaning": "Gia Nguyệt, bạn xem này, trong trường có rạp chiếu phim!"
          },
          {
            "id": "t2",
            "role": "月",
            "avatar": "月",
            "hanzi": "是啊，电影票还不贵。",
            "pinyin": "Shì a, diànyǐngpiào hái bú guì.",
            "meaning": "Đúng vậy, vé xem phim cũng không đắt."
          },
          {
            "id": "t3",
            "role": "妮",
            "avatar": "妮",
            "hanzi": "他们卖的电影票也很便宜。",
            "pinyin": "Tāmen mài de diànyǐngpiào yě hěn piányi.",
            "meaning": "Vé xem phim họ bán cũng rất rẻ."
          },
          {
            "id": "t4",
            "role": "月",
            "avatar": "月",
            "hanzi": "天啊！有的还不到二十块钱。",
            "pinyin": "Tiān a! Yǒude hái bú dào èrshí kuài qián.",
            "meaning": "Trời ơi! Có vé còn chưa tới hai mươi tệ."
          },
          {
            "id": "t5",
            "role": "妮",
            "avatar": "妮",
            "hanzi": "那你想不想去看个电影？",
            "pinyin": "Nà nǐ xiǎng bu xiǎng qù kàn ge diànyǐng?",
            "meaning": "Vậy bạn có muốn đi xem một bộ phim không?"
          },
          {
            "id": "t6",
            "role": "月",
            "avatar": "月",
            "hanzi": "还是别看电影了，北京大学本身就很好看！",
            "pinyin": "Háishi bié kàn diànyǐng le, Běijīng Dàxué běnshēn jiù hěn hǎokàn!",
            "meaning": "Thôi đừng xem phim nữa, bản thân Đại học Bắc Kinh đã rất đẹp rồi!"
          }
        ]
      },
      {
        "id": "s4",
        "title": "Tại cổng Đại học Bắc Kinh, Bạch Gia Nguyệt nhắn tin cho Trần Thiên Trung.",
        "turns": [
          {
            "id": "t1",
            "role": "·",
            "avatar": "·",
            "hanzi": "北京大学很大，有四万多名学生。学校很漂亮，还有家电影院，电影票也不贵，我们有时间还想再来看个电影。",
            "pinyin": "Běijīng Dàxué hěn dà, yǒu sìwàn duō míng xuésheng. Xuéxiào hěn piàoliang, hái yǒu jiā diànyǐngyuàn, diànyǐngpiào yě bú guì, wǒmen yǒu shíjiān hái xiǎng zài lái kàn ge diànyǐng.",
            "meaning": "Đại học Bắc Kinh rất lớn, có hơn bốn vạn sinh viên. Trường rất đẹp, còn có rạp chiếu phim, vé phim cũng không đắt, khi nào có thời gian chúng em muốn đến xem phim lần nữa."
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
            "content": "你家太远了，我是"
          },
          {
            "type": "blank"
          },
          {
            "type": "text",
            "content": "来的。"
          }
        ],
        "expectedChoiceId": "c4",
        "hint": "Gợi ý: 但 / 间 / 车站 / 打车 / 过来"
      },
      {
        "id": "q2",
        "speaker": "2",
        "parts": [
          {
            "type": "text",
            "content": "那"
          },
          {
            "type": "blank"
          },
          {
            "type": "text",
            "content": "是大教室，我们只要去那儿上课。"
          }
        ],
        "expectedChoiceId": "c7",
        "hint": "Gợi ý: 但 / 间 / 车站 / 打车 / 过来"
      },
      {
        "id": "q3",
        "speaker": "3",
        "parts": [
          {
            "type": "text",
            "content": "李文让我去找他的朋友，"
          },
          {
            "type": "blank"
          },
          {
            "type": "text",
            "content": "我太忙了，没时间。"
          }
        ],
        "expectedChoiceId": "c11",
        "hint": "Gợi ý: 但 / 间 / 车站 / 打车 / 过来"
      },
      {
        "id": "q4",
        "speaker": "4",
        "parts": [
          {
            "type": "text",
            "content": "请问，去北京大学的"
          },
          {
            "type": "blank"
          },
          {
            "type": "text",
            "content": "在哪儿？"
          }
        ],
        "expectedChoiceId": "c18",
        "hint": "Gợi ý: 但 / 间 / 车站 / 打车 / 过来"
      },
      {
        "id": "q5",
        "speaker": "5",
        "parts": [
          {
            "type": "text",
            "content": "我在楼下，你快"
          },
          {
            "type": "blank"
          },
          {
            "type": "text",
            "content": "吧。"
          }
        ],
        "expectedChoiceId": "c25",
        "hint": "Gợi ý: 但 / 间 / 车站 / 打车 / 过来"
      }
    ],
    "choices": [
      {
        "id": "c1",
        "text": "但",
        "pinyin": ""
      },
      {
        "id": "c2",
        "text": "间",
        "pinyin": ""
      },
      {
        "id": "c3",
        "text": "车站",
        "pinyin": ""
      },
      {
        "id": "c4",
        "text": "打车",
        "pinyin": ""
      },
      {
        "id": "c5",
        "text": "过来",
        "pinyin": ""
      },
      {
        "id": "c6",
        "text": "但",
        "pinyin": ""
      },
      {
        "id": "c7",
        "text": "间",
        "pinyin": ""
      },
      {
        "id": "c8",
        "text": "车站",
        "pinyin": ""
      },
      {
        "id": "c9",
        "text": "打车",
        "pinyin": ""
      },
      {
        "id": "c10",
        "text": "过来",
        "pinyin": ""
      },
      {
        "id": "c11",
        "text": "但",
        "pinyin": ""
      },
      {
        "id": "c12",
        "text": "间",
        "pinyin": ""
      },
      {
        "id": "c13",
        "text": "车站",
        "pinyin": ""
      },
      {
        "id": "c14",
        "text": "打车",
        "pinyin": ""
      },
      {
        "id": "c15",
        "text": "过来",
        "pinyin": ""
      },
      {
        "id": "c16",
        "text": "但",
        "pinyin": ""
      },
      {
        "id": "c17",
        "text": "间",
        "pinyin": ""
      },
      {
        "id": "c18",
        "text": "车站",
        "pinyin": ""
      },
      {
        "id": "c19",
        "text": "打车",
        "pinyin": ""
      },
      {
        "id": "c20",
        "text": "过来",
        "pinyin": ""
      },
      {
        "id": "c21",
        "text": "但",
        "pinyin": ""
      },
      {
        "id": "c22",
        "text": "间",
        "pinyin": ""
      },
      {
        "id": "c23",
        "text": "车站",
        "pinyin": ""
      },
      {
        "id": "c24",
        "text": "打车",
        "pinyin": ""
      },
      {
        "id": "c25",
        "text": "过来",
        "pinyin": ""
      }
    ]
  },
  "arranging": {
    "title": "Sắp xếp thành câu",
    "questions": [
      {
        "id": "aq1",
        "meaning": "Lớp học có hơn ba mươi học sinh.",
        "words": [
          {
            "id": "w7",
            "text": "个",
            "pinyin": ""
          },
          {
            "id": "w3",
            "text": "有",
            "pinyin": ""
          },
          {
            "id": "w6",
            "text": "多",
            "pinyin": ""
          },
          {
            "id": "w1",
            "text": "教室",
            "pinyin": ""
          },
          {
            "id": "w4",
            "text": "三",
            "pinyin": ""
          },
          {
            "id": "w8",
            "text": "学生",
            "pinyin": ""
          },
          {
            "id": "w5",
            "text": "十",
            "pinyin": ""
          },
          {
            "id": "w2",
            "text": "里",
            "pinyin": ""
          }
        ],
        "correctOrderIds": [
          "w1",
          "w2",
          "w3",
          "w4",
          "w5",
          "w6",
          "w7",
          "w8"
        ]
      },
      {
        "id": "aq2",
        "meaning": "Trời mưa rồi, hay là chúng ta bắt taxi về đi.",
        "words": [
          {
            "id": "w7",
            "text": "吧",
            "pinyin": ""
          },
          {
            "id": "w4",
            "text": "还是",
            "pinyin": ""
          },
          {
            "id": "w1",
            "text": "下雨",
            "pinyin": ""
          },
          {
            "id": "w6",
            "text": "回去",
            "pinyin": ""
          },
          {
            "id": "w5",
            "text": "打车",
            "pinyin": ""
          },
          {
            "id": "w2",
            "text": "了",
            "pinyin": ""
          },
          {
            "id": "w3",
            "text": "我们",
            "pinyin": ""
          }
        ],
        "correctOrderIds": [
          "w1",
          "w2",
          "w3",
          "w4",
          "w5",
          "w6",
          "w7"
        ]
      }
    ]
  },
  "matching": {
    "title": "Nối câu",
    "leftItems": [
      {
        "id": "l1",
        "content": "吧",
        "pinyin": "ba"
      },
      {
        "id": "l2",
        "content": "但",
        "pinyin": "dàn"
      },
      {
        "id": "l3",
        "content": "车站",
        "pinyin": "chēzhàn"
      },
      {
        "id": "l4",
        "content": "远",
        "pinyin": "yuǎn"
      },
      {
        "id": "l5",
        "content": "打车",
        "pinyin": "dǎchē"
      },
      {
        "id": "l6",
        "content": "还是",
        "pinyin": "háishi"
      }
    ],
    "rightItems": [
      {
        "id": "r1",
        "content": "Nhé, đi (gợi ý)"
      },
      {
        "id": "r2",
        "content": "Nhưng"
      },
      {
        "id": "r3",
        "content": "Bến/trạm xe"
      },
      {
        "id": "r4",
        "content": "Xa"
      },
      {
        "id": "r5",
        "content": "Bắt taxi"
      },
      {
        "id": "r6",
        "content": "Nên, hay là (tốt hơn)"
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
        "questionText": "Từ \"吧\" (ba) có nghĩa là gì?",
        "options": [
          {
            "id": "o3",
            "text": "Bến/trạm xe"
          },
          {
            "id": "o2",
            "text": "Nhưng"
          },
          {
            "id": "o1",
            "text": "Nhé, đi (gợi ý)"
          }
        ],
        "correctOptionId": "o1"
      },
      {
        "id": "quiz_2",
        "questionText": "Từ \"但\" (dàn) có nghĩa là gì?",
        "options": [
          {
            "id": "o3",
            "text": "Bến/trạm xe"
          },
          {
            "id": "o2",
            "text": "Nhé, đi (gợi ý)"
          },
          {
            "id": "o1",
            "text": "Nhưng"
          }
        ],
        "correctOptionId": "o1"
      },
      {
        "id": "quiz_3",
        "questionText": "Từ \"车站\" (chēzhàn) có nghĩa là gì?",
        "options": [
          {
            "id": "o3",
            "text": "Nhưng"
          },
          {
            "id": "o2",
            "text": "Nhé, đi (gợi ý)"
          },
          {
            "id": "o1",
            "text": "Bến/trạm xe"
          }
        ],
        "correctOptionId": "o1"
      },
      {
        "id": "quiz_4",
        "questionText": "Từ \"远\" (yuǎn) có nghĩa là gì?",
        "options": [
          {
            "id": "o3",
            "text": "Nhưng"
          },
          {
            "id": "o2",
            "text": "Nhé, đi (gợi ý)"
          },
          {
            "id": "o1",
            "text": "Xa"
          }
        ],
        "correctOptionId": "o1"
      },
      {
        "id": "quiz_5",
        "questionText": "Từ \"打车\" (dǎchē) có nghĩa là gì?",
        "options": [
          {
            "id": "o3",
            "text": "Nhưng"
          },
          {
            "id": "o1",
            "text": "Bắt taxi"
          },
          {
            "id": "o2",
            "text": "Nhé, đi (gợi ý)"
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
        "hanzi": "有，但车站有点儿远。",
        "pinyin": "",
        "meaning": "台: 有，但车站有点儿远。"
      },
      {
        "id": "s2",
        "hanzi": "这儿好打车吗？",
        "pinyin": "",
        "meaning": "月: 这儿好打车吗？"
      },
      {
        "id": "s3",
        "hanzi": "好打车。",
        "pinyin": "",
        "meaning": "台: 好打车。"
      },
      {
        "id": "s4",
        "hanzi": "谢谢。安妮，我们还是打车去吧。",
        "pinyin": "",
        "meaning": "月: 谢谢。安妮，我们还是打车去吧。"
      },
      {
        "id": "s5",
        "hanzi": "好，没问题。",
        "pinyin": "",
        "meaning": "妮: 好，没问题。"
      }
    ],
    "freeSpeakingTasks": [
      {
        "id": "fs1",
        "topic": "请问，这儿有到北京大学的公交车吗？",
        "suggestion": "Hãy nói suy nghĩ của bạn về câu hỏi: 请问，这儿有到北京大学的公交车吗？"
      },
      {
        "id": "fs2",
        "topic": "这儿好打车吗？",
        "suggestion": "Hãy nói suy nghĩ của bạn về câu hỏi: 这儿好打车吗？"
      },
      {
        "id": "fs3",
        "topic": "你是怎么知道的？",
        "suggestion": "Hãy nói suy nghĩ của bạn về câu hỏi: 你是怎么知道的？"
      }
    ]
  },
  "funFacts": {
    "title": "Có thể bạn chưa biết: Đi lại trong thành phố",
    "description": "Những nét văn hoá Trung Quốc gắn với chủ đề bài học.",
    "facts": [
      {
        "id": "ff1",
        "title": "Gọi xe bằng ứng dụng",
        "content": "滴滴 (Didi) phổ biến hơn taxi truyền thống rất nhiều. Trả tiền tự động qua WeChat hoặc Alipay, không cần tiền mặt."
      },
      {
        "id": "ff2",
        "title": "Tàu điện ngầm khổng lồ",
        "content": "Thượng Hải và Bắc Kinh có hệ thống metro thuộc loại dài nhất thế giới, mỗi ngày chở hơn 10 triệu lượt khách. Vào ga đều phải soi hành lý."
      },
      {
        "id": "ff3",
        "title": "Xe đạp chia sẻ",
        "content": "Xe đạp màu vàng, xanh dựng khắp vỉa hè — quét mã là đi, khoá xe ở bất cứ đâu. Trung Quốc từng được gọi là \"vương quốc xe đạp\" và nay quay lại theo cách mới."
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
              "questionText": "Từ \"吧\" (ba) có nghĩa là gì?",
              "options": [
                {
                  "id": "o3",
                  "text": "Bến/trạm xe"
                },
                {
                  "id": "o2",
                  "text": "Nhưng"
                },
                {
                  "id": "o1",
                  "text": "Nhé, đi (gợi ý)"
                }
              ],
              "correctOptionId": "o1"
            },
            {
              "id": "quiz_2",
              "questionText": "Từ \"但\" (dàn) có nghĩa là gì?",
              "options": [
                {
                  "id": "o3",
                  "text": "Bến/trạm xe"
                },
                {
                  "id": "o2",
                  "text": "Nhé, đi (gợi ý)"
                },
                {
                  "id": "o1",
                  "text": "Nhưng"
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
              "text": "但",
              "pinyin": ""
            },
            {
              "id": "c2",
              "text": "间",
              "pinyin": ""
            },
            {
              "id": "c3",
              "text": "车站",
              "pinyin": ""
            },
            {
              "id": "c4",
              "text": "打车",
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
                  "content": "你家太远了，我是"
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "content": "来的。"
                }
              ],
              "expectedChoiceId": "c4",
              "hint": "Gợi ý: 但 / 间 / 车站 / 打车 / 过来"
            },
            {
              "id": "q2",
              "speaker": "2",
              "parts": [
                {
                  "type": "text",
                  "content": "那"
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "content": "是大教室，我们只要去那儿上课。"
                }
              ],
              "expectedChoiceId": "c7",
              "hint": "Gợi ý: 但 / 间 / 车站 / 打车 / 过来"
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
              "meaning": "Lớp học có hơn ba mươi học sinh.",
              "words": [
                {
                  "id": "w7",
                  "text": "个",
                  "pinyin": ""
                },
                {
                  "id": "w3",
                  "text": "有",
                  "pinyin": ""
                },
                {
                  "id": "w6",
                  "text": "多",
                  "pinyin": ""
                },
                {
                  "id": "w1",
                  "text": "教室",
                  "pinyin": ""
                },
                {
                  "id": "w4",
                  "text": "三",
                  "pinyin": ""
                },
                {
                  "id": "w8",
                  "text": "学生",
                  "pinyin": ""
                },
                {
                  "id": "w5",
                  "text": "十",
                  "pinyin": ""
                },
                {
                  "id": "w2",
                  "text": "里",
                  "pinyin": ""
                }
              ],
              "correctOrderIds": [
                "w1",
                "w2",
                "w3",
                "w4",
                "w5",
                "w6",
                "w7",
                "w8"
              ]
            },
            {
              "id": "aq2",
              "meaning": "Trời mưa rồi, hay là chúng ta bắt taxi về đi.",
              "words": [
                {
                  "id": "w7",
                  "text": "吧",
                  "pinyin": ""
                },
                {
                  "id": "w4",
                  "text": "还是",
                  "pinyin": ""
                },
                {
                  "id": "w1",
                  "text": "下雨",
                  "pinyin": ""
                },
                {
                  "id": "w6",
                  "text": "回去",
                  "pinyin": ""
                },
                {
                  "id": "w5",
                  "text": "打车",
                  "pinyin": ""
                },
                {
                  "id": "w2",
                  "text": "了",
                  "pinyin": ""
                },
                {
                  "id": "w3",
                  "text": "我们",
                  "pinyin": ""
                }
              ],
              "correctOrderIds": [
                "w1",
                "w2",
                "w3",
                "w4",
                "w5",
                "w6",
                "w7"
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
              "content": "吧",
              "pinyin": "ba"
            },
            {
              "id": "l2",
              "content": "但",
              "pinyin": "dàn"
            },
            {
              "id": "l3",
              "content": "车站",
              "pinyin": "chēzhàn"
            }
          ],
          "rightItems": [
            {
              "id": "r1",
              "content": "Nhé, đi (gợi ý)"
            },
            {
              "id": "r2",
              "content": "Nhưng"
            },
            {
              "id": "r3",
              "content": "Bến/trạm xe"
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
