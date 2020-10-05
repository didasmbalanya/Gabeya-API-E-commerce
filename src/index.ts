import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';

import routes from './routes/mainRouter';

// set up express server
const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// routes
app.use('/api/v1', routes);

// error handler for unknown routes
app.use('*', (req, res) => {
  res.status(404).send({ error: "route doesn't exist" });
});

// server port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
