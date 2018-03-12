<template>
  <div class="queryPanel__layout">
    <Form ref="form" inline :model="query">
      <Row :gutter="8">
        <Col span="8">
          <FormItem label="平台协议编号" prop="plaAgreementCode">
            <Input v-model="query.plaAgreementCode" placeholder="请输入"></Input>
          </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="企业协议编号" prop="entAgreementCode">
          <Input v-model="query.entAgreementCode" placeholder="请输入"></Input>
        </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="协议名称" prop="agreementName">
          <Input v-model="query.agreementName" placeholder="请输入"></Input>
        </FormItem>
        </Col>
      </Row>
      <Row :gutter="8">
        <Col span="8">
        <FormItem label="协议分类" prop="agreementType">
          <Select v-model="query.agreementType">
            <Option v-for="item in dic.agreementType" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="协议状态" prop="agreementStatus">
          <Select v-model="query.agreementStatus">
            <Option v-for="item in dic.agreementStatus" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        </Col>
      </Row>
        <Row :gutter="8" v-show="visible">
          <Col span="8">
          <FormItem label="签订开始时间" prop="signTimeStart">
            <DatePicker v-model="query.signTimeStart" format="yyyy-MM-dd" type="date" placeholder="签订开始时间"></DatePicker>
          </FormItem>
          </Col>
          <Col span="8">
          <FormItem label="签订结束时间" prop="signTimeEnd">
            <DatePicker v-model="query.signTimeEnd" format="yyyy-MM-dd" type="date" placeholder="签订结束时间"></DatePicker>
          </FormItem>
          </Col>
        </Row>
      <Row :gutter="8">
        <Col span="8" :style="{ paddingLeft:'58px' }">
          <Button type="primary" :style="{ marginRight:'10px' }" @click="search">搜 索</Button><Button @click="reset">重 置</Button>
          <Button type="text" @click="toggle">展开 <Icon :type="isToggle"></Icon></Button>
        </Col>
      </Row>
      <Row :gutter="8" :style="{ marginTop:'20px' }">
        <Col span="8">
          <Button type="ghost">新增</Button> <Button type="ghost" @click="modify">修改</Button> <Button type="ghost">删除</Button>
        </Col>
      </Row>
    </Form>
    <BaseTable @selectionChange="selectionChange" v-bind="table" ref="basetable"></BaseTable>
  </div>
</template>

<script>
  import BaseTable from '@/components/baseTable.vue'
  export default {
    name: "list",
    components: {
      BaseTable
    },
    created() {

    },
    data() {
      return {
        selection:[],
        visible:false,
        dic:{
          agreementType:[
            {
              label:"全部",
              value:''
            },
            {
              label:"集团集采协议",
              value:0
            },
            {
              label:"区域集采协议",
              value:1
            }
          ],
          agreementStatus:[
            {
              label:"全部",
              value:""
            },
            {
              label:"草稿",
              value:0
            },
            {
              label:"驳回",
              value:1
            },
            {
              label:"审核中",
              value:2
            },
            {
              label:"暂停",
              value:3
            },
            {
              label:"启用",
              value:4
            },
            {
              label:"冻结",
              value:5
            }
          ]
        },
        query:{
          plaAgreementCode:'',
          entAgreementCode:'',
          agreementName:'',
          agreementType:'',
          agreementStatus:'',
          isDispatch:'',
          adjustPrice:'',
          vendorName:'',
          materialId:'',
          signTimeStart:'',
          signTimeEnd:''
        },
        table:{
          url:'http://www.neepp.net/rest/service/routing/qryAgrsByCurrManagerService',
          pageNo:1,
          pageSize:10,
          columns: [
            {
              type: 'selection',
              width: 60,
              align: 'center'
            },{
            type: 'index',
            title:'序号',
            width: 60,
            align: 'center'
            },{
              title: '平台协议编号',
              width:220,
              key: 'plaAgreementCode',
              align: 'center'
            },{
              title: '企业协议编号',
              width:130,
              key: 'entAgreementCode',
              align: 'center',
              ellipsis:true
            },{
              title: '协议名称',
              width:120,
              key: 'agreementName',
              align: 'center',
              ellipsis:true
            },{
              title: '标的物名称',
              width:120,
              key: 'matterName',
              align: 'center'
            },{
              title: '协议分类',
              width:110,
              key: 'agreementType',
              align: 'center',
              render:(h,{row,column,index}) => {
                let data = '';
                switch (row.agreementType){
                  case 0:
                    data = '集团集采协议';
                    break;
                  case 1:
                    data = '区域集采协议';
                    break;
                }
                return h('div', data);
              }
            },{
              title: '协议状态',
              width:80,
              key: 'agreementStatus',
              align: 'center',
              render:(h,{row,column,index}) => {
                let data = '';
                switch (row.agreementStatus){
                  case 0:
                    data = '草稿';
                    break;
                  case 1:
                    data = '驳回';
                    break;
                  case 2:
                    data = '审核中';
                    break;
                  case 3:
                    data = '暂停';
                    break;
                  case 4:
                    data = '启用';
                    break;
                  case 5:
                    data = '冻结';
                    break;
                }
                return h('div', data);
              }
            },{
              title: '是否配送',
              width:80,
              key: 'isDispatch',
              align: 'center'
            },{
              title: '调价机制',
              width:80,
              key: 'adjustPrice',
              align: 'center'
            },{
              title: '供应商名称',
              width:180,
              key: 'vendorName',
              align: 'center'
            },{
              title: '协议经办人',
              width:100,
              key: 'producerName',
              align: 'center'
            },{
              title: '签订时间',
              width:120,
              key: 'signTime',
              align: 'center',
              render:(h,{row,column,index}) => {
                return h('div', moment(row.signTime).format("YYYY-MM-DD"));
              }
            }
          ],
          queryParam(param) {
            return _.assign({
              isEffect:0
            }, param);
          }
        }
      }
    },
    computed: {
      isToggle(){
        return this.visible?'arrow-up-b':'arrow-down-b';
      }
    },
    methods: {
      search(){
        let data = this.query;
        data.pageNo = 1;
        data.signTimeStart && (data.signTimeStart = moment(data.signTimeStart).format("YYYY-MM-DD"));
        data.signTimeEnd && (data.signTimeEnd = moment(data.signTimeEnd).format("YYYY-MM-DD"));
        this.$refs['basetable'].query(data);
      },
      reset(){
        this.$refs['form'].resetFields();
        this.search();
      },
      toggle(){
        this.visible = !this.visible;
      },
      modify(){
        console.log(this.selection);
      },
      selectionChange(data){
        this.selection = data;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
