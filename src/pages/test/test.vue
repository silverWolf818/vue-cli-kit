<template>
    <div>tewewewst</div>
</template>

<script>
  import { queryTest,queryPerms } from '../../service/api'
export default {
  mounted() {
    let obj = {
      name:'z',
      ee:'z'
    }
    queryTest({ data:obj });
    queryPerms({
      data:'authority=vw_homepage_backlog_approve,vw_homepage_check_accept_1'
    });
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
