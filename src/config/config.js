const env = require('./environment.js');

const appEnvironment = env.NODE_ENV;

// database configs
const config = {
  [appEnvironment]: {
    dialect: "mysql",
    host: env.DATABASE_HOST,
    define: {
      paranoid: true,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};

module.exports = config;
