const express = require('express')
const { engine } = require('express-handlebars')


const app = express()

app.engine('hbs', engine({extname : '.hbs'})) // le dicimos que use la extension .hbs
app.set('view engine', 'hbs')

//middleware

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { title: 'Home', arrayNumeros: [{ nombre: '1', img: '/assets/img/fks.png' }, { nombre: '2', img: '/assets/img/fks.png' }] } )
})
app.get('/contacto', (req, res) => {
    res.render('contacto', { title: 'Contacto' })
})
app.get('/servicios', (req, res) => {
    res.render('servicios', { title: 'Servicios', arrayServicios: [{ nombre: 'Servicio 1', body: 'Lorem ipsum dolor sit.' }, { nombre: 'Servicio 2', body: 'Lorem ipsum dolor sit.' }, { nombre: 'Servicio 3', body: 'Lorem ipsum dolor sit.' }, { nombre: 'Servicio 4', body: 'Lorem ipsum dolor sit.' }, { nombre: 'Servicio 5', body: 'Lorem ipsum dolor sit.' }] })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, (err) => {
    if (err) throw new Error(`Algo paso... ${err}`)
    
    console.log(`Servidor escuchando en el puerto: ${PORT}`)
})