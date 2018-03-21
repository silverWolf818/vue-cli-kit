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
Mock.mock('menu', 'post', {
  "respDesc": "success",
  "data": [
    {
      "autoId": 8,
      "parentId": 1,
      "menuName": "首页",
      "menuCode": "home",
      "menuUrl": "/home",
      "subMenus": [
        {
          "autoId": 100,
          "parentId": 8,
          "menuName": "表单页",
          "menuCode": "forms",
          "menuUrl": "",
          "subMenus": [
            {
            "autoId": 10002,
            "parentId": 100,
            "menuName": "基础表单",
            "menuCode": "baseForm",
            "menuUrl": "/form/baseForm"
          }, {
            "autoId": 10003,
            "parentId": 100,
            "menuName": "高级表单",
            "menuCode": "advForm",
            "menuUrl": "/form/advForm"
          }, {
            "autoId": 10004,
            "parentId": 100,
            "menuName": "表单测试",
            "menuCode": "testForm",
            "menuUrl": "/"
          }
          ]
        },{
          "autoId": 102,
          "parentId": 8,
          "menuName": "查询页",
          "menuCode": "query",
          "menuUrl": "",
          "subMenus": [{
            "autoId": 10200,
            "parentId": 102,
            "menuName": "基础查询页",
            "menuCode": "baseQuery",
            "menuUrl": "query/baseQuery"
          }, {
            "autoId": 10201,
            "parentId": 102,
            "menuName": "带选项卡查询页",
            "menuCode": "tabQuery",
            "menuUrl": "query/tabQuery"
          }]
        },{
          "autoId": 103,
          "parentId": 8,
          "menuName": "详情页",
          "menuCode": "detail",
          "menuUrl": "",
          "subMenus": [{
            "autoId": 10300,
            "parentId": 103,
            "menuName": "基础详情页",
            "menuCode": "baseDetail",
            "menuUrl": "detail/baseDetail"
          }]
        }]
    },{
      "autoId": 9,
      "parentId": 2,
      "menuName": "测试菜单1",
      "menuCode": "test1",
      "menuUrl": "",
      "subMenus":[{
        "autoId": 201,
        "parentId": 9,
        "menuName": "二级测试菜单1",
        "menuCode": "test1-1",
        "subMenus":[{
          "autoId": 2001,
          "parentId": 201,
          "menuName": "三级测试菜单1",
          "menuCode": "test11",
          "menuUrl": "/test/test11"
        },{
          "autoId": 2002,
          "parentId": 201,
          "menuName": "三级测试菜单2",
          "menuCode": "test12",
          "menuUrl": "/test/test12"
        }]
      },{
        "autoId": 202,
        "parentId": 9,
        "menuName": "二级测试菜单2",
        "menuCode": "test1-2",
        "subMenus":[{
          "autoId": 2003,
          "parentId": 202,
          "menuName": "三级测试菜单1",
          "menuCode": "test21",
          "menuUrl": "/test/test21"
        },{
          "autoId": 2004,
          "parentId": 202,
          "menuName": "三级测试菜单2",
          "menuCode": "test22",
          "menuUrl": "/test/test22"
        }]
      }]
    }],
  "respCode": "0000"
});
