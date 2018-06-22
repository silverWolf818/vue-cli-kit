<template>
    <div>
      <zk-table
        :data="data"
        :columns="columns">
      </zk-table>
    </div>
</template>

<script>
    import ZkTable from 'vue-table-with-tree-grid'
    export default {
        components:{
          ZkTable
        },
        data() {
          return {
            data: [
              {
                name: 'Jack',
                sex: 'male',
                likes: ['football', 'basketball'],
                score: 10,
              },
              {
                name: 'Tom',
                sex: 'male',
                likes: ['football', 'basketball'],
                score: 20,
              },
              {
                name: 'Tom',
                sex: 'male',
                likes: ['football', 'basketball'],
                score: 20,
              },
              {
                name: 'Tom',
                sex: 'male',
                likes: ['football', 'basketball'],
                score: 20,
              },
            ],
            columns: [
              {
                label: 'name',
                prop: 'name',
                width: '400px',
              },
              {
                label: 'sex',
                prop: 'sex',
                minWidth: '50px',
              },
              {
                label: 'score',
                prop: 'score',
              },
              {
                label: 'likes',
                prop: 'likes',
                minWidth: '200px',
                type: 'template',
                template: 'likes',
              },
            ]
          }
        }
    }
</script>

<style scoped>

</style>
