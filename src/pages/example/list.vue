<template>
  <div id="list">
    <router-link to="/detail">Go to detail</router-link>
    <Button type="primary" @click="test">http post</Button>
  </div>
</template>

<script>
    export default {
        name: "list",
        methods:{
          test(){
            axios.post('http://47.94.134.239:8080/rest/service/routing/nouser/SelectUserInfoBusiService112', {
            }).then(function (response) {
                console.log(response);
              }).catch(function (error) {
                console.log(error);
              });
          }
        }
    }
</script>

<style scoped>

</style>
