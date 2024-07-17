// Creating a simple http server
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

//middlewares
app.use(bodyParser.json());
 
app.get('/',(req, res) => {
  res.send("hello there");
})

//can use npx nodemon app.js command it gets updated every time the file is updated
app.post('/callme',(req, res) => {
  console.log(req.query.message);
  res.send({
    msg : '2 + 2 = 4'
  })
})

app.listen(port,() => {
  console.log(`port is running on server ${port}`);
})  




