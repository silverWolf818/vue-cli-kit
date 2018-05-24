<template>
    <div>
      <Tips></Tips>
      <div class="c-form f-double">
        <Form ref="form" inline>
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
          <FormItem class="f-row" label="组织机构名称：">
            <Input type="text" placeholder="Password"/>
          </FormItem>
          <FormItem class="f-row" label="组织机构名称：">
            <Input type="textarea" :autosize="{minRows: 5,maxRows: 10}" placeholder="Enter something..." />
          </FormItem>
          <FormItem>
            <Button type="primary">提交</Button>
            <Button type="primary">返回</Button>
          </FormItem>
        </Form>
      </div>
      <div class="c-form f-single">
        <Form ref="form" inline>
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
      }
    }
</script>

<style scoped>

</style>
