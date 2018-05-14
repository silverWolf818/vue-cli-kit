<template>
  <div class="layout-app">
    <div class="layout-header">
      <Operate></Operate>
      <Menu ref="menu" mode="horizontal" :active-name="getActiveNav" theme="dark" @on-select="selection">
        <div class="layout-logo" @click="home">
          <p>昊天平台</p>
        </div>
        <div class="layout-nav">
          <MenuItem v-for="item in getMenu2" :name="item.menuCode" :key="item.menuCode">
            {{ item.menuName }}
          </MenuItem>
        </div>
      </Menu>
      <Crumbs :step="getCrumbs" :style="{ paddingLeft:menuToggle }"></Crumbs>
    </div>
    <div class="layout-sider" :style="{ width:menuToggle }">
      <Sider :width="199" ref="side" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" :style="{background: '#fff'}">
        <div class="toggle">
          <Icon :class="rotateIcon" @click.native="collapsedSider"  type="navicon-round" :size="20"></Icon>
        </div>
        <Menu
          :accordion="true"
          :open-names="[getOpenName]"
          :active-name="getActiveName"
          :class="menuitemClasses"
          ref="sub" theme="light" width="auto" @on-select="selectItem">
          <Submenu v-for="sub in getSubMenu" :name="sub.menuCode" :key="sub.menuCode">
            <template slot="title">
              <Icon type="android-checkbox-outline"></Icon>
              <span v-if="!isCollapsed">{{ sub.menuName }}</span>
            </template>
            <div v-if="!isCollapsed">
              <MenuItem v-for="item in sub.subMenus" :name="item.menuCode" :key="item.menuCode">
                {{ item.menuName }}
              </MenuItem>
            </div>
          </Submenu>
        </Menu>
      </Sider>
    </div>
    <div class="layout-content" :style="{ left:menuToggle }">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import './index.scss'
  import { mapGetters,mapActions } from 'vuex'
  import Crumbs from '@/components/index/crumbs'
  import Operate from '@/components/index/operate'
  export default {
    components:{
      Crumbs,
      Operate
    },
    data() {
      return {
        isCollapsed: false,
      }
    },
    computed: {
      ...mapGetters([
        'getMenu2',
        'getSubMenu',
        'getCrumbs',
        'getOpenName',
        'getActiveName',
        'getActiveNav'
      ]),
      rotateIcon () {
        return [
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      },
      menuToggle() {
        return this.isCollapsed ? '79px' : '200px';
      },
    },
    methods: {
      ...mapActions([
        'initMenu2',
        'changeSubMenu',
        'changeItem',
        'reset'
      ]),
      //点击一级菜单
      selection(data) {
        this.changeSubMenu(data);
        this.$nextTick(()=> {
          this.$refs.sub.updateOpened();
          this.$refs.sub.updateActiveName();
        });

      },
      //点击三级菜单
      selectItem(data) {
        this.changeItem(data);
        this.$router.push({
          name:data
        });
        this.$nextTick(()=> {
          this.$refs.menu.updateActiveName();
        });
      },
      //首页
      home(){
        this.$router.push({
          name:'home'
        });
        this.reset();
        this.$nextTick(()=> {
          this.$refs.sub.updateOpened();
          this.$refs.sub.updateActiveName();
        });
      },
      //收起菜单
      collapsedSider () {
        this.$refs.side.toggleCollapse();
        this.$nextTick(()=> {
          this.$refs.sub.updateActiveName();
        });
      },
    },
    created(){
      this.initMenu2(this);
    }
  }
</script>
<style scoped lang="scss">
  .toggle{
    height: 47px;
    line-height: 47px;
    text-align: center;
    border-bottom: 1px solid #eee;
  }
</style>
