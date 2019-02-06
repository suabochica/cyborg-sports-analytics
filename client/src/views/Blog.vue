<template>
  <div class="reports content">
    <section class="align--left">
      <h1>Ejemplo Blog</h1>
      <h2>Objetivos</h2>
      <ul>
        <li>Configurar <code>Node</code> para poder utilizar <code>GraphQL</code> como lenguaje de sentencias para consultar datos a través de peticiones que se envían desde el cliente con <code>axios</code> y <code>vue</code></li>
        <li>Integrar eventos emitidos desde el cliente con formularios web que realicen consultas en el servidor</li>
        <li>Desarrollar los conceptos de <i>modelo</i>, <i>tipos</i> y <i>shcemas</i> de GraphQL</li>
        <li>Configurar <code>Express</code> y <code>Sequelize</code> para conectarse y posteriormente interactuar con una base de datos creada con <code>MySQL</code></li>
      </ul>
      <p>Por tanto las tecnologias utilizadas en este ejemplo son:</p>
      <ul>
        <li>Vue</li>
        <li>Axios</li>
        <li>Express</li>
        <li>GraphQL</li>
        <li>Sequelize</li>
        <li>MySQL</li>
        <li>Node</li>
      </ul>

      <h2>Montaje</h2>
      <h6>Servidor</h6>
      <ol>
        <li>Correr el comando <code>node server/blog/blogServer.js</code></li>
        <li>Abrir en el navegador la ruta <code>http://localhost:4000/graphql</code></li>
      </ol>
      <h6>Cliente</h6>
      <ol>
        <li>Correr el comando <code>cd client</code></li>
        <li>Correr el comando <code>npm run serve</code></li>
        <li>Abrir en el navegador la ruta <code>http://localhost:8080</code></li>
      </ol>

      <h2>Características</h2>
      <p>Este ejemplo tiene unos botones a nivel del cliente que van a activar un evento para realizar una consulta de los datos que se encuentran en el servidor</p>
      <p>El servidor se conectara a la base de datos y recuperará la informacion almacendada</p>

      <h2>Formularios</h2>
      <h6>Example 1: Obtener personas</h6>
        <div>
        Data:
        <div v-for="person in people" v-bind:key="person.id">
          {{ person }}
        </div>
      </div>
      <button @click="getPeople">Get People</button>
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
