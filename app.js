const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')

// Middleware para servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')))

// Middleware para parsear JSON
app.use(express.json())

// API endpoint
app.get('/api/saludo', (request, response) => {
    response.json({mensaje: 'Hola desde mi app ___(iniciales)'})
})

// Ruta principal - sirve index.html
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})