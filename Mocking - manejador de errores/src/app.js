const express = require("express");
const app = express();
const PUERTO = 8080;
app.use(express.json());

// Middleware para parsear el body de las peticiones
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

 

// Endpoint para generar productos simulados



 

// Diccionario de errores comunes

const errorDictionary = {

    'productCreationError': 'Error al crear el producto.',

    'addToCartError': 'Error al agregar el producto al carrito.'

};

 

// Customizador de errores

function errorHandler(err, req, res, next) {

    if (errorDictionary[err]) {

        res.status(400).json({ error: errorDictionary[err] });

    } else {

        res.status(500).json({ error: 'Error interno del servidor.' });

    }

}

 

// Middleware para el customizador de errores

app.use(errorHandler);

 

























app.listen(PUERTO, () => {
    console.log(`Escuchando en el http://localhost:${PUERTO}`);
})