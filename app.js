const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, "./public")))

app.listen(3030, () => console.log('APP corriendo en el puerto:' + 3030))

app.get('/', (req, res) => {
    res.sendfile(path.resolve(__dirname, "./views/home.html"))
})
app.get('/registrar', (req, res) =>{
    res.sendfile(path.resolve(__dirname, "./views/register.html"))
})
app.get('/ingresa', (req, res) =>{
    res.sendfile(path.resolve(__dirname, "./views/ingresa.html"))
})