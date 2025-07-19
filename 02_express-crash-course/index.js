import express from "express";

const app = express();
const port = 3000;
app.use(express.json());
let library = [];
let nextId = 1;
// Create
app.post("/books", (req, res) => {
  const { name, price } = req.body;
  const newBook = { id: nextId++, name, price };
  library.push(newBook);
  res.status(201).send(newBook);
});

//  Get
app.get("/books", (req, res) => {
  res.status(200).send(library);
});

// Get with id
app.get("/books/:id", (req, res) => {
  const book = library.find((t) => t.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).send("book not found");
  }
  res.status(200).send(book);
});

// Update
app.put("/books/:id", (req, res) => {
  const book = library.find((t) => t.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).send("book not found");
  }
  const { name, price } = req.body;
  book.name = name;
  book.price = price;
  res.status(200).send(book);
});

// Delete

app.delete("/books/:id", (req, res) => {
  const index = library.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("Book not found");
  }
  library.splice(index, 1);
  return res.status(204).send("deleted");
});

app.listen(port, () => {
  console.log(`server is running at port: ${port}`);
});
// Line selescct i
