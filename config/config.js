require('dotenv').config();

module.exports = {
    development: {
        username: 'root',
        password: 'password',
        database: 'passport_demo',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    test: {
        username: 'root',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    production: {
        username: process.env.HEROKU_USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        use_env_variable: process.env.JAWSDB_URL,
        dialect: 'mysql',
    },
};
