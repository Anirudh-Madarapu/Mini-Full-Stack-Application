const http = require("http");
const express = require("express");
var cors = require("cors");
const  itemsrouter = require("./routes/items");
const  deleterouter = require("./routes/delete");
const  searchrouter = require("./routes/search");
const  addrouter = require("./routes/add");

const app = express();
app.use(express.json());

app.use(cors());

app.use("/items", itemsrouter);
app.use("/delete", deleterouter);
app.use("/search", searchrouter);
app.use("/add", addrouter);


// default URL to API
app.use("/", function (req, res) {
  res.send("node-ex-api works :-)");
});

const server = http.createServer(app);
const port = process.env.PORT || 3000; // Use the PORT environment variable if available, otherwise default to 3000
server.listen(port, () => {
  console.debug("Server listening on port " + port);
});
