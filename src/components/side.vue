<template>
  <Sider hide-trigger collapsible :collapsed-width="78" :style="{background: '#fff'}">
    <Menu ref="sub" theme="light" width="auto">
      <Submenu v-for="sub in menu" :name="sub.menuCode" :key="sub.menuCode">
        <template slot="title">
          {{ sub.menuName }}
        </template>
        <!--<MenuItem v-for="item in sub.subMenus" :name="item.menuCode" :key="item.menuCode">-->
          <!--{{ item.menuName }}-->
        <!--</MenuItem>-->
      </Submenu>
    </Menu>
  </Sider>
</template>

<script>
    export default {
        name: "side",
        props:{
          menu: {
            type: [Array],
            default() {
              return []
            }
          }
        }
    }
</script>

<style scoped>

</style>
