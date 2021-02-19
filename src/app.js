import express from 'express';

import database from './config/database/database';

import routes from './routes';

let app = express();

const configureExpress = () => {
  app.use(express.json());
  app.use('/', routes);
  app.database = database;

  return app;
};

export default async () => {
  app = configureExpress();
  await app.database.connect();

  return app;
};
