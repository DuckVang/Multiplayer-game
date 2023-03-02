import socket from "./Client-Communication/socket"
console.log("Pog client is alive")
socket.on("serverToClient", (data) => {


    alert(data)
    socket.emit("clientToServer", "Hello from " + socket.id)


})
socket.on("UpdatePlayer", (player) => {



})


