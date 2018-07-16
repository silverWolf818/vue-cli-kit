<template>
  <div>
    <Tips :title="title"></Tips>
    <div class="c-form f-single">
      <Form ref="form" inline>
        <div class="fix">
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
          <FormItem label="组织机构名称：">
            <Input type="text" placeholder="Password"/>
          </FormItem>
          <FormItem label="组织机构名称：">
            <Input type="textarea" :autosize="{minRows: 5,maxRows: 10}" placeholder="Enter something..." />
          </FormItem>
        </div>
        <div class="f-tc">
          <Button type="primary">提交</Button>
          <Button type="primary">返回</Button>
        </div>
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
        title:'新增组织机构'
      }
    }
  }
</script>

<style scoped>

</style>
