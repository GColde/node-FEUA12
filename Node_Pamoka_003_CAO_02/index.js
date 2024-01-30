const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("OK");
});

const people = [{ name: "Bake", surname: "Cake" }];

app.get("/people", (req, res) => {
  res.send(people);
});

app.post("/people", (req, res) => {
  const { name, surname } = req.body;
  people.push({ name, surname });
  res.send(people);
});

// app.get("/people/:firstLetter", (req, res) => {
//   const { firstLetter } = req.params;
//   console.log(firstLetter);

//   const filteredPeople = people.filter(
//     (item) => item[0].toLowerCase() === firstLetter.toLowerCase()
//   );

//   res.send(filteredPeople);
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
