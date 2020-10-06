const env = require('./environment.js');

const appEnvironment = env.NODE_ENV;

// database configs
const config = {
  [appEnvironment]: {
    dialect: env.DATABASE_DIALECT,
    host: env.DATABASE_HOST,
    define: {
      paranoid: true,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },
  },
};

module.exports = config;
