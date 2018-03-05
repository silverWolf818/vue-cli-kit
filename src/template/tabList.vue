<template>
  <div class="queryPanel__layout">
    <Tabs :animated="false" v-model="activeName">
      <TabPane label="生效协议" name="effect">
        <Form ref="form-effect" inline :model="query_effect">
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
        <Form ref="form-abate" inline :model="query_abate">
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
  </div>
</template>

<script>
    export default {
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
          }
        }
      },
      methods:{
        search() {
          console.log(this[`query_${this.activeName}`]);
        },
        reset() {

        }
      }
    }
</script>

<style scoped>

</style>
