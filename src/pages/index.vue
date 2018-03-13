<template>
  <div @click="go">项目首页</div>
</template>

<script>
  export default {
    name: "index",
    methods:{
      go(){
        this.$router.push({ name:'menu' });
      }
    },
    created() {
      console.log(conf.serverUrl());
    }
  }
</script>

<style scoped>

</style>
