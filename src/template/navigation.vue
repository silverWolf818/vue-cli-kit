<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 20px 0 auto;
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu ref="nav" @on-select="selection" mode="horizontal" theme="dark" :active-name="active">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem v-for="item in menu" :name="item.menuCode" :key="item.menuCode">
              {{ item.menuName }}
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" :style="{background: '#fff'}">
          <Menu ref="sub" :active-name="subActive" theme="light" width="auto" :class="menuitemClasses" @on-select="selectItem" :open-names="[openName]">
            <Submenu v-for="sub in subMenu" :name="sub.menuCode" :key="sub.menuCode">
                <template slot="title">
                  {{ sub.menuName }}
                </template>
              <MenuItem v-for="item in sub.subMenus" :name="item.menuCode" :key="item.menuCode">
                {{ item.menuName }}
              </MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 12px 12px'}">
          <Breadcrumb :style="{margin: '12px 0'}">
            <BreadcrumbItem>{{ step1 }}</BreadcrumbItem>
            <BreadcrumbItem>{{ step2 }}</BreadcrumbItem>
            <BreadcrumbItem>{{ step3 }}</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '12px', minHeight: '580px', background: '#fff'}">
            <router-view/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isCollapsed: false,
        active:'',
        subActive:'',
        openName:'',
        menu:[],
        subMenu:[],
        step1:'',
        step2:'',
        step3:'',
      }
    },
    created() {
      this.initMenu();
    },
    computed: {
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      initMenu() {
        axios.get('http://47.94.134.239:8080/pages/user/menus').then((res)=>{
          this.menu = res;
          this.initSubMenu();
          this.$nextTick(()=> {
            this.$refs.nav.updateActiveName();
          });
        });
      },
      initSubMenu(data) {
        this.active = this.menu[0].menuCode;
        let active = data ? data : this.active;
        this.subMenu = this.menu.filter(item => item.menuCode === active)[0].subMenus;
        this.step1 = this.menu.filter(item => item.menuCode === active)[0].menuName;
        this.openName = this.subMenu[0].menuCode;
        this.step2 = this.subMenu[0].menuName;
        this.subActive = this.subMenu[0].subMenus[0].menuCode;
        this.step3 = this.subMenu[0].subMenus[0].menuName;
        this.$nextTick(()=> {
          this.$refs.sub.updateOpened();
          this.$refs.sub.updateActiveName();
        });
      },
      selection(data){
        this.initSubMenu(data);
      },
      selectItem(active) {
        console.log(active);
        let id = '',
            data = [];
        this.subMenu.forEach((value)=>{
          data = value.subMenus.filter(item => item.menuCode === active)[0];
          if(data){
            this.step3 = data.menuName;
            id = data.parentId;
          }
          if(value.autoId === id){
            this.step2 = value.menuName;
          }
        });
        this.$router.push({
          name:active
        });
      }
    }
  }
</script>
