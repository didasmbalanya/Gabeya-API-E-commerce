const dotenv = require('dotenv-extended');
const { resolve } = require('path');

const envName = process.env.NODE_ENV
  ? process.env.NODE_ENV.toLowerCase()
  : 'dev';
const isTest = envName === 'test';
const path = resolve(__dirname, `../../env/.env.${envName}`);

// load relevant .env file
dotenv.load({
  path,
  silent: true,
  defaults: resolve(__dirname, '../../.env'),
  schema: resolve(__dirname, '../../.env.sample'),
  errorOnMissing: !isTest,
  errorOnExtra: false,
  errorOnRegex: false,
  includeProcessEnv: true,
  overrideProcessEnv: true,
});

const isDevelopment =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'dev';

const environment = {
  ...process.env,
  isDevelopment,
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'production',
  DATABASE_NAME: process.env.MYSQL_DATABASE || 'gabeya',
  DATABASE_USERNAME: process.env.MYSQL_USER || 'user',
  DATABASE_PASSWORD: process.env.MYSQL_PASSWORD || 'password',
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',
  ACCESS_TOKEN_SECRET_KEY: process.env.ACCESS_TOKEN_SECRET_KEY,
  DATABASE_HOST: process.env.DATABASE_HOST || '127.0.0.1',
};

module.exports = environment;
