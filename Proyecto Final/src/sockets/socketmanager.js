const socket = require("socket.io");

//3) Se tiene que guardar una referencia del servidor de express. 
//Configuramos: 

//Creamos un array de usuarios: 

const usuarios = [
    {id: 1, nombre: "Lionel", apellido: "Messi"},
    {id: 2, nombre: "Cristiano", apellido: "Ronaldo"},
    {id: 3, nombre: "Neymar", apellido: "Junior"},
    {id: 4, nombre: "Kyliam", apellido: "Mbappe"},
    {id: 5, nombre: "Pocho", apellido: "Lavezzi"},
]


const io = socket(httpServer);

io.on("connection", (socket) => {
    console.log("Un cliente se conectó conmigo");
    
    //No se olviden el nombre del "evento a escuchar", que tiene que ser el mismo desde el cliente al servidor. 
    socket.on("mensaje", (data) => {
        console.log(data);
    })

    //Ahora el servidor le va a enviar un mensaje al cliente: 
    socket.emit("saludito", "Hola Cliente, ¿cómo estas?");

    //Enviamos el array usuarios: 
    socket.emit("usuarios", usuarios);
})

module.exports = io;