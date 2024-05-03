const generarInfoError = (producto) => {
    return ` Los datos estan incompletos o son invalidos. 
        Necesitamos recibir lo siguiente:
        - Id: String, pero recibimos ${producto.id} 
        - Nombre: String, pero recibimos ${producto.nombre}        
        - precio: String, recibimos ${producto.price}
        - descripcion: String, recibimos ${producto.description}
    `;
}

module.exports = {
    generarInfoError
}