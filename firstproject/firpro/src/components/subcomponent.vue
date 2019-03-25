<template>
    <h2>{{message}}</h2>
</template>

<script>
    export default {
        name: "subcomponent",
        data () {
          return {
            message : '我是挂载到主vue上的独立组件'
          }
        }
    }
</script>

<style scoped>

</style>
