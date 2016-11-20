
// TASK 1
// var express = require("express");
// var app = express();
// var port = process.argv[2];
//
// app.get("/home",function(req,res){
//   res.end("Hello World!");
// })
//
// app.listen(port);
//
// console.log("Server running at http://localhost:" + port);

// TASK 2
// var express = require("express");
// var app = express();
// var port = process.argv[2];
// var contentPath = process.argv[3];
// app.use(express.static(contentPath||path.join(__dirname,'public')));
// app.listen(port);
// console.log("Server running at http://localhost:" + port);

// TASK 3

// var express = require("express");
// var app = express();
// var port = process.argv[2];
// var contentPath = process.argv[3];
// var path = require("path");
// var time = new Date().toDateString();
//
// app.set('views',contentPath || path.join(__dirname, 'templates'));
// app.set('view engine', 'jade');
//
// app.get('/home',function(request, response){
//   response.render('index', {date: time});
// })
//
// app.listen(port);

// TASK 4

// var express = require("express");
// var bodyparser = require('body-parser');
// var app = express();
// var port = process.argv[2];
//
// app.use(bodyparser.urlencoded({extended: false}));
//
// app.post('/form', function(request, response){
//   // console.log();
//   response.end(request.body.str.split('').reverse().join(''));
// })
//
// app.listen(port);

// TASK 5

// var express = require("express");
// var app = express();
// var port = process.argv[2];
// var contentPath = process.argv[3];
// var options = {
//   extensions: 'html'
// }
//
// app.use(require('stylus').middleware(contentPath));
// app.use(express.static(contentPath));
//
// app.listen(port);

// TASK 6

// var express = require("express");
// var app = express();
// var port = process.argv[2];
// // var contentPath = process.argv[3];
// var crypto = require('crypto');
//
// app.put('/message/:id',function(req,res){
//   var id = req.params.id;
//   res.send(crypto.createHash('sha1')
// .update(new Date().toDateString() + id)
//       .digest('hex'))
// })
//
// app.listen(port);

// TASK 7

// var express = require("express");
// var app = express();
// var port = process.argv[2];
//
// app.get('/search',function(req,res){
//   // console.log(req.query);
//   res.send(req.query)
// })
//
// app.listen(port);

// TASK 8

var express = require("express");
var fs = require("fs");
var app = express();
var port = process.argv[2];
var fileName = process.argv[3];
var buf = null;

fs.readFile(fileName, function(err, buffer){
  if(err) throw err;
  buf = buffer;
  var bufStr = buf.toString();
  var returnedJSON = JSON.parse(buf);

  app.get('/books',function(req,res){
    res.json(returnedJSON);
  })
});

app.listen(port);
