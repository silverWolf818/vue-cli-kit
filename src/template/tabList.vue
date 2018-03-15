<template>
  <div class="tabList">
    <div class="tips">
      <h2>选项卡表格</h2>
      <div>带选项卡的查询表格。</div>
    </div>
    <div class="queryPanel__layout">
      <Tabs :animated="false" v-model="activeName">
        <TabPane label="生效协议" name="effect">
          <Form ref="form_effect" inline :model="query_effect">
            <Row :gutter="8">
              <Col span="8">
              <FormItem label="平台协议编号1" prop="plaAgreementCode">
                <Input v-model="query_effect.plaAgreementCode" placeholder="请输入"></Input>
              </FormItem>
              </Col>
              <Col span="8">
              <FormItem label="企业协议编号1" prop="entAgreementCode">
                <Input v-model="query_effect.entAgreementCode" placeholder="请输入"></Input>
              </FormItem>
              </Col>
            </Row>
            <Row :gutter="8">
              <Col span="8" :style="{ paddingLeft:'58px' }">
              <Button type="primary" :style="{ marginRight:'10px' }" @click="search">搜 索</Button><Button @click="reset">重 置</Button>
              </Col>
            </Row>
          </Form>
        </TabPane>
        <TabPane label="失效协议" name="abate">
          <Form ref="form_abate" inline :model="query_abate">
            <Row :gutter="8">
              <Col span="8">
              <FormItem label="平台协议编号2" prop="plaAgreementCode">
                <Input v-model="query_abate.plaAgreementCode" placeholder="请输入"></Input>
              </FormItem>
              </Col>
              <Col span="8">
              <FormItem label="企业协议编号2" prop="entAgreementCode">
                <Input v-model="query_abate.entAgreementCode" placeholder="请输入"></Input>
              </FormItem>
              </Col>
            </Row>
            <Row :gutter="8">
              <Col span="8" :style="{ paddingLeft:'58px' }">
              <Button type="primary" :style="{ marginRight:'10px' }" @click="search">搜 索</Button><Button @click="reset">重 置</Button>
              </Col>
            </Row>
          </Form>
        </TabPane>
      </Tabs>
      <BaseTable v-if="activeName === 'effect'" key="1" v-bind="table.effect" ref="table_effect"></BaseTable>
      <BaseTable v-if="activeName === 'abate'" key="2" v-bind="table.abate" ref="table_abate"></BaseTable>
    </div>
  </div>
</template>

<script>
    import BaseTable from '@/components/baseTable.vue'
    export default {
      components: {
        BaseTable
      },
      data() {
        return {
          activeName:'effect',
          query_effect:{
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
          query_abate:{
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
            effect:{
              url:conf.api('qryAgrsByCurrManagerService'),
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
                  width:140,
                  key: 'plaAgreementCode',
                  align: 'center'
                },{
                  title: '企业协议编号',
                  width:220,
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
            },
            abate:{
              url:conf.api('qryAgrsByCurrManagerService'),
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
                  isEffect:1
                }, param);
              }
            }
          }
        }
      },
      watch:{
        activeName(newVal,oldVal){
          this[`query_${oldVal}`] = {}
        }
      },
      methods:{
        search() {
          let data = this[`query_${this.activeName}`];
          data.pageNo = 1;
          this.$refs[`table_${this.activeName}`].query(data);
        },
        reset() {
          console.log(this.activeName);
          this.$refs[`form_${this.activeName}`].resetFields();
          this.search();
        }
      }
    }
</script>

<style scoped>

</style>
