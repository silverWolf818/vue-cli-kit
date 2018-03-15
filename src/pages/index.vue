<template>
  <div style="margin: 10px">
    <div>welcome to vue project</div>
    <Button type="primary" @click="go">demo</Button>
  </div>
</template>

<script>
  export default {
    name: "index",
    methods:{
      go(){
        this.$router.push({ name:'menu' });
      }
    }
  }
</script>

<style scoped>

</style>
