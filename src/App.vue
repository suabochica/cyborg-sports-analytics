<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/reports">Reports</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
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
