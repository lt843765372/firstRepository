<template>
    <div>
      skip
      <p>
        {{msg}}
      </p>
      <div>
        <ul>
          <li v-for="item in obj">{{item}}</li>
        </ul>
      </div>
      <button type="button" v-click="add()">add count</button>
    </div>
</template>

<script>
    export default {
      name: 'Skip',
      data () {
        return {
          msg: 'Be A Man ',
          obj:{
            'name':'lt'
          }
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
