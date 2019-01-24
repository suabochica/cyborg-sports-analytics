import Sequelize from 'sequelize' // Promise-based Object Relational Mapping (ORM). http://docs.sequelizejs.com/
import _ from 'lodash' // A modern JavaScript utility library delivering modularity, performance & extras. https://lodash.com/docs
import Faker from 'faker' // Generate massive amounts of realistic fake data in Node.js and the browser. https://github.com/marak/Faker.js/

/**
 * Sequelize object creation
 * @params: database, username, password
 */
const sequelize = new Sequelize(
  'blog',
  'bos_user',
  'bos_password',
  {
    host: 'localhost',
    user: 'mysql',
  }
)

/**
 * Sequelize database models
 */
const Person = sequelize.define(
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

const Post = sequelize.define(
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
Person.hasToMany(Post)
Post.belongsTo(Person);

/**
 * Sequelize database synchronize
 */
Sequelize.sync({force: true})
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
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  });

  // TODO: Create the SQL Database. Minute 16:20 of the video.