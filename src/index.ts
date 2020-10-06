import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import { PORT } from './config/environment';

import routes from './routes/mainRouter';
import { syncDb } from './utils/databaseSync';

// set up express server
const app = express();

// sync database
syncDb()
  .then(() => {
    console.log('>>>>>>> SUCCESS');
  })
  .catch((e) => {
    console.log('error \n', e);
  });

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// routes
app.use('/api/v1', routes);

// error handler for unknown routes
app.use('*', (req, res) => {
  res.status(404).send({ error: "route doesn't exist" });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
