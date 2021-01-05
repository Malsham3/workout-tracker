// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//Sets up the express App
const app = express();
const PORT = process.env.PORT || 3000;

//Sets up the express app to handle data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(logger("dev"));

//Make express look up the files relative to the public directory
app.use(express.static('public'));

//Routes\
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//connect
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

//console message
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });