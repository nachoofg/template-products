import express from 'express'
import { join } from 'path';
import rateLimit from "express-rate-limit";


import errorEndpoint from './routes/errorEndpoint'
import contactEndpoint from './routes/contactEndpoint'
import mainEndpoint from './routes/mainEndpoint'
import aboutEndpoint from './routes/aboutEndpoint'
const app = express(),
    // Cooldown, peticiones
    cooldown = rateLimit({
        max: 100,

        windowMs: 60000,
        message: 'Demasiadas peticiones.'
    });
app.set('views', join(__dirname, '../resources/views'));
app.set('view engine', 'ejs')
app.use(cooldown)
// Resources, imagenes, css, etc
app.use(express.static(join(__dirname, '../resources')))

// Main Endpoint, pagina principal
app.use('/', mainEndpoint)

// Contact Endpoint, pagina de contacto
app.use('/contactanos', contactEndpoint)

// About Endpoint, pagina de "sobre nosotros"
app.use('/about', aboutEndpoint)

// Error Endpoint, si la ruta no existe.
app.use('*', errorEndpoint)

export = app