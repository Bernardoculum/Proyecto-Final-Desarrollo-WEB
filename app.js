const express = require('express')
const hbs = require('hbs');

require('dotenv').config();

const port = process.env.PORT

const app = express()

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

// portafolio
app.get('/Portafolio', (req, res) => {
    res.render('Portafolio')
})

app.get('/Proyecto1-Teoremas', (req, res) => {
    res.render('Proyecto1')
})
app.get('/Proyecto2-Estructura-de-Datos', (req, res) => {
    res.render('Proyecto2')
})
app.get('/Proyecto3-Gestion-de-Procesos', (req, res) => {
    res.render('Proyecto3')
})

app.get('/Proyecto4-Base-de-Datos', (req, res) => {
    res.render('Proyecto4')
})

app.get('/Proyecto5-MRU-MRUV', (req, res) => {
    res.render('Proyecto5')
})

app.get('/Proyecto6-Aplicacion-YARGS', (req, res) => {
    res.render('Proyecto6')
})
app.get('/Proyecto7-MongoDB-Atlas', (req, res) => {
    res.render('Proyecto7')
})
app.get('/SobreMi', (req, res) => {
    res.render('SobreMi')
})

app.get('*', (req, res) => {
    res.render('error')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);

})


