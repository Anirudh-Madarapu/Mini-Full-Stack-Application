//importing the packages that we need
const http = require("http");
const express = require("express");
var cors = require("cors");

//importing routes required for CRUD operations
const  itemsrouter = require("./routes/items");
const  deleterouter = require("./routes/delete");
const  searchrouter = require("./routes/search");
const  addrouter = require("./routes/add");
const  updaterouter = require("./routes/update");

const app = express();

//Usign cors and express Json features
app.use(express.json());
app.use(cors());

//setting up routes for our pages
app.use("/items", itemsrouter);
app.use("/delete", deleterouter);
app.use("/search", searchrouter);
app.use("/add", addrouter);
app.use("/update",updaterouter);


//default URL to API
app.use("/", function (req, res) {
  res.redirect("/items");
});

//creating server
const server = http.createServer(app);

//if 3000 port is not available we use other ports
const port = process.env.PORT || 3000; 
//configuring server to listen on this port
server.listen(port, () => {
  console.debug("Server listening on port " + port);
});
