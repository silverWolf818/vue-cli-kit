<template>
  <div>
    <Tips :title="title"></Tips>
    <div class="c-form f-double">
      <Form ref="form" inline>
        <FormItem label="组织机构名称：">
          <Input type="text" placeholder="请输入"/>
        </FormItem>
        <FormItem label="组织机构名称：">
          <Input type="text" placeholder="请输入"/>
        </FormItem>
        <FormItem label="组织机构名称：">
          <Input type="text" placeholder="请输入"/>
        </FormItem>
        <FormItem label="组织机构名称：">
          <Input type="text" placeholder="请输入"/>
        </FormItem>
        <FormItem label="组织机构名称：">
          <Input type="text" placeholder="请输入"/>
        </FormItem>
        <FormItem label="组织机构名称：">
          <Input type="text" placeholder="请输入"/>
        </FormItem>
        <FormItem class="f-row" label="组织机构名称：">
          <Input type="text" placeholder="请输入"/>
        </FormItem>
        <FormItem class="f-row" label="组织机构名称：">
          <Input type="textarea" :autosize="{minRows: 5,maxRows: 10}" placeholder="请输入" />
        </FormItem>
        <FormItem>
          <Button type="primary">提交</Button>
          <Button type="primary">返回</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
  import Tips from '@/components/tips'
  export default {
    components: {
      Tips
    },
    data(){
      return {
        title:'双列表单'
      }
    }
  }
</script>

<style scoped>

</style>
