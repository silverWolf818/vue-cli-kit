<style scoped>

</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
              展示菜单
            </MenuItem>
            <MenuItem name="2">
              展示菜单
            </MenuItem>
            <MenuItem name="3">
              展示菜单
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider :width="256" ref="side" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" :style="{background: '#fff'}">
          <Menu theme="light" width="auto" :class="menuitemClasses" @on-select="link">
            <Submenu name="1">
              <template slot="title">
                <Icon type="compose"></Icon>
                表单页
              </template>
              <MenuItem name="forms">基础表单</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-grid-view"></Icon>
                列表页
              </template>
              <MenuItem name="list">查询表格</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-paper"></Icon>
                详情页
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 12px 12px'}">
          <Breadcrumb :style="{margin: '12px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '600px', background: '#fff'}">
            <router-view/>
          </Content>
        </Layout>
      </Layout>
      <Footer class="layout-footer-center">2018-2019 &copy; 天源迪科</Footer>
    </Layout>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isCollapsed: false
      }
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
      collapsedSider () {
        this.$refs.side.toggleCollapse();
      },
      link(name) {
        this.$router.push({
          name:name
        });
      }
    }
  }
</script>
