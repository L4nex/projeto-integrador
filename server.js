const express = require("express");

const cors = require("cors");
const usersRoute = require("./routes/usersRoute");
const app = express();

app.use(express.json());
app.use(cors());
app.use(usersRoute);

app.listen(3333);
console.log('Server rodando!');

