<template>
  <div class="champions content">
    <section class="align--left">
      <h1>Ejemplo Champions</h1>
      <h2>Objetivos</h2>
      <ul>
        <li>Configurar Node para poder utilizar GraphQL como lenguaje de sentencias para consultar datos a través de peticiones que se envían desde el cliente con <code>axios</code> y <code>vue</code></li>
        <li>Integrar eventos emitidos desde el cliente con formularios web que realicen consultas en el servidor</li>
        <li>Desarrollar los conceptos de <i>modelo</i>, <i>tipos</i> y <i>shcemas</i> de GraphQL</li>
      </ul>
      <p>Por tanto las tecnologias utilizadas en este ejemplo son:</p>
      <ul>
        <li>Vue</li>
        <li>Axios</li>
        <li>Express</li>
        <li>GraphQL</li>
        <li>Node</li>
      </ul>

      <h2>Montaje</h2>
      <h6>Servidor</h6>
      <ol>
        <li>Correr el comando <code>node server/champions_example/championsServer.js</code></li>
        <li>Abrir en el navegador la ruta <code>http://localhost:4000/graphql</code></li>
      </ol>
      <h6>Cliente</h6>
      <ol>
        <li>Correr el comando <code>cd client</code></li>
        <li>Correr el comando <code>npm run serve</code></li>
        <li>Abrir en el navegador la ruta <code>http://localhost:3000</code></li>
      </ol>

      <h2>Características</h2>
      <p>Este ejemplo tiene unos botones a nivel del cliente que van a activar un evento para realizar una consulta de los datos que se encuentran en el servidor</p>

      <h2>Formularios</h2>
      <h6>Example 1: Obtener campeones</h6>
      <div>
        Data:
        <div v-for="champion in champions" v-bind:key="champion">
          {{ champion }}
        </div>
      </div>
      <button @click="getChampions">Get Champions</button>
      <hr>

      <h6>Example 2: Obtener campeón por nombre</h6>
      Name: <input v-model="name">
      <div>
        Data:
        <div>
          {{ champion }}
        </div>
      </div>
      <button @click="getChampionByName">Get Champion</button>
      <hr>

      <h6>Example 3: Actualizar campeón dado el nombre</h6>
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
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",

  data() {
    return {
      champions: [],
      champion: {},
      updatedChampion: {},
      name: "Ashe",
      championName: "Ashe",
      attack: 5.5
    };
  },

  methods: {
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
    },
  }
};
</script>