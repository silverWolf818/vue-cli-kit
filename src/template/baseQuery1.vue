<template>
    <div>
      <Tips :title="title"></Tips>
      <div class="c-query">
        <Form ref="query" inline>
          <FormItem label="组织机构名称：">
            <Input type="text" placeholder="Username"/>
          </FormItem>
          <FormItem label="组织机构名称：">
            <Input type="text" placeholder="Password"/>
          </FormItem>
          <FormItem label="组织机构名称：">
            <Input type="text" placeholder="Password"/>
          </FormItem>
          <FormItem label="组织机构名称：">
            <Input type="text" placeholder="Username"/>
          </FormItem>
          <FormItem label="组织机构名称：">
            <Input type="text" placeholder="Password"/>
          </FormItem>
          <FormItem label="组织机构名称：">
            <Input type="text" placeholder="Password"/>
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
        query:{},
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
              key: 'occupation'
            },{
              title: '邮箱',
              key: 'email',
            },{
              title: '收入',
              key: 'income',
            },{
              title: '类型',
              key: 'type',
            },
            {
              title: '时间',
              key: 'date',
              render:(h,{row,column,index}) => {
                return h('div', moment(row.signTime).format("YYYY-MM-DD"));
              }
            }
          ]
        }
      }
    },
    methods:{
      search(){
        this.$refs['basetable'].query(this.query);
      },
      add(){
        this.$router.push({
          name:'form1'
        });
      }
    }
  }
</script>

<style scoped>

</style>
