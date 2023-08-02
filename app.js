const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, "./public")))

const puerto = process.env.PORT || 3001

app.listen(puerto, () => console.log('APP corriendo en el puerto:' + puerto))

app.get('/', (req, res) => {
    res.sendfile(path.resolve(__dirname, "./views/home.html"))
})
app.get('/registrar', (req, res) =>{
    res.sendfile(path.resolve(__dirname, "./views/register.html"))
})
app.get('/ingresa', (req, res) =>{
    res.sendfile(path.resolve(__dirname, "./views/ingresa.html"))
})
app.post('/register', (req, res) => 
    res.redirect('/')
);
app.post('/ingresa', (req, res) => 
    res.redirect('/')
);
