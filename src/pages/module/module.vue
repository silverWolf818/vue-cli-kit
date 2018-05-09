<template>
  <div id="modules">
    <p>{{ msg }} world!</p>
  </div>
</template>

<script>
  export default {
    name: "module",
    data() {
      return {
        msg:'hello'
      }
    }
  }
</script>

<style scoped lang="scss">
  p{
    font-size: 24px;
    background: #fff;
  }
</style>
