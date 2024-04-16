const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const MessageModel = mongoose.model("messages", messageSchema);

// const MessageModel = require("./models/message.model.js");
// const io = new socket.Server(httpServer);

// io.on("connection", (socket) => {
//     console.log("Nuevo usuario conectado");

//     socket.on("message", async data => {

//         //Guardo el mensaje en MongoDB: 
//         await MessageModel.create(data);

//         //Obtengo los mensajes de MongoDB y se los paso al cliente: 
//         const messages = await MessageModel.find();
//         console.log(messages);
//         io.sockets.emit("message", messages);

//     })
// })
module.exports = MessageModel; 