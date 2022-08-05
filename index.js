const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db.js');
const port = process.env.PORT;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use("/api", require("./routes/dateRoutes.js"))
app.use("/api", require("./routes/userRoutes.js"))
app.use("/api", require("./routes/utilRoutes.js"))

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${process.env.PORT}`))