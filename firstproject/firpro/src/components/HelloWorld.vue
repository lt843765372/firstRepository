<template>
  <div class="hello">
    <h1>{{ hi }}</h1>
    <h1>{{ msg }}</h1>
    <router-link to="./skip">skip</router-link>
    <router-link to="./skipp">skipp</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to HOME',
      hi: 'hi,小笨蛋'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
