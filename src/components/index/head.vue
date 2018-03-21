<template>
  <Menu mode="horizontal" theme="dark" @on-select="selection">
    <div class="layout-logo"></div>
    <div class="layout-nav">
      <MenuItem v-for="item in menu" :name="item.menuCode" :key="item.menuCode">
        {{ item.menuName }}
      </MenuItem>
    </div>
  </Menu>
</template>

<script>
  import { mapActions } from 'vuex'
    export default {
        props:{
          menu: {
            type: [Array],
            default() {
              return []
            }
          }
        },
        methods:{
          ...mapActions([
            'changeSubMenu'
          ]),
          selection(data) {
            this.changeSubMenu(data);
          }
        }
    }
</script>

<style scoped>

</style>
