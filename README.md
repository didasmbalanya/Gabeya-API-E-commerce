# Gabeya-API-E-commerce

A simple api that allows a user to post, edit, and get info on items.
A user can as also add or remove items to a cart.

## Set up with docker

1. git clone repository
2. set up `.env` file using the schema on `.env.sample` file
3. Install and start docker and docker-compose.
4. open terminal on the apps root folder and run docker-compose up --build.
5. Access api on the port defined on the .env file
6. Open http://localhost:{port}/api/v1/api-docs to get swagger documentation

## set up to run on main os

1. git clone repository
2. set up `.env` file using the schema on `.env.sample` file
3. create database with details specified in the `.env` file
4. install dependencies with `yarn install`
5. start api with `yarn dev`

## Build for production.

1. Run `yarn build` which will generate a `dist` folder on the project root dir.
2. Run `yarn start` to run server for production
