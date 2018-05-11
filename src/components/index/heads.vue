<template>
  <Menu mode="horizontal" theme="dark" @on-select="selection">
    <div class="layout-logo"></div>
    <div class="layout-nav">
      <MenuItem name="home" key="home">首页</MenuItem>
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
            if(data === 'home'){
              this.$router.push({
                name:'home'
              })
            }else{
              this.changeSubMenu(data);
            }
          }
        }
    }
</script>

<style scoped>

</style>
