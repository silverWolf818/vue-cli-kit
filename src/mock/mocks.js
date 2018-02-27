/** 2018/2/26 22:38
 *  作者:周志豪
 *  功能:
 *  备注:
 */
import Mock from 'mockjs'

Mock.mock('carts', 'post', {
    "respDesc": '成功',
    "data": [
      {
        "isSelected": true,
        "productCover": "https://img10.360buyimg.com/cms/s80x80_jfs/t2188/335/120248995/69685/87527525/55efa22bNa1eb37da.jpg",
        "productName": "深入浅出Node.js",
        "productInfo": "书名：Node.js学习",
        "productPrice": 57.8,
        "productCount": 3
      },
      {
        "isSelected": true,
        "productCover": "https://img10.360buyimg.com/cms/s80x80_jfs/t9508/97/2285719018/62961/99c5b1b7/59f299b4Nc9e78adb.jpg",
        "productName": "Vue.js实战",
        "productInfo": "书名：Vue.js实战",
        "productPrice": 62.4,
        "productCount": 2
      },
      {
        "isSelected": true,
        "productCover": "https://img10.360buyimg.com/cms/s80x80_jfs/t5713/237/2034261320/248346/e364dcaa/592bf164N7a4187c3.jpg",
        "productName": "JavaScript高级程序设计",
        "productInfo": "书名：JavaScript高级程序设计（第3版）",
        "productPrice": 78.2,
        "productCount": 4
      },
      {
        "isSelected": true,
        "productCover": "https://img10.360buyimg.com/cms/s80x80_jfs/t2047/63/2033152973/398005/5ea9044e/56ea5e6aN38c0f2b8.jpg",
        "productName": "OReilly精品图书系列：JavaScript权威指南",
        "productInfo": "书名：JavaScript权威指南",
        "productPrice": 123.7,
        "productCount": 2
      }
    ],
    "respCode": "0000"
});
