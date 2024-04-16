const CartService = require("../services/cart.services.js");
const cartService = new CartService();

class CartController {
    async crearCart(req, res) {
        try {
            const cart = await cartService.crearCart(req.body);
            res.json(cart);

        } catch (error) {
            res.status(500).json({error: "No se puede crear carrito"});
        }
    }

    async obtenerCarts(req, res) {
        try {
            const carts = await CartService.obtenerCarts();
            res.json(carts);

        } catch (error) {
            res.status(500).json({error: "No se pueden obtener los carritos"})
        }
    }
}

module.exports = CartController;