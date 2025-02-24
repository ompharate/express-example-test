const express = require("express");
const { connectToDb } = require("./utils");

connectToDb();

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", require("./routes/itemRouter"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Express API" });
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});