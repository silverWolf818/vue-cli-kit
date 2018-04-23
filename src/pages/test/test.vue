<template>
    <div>
      <div>tewewewst</div>
    </div>
</template>

<script>
  import { queryTest } from '../../service/api'
export default {
  mounted() {
    console.log(this.$test);
    this.$test.show({
      render: (h) => {
        return h('div', [
          h('Icon', {
            'class': 'demo-spin-icon-load',
            props: {
              type: 'load-c',
              size: 18
            }
          }),
          h('div', 'Loading')
        ])
      }
    });
    let obj = {
      name:'z',
      ee:'z'
    }
    queryTest({ data:obj });
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
