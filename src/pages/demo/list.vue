<template>
  <div>
    <Tips :title="title"></Tips>
    <div class="c-query">
      <Form ref="query" inline :model="query">
        <FormItem label="名称：">
          <Input type="text" placeholder="请输入" v-model="query.name"/>
        </FormItem>
        <FormItem label="日期查询：">
          <DatePicker type="date" placeholder="请输入" v-model="query.email"></DatePicker>
        </FormItem>
        <FormItem label="地址：">
          <Input type="text" placeholder="请输入" v-model="query.address"/>
        </FormItem>
        <FormItem label="年龄：">
          <Input type="text" placeholder="请输入" v-model="query.age"/>
        </FormItem>
        <FormItem label="邮箱：">
          <Input type="text" placeholder="请输入" v-model="query.name"/>
        </FormItem>
        <FormItem label="备注：">
          <Input type="text" placeholder="请输入" v-model="query.desc"/>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="search"><Icon type="ios-search-strong"></Icon> 搜索</Button>
        </FormItem>
      </Form>
    </div>
    <div class="c-operation">
      <Button type="success" @click="add"><Icon type="plus-circled"></Icon> 新增</Button>
    </div>
    <BaseTable v-bind="table" ref="basetable"></BaseTable>
  </div>
</template>

<script>
  import Tips from '@/components/tips'
  import BaseTable from '@/components/baseTable.vue'
  export default {
    components: {
      Tips,
      BaseTable
    },
    data() {
      return {
        title:'菜单管理',
        query:{
          name:'',
          address:'',
          age:'',
          email:'',
          date:'',
          desc:''
        },
        table:{
          mock:true,
          url:'list',
          columns: [
            {
              type: 'selection',
              width:60,
            },{
              type: 'index',
              title:'序号',
              width:80,
              align:'center'
            },{
              title: '名称',
              key: 'name',
            },{
              title: '地址',
              key: 'address',
            },{
              title: '年龄',
              key: 'age',
            },{
              title: '职业',
              key: 'work'
            },{
              title: '邮箱',
              key: 'email',
            },
            {
              title: '时间',
              key: 'date'
            },{
              title: '备注',
              key: 'desc',
            }
          ]
        }
      }
    },
    methods:{
      search(){
        //日期格式需要按照接口规范格式化moment(this.query.date).format("YYYY-MM-DD")  moment不懂请看http://momentjs.cn/
        //这里只提供示例，复杂的条件这里不做描述
        this.$refs['basetable'].query(this.query);
      },
      add(){

      }
    }
  }
</script>

<style scoped>

</style>
