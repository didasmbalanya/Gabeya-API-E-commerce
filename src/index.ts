import express from "express";

// set up express server
const app = express();


// set up routes
app.get("/users", (req, res) => {
  res.status(200).send({ users: ["Didas"] });
});

// error handler for unknown routes
app.use("*", (req, res) => {
  res.status(404).send({ error: "route doesn't exist" });
});

// server port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});