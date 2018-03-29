<template>
    <div id="modules">
      <p>{{ msg }} world!</p>
    </div>
</template>

<script>
    export default {
        name: "modules",
        data() {
          return {
            msg:'hello'
          }
        }
    }
</script>
<style scoped lang="scss">
p{
  font-size: 24px;
}

</style>
