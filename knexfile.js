// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'mydb',
      user:     'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory:'./db/migrations',
    },
    seeds:{
      directory:'./db/seeds'
    }
  },

};
