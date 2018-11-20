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

    <h3>Example 2</h3>
    <div>
      Data:
      <div v-for="champion in champions" v-bind:key="champion">
        {{ champion }}
      </div>
    </div>
    <button @click="getChampions">Get Champions</button>
    <hr>

    <h3>Example 3</h3>
    Name: <input v-model="name">
    <div>
      Data:
      <div>
        {{ champion }}
      </div>
    </div>
    <button @click="getChampionByName">Get Champion</button>
    <hr>

    <h3>Example 4</h3>
    Name: <input v-model="championName">
    Attack Damage: <input v-model.number="attack">
    <div>
      Data:
      <div>
        {{ updatedChampion }}
      </div>
    </div>
    <button @click="updateAttackDamage">Update Champion</button>
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
      example1: "",
      champions: [],
      champion: {},
      updatedChampion: {},
      name: "Ashe",
      championName: "Ashe",
      attack: 5.5
    };
  },

  methods: {
    async getLanguage() {
      try {
        const response = await axios.post("http://localhost:4000/graphql", {
          query: "{ language }"
        });

        this.example1 = response.data.data.language;
      } catch (error) {
        console.log("warning", error);
      }
    },

    async getChampions() {
      const response = await axios.post("http://localhost:4000/graphql", {
        query: `{
          getChampions {
            name
          }
        }`
      });

      this.champions = response.data.data;
    },

    async getChampionByName() {
      const response = await axios.post("http://localhost:4000/graphql", {
        query: `
          query GetChampionByName($championName: String!) {
            getChampionByName(name: $championName) {
              name
              attackDamage
            }
          }
        `,
        variables: {
          championName: this.name
        }
      });

      this.champion = response.data.data.getChampionByName;
    },

    async updateAttackDamage() {
      const response = await axios.post("http://localhost:4000/graphql", {
        query: `
          mutation updateAttackDamage($championName: String!, $attackDamage: Float) {
            updateAttackDamage(name: $championName, attackDamage: $attackDamage) {
              name
              attackDamage
            }
          }
        `,
        variables: {
          championName: this.championName,
          attackDamage: this.attack
        }
      });

      this.updatedChampion = response.data.data.updateAttackDamage;
    }
  }
};
</script>
