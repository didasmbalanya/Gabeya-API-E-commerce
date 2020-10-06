import { Sequelize } from 'sequelize';

const config = require('../config/config');

const env = require('../config/environment');

const modelsPath = `${__dirname}/models`;

const settings = {
  ...config[env.NODE_ENV],
  models: [modelsPath],
};

const database = new Sequelize(
  env.DATABASE_NAME,
  env.DATABASE_USERNAME,
  env.DATABASE_PASSWORD,
  settings
);


export default database;
