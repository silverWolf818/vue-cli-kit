<template>
  <div id="list">
    <Form ref="formInline" inline :model="formValidate" :label-width="120" :style="{ padding:'10px' }">
      <Row :gutter="8">
        <Col span="8">
          <FormItem label="搜索条件1" prop="case1" :style="{ width:'100%' }">
            <Input v-model="formValidate.case1" placeholder="请输入"></Input>
          </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="搜索条件2" prop="case2" :style="{ width:'100%' }">
          <Input v-model="formValidate.case2" placeholder="请输入"></Input>
        </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="搜索条件3" prop="case3" :style="{ width:'100%' }">
          <Input v-model="formValidate.case3" placeholder="请输入"></Input>
        </FormItem>
        </Col>
      </Row>
      <Row :gutter="8">
        <Col span="8">
        <FormItem label="时间选择" :style="{ width:'100%' }">
          <DatePicker type="date" placeholder="请选择日期" style="width: 100%"></DatePicker>
        </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="下拉框" :style="{ width:'100%' }">
          <Select v-model="formValidate.model1" style="width:100%">
            <Option v-for="item in formValidate.cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="搜索条件6" prop="case6" :style="{ width:'100%' }">
          <Input v-model="formValidate.case6" placeholder="请输入"></Input>
        </FormItem>
        </Col>
      </Row>
      <Row :gutter="8">
        <Col span="8" :style="{ paddingLeft:'58px' }">
          <Button type="primary" :style="{ marginRight:'10px' }">搜 索</Button><Button>重 置</Button>
        </Col>
      </Row>
    </Form>
    <div style="border-top: 1px solid #dddee1;width: 100%;margin:10px 0 20px 0;"></div>
    <Table border :columns="columns1" :data="data1"></Table>
    <Page :total="40" :page-size-opts="[10,20,30]" size="small" show-elevator show-sizer :style="{ marginTop:'20px',textAlign:'right' }"></Page>
  </div>
</template>

<script>
  export default {
    name: "list",
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
        columns1: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: 'Name',
            key: 'name'
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          }
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
