const express = require('express');
const cors = require('cors');
const data = require('./data');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

app.get('/shop', (req, res) => {
  res.send(data);
});

// {"id": 1, "name": "Laptop 1", "category": "Computers", "stock": 10},
// Sukurkite dinaminį GET route, kur URL turės automobilio markę ir
// pagal ją prafiltruos, ir grąžins tik tuos žmones, kurie turi šį automobilį.
app.get('/shop/items/:cate', (req, res) => {
  const { cate } = req.params;

  const filteredItem = data.filter(
    (item) => item.category.toLowerCase() === cate.toLowerCase(),
  );

  res.send(filteredItem);
});

// Sukurkite GET route, kuris grąžins visus el. paštus
// (grąžinamas formatas: ["anb@abc.com", "abc@abc.com", "abc@acb.com]).
app.get('/users/stock/:count', (req, res) => {
  const { count } = req.params;
  const itemsList = [];

  data.forEach((item) => {
    if (item.stock > count)
      itemsList.push({ name: item.name, stock: item.stock });
  });

  res.send(itemsList);
});

// Sukurkite GET route, į kurį pasikreipus, grąžins visų moterų (gender: Female) vardą ir pavardę
// (formatas: ["Rita Kazlauskaite", "Monika Simaskaite"]).
app.get('/shop/items', (req, res) => {
  const itemsNames = [];

  data.forEach((item) => {
    itemsNames.push(item.name);
  });

  res.send(itemsNames);
});

// Sukurkite dinaminį GET route, kuris priims vartotojo id ir pagal jį grąžins atitinkamą vartotojo objektą.
// Hint: url parametrai visada stringai, o čia id - skaičius, tad reikės konvertuoti.
app.get('/shop/:id', (req, res) => {
  const id = +req.params.id;

  const items = data.find((item) => item.id === id);

  if (items) {
    res.json(items);
  } else {
    res.status(404).json({ error: 'Items not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
