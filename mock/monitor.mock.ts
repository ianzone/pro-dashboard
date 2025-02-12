import type { Request, Response } from 'express';

const getTags = (_: Request, res: Response) => {
  return res.json({
    data: {
      list: [
        {
          name: '黄山市',
          value: 29,
          type: 2,
        },
        {
          name: '韶关市',
          value: 77,
          type: 0,
        },
        {
          name: '邯郸市',
          value: 81,
          type: 1,
        },
        {
          name: '唐山市',
          value: 33,
          type: 1,
        },
        {
          name: '揭阳市',
          value: 90,
          type: 0,
        },
        {
          name: '铜川市',
          value: 29,
          type: 1,
        },
        {
          name: '陇南市',
          value: 9,
          type: 0,
        },
        {
          name: '福州市',
          value: 72,
          type: 1,
        },
        {
          name: '天津市',
          value: 51,
          type: 1,
        },
        {
          name: '晋中市',
          value: 45,
          type: 1,
        },
        {
          name: '通化市',
          value: 34,
          type: 1,
        },
        {
          name: '银川市',
          value: 72,
          type: 1,
        },
        {
          name: '海南藏族自治州',
          value: 19,
          type: 1,
        },
        {
          name: '黔西南布依族苗族自治州',
          value: 77,
          type: 1,
        },
        {
          name: '三沙市',
          value: 60,
          type: 0,
        },
        {
          name: '武威市',
          value: 95,
          type: 1,
        },
        {
          name: '大庆市',
          value: 34,
          type: 1,
        },
        {
          name: '赣州市',
          value: 36,
          type: 1,
        },
        {
          name: '大庆市',
          value: 95,
          type: 2,
        },
        {
          name: '永州市',
          value: 37,
          type: 2,
        },
        {
          name: '宜春市',
          value: 74,
          type: 2,
        },
        {
          name: '郑州市',
          value: 63,
          type: 1,
        },
        {
          name: '运城市',
          value: 41,
          type: 1,
        },
        {
          name: '晋城市',
          value: 8,
          type: 0,
        },
        {
          name: '随州市',
          value: 7,
          type: 1,
        },
        {
          name: '枣庄市',
          value: 59,
          type: 1,
        },
        {
          name: '澳门半岛',
          value: 32,
          type: 0,
        },
        {
          name: '普洱市',
          value: 100,
          type: 0,
        },
        {
          name: '果洛藏族自治州',
          value: 17,
          type: 1,
        },
        {
          name: '宁波市',
          value: 99,
          type: 0,
        },
        {
          name: '固原市',
          value: 64,
          type: 1,
        },
        {
          name: '常德市',
          value: 91,
          type: 2,
        },
        {
          name: '四平市',
          value: 76,
          type: 2,
        },
        {
          name: '平顶山市',
          value: 98,
          type: 1,
        },
        {
          name: '重庆市',
          value: 44,
          type: 1,
        },
        {
          name: '抚顺市',
          value: 19,
          type: 2,
        },
        {
          name: '延安市',
          value: 72,
          type: 1,
        },
        {
          name: '黑河市',
          value: 66,
          type: 1,
        },
        {
          name: '离岛',
          value: 7,
          type: 1,
        },
        {
          name: '北京市',
          value: 39,
          type: 0,
        },
        {
          name: '三亚市',
          value: 69,
          type: 2,
        },
        {
          name: '威海市',
          value: 4,
          type: 0,
        },
        {
          name: '柳州市',
          value: 90,
          type: 1,
        },
        {
          name: '晋城市',
          value: 55,
          type: 1,
        },
        {
          name: '黄冈市',
          value: 67,
          type: 2,
        },
        {
          name: '新余市',
          value: 64,
          type: 0,
        },
        {
          name: '葫芦岛市',
          value: 45,
          type: 1,
        },
        {
          name: '绵阳市',
          value: 48,
          type: 2,
        },
        {
          name: '上海市',
          value: 44,
          type: 0,
        },
        {
          name: '福州市',
          value: 31,
          type: 1,
        },
        {
          name: '通辽市',
          value: 92,
          type: 2,
        },
        {
          name: '重庆市',
          value: 52,
          type: 0,
        },
        {
          name: '滨州市',
          value: 21,
          type: 0,
        },
        {
          name: '抚州市',
          value: 52,
          type: 1,
        },
        {
          name: '衡阳市',
          value: 29,
          type: 0,
        },
        {
          name: '天津市',
          value: 83,
          type: 2,
        },
        {
          name: '绵阳市',
          value: 41,
          type: 1,
        },
        {
          name: '宿州市',
          value: 53,
          type: 1,
        },
        {
          name: '眉山市',
          value: 70,
          type: 1,
        },
        {
          name: '桃园县',
          value: 76,
          type: 2,
        },
        {
          name: '上海市',
          value: 19,
          type: 2,
        },
        {
          name: '海南藏族自治州',
          value: 41,
          type: 0,
        },
        {
          name: '平顶山市',
          value: 69,
          type: 2,
        },
        {
          name: '西安市',
          value: 28,
          type: 1,
        },
        {
          name: '佛山市',
          value: 26,
          type: 0,
        },
        {
          name: '那曲地区',
          value: 30,
          type: 0,
        },
        {
          name: '景德镇市',
          value: 74,
          type: 1,
        },
        {
          name: '和田地区',
          value: 86,
          type: 2,
        },
        {
          name: '上海市',
          value: 81,
          type: 0,
        },
        {
          name: '临沂市',
          value: 60,
          type: 1,
        },
        {
          name: '重庆市',
          value: 58,
          type: 2,
        },
        {
          name: '白银市',
          value: 19,
          type: 1,
        },
        {
          name: '北海市',
          value: 80,
          type: 0,
        },
        {
          name: '文山壮族苗族自治州',
          value: 71,
          type: 2,
        },
        {
          name: '海南藏族自治州',
          value: 4,
          type: 1,
        },
        {
          name: '山南地区',
          value: 43,
          type: 0,
        },
        {
          name: '彰化县',
          value: 26,
          type: 0,
        },
        {
          name: '内江市',
          value: 85,
          type: 1,
        },
        {
          name: '三亚市',
          value: 21,
          type: 0,
        },
        {
          name: '南平市',
          value: 61,
          type: 1,
        },
        {
          name: '淮安市',
          value: 7,
          type: 0,
        },
        {
          name: '鹤岗市',
          value: 71,
          type: 1,
        },
        {
          name: '朔州市',
          value: 34,
          type: 1,
        },
        {
          name: '离岛',
          value: 25,
          type: 1,
        },
        {
          name: '鞍山市',
          value: 3,
          type: 1,
        },
        {
          name: '上海市',
          value: 99,
          type: 0,
        },
        {
          name: '临夏回族自治州',
          value: 61,
          type: 2,
        },
        {
          name: '开封市',
          value: 28,
          type: 2,
        },
        {
          name: '重庆市',
          value: 100,
          type: 0,
        },
        {
          name: '重庆市',
          value: 98,
          type: 0,
        },
        {
          name: '海东市',
          value: 54,
          type: 0,
        },
        {
          name: '重庆市',
          value: 41,
          type: 0,
        },
        {
          name: '银川市',
          value: 62,
          type: 1,
        },
        {
          name: '上海市',
          value: 2,
          type: 0,
        },
        {
          name: '崇左市',
          value: 60,
          type: 0,
        },
        {
          name: '淄博市',
          value: 30,
          type: 2,
        },
        {
          name: '上海市',
          value: 48,
          type: 0,
        },
        {
          name: '抚顺市',
          value: 77,
          type: 2,
        },
        {
          name: '阿克苏地区',
          value: 36,
          type: 2,
        },
        {
          name: '离岛',
          value: 89,
          type: 0,
        },
      ],
    },
  });
};

export default {
  'GET  /api/tags': getTags,
};
