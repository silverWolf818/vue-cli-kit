<template>
  <div class="queryPanel__layout">
    <Form ref="formInline" inline :model="query">
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
        <Col span="8" :style="{ paddingLeft:'58px' }">
          <Button type="primary" :style="{ marginRight:'10px' }" @click="search">搜 索</Button><Button>重 置</Button>
        </Col>
      </Row>
    </Form>
    <div style="border-top: 1px solid #dddee1;width: 100%;margin:10px 0 20px 0;"></div>
    <BaseTable v-bind="table"></BaseTable>
    <!--<Table border height="350" :columns="columns" :data="tableData"></Table>-->
    <!--<Page @on-change="pages" :total="40" :page-size-opts="[10,20,30]" size="small" show-elevator show-sizer></Page>-->
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
        formValidate: {
          case1: '',
          case2: '',
          case3: '',
          case4: '',
          case5: '',
          case6: '',
          cityList: [
            {
              value: 'New York',
              label: 'New York'
            },
            {
              value: 'London',
              label: 'London'
            },
            {
              value: 'Sydney',
              label: 'Sydney'
            },
            {
              value: 'Ottawa',
              label: 'Ottawa'
            },
            {
              value: 'Paris',
              label: 'Paris'
            },
            {
              value: 'Canberra',
              label: 'Canberra'
            }
          ],
          model1: ''
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
              title: '平台协议编号',
              width:140,
              key: 'plaAgreementCode',
              align: 'center'
            },{
              title: '企业协议编号',
              width:130,
              key: 'entAgreementCode',
              align: 'center'
            },{
              title: '协议名称',
              width:120,
              key: 'agreementName',
              align: 'center',
              ellipsis:true,
            },{
              title: '标的物名称',
              width:120,
              key: 'matterName',
              align: 'center'
            },{
              title: '协议分类',
              width:80,
              key: 'agreementType',
              align: 'center'
            },{
              title: '协议状态',
              width:80,
              key: 'agreementStatus',
              align: 'center'
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
              width:130,
              key: 'signTime',
              align: 'center'
            }

          ]
        }
      }
    },
    methods: {
      search(){
        console.log(this.formValidate);
      },
      pages(index) {
        console.log(index);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
