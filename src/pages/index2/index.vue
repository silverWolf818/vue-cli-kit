<template>
  <Layout style="height: 100%">
    <Sider ref="side" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" :width="256">
      <div class="layout-logo">
        <p class="logo-title">Vue admin</p>
      </div>
      <Menu theme="dark" width="auto" :class="menuitemClasses" :accordion="true" @on-select="select" @on-open-change="changed">
        <Submenu v-for="(sub,index) in menu" :name="sub.menuName" :key="sub.index" v-toggle="isCollapsed">
          <template slot="title">
            <Icon type="settings"></Icon>
            <span v-if="!isCollapsed">{{ sub.menuName }}</span>
          </template>
          <MenuItem v-for="(item,index) in sub.subMenus" :name="item.menuName" :key="item.index">
            {{ item.menuName }}
          </MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout>
      <Header :style="{padding: 0}" class="layout-header-bar">
        <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
      </Header>
      <Content>
        <router-view />
      </Content>
    </Layout>
  </Layout>
</template>

<script>
  import './index.scss'
  import { mapGetters,mapActions } from 'vuex'
  export default {
    data () {
      return {
        isCollapsed: false
      }
    },
    computed: {
      menu() {
        return this.$store.state.index.menu;
      },
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      ...mapActions([
        'initMenu'
      ]),
      collapsedSider () {
        this.$refs.side.toggleCollapse();
      },
      select(e) {

      },
      changed() {
        if(this.isCollapsed){
          console.log(window.document.querySelectorAll('.ivu-menu-submenu .ivu-menu'));
        }else{
          console.log(2);
        }
      }
    },
    directives: {
      toggle:{
        componentUpdated(el,binding) {
          if(binding.value){
            console.log(el);
            console.log(el.className);
            el.children()
          }
        }
      }
    },
    created() {
      this.initMenu();
    }
  }
</script>

<style scoped>

</style>
