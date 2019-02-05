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
      <h2>Consultas</h2>
      <p>A continuación se van a mostrar las entradas y las salidas de los queries que se establecen con graphql.</p>
      <p>Para recuperar un curso en particular.</p>
      <p><i>entrada:</i></p>
      <pre>
query getSingleCourse($courseID: Int!) {
  course(id: $courseID) {
    title
    author
    description
    topic
    url
  }
}
# Query Variables
{
  "courseID": 1
}
      </pre>
      <p><i>salida:</i></p>
      <pre>
{
  "data": {
    "course": {
      "title": "The Complete Node.js Developer Course",
      "author": "Andrew Mead, Rob Percival",
      "description": "Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!",
      "topic": "Node.js",
      "url": "https://codingthesmartway.com/courses/nodejs/"
    }
  }
}
      </pre>
      <p>Para recuperar fragmentos de varios cursos utilizando la funcionalidad <code>fragment</code> de graphql.</p>
      <p><i>entrada:</i></p>
      <pre>
query getCourseWithFragments($courseID1: Int!, $courseID2: Int!) {
  course1: course(id: $courseID1) {
    ...courseFields
  }
  course2: course(id: $courseID2) {
    ...courseFields
  }
}

fragment courseFields on Course {
  title
  author
  description
  topic
  url
}
# Query Variables
{
  "courseID1": 2,
  "courseID2": 3,
}
      </pre>
      <p><i>salida:</i></p>
      <pre>
{
  "data": {
    "course1": {
      "title": "Node.js, Express & MongoDB Dev to Deployment",
      "author": "Brad Traversy",
      "description": "Learn by example building & deploying real-world Node.js applications from absolute scratch",
      "topic": "Node.js",
      "url": "https://codingthesmartway.com/courses/nodejs-express-mongodb/"
    },
    "course2": {
      "title": "JavaScript: Understanding The Weird Parts",
      "author": "Anthony Alicea",
      "description": "An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.",
      "topic": "JavaScript",
      "url": "https://codingthesmartway.com/courses/understand-javascript/"
    }
  }
}
      </pre>
      <p>Para actualizar el tema de un curso en particular utilizando la funcionalidad <code>mutatution</code> de graphql.</p>
      <p><i>entrada:</i></p>
      <pre>
mutation updateCourseTopic($id: Int!, $topic: String!) {
  updateCourseTopic(id: $id, topic: $topic) {
    ...courseFields
  }
}

fragment courseFields on Course {
  title
  author
  description
  topic
  url
}
# Query Variables
{
  "id": 1,
  "topic": "Norick"
}
      </pre>
      <p><i>salida:</i></p>
      <pre>
{
  "data": {
    "updateCourseTopic": {
      "title": "The Complete Node.js Developer Course",
      "author": "Andrew Mead, Rob Percival",
      "description": "Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!",
      "topic": "Norick",
      "url": "https://codingthesmartway.com/courses/nodejs/"
    }
  }
}
      </pre>
    </section>
  </div>
</template>
