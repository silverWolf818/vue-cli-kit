<template>
  <Breadcrumb class="c-breadCrumb">
    <BreadcrumbItem v-for="(item,index) in step" :key="index">{{ item.menuName }}</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
  export default {
    props:{
      step:{
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
