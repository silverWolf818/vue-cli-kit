<template>
  <Layout style="height: 100%">
    <Sider ref="side" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" :width="256">
      <div class="layout-logo">
        <p class="logo-title">Vue admin</p>
      </div>
      <Menu theme="dark" width="auto" :class="menuitemClasses" :accordion="true" @on-select="select" @on-open-change="changed">
        <Submenu v-for="(sub,index) in menu" :name="sub.menuCode" :key="sub.menuCode">
          <template slot="title">
            <Icon type="settings"></Icon>
            <span v-if="!isCollapsed">{{ sub.menuName }}</span>
          </template>
          <div v-if="!isCollapsed">
            <MenuItem v-for="(item,index) in sub.subMenus" :name="item.menuCode" :key="item.menuCode">
              {{ item.menuName }}
            </MenuItem>
          </div>
        </Submenu>
      </Menu>
    </Sider>
    <Layout>
      <Header :style="{padding: 0}" class="layout-header-bar">
        <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
      </Header>
      <Content style="margin: 24px 24px 0;">
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
      select(data) {
        this.$router.push({
          name:data
        });
      },
      changed() {
        if(this.isCollapsed){

        }else{

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
