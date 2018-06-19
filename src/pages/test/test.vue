<template>
    <div>
      <Button @click="confirm">系统提示</Button>
      <Button class="c-cameo" type="primary">cameo</Button>
    </div>
</template>

<script>
export default {
  methods: {
    confirm () {
      this.$Modal.confirm({
        title: '系统提示',
        content: '<h3>是否继续</h3><p>该操作将删除已编辑的内容且不可恢复，请谨慎操作！</p>',
        okText:'删除',
        cancelText:'取消',
        onOk: () => {
          this.$Message.info('Clicked ok');
        },
        onCancel: () => {
          this.$Message.info('Clicked cancel');
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
