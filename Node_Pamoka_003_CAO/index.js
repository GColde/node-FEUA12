const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("OK");
});

const brands = ["BMW", "bentley", "VW", "Porsche"];

app.get("/brands", (req, res) => {
  res.send(brands);
});

app.get("/brands/:firstLetter", (req, res) => {
  const { firstLetter } = req.params;
  console.log(firstLetter);

  const filteredBrands = brands.filter(
    (brand) => brand[0].toLowerCase() === firstLetter.toLowerCase()
  );

  res.send(filteredBrands);
});

app.post("/brands", (req, res) => {
  const { brand } = req.body;
  brands.push(brand);
  res.send(brands);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
