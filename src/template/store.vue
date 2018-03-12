<template>
  <div>{{ products }}</div>
</template>

<script>
  import { mapGetters,mapActions } from 'vuex'
    export default {
      computed: {
        ...mapGetters({
         products: 'getCount'
       })
      },
      methods: {
        ...mapActions({
          add: 'increment'
        })
      },
      created(){
        this.add();
      }
    }
</script>

<style scoped>

</style>
