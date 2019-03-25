<template>
  <div class="hello">

    <router-link to="./skip">skip</router-link>
    <router-link to="./skipp">skipp</router-link>
    <clp-main></clp-main>
  </div>
</template>

<script>

  import Vue from 'vue'
  export default {
      name: 'HelloWorld'
  }

  Vue.component('clp-main',{
    data: function(){
      return{
          count :0
      }
    },
    template: '<div :click="count++">{{count}}</div>'
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
