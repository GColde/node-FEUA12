const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

const cars = ["Audi", "BMW", "VW"];

app.get("/cars", (req, res) => {
  res.send(cars);
});

const studeents = [{ id: 1, name: "Colde", age: 25 }];

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
