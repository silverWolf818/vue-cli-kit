/** 2018/2/26 22:38
 *  作者:周志豪
 *  功能:
 *  备注:
 */
import Mock from 'mockjs'

Mock.mock('menu', 'post', {
  "respDesc": "success",
  "data": [
    {
      "autoId": 8,
      "parentId": 1,
      "menuName": "首页",
      "menuCode": "home",
      "menuUrl": "",
      "subMenus":[]
    },
    {
      "autoId": 8,
      "parentId": 1,
      "menuName": "基础组件",
      "menuCode": "base",
      "menuUrl": "",
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
            "menuUrl": "baseForm",
            "subMenus":[]
          }, {
            "autoId": 10003,
            "parentId": 100,
            "menuName": "高级表单",
            "menuCode": "advForm",
            "menuUrl": "advForm",
            "subMenus":[]
          }]
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
            "menuUrl": "baseQuery",
            "subMenus":[]
          }, {
            "autoId": 10201,
            "parentId": 102,
            "menuName": "带选项卡查询页",
            "menuCode": "tabQuery",
            "menuUrl": "tabQuery",
            "subMenus":[]
          },{
            "autoId": 10202,
            "parentId": 102,
            "menuName": "中台查询页",
            "menuCode": "baseQuery1",
            "menuUrl": "baseQuery1",
            "subMenus":[]
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
            "menuUrl": "baseDetail",
            "subMenus":[]
          }]
        }]
    },{
      "autoId": 9,
      "parentId": 2,
      "menuName": "组件",
      "menuCode": "component",
      "menuUrl": "",
      "subMenus":[{
        "autoId": 201,
        "parentId": 9,
        "menuName": "表单类",
        "menuCode": "formComponent",
        "subMenus":[{
          "autoId": 2001,
          "parentId": 201,
          "menuName": "输入框",
          "menuCode": "input",
          "menuUrl": "input",
          "subMenus":[]
        },{
          "autoId": 2002,
          "parentId": 201,
          "menuName": "单选框",
          "menuCode": "radio",
          "menuUrl": "radio",
          "subMenus":[]
        },{
          "autoId": 2003,
          "parentId": 201,
          "menuName": "多选框",
          "menuCode": "checkbox",
          "menuUrl": "checkbox",
          "subMenus":[]
        },{
          "autoId": 2004,
          "parentId": 201,
          "menuName": "选择框",
          "menuCode": "select",
          "menuUrl": "select",
          "subMenus":[]
        },{
          "autoId": 2005,
          "parentId": 201,
          "menuName": "日期选择器",
          "menuCode": "date",
          "menuUrl": "date",
          "subMenus":[]
        },{
          "autoId": 2006,
          "parentId": 201,
          "menuName": "级联选择",
          "menuCode": "cascader",
          "menuUrl": "cascader",
          "subMenus":[]
        },{
          "autoId": 2007,
          "parentId": 201,
          "menuName": "地址选择",
          "menuCode": "area",
          "menuUrl": "area",
          "subMenus":[]
        },{
          "autoId": 2007,
          "parentId": 201,
          "menuName": "上传",
          "menuCode": "upload",
          "menuUrl": "upload",
          "subMenus":[]
        },{
          "autoId": 2008,
          "parentId": 201,
          "menuName": "富文本编辑器",
          "menuCode": "textEditor",
          "menuUrl": "textEditor",
          "subMenus":[]
        }]
      }]
    }],
  "respCode": "0000"
});


Mock.mock('menus', 'post', {
  "respDesc": "success",
  "data": [{
      "menuName": "表单页",
      "menuIcon":"compose",
      "menuCode": "form",
      "menuUrl": "",
      "subMenus": [
        {
          "menuName": "基础表单",
          "menuCode": "baseForm",
          "menuUrl": "/baseForm"
        },{
          "menuName": "高级表单",
          "menuCode": "advForm",
          "menuUrl": "/advForm"
        }]
    }, {
      "menuName": "列表页",
      "menuIcon":"ios-grid-view",
      "menuCode": "list",
      "menuUrl": "",
      "subMenus": [
        {
          "menuName": "查询表格",
          "menuCode": "baseQuery",
          "menuUrl": "/baseQuery"
        },{
          "menuName": "选项卡表格",
          "menuCode": "tabQuery",
          "menuUrl": "/tabQuery"
        }]
    }, {
      "menuName": "详情页",
      "menuIcon":"ios-list-outline",
      "menuCode": "detail",
      "menuUrl": "",
      "subMenus": [
        {
          "menuName": "基础详情页",
          "menuCode": "baseDetail",
          "menuUrl": "/baseDetail"
        },{
          "menuName": "高级详情页",
          "menuCode": "advDetail",
          "menuUrl": "/advDetail"
        }]
    }, {
      "menuName": "结果页",
      "menuIcon":"ios-checkmark-outline",
      "menuCode": "result",
      "menuUrl": "",
      "subMenus": [
        {
          "menuName": "成功",
          "menuCode": "success",
          "menuUrl": "/success"
        },
        {
          "menuName": "失败",
          "menuCode": "fail",
          "menuUrl": "/fail"
        }]
    }],
  "respCode": "0000"
});

var data = {
  "respDesc": "success",
  "data": [
    {
      "autoId": 8,
      "parentId": 1,
      "menuName": "基础组件",
      "menuCode": "base",
      "menuUrl": "",
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
              "menuName": "单列表单",
              "menuCode": "baseForm",
              "menuUrl": "baseForm",
              "subMenus": []
            },
            {
              "autoId": 10003,
              "parentId": 100,
              "menuName": "双列表单",
              "menuCode": "advForm",
              "menuUrl": "advForm",
              "subMenus": []
            }
          ]
        },
        {
          "autoId": 102,
          "parentId": 8,
          "menuName": "查询页",
          "menuCode": "query",
          "menuUrl": "",
          "subMenus": [
            {
              "autoId": 10202,
              "parentId": 102,
              "menuName": "中台查询页",
              "menuCode": "baseQuery1",
              "menuUrl": "baseQuery1",
              "subMenus": []
            }
          ]
        },
        {
          "autoId": 103,
          "parentId": 8,
          "menuName": "详情页",
          "menuCode": "detail",
          "menuUrl": "",
          "subMenus": [
            {
              "autoId": 10300,
              "parentId": 103,
              "menuName": "基础详情页",
              "menuCode": "baseDetail",
              "menuUrl": "baseDetail",
              "subMenus": []
            }
          ]
        }
      ]
    },
    {
      "autoId": 9,
      "parentId": 2,
      "menuName": "组件",
      "menuCode": "component",
      "menuUrl": "",
      "subMenus": [
        {
          "autoId": 201,
          "parentId": 9,
          "menuName": "表单类",
          "menuCode": "formComponent",
          "subMenus": [
            {
              "autoId": 2001,
              "parentId": 201,
              "menuName": "输入框",
              "menuCode": "input",
              "menuUrl": "input",
              "subMenus": []
            },
            {
              "autoId": 2002,
              "parentId": 201,
              "menuName": "单选框",
              "menuCode": "radio",
              "menuUrl": "radio",
              "subMenus": []
            },
            {
              "autoId": 2003,
              "parentId": 201,
              "menuName": "多选框",
              "menuCode": "checkbox",
              "menuUrl": "checkbox",
              "subMenus": []
            },
            {
              "autoId": 2004,
              "parentId": 201,
              "menuName": "选择框",
              "menuCode": "select",
              "menuUrl": "select",
              "subMenus": []
            },
            {
              "autoId": 2005,
              "parentId": 201,
              "menuName": "日期选择器",
              "menuCode": "date",
              "menuUrl": "date",
              "subMenus": []
            },
            {
              "autoId": 2006,
              "parentId": 201,
              "menuName": "级联选择",
              "menuCode": "cascader",
              "menuUrl": "cascader",
              "subMenus": []
            },
            {
              "autoId": 2007,
              "parentId": 201,
              "menuName": "地址选择",
              "menuCode": "area",
              "menuUrl": "area",
              "subMenus": []
            },
            {
              "autoId": 2007,
              "parentId": 201,
              "menuName": "上传",
              "menuCode": "upload",
              "menuUrl": "upload",
              "subMenus": []
            },
            {
              "autoId": 2008,
              "parentId": 201,
              "menuName": "富文本编辑器",
              "menuCode": "textEditor",
              "menuUrl": "textEditor",
              "subMenus": []
            }
          ]
        }
      ]
    }
  ],
  "respCode": "0000"
}
