const Sequelize = require('sequelize') // Promise-based Object Relational Mapping (ORM). http://docs.sequelizejs.com/
const _ = require('lodash') // A modern JavaScript utility library delivering modularity, performance & extras. https://lodash.com/docs
const Faker = require('faker') // Generate massive amounts of realistic fake data in Node.js and the browser. https://github.com/marak/Faker.js/

/**
 * Sequelize object creation
 * @params: database, username, password
 * Create the root query, starter point to GraphQL for give shape to the data. Minute 50:48 of the video.
 */
const sequelizeConnection = new Sequelize(
  'blog',
  'bos_user',
  'bos_password',
  {
    dialect: 'mysql',
    host: 'localhost',
  }
)

/**
 * Sequelize database models
 */
const Person = sequelizeConnection.define(
  'person',
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      },
    },
  }
)

const Post = sequelizeConnection.define(
  'post',
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }
)

/**
 *  Relationships
 */
Person.hasMany(Post)
Post.belongsTo(Person);

/**
 * Sequelize database synchronize
 */
sequelizeConnection.sync({force: true})
  .then(() => {
    _.times(10, () => {
      return Person.create({
        firstName: Faker.name.firstName(),
        lastName: Faker.name.lastName(),
        email: Faker.internet.email(),
      })
      .then(person => {
        return person.createPost({
          title: `Sample post by ${person.firstName}`,
          content: 'Here is some content',
        })
      })
    })
  })

// Test the connection
sequelizeConnection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  });

  // DONE!: Create the SQL Database. Minute 16:20 of the video.
  module.exports = sequelizeConnection