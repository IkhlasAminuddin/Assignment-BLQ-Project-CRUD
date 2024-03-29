var express = require("express");
var dotenv = require("dotenv");
var app = express();
dotenv.config();

var bodyParser = require("body-parser");
var cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

global.config = require('./config/dbconfig')


app.get("/", (req, res) => {
  res.send("Testing!");
});

// require('./services/mbloodservice')(app, global.config.pool);
require('./services/ProductService')(app, global.config.pool)
require('./services/MenuService')(app, global.config.pool)



app.listen(process.env.PORT, () => {
  console.log("Example app listening on port ", process.env.PORT);
});
