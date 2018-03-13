<template>
  <div>{{ getCount }}</div>
</template>

<script>
  import { mapGetters,mapActions } from 'vuex'
    export default {
      computed: {
        ...mapGetters([
          'getCount'
        ])
      },
      methods: {
        ...mapActions([
          'increment'
        ])
      },
      created(){
        this.increment({
          x:1
        });
      }
    }
</script>

<style scoped>

</style>
