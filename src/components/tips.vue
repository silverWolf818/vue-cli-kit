<template>
    <div class="c-tips">{{ title }}</div>
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
