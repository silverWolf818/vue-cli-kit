<template>
  <div style="margin: 10px">
    <div>welcome to vue project</div>
    <Button type="primary" @click="go">demo</Button>
  </div>
</template>

<script>
  // import { query } from '../service/api'
  export default {
    name: "index",
    methods:{
      go(){
        this.$router.push({ name:'menu' });
      }
    },
    created() {
      // query().then((v)=>{
      //   console.log(v);
      // })
    }
  }
</script>

<style scoped>

</style>
