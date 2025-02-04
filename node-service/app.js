const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello from Node.js Microservice!");
});

app.listen(PORT, () => {
  console.log(`Node.js service is running on port ${PORT}`);
});
