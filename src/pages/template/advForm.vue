<template>
  <div class="layout-form">
    <Form :model="formValidate" :label-width="80" style="width: 600px">
      <FormItem label="用户名" prop="name">
        <Input v-model="formValidate.name" placeholder="请输入用户名"/>
      </FormItem>
      <FormItem label="邮箱" prop="mail">
        <Input v-model="formValidate.mail" placeholder="请输入邮箱"/>
      </FormItem>
    </Form>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          formValidate: {
            name: '',
            mail: ''
          }
        }
      }
    }
</script>

<style scoped>

</style>
