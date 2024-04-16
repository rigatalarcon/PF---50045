const ProductoRepository = require("../repositories/products.repository.js");
const productoRepository = new ProductoRepository();

class ProductController {

    async getProductos(res, req) {
        try {
            const productos = await productoRepository.traerTodo();
            res.status(200).json(productos);
        } catch (error) {
            //res.status(500).json("Error del servidor");
        }
    }

    async postProductos(req, res) {
        const nuevoProducto = req.body;
        try {
            await productoRepository.crear(nuevoProducto);
            res.status(200).send("Producto creado");
        } catch (error) {
            res.status(500).json("Error del servidor");
        }
    }

    // async getProductosId(req, res){
    //         const productoId = req.params.pid;        
    //         try {
    //             await productoRepository.id(productoId);
    //             res.json(productoId);
    //         } catch (error) {
    //             console.error("Error al obtener producto", error);
    //             res.status(500).json({
    //                 error: "Error interno del servidor"
    //             });
    //         }
    // }

    // async putProductoActualizado(req, res){
    //         const id = req.params.pid;
    //         const productoActualizado = req.body;
        
    //         try {
    //             await productoRepository.updateProduct(id, productoActualizado);
    //             res.json({message: "Producto actualizado exitosamente"});
    //         } catch (error) {
    //             console.error("Error al actualizar producto", error);
    //             res.status(500).json({
    //                 error: "Error interno del servidor"
    //             });
    //         }
    //     }

    //     async deleteProducto(req, res) {
    //             const id = req.params.pid;
            
    //             try {
    //                 await productoRepository.deleteProduct(id);
    //                 res.json({message: "Producto eliminado exitosamente"});
    //             } catch (error) {
    //                 console.error("Error al eliminar producto", error);
    //                 res.status(500).json({error: "Error interno del servidor"});
    //             }
    //     }
}
module.exports = ProductController;