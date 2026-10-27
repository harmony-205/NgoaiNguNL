import { LessonData } from '../../../models/lesson.data';

export const hsk3lesson2Data: LessonData = {
  "lessonId": "hsk3-lesson-2",
  "lessonName": {
    "hanzi": "你们想吃什么就点什么",
    "pinyin": "Nǐmen xiǎng chī shénme jiù diǎn shénme",
    "meaning": "Các em muốn ăn gì thì gọi món đó"
  },
  "warmUp": {
    "title": "Khởi động",
    "description": "Bấm chọn một chữ Hán bên dưới, rồi bấm vào ô nghĩa tương ứng.",
    "items": [
      {
        "id": "wu1",
        "meaning": "Thực đơn",
        "expectedVocabId": "v1"
      },
      {
        "id": "wu2",
        "meaning": "Vừa...vừa...",
        "expectedVocabId": "v2"
      },
      {
        "id": "wu3",
        "meaning": "Đói",
        "expectedVocabId": "v3"
      },
      {
        "id": "wu4",
        "meaning": "Khát",
        "expectedVocabId": "v4"
      },
      {
        "id": "wu5",
        "meaning": "Khách sáo, lịch sự",
        "expectedVocabId": "v5"
      },
      {
        "id": "wu6",
        "meaning": "Đồ uống",
        "expectedVocabId": "v6"
      }
    ],
    "choices": [
      {
        "id": "v1",
        "hanzi": "菜单",
        "pinyin": "càidān",
        "meaning": "Thực đơn",
        "examples": []
      },
      {
        "id": "v2",
        "hanzi": "又",
        "pinyin": "yòu",
        "meaning": "Vừa...vừa...",
        "examples": []
      },
      {
        "id": "v3",
        "hanzi": "饿",
        "pinyin": "è",
        "meaning": "Đói",
        "examples": []
      },
      {
        "id": "v4",
        "hanzi": "渴",
        "pinyin": "kě",
        "meaning": "Khát",
        "examples": []
      },
      {
        "id": "v5",
        "hanzi": "客气",
        "pinyin": "kèqi",
        "meaning": "Khách sáo, lịch sự",
        "examples": []
      },
      {
        "id": "v6",
        "hanzi": "饮料",
        "pinyin": "yǐnliào",
        "meaning": "Đồ uống",
        "examples": []
      }
    ]
  },
  "vocabulary": {
    "title": "Từ mới",
    "words": [
      {
        "id": "v1",
        "hanzi": "菜单",
        "pinyin": "càidān",
        "sinoVietnamese": "Thái đơn",
        "wordType": "Danh từ",
        "meaning": "Thực đơn",
        "examples": [
          {
            "hanzi": "家月、李文，你们看看菜单，想吃点儿什么？",
            "pinyin": "Jiāyuè, Lǐ Wén, nǐmen kànkan càidān, xiǎng chī diǎnr shénme?",
            "meaning": "Gia Nguyệt, Lý Văn, hai em xem thực đơn xem muốn ăn gì."
          },
          {
            "hanzi": "服务员，请给我菜单。",
            "pinyin": "Fúwùyuán, qǐng gěi wǒ càidān.",
            "meaning": "Phục vụ ơi, cho tôi xin thực đơn."
          }
        ]
      },
      {
        "id": "v2",
        "hanzi": "又",
        "pinyin": "yòu",
        "sinoVietnamese": "Hựu",
        "wordType": "Phó từ",
        "meaning": "Vừa...vừa...",
        "examples": [
          {
            "hanzi": "飞了这么远，现在还真是又饿又渴。",
            "pinyin": "Fēile zhème yuǎn, xiànzài hái zhēn shì yòu è yòu kě.",
            "meaning": "Bay xa như vậy, giờ đúng là vừa đói vừa khát."
          },
          {
            "hanzi": "这个饭馆的菜又便宜又好吃。",
            "pinyin": "Zhège fànguǎn de cài yòu piányi yòu hǎochī.",
            "meaning": "Món ăn quán này vừa rẻ vừa ngon."
          }
        ]
      },
      {
        "id": "v3",
        "hanzi": "饿",
        "pinyin": "è",
        "sinoVietnamese": "Ngạ",
        "wordType": "Tính từ",
        "meaning": "Đói",
        "examples": [
          {
            "hanzi": "现在还真是又饿又渴。",
            "pinyin": "Xiànzài hái zhēn shì yòu è yòu kě.",
            "meaning": "Giờ đúng là vừa đói vừa khát."
          },
          {
            "hanzi": "我太饿了，我们叫个外卖吧。",
            "pinyin": "Wǒ tài è le, wǒmen jiào ge wàimài ba.",
            "meaning": "Tôi đói quá, chúng ta đặt đồ ăn ngoài đi."
          }
        ]
      },
      {
        "id": "v4",
        "hanzi": "渴",
        "pinyin": "kě",
        "sinoVietnamese": "Khát",
        "wordType": "Tính từ",
        "meaning": "Khát",
        "examples": [
          {
            "hanzi": "现在还真是又饿又渴。",
            "pinyin": "Xiànzài hái zhēn shì yòu è yòu kě.",
            "meaning": "Giờ đúng là vừa đói vừa khát."
          },
          {
            "hanzi": "天气太热，我很渴。",
            "pinyin": "Tiānqì tài rè, wǒ hěn kě.",
            "meaning": "Trời nóng quá, tôi khát nước."
          }
        ]
      },
      {
        "id": "v5",
        "hanzi": "客气",
        "pinyin": "kèqi",
        "sinoVietnamese": "Khách khí",
        "wordType": "Động từ/Tính từ",
        "meaning": "Khách sáo, lịch sự",
        "examples": [
          {
            "hanzi": "那多点点儿，别客气。",
            "pinyin": "Nà duō diǎn diǎnr, bié kèqi.",
            "meaning": "Vậy gọi thêm chút đi, đừng khách sáo."
          },
          {
            "hanzi": "你太客气了。",
            "pinyin": "Nǐ tài kèqi le.",
            "meaning": "Bạn khách sáo quá."
          }
        ]
      },
      {
        "id": "v6",
        "hanzi": "饮料",
        "pinyin": "yǐnliào",
        "sinoVietnamese": "Ẩm liệu",
        "wordType": "Danh từ",
        "meaning": "Đồ uống",
        "examples": [
          {
            "hanzi": "你们喝什么饮料？",
            "pinyin": "Nǐmen hē shénme yǐnliào?",
            "meaning": "Hai em uống đồ uống gì?"
          },
          {
            "hanzi": "这里有很多饮料可以选。",
            "pinyin": "Zhèlǐ yǒu hěn duō yǐnliào kěyǐ xuǎn.",
            "meaning": "Ở đây có nhiều đồ uống để chọn."
          }
        ]
      },
      {
        "id": "v7",
        "hanzi": "好久",
        "pinyin": "hǎojiǔ",
        "sinoVietnamese": "Hảo cửu",
        "wordType": "Tính từ",
        "meaning": "Đã lâu, một thời gian dài",
        "examples": [
          {
            "hanzi": "好久没喝中国茶，也好久没吃饺子了。",
            "pinyin": "Hǎojiǔ méi hē Zhōngguó chá, yě hǎojiǔ méi chī jiǎozi le.",
            "meaning": "Đã lâu không uống trà Trung Quốc, cũng lâu rồi không ăn sủi cảo."
          },
          {
            "hanzi": "我们好久没见了。",
            "pinyin": "Wǒmen hǎojiǔ méi jiàn le.",
            "meaning": "Chúng ta lâu rồi không gặp."
          }
        ]
      },
      {
        "id": "v8",
        "hanzi": "服务",
        "pinyin": "fúwù",
        "sinoVietnamese": "Phục vụ",
        "wordType": "Động từ",
        "meaning": "Phục vụ",
        "examples": [
          {
            "hanzi": "这家饭馆的服务很热情。",
            "pinyin": "Zhè jiā fànguǎn de fúwù hěn rèqíng.",
            "meaning": "Dịch vụ của quán này rất nhiệt tình."
          },
          {
            "hanzi": "他们的服务态度很好。",
            "pinyin": "Tāmen de fúwù tàidu hěn hǎo.",
            "meaning": "Thái độ phục vụ của họ rất tốt."
          }
        ]
      },
      {
        "id": "v9",
        "hanzi": "员",
        "pinyin": "yuán",
        "sinoVietnamese": "Viên",
        "wordType": "Hậu tố",
        "meaning": "Hậu tố chỉ người làm nghề",
        "examples": [
          {
            "hanzi": "服务员，再给我们拿一双筷子。",
            "pinyin": "Fúwùyuán, zài gěi wǒmen ná yì shuāng kuàizi.",
            "meaning": "Phục vụ ơi, cho chúng tôi thêm một đôi đũa."
          },
          {
            "hanzi": "他是一名教员。",
            "pinyin": "Tā shì yì míng jiàoyuán.",
            "meaning": "Anh ấy là một giáo viên."
          }
        ]
      },
      {
        "id": "v10",
        "hanzi": "双",
        "pinyin": "shuāng",
        "sinoVietnamese": "Song",
        "wordType": "Lượng từ",
        "meaning": "Đôi",
        "examples": [
          {
            "hanzi": "再给我们拿一双筷子、一个勺子和一个碗。",
            "pinyin": "Zài gěi wǒmen ná yì shuāng kuàizi, yí ge sháozi hé yí ge wǎn.",
            "meaning": "Cho chúng tôi thêm một đôi đũa, một thìa và một bát."
          },
          {
            "hanzi": "我想买一双鞋。",
            "pinyin": "Wǒ xiǎng mǎi yì shuāng xié.",
            "meaning": "Tôi muốn mua một đôi giày."
          }
        ]
      },
      {
        "id": "v11",
        "hanzi": "筷子",
        "pinyin": "kuàizi",
        "sinoVietnamese": "Khoái tử",
        "wordType": "Danh từ",
        "meaning": "Đũa",
        "examples": [
          {
            "hanzi": "再给我们拿一双筷子。",
            "pinyin": "Zài gěi wǒmen ná yì shuāng kuàizi.",
            "meaning": "Cho chúng tôi thêm một đôi đũa."
          },
          {
            "hanzi": "我用筷子吃饭。",
            "pinyin": "Wǒ yòng kuàizi chīfàn.",
            "meaning": "Tôi dùng đũa để ăn cơm."
          }
        ]
      },
      {
        "id": "v12",
        "hanzi": "鸡",
        "pinyin": "jī",
        "sinoVietnamese": "Kê",
        "wordType": "Danh từ",
        "meaning": "Gà",
        "examples": [
          {
            "hanzi": "这个鸡肉饭太好吃了。",
            "pinyin": "Zhège jīròu fàn tài hǎochī le.",
            "meaning": "Món cơm gà này ngon quá."
          },
          {
            "hanzi": "我喜欢吃鸡肉。",
            "pinyin": "Wǒ xǐhuan chī jīròu.",
            "meaning": "Tôi thích ăn thịt gà."
          }
        ]
      },
      {
        "id": "v13",
        "hanzi": "张",
        "pinyin": "zhāng",
        "sinoVietnamese": "Trương",
        "wordType": "Lượng từ",
        "meaning": "Tờ, tấm (giấy, tranh...)",
        "examples": [
          {
            "hanzi": "你可以拿走这张菜单。",
            "pinyin": "Nǐ kěyǐ ná zǒu zhè zhāng càidān.",
            "meaning": "Bạn có thể mang tờ thực đơn này đi."
          },
          {
            "hanzi": "给我一张纸。",
            "pinyin": "Gěi wǒ yì zhāng zhǐ.",
            "meaning": "Đưa tôi một tờ giấy."
          }
        ]
      },
      {
        "id": "v14",
        "hanzi": "不用",
        "pinyin": "búyòng",
        "sinoVietnamese": "Bất dụng",
        "wordType": "Phó từ",
        "meaning": "Không cần",
        "examples": [
          {
            "hanzi": "不用拿菜单，在手机上就能看到。",
            "pinyin": "Búyòng ná càidān, zài shǒujī shàng jiù néng kàndào.",
            "meaning": "Không cần lấy thực đơn, xem trên điện thoại là được."
          },
          {
            "hanzi": "谢谢，不用了。",
            "pinyin": "Xièxie, búyòng le.",
            "meaning": "Cảm ơn, không cần đâu."
          }
        ]
      },
      {
        "id": "v15",
        "hanzi": "选",
        "pinyin": "xuǎn",
        "sinoVietnamese": "Tuyển",
        "wordType": "Động từ",
        "meaning": "Chọn",
        "examples": [
          {
            "hanzi": "也可以选好了让他们给你送。",
            "pinyin": "Yě kěyǐ xuǎn hǎole ràng tāmen gěi nǐ sòng.",
            "meaning": "Cũng có thể chọn xong rồi để họ giao đến cho bạn."
          },
          {
            "hanzi": "你选哪个？",
            "pinyin": "Nǐ xuǎn nǎge?",
            "meaning": "Bạn chọn cái nào?"
          }
        ]
      },
      {
        "id": "v16",
        "hanzi": "外卖",
        "pinyin": "wàimài",
        "sinoVietnamese": "Ngoại mại",
        "wordType": "Danh từ/Động từ",
        "meaning": "Đồ ăn giao tận nơi",
        "examples": [
          {
            "hanzi": "他们家还能送外卖吗？",
            "pinyin": "Tāmen jiā hái néng sòng wàimài ma?",
            "meaning": "Quán họ còn giao đồ ăn tận nơi không?"
          },
          {
            "hanzi": "我今天不想做饭，点个外卖吧。",
            "pinyin": "Wǒ jīntiān bù xiǎng zuòfàn, diǎn ge wàimài ba.",
            "meaning": "Hôm nay tôi không muốn nấu ăn, đặt đồ ăn ngoài đi."
          }
        ]
      },
      {
        "id": "v17",
        "hanzi": "方便",
        "pinyin": "fāngbiàn",
        "sinoVietnamese": "Phương tiện",
        "wordType": "Tính từ",
        "meaning": "Tiện lợi",
        "examples": [
          {
            "hanzi": "现在很多饭馆都能送外卖，那真是太方便了。",
            "pinyin": "Xiànzài hěn duō fànguǎn dōu néng sòng wàimài, nà zhēn shì tài fāngbiàn le.",
            "meaning": "Bây giờ nhiều quán ăn đều giao được tận nơi, thật là tiện lợi."
          },
          {
            "hanzi": "用手机点菜很方便。",
            "pinyin": "Yòng shǒujī diǎncài hěn fāngbiàn.",
            "meaning": "Dùng điện thoại gọi món rất tiện."
          }
        ]
      },
      {
        "id": "v18",
        "hanzi": "蛋糕",
        "pinyin": "dàngāo",
        "sinoVietnamese": "Đản cao",
        "wordType": "Danh từ",
        "meaning": "Bánh gato/bánh ngọt",
        "examples": [
          {
            "hanzi": "早饭我吃一个面包，有时候吃一块蛋糕。",
            "pinyin": "Zǎofàn wǒ chī yí ge miànbāo, yǒushíhou chī yí kuài dàngāo.",
            "meaning": "Bữa sáng tôi ăn một ổ bánh mì, đôi khi ăn một miếng bánh ngọt."
          },
          {
            "hanzi": "今天是我的生日，我买了一个蛋糕。",
            "pinyin": "Jīntiān shì wǒ de shēngrì, wǒ mǎile yí ge dàngāo.",
            "meaning": "Hôm nay là sinh nhật tôi, tôi đã mua một cái bánh ga-tô."
          }
        ]
      },
      {
        "id": "v19",
        "hanzi": "只",
        "pinyin": "zhǐ",
        "sinoVietnamese": "Chỉ",
        "wordType": "Phó từ",
        "meaning": "Chỉ, chỉ có",
        "examples": [
          {
            "hanzi": "我可能好几天只吃方便面。",
            "pinyin": "Wǒ kěnéng hǎo jǐ tiān zhǐ chī fāngbiànmiàn.",
            "meaning": "Có khi mấy ngày tôi chỉ ăn mì ăn liền."
          },
          {
            "hanzi": "我只喝了一杯水。",
            "pinyin": "Wǒ zhǐ hēle yì bēi shuǐ.",
            "meaning": "Tôi chỉ uống một cốc nước."
          }
        ]
      },
      {
        "id": "v20",
        "hanzi": "方便面",
        "pinyin": "fāngbiànmiàn",
        "sinoVietnamese": "Phương tiện diện",
        "wordType": "Danh từ",
        "meaning": "Mì ăn liền",
        "examples": [
          {
            "hanzi": "我可能好几天只吃方便面。",
            "pinyin": "Wǒ kěnéng hǎo jǐ tiān zhǐ chī fāngbiànmiàn.",
            "meaning": "Có khi mấy ngày tôi chỉ ăn mì ăn liền."
          },
          {
            "hanzi": "方便面是最简单的晚饭。",
            "pinyin": "Fāngbiànmiàn shì zuì jiǎndān de wǎnfàn.",
            "meaning": "Mì ăn liền là bữa tối đơn giản nhất."
          }
        ]
      },
      {
        "id": "v21",
        "hanzi": "简单",
        "pinyin": "jiǎndān",
        "sinoVietnamese": "Giản đơn",
        "wordType": "Tính từ",
        "meaning": "Đơn giản",
        "examples": [
          {
            "hanzi": "妈妈只做几个简单的菜，我也非常爱吃。",
            "pinyin": "Māma zhǐ zuò jǐ ge jiǎndān de cài, wǒ yě fēicháng ài chī.",
            "meaning": "Mẹ chỉ làm vài món đơn giản, tôi cũng rất thích ăn."
          },
          {
            "hanzi": "这道题很简单。",
            "pinyin": "Zhè dào tí hěn jiǎndān.",
            "meaning": "Bài này rất đơn giản."
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
        "hanzi": "菜单",
        "pinyin": "càidān",
        "sinoVietnamese": "Thái đơn",
        "wordType": "Danh từ",
        "meaning": "Thực đơn",
        "examples": [
          {
            "hanzi": "家月、李文，你们看看菜单，想吃点儿什么？",
            "pinyin": "Jiāyuè, Lǐ Wén, nǐmen kànkan càidān, xiǎng chī diǎnr shénme?",
            "meaning": "Gia Nguyệt, Lý Văn, hai em xem thực đơn xem muốn ăn gì."
          },
          {
            "hanzi": "服务员，请给我菜单。",
            "pinyin": "Fúwùyuán, qǐng gěi wǒ càidān.",
            "meaning": "Phục vụ ơi, cho tôi xin thực đơn."
          }
        ]
      },
      {
        "id": "v2",
        "hanzi": "又",
        "pinyin": "yòu",
        "sinoVietnamese": "Hựu",
        "wordType": "Phó từ",
        "meaning": "Vừa...vừa...",
        "examples": [
          {
            "hanzi": "飞了这么远，现在还真是又饿又渴。",
            "pinyin": "Fēile zhème yuǎn, xiànzài hái zhēn shì yòu è yòu kě.",
            "meaning": "Bay xa như vậy, giờ đúng là vừa đói vừa khát."
          },
          {
            "hanzi": "这个饭馆的菜又便宜又好吃。",
            "pinyin": "Zhège fànguǎn de cài yòu piányi yòu hǎochī.",
            "meaning": "Món ăn quán này vừa rẻ vừa ngon."
          }
        ]
      },
      {
        "id": "v3",
        "hanzi": "饿",
        "pinyin": "è",
        "sinoVietnamese": "Ngạ",
        "wordType": "Tính từ",
        "meaning": "Đói",
        "examples": [
          {
            "hanzi": "现在还真是又饿又渴。",
            "pinyin": "Xiànzài hái zhēn shì yòu è yòu kě.",
            "meaning": "Giờ đúng là vừa đói vừa khát."
          },
          {
            "hanzi": "我太饿了，我们叫个外卖吧。",
            "pinyin": "Wǒ tài è le, wǒmen jiào ge wàimài ba.",
            "meaning": "Tôi đói quá, chúng ta đặt đồ ăn ngoài đi."
          }
        ]
      },
      {
        "id": "v4",
        "hanzi": "渴",
        "pinyin": "kě",
        "sinoVietnamese": "Khát",
        "wordType": "Tính từ",
        "meaning": "Khát",
        "examples": [
          {
            "hanzi": "现在还真是又饿又渴。",
            "pinyin": "Xiànzài hái zhēn shì yòu è yòu kě.",
            "meaning": "Giờ đúng là vừa đói vừa khát."
          },
          {
            "hanzi": "天气太热，我很渴。",
            "pinyin": "Tiānqì tài rè, wǒ hěn kě.",
            "meaning": "Trời nóng quá, tôi khát nước."
          }
        ]
      },
      {
        "id": "v5",
        "hanzi": "客气",
        "pinyin": "kèqi",
        "sinoVietnamese": "Khách khí",
        "wordType": "Động từ/Tính từ",
        "meaning": "Khách sáo, lịch sự",
        "examples": [
          {
            "hanzi": "那多点点儿，别客气。",
            "pinyin": "Nà duō diǎn diǎnr, bié kèqi.",
            "meaning": "Vậy gọi thêm chút đi, đừng khách sáo."
          },
          {
            "hanzi": "你太客气了。",
            "pinyin": "Nǐ tài kèqi le.",
            "meaning": "Bạn khách sáo quá."
          }
        ]
      },
      {
        "id": "v6",
        "hanzi": "饮料",
        "pinyin": "yǐnliào",
        "sinoVietnamese": "Ẩm liệu",
        "wordType": "Danh từ",
        "meaning": "Đồ uống",
        "examples": [
          {
            "hanzi": "你们喝什么饮料？",
            "pinyin": "Nǐmen hē shénme yǐnliào?",
            "meaning": "Hai em uống đồ uống gì?"
          },
          {
            "hanzi": "这里有很多饮料可以选。",
            "pinyin": "Zhèlǐ yǒu hěn duō yǐnliào kěyǐ xuǎn.",
            "meaning": "Ở đây có nhiều đồ uống để chọn."
          }
        ]
      },
      {
        "id": "v7",
        "hanzi": "好久",
        "pinyin": "hǎojiǔ",
        "sinoVietnamese": "Hảo cửu",
        "wordType": "Tính từ",
        "meaning": "Đã lâu, một thời gian dài",
        "examples": [
          {
            "hanzi": "好久没喝中国茶，也好久没吃饺子了。",
            "pinyin": "Hǎojiǔ méi hē Zhōngguó chá, yě hǎojiǔ méi chī jiǎozi le.",
            "meaning": "Đã lâu không uống trà Trung Quốc, cũng lâu rồi không ăn sủi cảo."
          },
          {
            "hanzi": "我们好久没见了。",
            "pinyin": "Wǒmen hǎojiǔ méi jiàn le.",
            "meaning": "Chúng ta lâu rồi không gặp."
          }
        ]
      },
      {
        "id": "v8",
        "hanzi": "服务",
        "pinyin": "fúwù",
        "sinoVietnamese": "Phục vụ",
        "wordType": "Động từ",
        "meaning": "Phục vụ",
        "examples": [
          {
            "hanzi": "这家饭馆的服务很热情。",
            "pinyin": "Zhè jiā fànguǎn de fúwù hěn rèqíng.",
            "meaning": "Dịch vụ của quán này rất nhiệt tình."
          },
          {
            "hanzi": "他们的服务态度很好。",
            "pinyin": "Tāmen de fúwù tàidu hěn hǎo.",
            "meaning": "Thái độ phục vụ của họ rất tốt."
          }
        ]
      },
      {
        "id": "v9",
        "hanzi": "员",
        "pinyin": "yuán",
        "sinoVietnamese": "Viên",
        "wordType": "Hậu tố",
        "meaning": "Hậu tố chỉ người làm nghề",
        "examples": [
          {
            "hanzi": "服务员，再给我们拿一双筷子。",
            "pinyin": "Fúwùyuán, zài gěi wǒmen ná yì shuāng kuàizi.",
            "meaning": "Phục vụ ơi, cho chúng tôi thêm một đôi đũa."
          },
          {
            "hanzi": "他是一名教员。",
            "pinyin": "Tā shì yì míng jiàoyuán.",
            "meaning": "Anh ấy là một giáo viên."
          }
        ]
      },
      {
        "id": "v10",
        "hanzi": "双",
        "pinyin": "shuāng",
        "sinoVietnamese": "Song",
        "wordType": "Lượng từ",
        "meaning": "Đôi",
        "examples": [
          {
            "hanzi": "再给我们拿一双筷子、一个勺子和一个碗。",
            "pinyin": "Zài gěi wǒmen ná yì shuāng kuàizi, yí ge sháozi hé yí ge wǎn.",
            "meaning": "Cho chúng tôi thêm một đôi đũa, một thìa và một bát."
          },
          {
            "hanzi": "我想买一双鞋。",
            "pinyin": "Wǒ xiǎng mǎi yì shuāng xié.",
            "meaning": "Tôi muốn mua một đôi giày."
          }
        ]
      },
      {
        "id": "v11",
        "hanzi": "筷子",
        "pinyin": "kuàizi",
        "sinoVietnamese": "Khoái tử",
        "wordType": "Danh từ",
        "meaning": "Đũa",
        "examples": [
          {
            "hanzi": "再给我们拿一双筷子。",
            "pinyin": "Zài gěi wǒmen ná yì shuāng kuàizi.",
            "meaning": "Cho chúng tôi thêm một đôi đũa."
          },
          {
            "hanzi": "我用筷子吃饭。",
            "pinyin": "Wǒ yòng kuàizi chīfàn.",
            "meaning": "Tôi dùng đũa để ăn cơm."
          }
        ]
      },
      {
        "id": "v12",
        "hanzi": "鸡",
        "pinyin": "jī",
        "sinoVietnamese": "Kê",
        "wordType": "Danh từ",
        "meaning": "Gà",
        "examples": [
          {
            "hanzi": "这个鸡肉饭太好吃了。",
            "pinyin": "Zhège jīròu fàn tài hǎochī le.",
            "meaning": "Món cơm gà này ngon quá."
          },
          {
            "hanzi": "我喜欢吃鸡肉。",
            "pinyin": "Wǒ xǐhuan chī jīròu.",
            "meaning": "Tôi thích ăn thịt gà."
          }
        ]
      },
      {
        "id": "v13",
        "hanzi": "张",
        "pinyin": "zhāng",
        "sinoVietnamese": "Trương",
        "wordType": "Lượng từ",
        "meaning": "Tờ, tấm (giấy, tranh...)",
        "examples": [
          {
            "hanzi": "你可以拿走这张菜单。",
            "pinyin": "Nǐ kěyǐ ná zǒu zhè zhāng càidān.",
            "meaning": "Bạn có thể mang tờ thực đơn này đi."
          },
          {
            "hanzi": "给我一张纸。",
            "pinyin": "Gěi wǒ yì zhāng zhǐ.",
            "meaning": "Đưa tôi một tờ giấy."
          }
        ]
      },
      {
        "id": "v14",
        "hanzi": "不用",
        "pinyin": "búyòng",
        "sinoVietnamese": "Bất dụng",
        "wordType": "Phó từ",
        "meaning": "Không cần",
        "examples": [
          {
            "hanzi": "不用拿菜单，在手机上就能看到。",
            "pinyin": "Búyòng ná càidān, zài shǒujī shàng jiù néng kàndào.",
            "meaning": "Không cần lấy thực đơn, xem trên điện thoại là được."
          },
          {
            "hanzi": "谢谢，不用了。",
            "pinyin": "Xièxie, búyòng le.",
            "meaning": "Cảm ơn, không cần đâu."
          }
        ]
      },
      {
        "id": "v15",
        "hanzi": "选",
        "pinyin": "xuǎn",
        "sinoVietnamese": "Tuyển",
        "wordType": "Động từ",
        "meaning": "Chọn",
        "examples": [
          {
            "hanzi": "也可以选好了让他们给你送。",
            "pinyin": "Yě kěyǐ xuǎn hǎole ràng tāmen gěi nǐ sòng.",
            "meaning": "Cũng có thể chọn xong rồi để họ giao đến cho bạn."
          },
          {
            "hanzi": "你选哪个？",
            "pinyin": "Nǐ xuǎn nǎge?",
            "meaning": "Bạn chọn cái nào?"
          }
        ]
      },
      {
        "id": "v16",
        "hanzi": "外卖",
        "pinyin": "wàimài",
        "sinoVietnamese": "Ngoại mại",
        "wordType": "Danh từ/Động từ",
        "meaning": "Đồ ăn giao tận nơi",
        "examples": [
          {
            "hanzi": "他们家还能送外卖吗？",
            "pinyin": "Tāmen jiā hái néng sòng wàimài ma?",
            "meaning": "Quán họ còn giao đồ ăn tận nơi không?"
          },
          {
            "hanzi": "我今天不想做饭，点个外卖吧。",
            "pinyin": "Wǒ jīntiān bù xiǎng zuòfàn, diǎn ge wàimài ba.",
            "meaning": "Hôm nay tôi không muốn nấu ăn, đặt đồ ăn ngoài đi."
          }
        ]
      },
      {
        "id": "v17",
        "hanzi": "方便",
        "pinyin": "fāngbiàn",
        "sinoVietnamese": "Phương tiện",
        "wordType": "Tính từ",
        "meaning": "Tiện lợi",
        "examples": [
          {
            "hanzi": "现在很多饭馆都能送外卖，那真是太方便了。",
            "pinyin": "Xiànzài hěn duō fànguǎn dōu néng sòng wàimài, nà zhēn shì tài fāngbiàn le.",
            "meaning": "Bây giờ nhiều quán ăn đều giao được tận nơi, thật là tiện lợi."
          },
          {
            "hanzi": "用手机点菜很方便。",
            "pinyin": "Yòng shǒujī diǎncài hěn fāngbiàn.",
            "meaning": "Dùng điện thoại gọi món rất tiện."
          }
        ]
      },
      {
        "id": "v18",
        "hanzi": "蛋糕",
        "pinyin": "dàngāo",
        "sinoVietnamese": "Đản cao",
        "wordType": "Danh từ",
        "meaning": "Bánh gato/bánh ngọt",
        "examples": [
          {
            "hanzi": "早饭我吃一个面包，有时候吃一块蛋糕。",
            "pinyin": "Zǎofàn wǒ chī yí ge miànbāo, yǒushíhou chī yí kuài dàngāo.",
            "meaning": "Bữa sáng tôi ăn một ổ bánh mì, đôi khi ăn một miếng bánh ngọt."
          },
          {
            "hanzi": "今天是我的生日，我买了一个蛋糕。",
            "pinyin": "Jīntiān shì wǒ de shēngrì, wǒ mǎile yí ge dàngāo.",
            "meaning": "Hôm nay là sinh nhật tôi, tôi đã mua một cái bánh ga-tô."
          }
        ]
      },
      {
        "id": "v19",
        "hanzi": "只",
        "pinyin": "zhǐ",
        "sinoVietnamese": "Chỉ",
        "wordType": "Phó từ",
        "meaning": "Chỉ, chỉ có",
        "examples": [
          {
            "hanzi": "我可能好几天只吃方便面。",
            "pinyin": "Wǒ kěnéng hǎo jǐ tiān zhǐ chī fāngbiànmiàn.",
            "meaning": "Có khi mấy ngày tôi chỉ ăn mì ăn liền."
          },
          {
            "hanzi": "我只喝了一杯水。",
            "pinyin": "Wǒ zhǐ hēle yì bēi shuǐ.",
            "meaning": "Tôi chỉ uống một cốc nước."
          }
        ]
      },
      {
        "id": "v20",
        "hanzi": "方便面",
        "pinyin": "fāngbiànmiàn",
        "sinoVietnamese": "Phương tiện diện",
        "wordType": "Danh từ",
        "meaning": "Mì ăn liền",
        "examples": [
          {
            "hanzi": "我可能好几天只吃方便面。",
            "pinyin": "Wǒ kěnéng hǎo jǐ tiān zhǐ chī fāngbiànmiàn.",
            "meaning": "Có khi mấy ngày tôi chỉ ăn mì ăn liền."
          },
          {
            "hanzi": "方便面是最简单的晚饭。",
            "pinyin": "Fāngbiànmiàn shì zuì jiǎndān de wǎnfàn.",
            "meaning": "Mì ăn liền là bữa tối đơn giản nhất."
          }
        ]
      },
      {
        "id": "v21",
        "hanzi": "简单",
        "pinyin": "jiǎndān",
        "sinoVietnamese": "Giản đơn",
        "wordType": "Tính từ",
        "meaning": "Đơn giản",
        "examples": [
          {
            "hanzi": "妈妈只做几个简单的菜，我也非常爱吃。",
            "pinyin": "Māma zhǐ zuò jǐ ge jiǎndān de cài, wǒ yě fēicháng ài chī.",
            "meaning": "Mẹ chỉ làm vài món đơn giản, tôi cũng rất thích ăn."
          },
          {
            "hanzi": "这道题很简单。",
            "pinyin": "Zhè dào tí hěn jiǎndān.",
            "meaning": "Bài này rất đơn giản."
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
        "title": "1. 并列复句 \"又……又……\" (Vừa...vừa... — 2 đặc điểm cùng lúc)",
        "explanation": "又 + tính từ1 + 又 + tính từ2: diễn tả người/vật có đồng thời 2 đặc điểm 📌 Ví dụ khác",
        "usage": "又A又B chỉ dùng với tính từ/trạng thái, hai đặc điểm nên cùng chiều (đều tốt hoặc đều xấu).",
        "note": "",
        "examples": [
          {
            "hanzi": "现在还真是又饿又渴。",
            "pinyin": "",
            "meaning": "Giờ đúng là vừa đói vừa khát."
          },
          {
            "hanzi": "这个饭馆的菜又便宜又好吃。",
            "pinyin": "",
            "meaning": "Món ăn quán này vừa rẻ vừa ngon."
          },
          {
            "hanzi": "快要考试的时候又忙又累。",
            "pinyin": "",
            "meaning": "Lúc gần thi vừa bận vừa mệt."
          }
        ],
        "practice": [
          {
            "questionText": "Luyện tập 1 · Giờ đúng là vừa đói vừa khát.",
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
                "text": "还"
              },
              {
                "id": "4",
                "text": "真"
              },
              {
                "id": "5",
                "text": "是"
              },
              {
                "id": "6",
                "text": "又"
              },
              {
                "id": "7",
                "text": "饿"
              },
              {
                "id": "8",
                "text": "又"
              },
              {
                "id": "9",
                "text": "渴"
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
            "questionText": "Luyện tập 2 · Món ăn quán này vừa rẻ vừa ngon.",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "这"
              },
              {
                "id": "2",
                "text": "个"
              },
              {
                "id": "3",
                "text": "饭"
              },
              {
                "id": "4",
                "text": "馆"
              },
              {
                "id": "5",
                "text": "的"
              },
              {
                "id": "6",
                "text": "菜"
              },
              {
                "id": "7",
                "text": "又"
              },
              {
                "id": "8",
                "text": "便"
              },
              {
                "id": "9",
                "text": "宜"
              },
              {
                "id": "10",
                "text": "又"
              },
              {
                "id": "11",
                "text": "好"
              },
              {
                "id": "12",
                "text": "吃"
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
              "12"
            ]
          },
          {
            "questionText": "Luyện tập 3 · Lúc gần thi vừa bận vừa mệt.",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "快"
              },
              {
                "id": "2",
                "text": "要"
              },
              {
                "id": "3",
                "text": "考"
              },
              {
                "id": "4",
                "text": "试"
              },
              {
                "id": "5",
                "text": "的"
              },
              {
                "id": "6",
                "text": "时"
              },
              {
                "id": "7",
                "text": "候"
              },
              {
                "id": "8",
                "text": "又"
              },
              {
                "id": "9",
                "text": "忙"
              },
              {
                "id": "10",
                "text": "又"
              },
              {
                "id": "11",
                "text": "累"
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
        "id": "g2",
        "title": "2. 疑问代词的非疑问用法 (2)",
        "explanation": "疑问代词 + 都/也: biểu thị không có ngoại lệ, bất kể là gì",
        "usage": "疑问代词 + 都/也 luôn đi với câu khẳng định toàn bộ hoặc phủ định toàn bộ, không dùng làm câu hỏi.",
        "note": "✗ 我什么都不没有。 → ✓ 我什么都没有。 — Học sinh Việt hay thêm \"不\" thừa trước \"没有\"; chỉ cần 什么+都+没有 là đủ phủ định.",
        "examples": [
          {
            "hanzi": "哪个菜都好吃。",
            "pinyin": "",
            "meaning": "Món nào cũng ngon."
          },
          {
            "hanzi": "这次旅游，我去哪儿都可以。",
            "pinyin": "",
            "meaning": "Chuyến du lịch này, tôi đi đâu cũng được."
          }
        ],
        "practice": [
          {
            "questionText": "Luyện tập 1 · Món nào cũng ngon.",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "哪"
              },
              {
                "id": "2",
                "text": "个"
              },
              {
                "id": "3",
                "text": "菜"
              },
              {
                "id": "4",
                "text": "都"
              },
              {
                "id": "5",
                "text": "好"
              },
              {
                "id": "6",
                "text": "吃"
              }
            ],
            "correctOrderIds": [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6"
            ]
          },
          {
            "questionText": "Luyện tập 2 · Chuyến du lịch này, tôi đi đâu cũng được.",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "这"
              },
              {
                "id": "2",
                "text": "次"
              },
              {
                "id": "3",
                "text": "旅"
              },
              {
                "id": "4",
                "text": "游"
              },
              {
                "id": "5",
                "text": "我"
              },
              {
                "id": "6",
                "text": "去"
              },
              {
                "id": "7",
                "text": "哪"
              },
              {
                "id": "8",
                "text": "儿"
              },
              {
                "id": "9",
                "text": "都"
              },
              {
                "id": "10",
                "text": "可"
              },
              {
                "id": "11",
                "text": "以"
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
        "title": "3. 疑问代词的非疑问用法 (3)",
        "explanation": "想 + 疑问代词1 + 就 + 疑问代词2: hai đại từ nghi vấn giống nhau hô ứng, chỉ sự tùy ý 📌 Ví dụ khác",
        "usage": "Hai đại từ nghi vấn phải GIỐNG NHAU (什么...就...什么，哪儿...就...哪儿) — khác từ là sai ngữ pháp.",
        "note": "",
        "examples": [
          {
            "hanzi": "你们想吃什么就点什么。",
            "pinyin": "",
            "meaning": "Các em muốn ăn gì thì gọi món đó."
          },
          {
            "hanzi": "现在很多饭馆都能送外卖，想吃什么就点什么。",
            "pinyin": "",
            "meaning": "Bây giờ nhiều quán giao tận nơi, muốn ăn gì thì gọi món đó."
          },
          {
            "hanzi": "你想去哪儿就去哪儿。",
            "pinyin": "",
            "meaning": "Bạn muốn đi đâu thì đi đó."
          }
        ],
        "practice": [
          {
            "questionText": "Luyện tập 1 · Các em muốn ăn gì thì gọi món đó.",
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
                "text": "想"
              },
              {
                "id": "4",
                "text": "吃"
              },
              {
                "id": "5",
                "text": "什"
              },
              {
                "id": "6",
                "text": "么"
              },
              {
                "id": "7",
                "text": "就"
              },
              {
                "id": "8",
                "text": "点"
              },
              {
                "id": "9",
                "text": "什"
              },
              {
                "id": "10",
                "text": "么"
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
            "questionText": "Luyện tập 2 · Bây giờ nhiều quán giao tận nơi, muốn ăn gì thì gọi món đó.",
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
                "text": "很"
              },
              {
                "id": "4",
                "text": "多"
              },
              {
                "id": "5",
                "text": "饭"
              },
              {
                "id": "6",
                "text": "馆"
              },
              {
                "id": "7",
                "text": "都"
              },
              {
                "id": "8",
                "text": "能"
              },
              {
                "id": "9",
                "text": "送"
              },
              {
                "id": "10",
                "text": "外"
              },
              {
                "id": "11",
                "text": "卖"
              },
              {
                "id": "12",
                "text": "想"
              },
              {
                "id": "13",
                "text": "吃"
              },
              {
                "id": "14",
                "text": "什"
              },
              {
                "id": "15",
                "text": "么"
              },
              {
                "id": "16",
                "text": "就"
              },
              {
                "id": "17",
                "text": "点"
              },
              {
                "id": "18",
                "text": "什"
              },
              {
                "id": "19",
                "text": "么"
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
              "14",
              "15",
              "16",
              "17",
              "18",
              "19"
            ]
          },
          {
            "questionText": "Luyện tập 3 · Bạn muốn đi đâu thì đi đó.",
            "wordsToOrder": [
              {
                "id": "1",
                "text": "你"
              },
              {
                "id": "2",
                "text": "想"
              },
              {
                "id": "3",
                "text": "去"
              },
              {
                "id": "4",
                "text": "哪"
              },
              {
                "id": "5",
                "text": "儿"
              },
              {
                "id": "6",
                "text": "就"
              },
              {
                "id": "7",
                "text": "去"
              },
              {
                "id": "8",
                "text": "哪"
              },
              {
                "id": "9",
                "text": "儿"
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
      }
    ]
  },
  "conversation": {
    "title": "Hội thoại",
    "sections": [
      {
        "id": "s1",
        "title": "在饭馆，王一雪、刘明、白家月和李文在点菜。",
        "turns": [
          {
            "id": "t1",
            "role": "雪",
            "avatar": "雪",
            "hanzi": "家月、李文，你们看看菜单，想吃点儿什么？",
            "pinyin": "Jiāyuè, Lǐ Wén, nǐmen kànkan càidān, xiǎng chī diǎnr shénme?",
            "meaning": "Gia Nguyệt, Lý Văn, hai em xem thực đơn xem muốn ăn gì."
          },
          {
            "id": "t2",
            "role": "文",
            "avatar": "文",
            "hanzi": "谢谢一雪姐，我都可以，你们点吧。",
            "pinyin": "Xièxie Yīxuě jiě, wǒ dōu kěyǐ, nǐmen diǎn ba.",
            "meaning": "Cảm ơn chị Nhất Tuyết, em ăn gì cũng được, mọi người gọi đi."
          },
          {
            "id": "t3",
            "role": "月",
            "avatar": "月",
            "hanzi": "飞了这么远，现在还真是又饿又渴。",
            "pinyin": "Fēile zhème yuǎn, xiànzài hái zhēn shì yòu è yòu kě.",
            "meaning": "Bay xa như vậy, giờ đúng là vừa đói vừa khát."
          },
          {
            "id": "t4",
            "role": "雪",
            "avatar": "雪",
            "hanzi": "那多点点儿，别客气。你们喝什么饮料？",
            "pinyin": "Nà duō diǎn diǎnr, bié kèqi. Nǐmen hē shénme yǐnliào?",
            "meaning": "Vậy gọi thêm chút đi, đừng khách sáo. Hai em uống gì?"
          },
          {
            "id": "t5",
            "role": "月",
            "avatar": "月",
            "hanzi": "好久没喝中国茶，也好久没吃饺子了。我想喝绿茶、吃饺子，可以吗？",
            "pinyin": "Hǎojiǔ méi hē Zhōngguó chá, yě hǎojiǔ méi chī jiǎozi le. Wǒ xiǎng hē lǜchá, chī jiǎozi, kěyǐ ma?",
            "meaning": "Lâu rồi không uống trà Trung Quốc, cũng lâu rồi không ăn sủi cảo. Em muốn uống trà xanh, ăn sủi cảo, được không?"
          }
        ]
      },
      {
        "id": "s2",
        "title": "在饭馆，王一雪、刘明、白家月和李文一起吃饭。",
        "turns": [
          {
            "id": "t1",
            "role": "雪",
            "avatar": "雪",
            "hanzi": "服务员，再给我们拿一双筷子、一个勺子和一个碗。",
            "pinyin": "Fúwùyuán, zài gěi wǒmen ná yì shuāng kuàizi, yí ge sháozi hé yí ge wǎn.",
            "meaning": "Phục vụ ơi, cho chúng tôi thêm một đôi đũa, một thìa và một bát."
          },
          {
            "id": "t2",
            "role": "服务员",
            "avatar": "服",
            "hanzi": "好的，请等一下，我马上去拿。",
            "pinyin": "Hǎo de, qǐng děng yíxià, wǒ mǎshàng qù ná.",
            "meaning": "Vâng, xin chờ chút, tôi lấy ngay."
          },
          {
            "id": "t3",
            "role": "雪",
            "avatar": "雪",
            "hanzi": "这家饭馆的服务很热情，菜也都做得很好吃。你们尝尝，看喜不喜欢这些菜。",
            "pinyin": "Zhè jiā fànguǎn de fúwù hěn rèqíng, cài yě dōu zuò de hěn hǎochī. Nǐmen chángchang, kàn xǐ bu xǐhuan zhèxiē cài.",
            "meaning": "Dịch vụ quán này rất nhiệt tình, món ăn cũng nấu rất ngon. Mọi người nếm thử xem có thích không."
          },
          {
            "id": "t4",
            "role": "月",
            "avatar": "月",
            "hanzi": "哪个菜都好吃。您点的这些菜真不错。",
            "pinyin": "Nǎge cài dōu hǎochī. Nín diǎn de zhèxiē cài zhēn búcuò.",
            "meaning": "Món nào cũng ngon. Những món chị gọi thật là không tồi."
          },
          {
            "id": "t5",
            "role": "雪",
            "avatar": "雪",
            "hanzi": "没问题，你们看看还想吃什么。",
            "pinyin": "Méi wèntí, nǐmen kànkan hái xiǎng chī shénme.",
            "meaning": "Không vấn đề gì, mọi người xem còn muốn ăn gì nữa không."
          }
        ]
      },
      {
        "id": "s3",
        "title": "在饭馆，王一雪、刘明、白家月和李文继续边吃边聊。",
        "turns": [
          {
            "id": "t1",
            "role": "月",
            "avatar": "月",
            "hanzi": "这个鸡肉饭太好吃了，我要再来吃一次。",
            "pinyin": "Zhège jīròu fàn tài hǎochī le, wǒ yào zài lái chī yí cì.",
            "meaning": "Món cơm gà này ngon quá, em sẽ đến ăn lại lần nữa."
          },
          {
            "id": "t2",
            "role": "文",
            "avatar": "文",
            "hanzi": "你可以拿走这张菜单，看看下次还吃点儿什么。",
            "pinyin": "Nǐ kěyǐ ná zǒu zhè zhāng càidān, kànkan xiàcì hái chī diǎnr shénme.",
            "meaning": "Em có thể mang tờ thực đơn này đi, xem lần sau còn ăn gì nữa."
          },
          {
            "id": "t3",
            "role": "雪",
            "avatar": "雪",
            "hanzi": "不用拿菜单，在手机上就能看到，也可以选好了让他们给你送。",
            "pinyin": "Búyòng ná càidān, zài shǒujī shàng jiù néng kàndào, yě kěyǐ xuǎn hǎole ràng tāmen gěi nǐ sòng.",
            "meaning": "Không cần lấy thực đơn, xem trên điện thoại là được, cũng có thể chọn xong để họ giao đến."
          },
          {
            "id": "t4",
            "role": "月",
            "avatar": "月",
            "hanzi": "他们家还能送外卖吗？",
            "pinyin": "Tāmen jiā hái néng sòng wàimài ma?",
            "meaning": "Quán họ còn giao đồ ăn tận nơi không?"
          },
          {
            "id": "t5",
            "role": "雪",
            "avatar": "雪",
            "hanzi": "对，现在很多饭馆都能送外卖，想吃什么就点什么。",
            "pinyin": "Duì, xiànzài hěn duō fànguǎn dōu néng sòng wàimài, xiǎng chī shénme jiù diǎn shénme.",
            "meaning": "Đúng vậy, bây giờ nhiều quán đều giao được tận nơi, muốn ăn gì thì gọi món đó."
          },
          {
            "id": "t6",
            "role": "月",
            "avatar": "月",
            "hanzi": "那真是太方便了！",
            "pinyin": "Nà zhēn shì tài fāngbiàn le!",
            "meaning": "Vậy thì tiện quá!"
          }
        ]
      },
      {
        "id": "s4",
        "title": "在李文家，李文在写日记。",
        "turns": [
          {
            "id": "t1",
            "role": "·",
            "avatar": "·",
            "hanzi": "这些年在国外，我很少自己做饭。早饭我吃一个面包，有时候吃一块蛋糕，再喝一杯咖啡。午饭和晚饭也都在外面吃。快要考试的时候又忙又累，没时间出去吃饭，家里又什么吃的都没有，我可能好几天只吃方便面。现在回到中国了，每天能吃到妈妈做的饭，我真是太高兴了！有时候妈妈只做几个简单的菜，我也非常爱吃，因为什么都没有妈妈做的饭好吃。",
            "pinyin": "Zhèxiē nián zài guówài, wǒ hěn shǎo zìjǐ zuòfàn. Zǎofàn wǒ chī yí ge miànbāo, yǒushíhou chī yí kuài dàngāo, zài hē yì bēi kāfēi. Wǔfàn hé wǎnfàn yě dōu zài wàimian chī. Kuàiyào kǎoshì de shíhou yòu máng yòu lèi, méi shíjiān chūqù chīfàn, jiālǐ yòu shénme chī de dōu méiyǒu, wǒ kěnéng hǎo jǐ tiān zhǐ chī fāngbiànmiàn. Xiànzài huídào Zhōngguó le, měitiān néng chīdào māma zuò de fàn, wǒ zhēnshì tài gāoxìng le! Yǒushíhou māma zhǐ zuò jǐ ge jiǎndān de cài, wǒ yě fēicháng ài chī, yīnwèi shénme dōu méiyǒu māma zuò de fàn hǎochī.",
            "meaning": "Những năm qua ở nước ngoài, tôi rất ít khi tự nấu ăn. Bữa sáng tôi ăn một ổ bánh mì, đôi khi ăn một miếng bánh ngọt, rồi uống một cốc cà phê. Bữa trưa và bữa tối cũng đều ăn ngoài. Lúc gần thi vừa bận vừa mệt, không có thời gian ra ngoài ăn, trong nhà lại chẳng có gì ăn, có khi mấy ngày tôi chỉ ăn mì ăn liền. Bây giờ về Trung Quốc rồi, ngày nào cũng được ăn cơm mẹ nấu, tôi thật sự rất vui! Đôi khi mẹ chỉ nấu vài món đơn giản, tôi cũng rất thích ăn, vì không gì ngon bằng cơm mẹ nấu."
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
            "content": "我觉得"
          },
          {
            "type": "blank"
          },
          {
            "type": "text",
            "content": "筷子吃饭更方便。"
          }
        ],
        "expectedChoiceId": "c5",
        "hint": "Gợi ý: 尝 / 只 / 菜单 / 记 / 用"
      },
      {
        "id": "q2",
        "speaker": "2",
        "parts": [
          {
            "type": "text",
            "content": "你"
          },
          {
            "type": "blank"
          },
          {
            "type": "text",
            "content": "住那个饭馆的名字了吗？"
          }
        ],
        "expectedChoiceId": "c9",
        "hint": "Gợi ý: 尝 / 只 / 菜单 / 记 / 用"
      },
      {
        "id": "q3",
        "speaker": "3",
        "parts": [
          {
            "type": "text",
            "content": "她现在很饿，早上"
          },
          {
            "type": "blank"
          },
          {
            "type": "text",
            "content": "吃了一块蛋糕。"
          }
        ],
        "expectedChoiceId": "c12",
        "hint": "Gợi ý: 尝 / 只 / 菜单 / 记 / 用"
      },
      {
        "id": "q4",
        "speaker": "4",
        "parts": [
          {
            "type": "text",
            "content": ""
          },
          {
            "type": "blank"
          },
          {
            "type": "text",
            "content": "上有好几个新菜，你看看我们吃哪个？"
          }
        ],
        "expectedChoiceId": "c18",
        "hint": "Gợi ý: 尝 / 只 / 菜单 / 记 / 用"
      },
      {
        "id": "q5",
        "speaker": "5",
        "parts": [
          {
            "type": "text",
            "content": "我妈妈会做中国菜，下次你们来我家"
          },
          {
            "type": "blank"
          },
          {
            "type": "text",
            "content": "一下她做的菜。"
          }
        ],
        "expectedChoiceId": "c21",
        "hint": "Gợi ý: 尝 / 只 / 菜单 / 记 / 用"
      }
    ],
    "choices": [
      {
        "id": "c1",
        "text": "尝",
        "pinyin": ""
      },
      {
        "id": "c2",
        "text": "只",
        "pinyin": ""
      },
      {
        "id": "c3",
        "text": "菜单",
        "pinyin": ""
      },
      {
        "id": "c4",
        "text": "记",
        "pinyin": ""
      },
      {
        "id": "c5",
        "text": "用",
        "pinyin": ""
      },
      {
        "id": "c6",
        "text": "尝",
        "pinyin": ""
      },
      {
        "id": "c7",
        "text": "只",
        "pinyin": ""
      },
      {
        "id": "c8",
        "text": "菜单",
        "pinyin": ""
      },
      {
        "id": "c9",
        "text": "记",
        "pinyin": ""
      },
      {
        "id": "c10",
        "text": "用",
        "pinyin": ""
      },
      {
        "id": "c11",
        "text": "尝",
        "pinyin": ""
      },
      {
        "id": "c12",
        "text": "只",
        "pinyin": ""
      },
      {
        "id": "c13",
        "text": "菜单",
        "pinyin": ""
      },
      {
        "id": "c14",
        "text": "记",
        "pinyin": ""
      },
      {
        "id": "c15",
        "text": "用",
        "pinyin": ""
      },
      {
        "id": "c16",
        "text": "尝",
        "pinyin": ""
      },
      {
        "id": "c17",
        "text": "只",
        "pinyin": ""
      },
      {
        "id": "c18",
        "text": "菜单",
        "pinyin": ""
      },
      {
        "id": "c19",
        "text": "记",
        "pinyin": ""
      },
      {
        "id": "c20",
        "text": "用",
        "pinyin": ""
      },
      {
        "id": "c21",
        "text": "尝",
        "pinyin": ""
      },
      {
        "id": "c22",
        "text": "只",
        "pinyin": ""
      },
      {
        "id": "c23",
        "text": "菜单",
        "pinyin": ""
      },
      {
        "id": "c24",
        "text": "记",
        "pinyin": ""
      },
      {
        "id": "c25",
        "text": "用",
        "pinyin": ""
      }
    ]
  },
  "arranging": {
    "title": "Sắp xếp thành câu",
    "questions": [
      {
        "id": "aq1",
        "meaning": "Món ăn quán này vừa rẻ vừa ngon.",
        "words": [
          {
            "id": "w3",
            "text": "的",
            "pinyin": ""
          },
          {
            "id": "w4",
            "text": "菜",
            "pinyin": ""
          },
          {
            "id": "w6",
            "text": "便宜",
            "pinyin": ""
          },
          {
            "id": "w8",
            "text": "好吃",
            "pinyin": ""
          },
          {
            "id": "w1",
            "text": "这个",
            "pinyin": ""
          },
          {
            "id": "w5",
            "text": "又",
            "pinyin": ""
          },
          {
            "id": "w2",
            "text": "饭馆",
            "pinyin": ""
          },
          {
            "id": "w7",
            "text": "又",
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
        "meaning": "Món nào cũng ngon.",
        "words": [
          {
            "id": "w4",
            "text": "好吃",
            "pinyin": ""
          },
          {
            "id": "w1",
            "text": "哪个",
            "pinyin": ""
          },
          {
            "id": "w2",
            "text": "菜",
            "pinyin": ""
          },
          {
            "id": "w3",
            "text": "都",
            "pinyin": ""
          }
        ],
        "correctOrderIds": [
          "w1",
          "w2",
          "w3",
          "w4"
        ]
      },
      {
        "id": "aq3",
        "meaning": "Các em muốn ăn gì thì gọi món đó.",
        "words": [
          {
            "id": "w7",
            "text": "什么",
            "pinyin": ""
          },
          {
            "id": "w3",
            "text": "吃",
            "pinyin": ""
          },
          {
            "id": "w4",
            "text": "什么",
            "pinyin": ""
          },
          {
            "id": "w6",
            "text": "点",
            "pinyin": ""
          },
          {
            "id": "w2",
            "text": "想",
            "pinyin": ""
          },
          {
            "id": "w5",
            "text": "就",
            "pinyin": ""
          },
          {
            "id": "w1",
            "text": "你们",
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
        "content": "菜单",
        "pinyin": "càidān"
      },
      {
        "id": "l2",
        "content": "又",
        "pinyin": "yòu"
      },
      {
        "id": "l3",
        "content": "饿",
        "pinyin": "è"
      },
      {
        "id": "l4",
        "content": "渴",
        "pinyin": "kě"
      },
      {
        "id": "l5",
        "content": "客气",
        "pinyin": "kèqi"
      },
      {
        "id": "l6",
        "content": "饮料",
        "pinyin": "yǐnliào"
      }
    ],
    "rightItems": [
      {
        "id": "r1",
        "content": "Thực đơn"
      },
      {
        "id": "r2",
        "content": "Vừa...vừa..."
      },
      {
        "id": "r3",
        "content": "Đói"
      },
      {
        "id": "r4",
        "content": "Khát"
      },
      {
        "id": "r5",
        "content": "Khách sáo, lịch sự"
      },
      {
        "id": "r6",
        "content": "Đồ uống"
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
        "questionText": "Từ \"菜单\" (càidān) có nghĩa là gì?",
        "options": [
          {
            "id": "o3",
            "text": "Đói"
          },
          {
            "id": "o2",
            "text": "Vừa...vừa..."
          },
          {
            "id": "o1",
            "text": "Thực đơn"
          }
        ],
        "correctOptionId": "o1"
      },
      {
        "id": "quiz_2",
        "questionText": "Từ \"又\" (yòu) có nghĩa là gì?",
        "options": [
          {
            "id": "o1",
            "text": "Vừa...vừa..."
          },
          {
            "id": "o3",
            "text": "Đói"
          },
          {
            "id": "o2",
            "text": "Thực đơn"
          }
        ],
        "correctOptionId": "o1"
      },
      {
        "id": "quiz_3",
        "questionText": "Từ \"饿\" (è) có nghĩa là gì?",
        "options": [
          {
            "id": "o3",
            "text": "Vừa...vừa..."
          },
          {
            "id": "o2",
            "text": "Thực đơn"
          },
          {
            "id": "o1",
            "text": "Đói"
          }
        ],
        "correctOptionId": "o1"
      },
      {
        "id": "quiz_4",
        "questionText": "Từ \"渴\" (kě) có nghĩa là gì?",
        "options": [
          {
            "id": "o3",
            "text": "Vừa...vừa..."
          },
          {
            "id": "o2",
            "text": "Thực đơn"
          },
          {
            "id": "o1",
            "text": "Khát"
          }
        ],
        "correctOptionId": "o1"
      },
      {
        "id": "quiz_5",
        "questionText": "Từ \"客气\" (kèqi) có nghĩa là gì?",
        "options": [
          {
            "id": "o3",
            "text": "Vừa...vừa..."
          },
          {
            "id": "o2",
            "text": "Thực đơn"
          },
          {
            "id": "o1",
            "text": "Khách sáo, lịch sự"
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
        "hanzi": "欢迎光临！这是菜单，您想吃点儿什么？",
        "pinyin": "",
        "meaning": "A: 欢迎光临！这是菜单，您想吃点儿什么？"
      },
      {
        "id": "s2",
        "hanzi": "我又饿又渴，先给我一份[.....]和一杯[.....]吧。",
        "pinyin": "",
        "meaning": "B: 我又饿又渴，先给我一份[.....]和一杯[.....]吧。"
      },
      {
        "id": "s3",
        "hanzi": "好的，还需要别的吗？我们这里想吃什么就点什么。",
        "pinyin": "",
        "meaning": "A: 好的，还需要别的吗？我们这里想吃什么就点什么。"
      },
      {
        "id": "s4",
        "hanzi": "再给我拿一双[.....]，谢谢！你们家能送外卖吗？",
        "pinyin": "",
        "meaning": "B: 再给我拿一双[.....]，谢谢！你们家能送外卖吗？"
      },
      {
        "id": "s5",
        "hanzi": "不用担心，我们的服务很方便，选好了也可以叫外卖。",
        "pinyin": "",
        "meaning": "A: 不用担心，我们的服务很方便，选好了也可以叫外卖。"
      }
    ],
    "freeSpeakingTasks": [
      {
        "id": "fs1",
        "topic": "你平时点外卖多不多？",
        "suggestion": "Hãy nói suy nghĩ của bạn về câu hỏi: 你平时点外卖多不多？"
      },
      {
        "id": "fs2",
        "topic": "你最喜欢吃哪个菜？为什么？",
        "suggestion": "Hãy nói suy nghĩ của bạn về câu hỏi: 你最喜欢吃哪个菜？为什么？"
      },
      {
        "id": "fs3",
        "topic": "如果朋友来你的城市，你会带他去哪儿吃饭？",
        "suggestion": "Hãy nói suy nghĩ của bạn về câu hỏi: 如果朋友来你的城市，你会带他去哪儿吃饭？"
      }
    ]
  },
  "funFacts": {
    "title": "Có thể bạn chưa biết: Ai trả tiền bữa ăn?",
    "description": "Những nét văn hoá Trung Quốc gắn với chủ đề bài học.",
    "facts": [
      {
        "id": "ff1",
        "title": "Không chia tiền như phương Tây",
        "content": "Người mời sẽ trả toàn bộ. AA制 (chia đều) chỉ phổ biến trong giới trẻ và bạn thân."
      },
      {
        "id": "ff2",
        "title": "Giành trả tiền là chuyện thường",
        "content": "Cuối bữa hai bên thường tranh nhau ra quầy trả tiền. Nhiều người lặng lẽ đi thanh toán trước khi bữa ăn kết thúc."
      },
      {
        "id": "ff3",
        "title": "Chỗ ngồi cũng có thứ bậc",
        "content": "Người quan trọng nhất ngồi hướng nhìn ra cửa, chủ tiệc ngồi quay lưng ra cửa để tiện gọi phục vụ."
      },
      {
        "id": "ff4",
        "title": "Gọi món cho đủ",
        "content": "Chủ tiệc thường gọi dư một chút để tỏ ra hào phóng — bàn ăn hết sạch bị coi là chủ nhà mời chưa đủ."
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
              "questionText": "Từ \"菜单\" (càidān) có nghĩa là gì?",
              "options": [
                {
                  "id": "o3",
                  "text": "Đói"
                },
                {
                  "id": "o2",
                  "text": "Vừa...vừa..."
                },
                {
                  "id": "o1",
                  "text": "Thực đơn"
                }
              ],
              "correctOptionId": "o1"
            },
            {
              "id": "quiz_2",
              "questionText": "Từ \"又\" (yòu) có nghĩa là gì?",
              "options": [
                {
                  "id": "o1",
                  "text": "Vừa...vừa..."
                },
                {
                  "id": "o3",
                  "text": "Đói"
                },
                {
                  "id": "o2",
                  "text": "Thực đơn"
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
              "text": "尝",
              "pinyin": ""
            },
            {
              "id": "c2",
              "text": "只",
              "pinyin": ""
            },
            {
              "id": "c3",
              "text": "菜单",
              "pinyin": ""
            },
            {
              "id": "c4",
              "text": "记",
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
                  "content": "我觉得"
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "content": "筷子吃饭更方便。"
                }
              ],
              "expectedChoiceId": "c5",
              "hint": "Gợi ý: 尝 / 只 / 菜单 / 记 / 用"
            },
            {
              "id": "q2",
              "speaker": "2",
              "parts": [
                {
                  "type": "text",
                  "content": "你"
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "content": "住那个饭馆的名字了吗？"
                }
              ],
              "expectedChoiceId": "c9",
              "hint": "Gợi ý: 尝 / 只 / 菜单 / 记 / 用"
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
              "meaning": "Món ăn quán này vừa rẻ vừa ngon.",
              "words": [
                {
                  "id": "w3",
                  "text": "的",
                  "pinyin": ""
                },
                {
                  "id": "w4",
                  "text": "菜",
                  "pinyin": ""
                },
                {
                  "id": "w6",
                  "text": "便宜",
                  "pinyin": ""
                },
                {
                  "id": "w8",
                  "text": "好吃",
                  "pinyin": ""
                },
                {
                  "id": "w1",
                  "text": "这个",
                  "pinyin": ""
                },
                {
                  "id": "w5",
                  "text": "又",
                  "pinyin": ""
                },
                {
                  "id": "w2",
                  "text": "饭馆",
                  "pinyin": ""
                },
                {
                  "id": "w7",
                  "text": "又",
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
              "meaning": "Món nào cũng ngon.",
              "words": [
                {
                  "id": "w4",
                  "text": "好吃",
                  "pinyin": ""
                },
                {
                  "id": "w1",
                  "text": "哪个",
                  "pinyin": ""
                },
                {
                  "id": "w2",
                  "text": "菜",
                  "pinyin": ""
                },
                {
                  "id": "w3",
                  "text": "都",
                  "pinyin": ""
                }
              ],
              "correctOrderIds": [
                "w1",
                "w2",
                "w3",
                "w4"
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
              "content": "菜单",
              "pinyin": "càidān"
            },
            {
              "id": "l2",
              "content": "又",
              "pinyin": "yòu"
            },
            {
              "id": "l3",
              "content": "饿",
              "pinyin": "è"
            }
          ],
          "rightItems": [
            {
              "id": "r1",
              "content": "Thực đơn"
            },
            {
              "id": "r2",
              "content": "Vừa...vừa..."
            },
            {
              "id": "r3",
              "content": "Đói"
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
