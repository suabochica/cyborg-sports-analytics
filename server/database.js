import Sequelize from 'sequelize'

// local MySQL database connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'esgrima'
})

connection.connect(function(error) {
  if (error) throw error;
});

module.exports = connection;