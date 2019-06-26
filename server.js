var PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var exphbs = require('express-handlebars');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.set('views', './views');
app.set('view engine', '.handlebars');

app.engine('handlebars', exphbs({
  extname: '.handlebars',
  defaultLayout: "main"
}));

app.use(require("./controllers/burgers_controller.js")(app));

app.listen(PORT, function () {  
  console.log("App listening on PORT " + PORT);
});