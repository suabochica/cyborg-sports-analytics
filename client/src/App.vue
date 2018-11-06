<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/reports">Reports</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <h3>Example 1</h3>
    <div>
        Data: {{ example1 }}
    </div>
    <button @click="getLanguage">Get Language</button>
    <hr>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/main.scss";

#app {
  font-family: "Fira Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $mineshaft;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $mineshaft;

    &.router-link-exact-active {
      color: $bluelagoon;
    }
  }
}
</style>

<script>
import axios from 'axios'

export default {
  name: 'app',

  data() {
    return {
      example1: ''
    }
  },

  methods: {
    async getLanguage() {
      try {
        const response = await axios.post('http://localhost:4000/graphql', {
          query: '{ language }'
        })
        this.example1 = response.data.data.language
      } catch (error) {
        console.log('warning'. error)
      }
    }
  }
}
</script>
