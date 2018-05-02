<template>
  <div class="layout-app">
    <div class="layout-header">
      <Head :menu="getMenu2"></Head>
      <Crumbs :step="getCrumbs"></Crumbs>
    </div>
    <div class="layout-sider">
      <Side :menu="getSubMenu"></Side>
    </div>
    <div class="layout-content">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import './index.scss'
  import { mapGetters,mapActions } from 'vuex'
  import Head from '@/components/index/head'
  import Crumbs from '@/components/index/crumbs'
  import Side from '@/components/index/side'
  export default {
    components:{
      Head,
      Crumbs,
      Side
    },
    computed: {
      ...mapGetters([
        'getMenu2',
        'getSubMenu',
        'getCrumbs'
      ])
    },
    methods: {
      ...mapActions([
        'initMenu2'
      ])
    },
    created(){
      this.initMenu2();
    }
  }
</script>
