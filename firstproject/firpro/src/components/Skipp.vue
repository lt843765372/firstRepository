<template>
    <div>
     skipp
      <div>
        <ul>
          <li v-for="item in items">{{item.name}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Skipp",
        data () {
          return {
            items:[
              {'name':'liuting'},{'name':'xiaoming'}
            ]
          }
        }
    }
</script>

<style scoped>
  ul {
    width: 300px;
    background-color: #ff9e65;
    margin: 0 auto;
    padding: 10px 20px;
  }
  ul > li {
    list-style: none;
    color: #ffffff;
  }
</style>
