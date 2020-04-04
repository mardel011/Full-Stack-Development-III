const mongoose = require("mongoose");
const Restaurant = require("./model/Restaurant");
const Order = require("./model/Order");

const http = require("http"),
  url = require("url"),
  fs = require("fs"),
  io = require("socket.io");

const connectionString = "mongodb://mardel011:Heyhey000@cluster0-shard-00-00-yuz7l.mongodb.net:27017,cluster0-shard-00-01-yuz7l.mongodb.net:27017,cluster0-shard-00-02-yuz7l.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose
  .connect(connectionString, { useNewURLParser: true})
  .then( () => { console.log("Mongoose connected successfully "); },
  error => { console.log("Mongoose could not connected to database: " + error); }
 );
/*
 mongoose.connect('mongodb+srv://mardel011:Heyhey000@cluster0-yuz7l.mongodb.net/test?retryWrites=true&w=majority');
*/
const server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;
  switch (path) {
    case "/":
      fs.readFile(__dirname + "/index.html", function(err, data) {
        if (err) return send404(res);
        res.writeHead(200, {
          "Content-Type": path == "json.js" ? "text/javascript" : "text/html"
        });
        res.write(data, "utf8");
        res.end();
      });
      break;

    default:
      send404(res);
  }
});
const send404 = function(res) {
  res.writeHead(404);
  res.write("404");
  res.end();
};

const PORT = 8080;
server.listen(PORT, () => console.log(`server started on localhost:${PORT}`));

// socket.io, I choose you
const ioServer = io.listen(server);

// socket.io setup and manager
ioServer.on("connection", function(socket) {
  // now we have a client object!
  console.log("Connection accepted.");

  // event listeners
  socket.on("message", function(message) {
    console.log(`Recieved message: ${message} - from client`);
    socket.emit("msgreceived");
  });

  socket.on("disconnect", function() {
    console.log("Disconnected...");
  });

  
  socket.on("get-restaurants", () => {
    console.log("server - get-restaurants called");

    Restaurant.find((error, documents) => {
      if (error) console.log(`Error occured on Restaurant.find(): ${error}`);
      else {
        console.log(`Restaurant.find() returned documents: ${documents}`);
        const data = documents.map(x => x => x.name);
        socket.emit("restaurants-data",data); 
      }
    });

    socket.on("get-orders", () => {
      console.log("server - get-orders called");
  
      Order.find((error, documents) => {
        if (error) console.log(`Error occured on Order.find(): ${error}`);
        else {
          console.log(`Order.find() returned documents: ${documents}`);
          const data = documents.map(x => x => x.name);
          socket.emit("orders-data",data); 
        }
      });
      socket.on("add-orders", () => {
        console.log("server - add-orders called");
    
        addOrder.find((error, documents) => {
          if (error) console.log(`Error occured on addOrder.find(): ${error}`);
          else {
            console.log(`addOrder.find() returned documents: ${documents}`);
            const data = documents.map(x => x => x.name);
            socket.emit("add-orders-data",data); 
           }
        });
    });
  });
});
});
