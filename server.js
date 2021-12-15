
const express = require("express");

const cors = require("cors");
const usersRoute = require("./routes/usersRoute");
const configsRoute = require("./routes/configRoute");
const beatsRoute = require("./routes/beatsRoute");
const app = express();

app.use(express.json());
app.use(cors());
app.use(usersRoute);
app.use(configsRoute);
app.use(beatsRoute);

app.get('/', (req, res) => {
    return res.json({message:'SERVER UP!'})
})

app.listen(8080);
console.log('Server rodando!');

