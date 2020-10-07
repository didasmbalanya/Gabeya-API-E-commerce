import { Sequelize } from 'sequelize-typescript';

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
  settings,
);

// const database = new Sequelize({
//   dialect: 'mysql',
//   database: env.DATABASE_NAME,
//   username: env.DATABASE_USERNAME,
//   password: env.DATABASE_PASSWORD,
//   models: [modelsPath],
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//     keepAlive: true,
//   },
//   host: env.DATABASE_HOST,
//   define: {
//     paranoid: true,
//   },
// });

export default database;
