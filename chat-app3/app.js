const express = require("express");
const app = express();

//set the template engine ejs
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));

//routes
app.get("/", (req, res) => {
  res.render("index");
});

//Listen on port 3001
const hostname = "127.0.0.1";
const port = 3001;

server = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// setup socket.io here

//socket.io instantiation
const io = require("socket.io")(server)

//listen on every connection
io.on('connection', (socket) => {
    console.log('New user connected')

//default username 
socket.username = "Anonymous"

//listen on change_username
socket.on('change_username', (data) => {
    socket.username = data.username
    })

 //listen on new_message
 socket.on('new_message', (data) => {
     //broadcast the new message
     io.sockets.emit('new_message', {message : data.message, username: socket.username});
 })  
 
 //listen on typing
 socket.on('typing',(data) => {
     socket.broadcast.emit('typing', {username: socket.username})
 }) 
})