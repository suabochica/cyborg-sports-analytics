<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/courses">Courses</router-link> |
      <router-link to="/champions">Champions</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>

    <h3>Example 5</h3>
    <div>
      Data:
      <div v-for="person in people" v-bind:key="person.id">
        {{ person }}
      </div>
    </div>
    <button @click="getPeople">Get People</button>
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
import axios from "axios";

export default {
  name: "app",

  data() {
    return {
      people: [],
      person: {}
    };
  },

  methods: {
    async getPeople() {
      const response = await axios.post("http://localhost:3000/graphql", {
        query: `{
          people {
            id,
            firstName,
            lastName
          }
        }`
      });

      this.people = response.data.data;
    }
  }
};
</script>
