<template>
  <div class="layout-app">
    <div class="layout-header">
      <Menu ref="menu" mode="horizontal" :active-name="getActiveNav" theme="dark" @on-select="selection">
        <div class="layout-logo" @click="home"></div>
        <div class="layout-nav">
          <MenuItem v-for="item in getMenu2" :name="item.menuCode" :key="item.menuCode">
            {{ item.menuName }}
          </MenuItem>
        </div>
      </Menu>
      <Crumbs :step="getCrumbs"></Crumbs>
    </div>
    <div class="layout-sider">
      <Sider hide-trigger collapsible :collapsed-width="78" :style="{background: '#fff'}">
        <Menu :accordion="true" :open-names="[getOpenName]" :active-name="getActiveName" ref="sub" theme="light" width="auto" @on-select="selectItem">
          <Submenu v-for="sub in getSubMenu" :name="sub.menuCode" :key="sub.menuCode">
            <template slot="title">
              {{ sub.menuName }}
            </template>
            <MenuItem v-for="item in sub.subMenus" :name="item.menuCode" :key="item.menuCode">
              {{ item.menuName }}
            </MenuItem>
          </Submenu>
        </Menu>
      </Sider>
    </div>
    <div class="layout-content">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import './index.scss'
  import { mapGetters,mapActions } from 'vuex'
  import Crumbs from '@/components/index/crumbs'
  export default {
    components:{
      Crumbs,
    },
    computed: {
      ...mapGetters([
        'getMenu2',
        'getSubMenu',
        'getCrumbs',
        'getOpenName',
        'getActiveName',
        'getActiveNav'
      ])
    },
    methods: {
      ...mapActions([
        'initMenu2',
        'changeSubMenu',
        'changeItem',
        'reset'
      ]),
      selection(data) {
        this.changeSubMenu(data);
        this.$nextTick(()=> {
          this.$refs.sub.updateOpened();
          this.$refs.sub.updateActiveName();
        });

      },
      selectItem(data) {
        this.changeItem(data);
        this.$router.push({
          name:data
        });
        this.$nextTick(()=> {
          this.$refs.menu.updateActiveName();
        });
      },
      home(){
        this.$router.push({
          name:'home'
        });
        this.reset();
        this.$nextTick(()=> {
          this.$refs.sub.updateOpened();
          this.$refs.sub.updateActiveName();
        });
      }
    },
    created(){
      this.initMenu2(this);
    }
  }
</script>
