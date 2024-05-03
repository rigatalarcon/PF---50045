const express = require("express");
const { generarInfoError } = require("../services/errors/info.js");
const { EErrors } = require("../services/errors/errornum.js");
const CustomError = require("../services/errors/custom-error.js");
const router = express.Router(); 


//Array de usuarios: 
const arrayProducts = [];

router.post("/", async (req, res, next) => {
    const {Id, nombre, price, descrition} = req.body; 
    try {
        if(!Id || nombre || price || !descrition) {
            throw CustomError.crearError({
                nombre: "Producto Nuevo", 
                causa: generarInfoError({Id,nombre, price, descrition}),
                mensaje: "Error al intentar crear un usuario",
                codigo: EErrors.TIPO_INVALIDO
            })
        };

        const productos = {
            Id,
            nombre,
            price, 
            descrition
        }

        arrayProducts.push(productos);
        console.log(arrayProducts);
        res.send({status: "success", payload: productos});
    } catch (error) {
        next(error);
    }
})

module.exports = router; 