require('dotenv').config()
module.exports = {
  development: {
    database: 'irev_development',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    database: 'irev_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    database: 'irev_production',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
}
