import Sequelize from 'sequelize'

// local MySQL database connection
const sequelize = new Sequelize(
  'esgrima',
  'bos_user',
  'bos_password',
  {
    host: 'localhost',
    user: 'mysql'
  }
)

// Create the Sequelize models
const Esgrimista = sequelize.define(
  'esgrimista',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pais: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }
)

const AccionReaccion = sequelize.define(
  'accion_reaccion',
  {
    quien_inicia: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    accion: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    reaccion: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    toque: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    zona: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    observación: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
  }
)

const Combate = sequelize.define(
  'combate',
  {
    esgrimistaA: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    esgrimistaB: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }
)

// Relationships
// TODO: Talk with Tian about these relations

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  });
