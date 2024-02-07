const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require('cors');
app.use(express.json())
app.use(cors());

require('dotenv').config();
const port = process.env.PORT || 8080;


require("express-async-errors"); //for global error handling
const db = require("./db");
const bookRoutes = require("./controller/books_controller");

app.use(bodyparser.json());

//middleware for all routes in books_controller js file
app.use("/books", bookRoutes);

//global error handler if any error occurs in queri it handles
app.use((err, req, res, next) => {
  console.log(err);
  res
    .status(err.status || 500)
    .send("something  went wrong (error from global error handler)");
});

//checking batabase connection and only then server starts at port 8080 
db.query("select 1")
  .then(() => {
    console.log("Db connection success");
    app.listen(8080, () => console.log("server started at 8080 "));
  })
  .catch((err) => console.log("Db Connection failed \n" + err));
