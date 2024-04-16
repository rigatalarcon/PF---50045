const express = require("express");
const router = express.Router();
const CartController = require("../controllers/cart.controller.js");
const cartController = new CartController();
const ProductController = require("../controllers/producto.controller.js");
const productController = new ProductController;




router.get("/", (req, res) => {
    res.render("index");
})

// Ruta para el formulario de login
router.get("/login", (req, res) => {
    if (req.session.login) {
        return res.redirect("/profile");
    }
    res.render("login");
});

// Ruta para el formulario de registro
router.get("/register", (req, res) => {
    if (req.session.login) {
        return res.redirect("/profile");
    }
    res.render("register");
});

// Ruta para la vista de perfil
router.get("/profile", (req, res) => {
    if (!req.session.login) {
        return res.redirect("/login");
    }
    res.render("profile", { user: req.session.user });
});

router.get("/realtimeproducts", async (req, res) => {
    try {
        res.render("realtimeproducts");
    } catch (error) {
        console.log("error en la vista real time", error);
        res.status(500).json({error: "Error interno del servidor"});
    }
})

router.get("/", async (req, res) => {
    try {
        const { page = 1, limit = 2 } = req.query;
        const productos = await productController.getProductos({
            page: parseInt(page),
            limit: parseInt(limit)
        });

        const nuevoArray = productos.docs.map(producto => {
            const { _id, ...rest } = producto.toObject();
            return rest;
        });

        res.render("products", {
            user: req.session.user,
            productos: nuevoArray,
            hasPrevPage: productos.hasPrevPage,
            hasNextPage: productos.hasNextPage,
            prevPage: productos.prevPage,
            nextPage: productos.nextPage,
            currentPage: productos.page,
            totalPages: productos.totalPages
        });

    } catch (error) {
        console.error("Error al obtener productos", error);
        res.status(500).json({
            status: 'error',
            error: "Error interno del servidor"
        });
    }
});

router.get("/carts/:cid", async (req, res) => {
    const cartId = req.params.cid;

    try {
        const carrito = await cartController.getCarritoById(cartId);

        if (!carrito) {
            console.log("No existe ese carrito con el id");
            return res.status(404).json({ error: "Carrito no encontrado" });
        }

        const productosEnCarrito = productController.map(item => ({
            productController: item.product.toObject(),
            //Lo convertimos a objeto para pasar las restricciones de Exp Handlebars. 
            quantity: item.quantity
        }));


        res.render("carts", { productController: productosEnCarrito });
    } catch (error) {
        console.error("Error al obtener el carrito", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

module.exports = router; 