const path = require ("path");
const express = require ("express");
const app = express();
require('dotenv').config();
const PORT = parseInt(process.env.PORT);

//defino mi ruta estática para acceder a los recursos públicos
app.use(express.static(path.resolve(__dirname, '../public')))

app.get("/",(req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/home.html'));
});

app.get("/register",(req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/register.html'));
});

app.get("/login",(req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/login.html'));
});

app.listen(PORT, () => console.log("escuchando en el puerto " + PORT))