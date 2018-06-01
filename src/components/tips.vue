<template>
  <div class="c-tips">
    <p>{{ title }}</p>
  </div>
</template>

<script>
  export default {
    props:{
      title:{
        type: String,
        default:'title'
      }
    }
  }
</script>

<style scoped>

</style>
