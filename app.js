const path = requiere ("path");

const express = require ("express");
const app = express();

app.use(express.static(path.join(__dirname,"public")));

const PORT = process.env.PORT || 3001;

app.listen(PORT,() => {
    console.log(PORT)
    console.log("Se Prendió");
});

app.get("/", (req, res) => {
    res.senFile (path.resolve(__dirname,"views/home.html"));
});

app.get("/register", (req, res) => {
    res.senFile (path.resolve(__dirname,"views/register.html"));
});

app.get("/login", (req, res) => {
    res.senFile (path.resolve(__dirname,"views/login.html"));
});