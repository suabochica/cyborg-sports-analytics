<template>
  <div class="courses content">
    <section class="align--left">
      <h1>Ejemplo Courses</h1>
      <h2>Objetivos</h2>
      <ul>
        <li>Configurar Node para poder utilizar GraphQL como lenguaje de sentencias para consultar datos</li>
        <li>Explorar las diferentes funcionalidades de Graphql</li>
      </ul>
      <p>Por tanto las tecnologias utilizadas en este ejemplo son:</p>
      <ul>
        <li>Express</li>
        <li>GraphQL</li>
        <li>Node</li>
      </ul>
      <h2>Montaje</h2>
      <ol>
        <li>Correr el comando <code>node server/courses_example/coursesServer.js</code></li>
        <li>Abrir en el navegador la ruta <code>http://localhost:4000/graphql</code></li>
      </ol>
      <h2>Características</h2>
      <p>Este ejemplo no crea un evento desde el cliente para consumir los datos. Las interacciones se limitan a las consultas registradas en el archivo <code>coursesQueries.md</code>. Dichas consultas pueden probarse en la interfaz <i>graphiql</i>.</p>
      <p>Los datos utilizados en este ejemplo se encuentran en el archivo <code>coursesServer.js</code>. y son los siguientes:</p>
      <pre>
[
  {
    id: 1,
    title: 'The Complete Node.js Developer Course',
    author: 'Andrew Mead, Rob Percival',
    description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
    topic: 'Node.js',
    url: 'https://codingthesmartway.com/courses/nodejs/'
  },
  {
    id: 2,
    title: 'Node.js, Express & MongoDB Dev to Deployment',
    author: 'Brad Traversy',
    description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
    topic: 'Node.js',
    url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/'
  },
  {
    id: 3,
    title: 'JavaScript: Understanding The Weird Parts',
    author: 'Anthony Alicea',
    description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
    topic: 'JavaScript',
    url: 'https://codingthesmartway.com/courses/understand-javascript/'
  }
]
      </pre>
      <!--TODO: Agregar sección de las entradas y las salidas en la interfaz web de GraphQL-->
    </section>
  </div>
</template>
