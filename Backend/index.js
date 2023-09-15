const connectToMongo = require("./db");
const express = require("express");

connectToMongo();
const app = express();
const port = 5000;

app.use(express.json());

// Authentication Routes
app.use("/api/auth", require("./routes/auth"));

// // Notes Routes
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNoteBook Backend at http://localhost:${port}`);
});
