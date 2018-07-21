var express = require('express');
var app = express();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "forum"
});
var posts = [];

con.connect(function(err){
  if(!err) {
      console.log("Database is connected ... nn");    
  } else {
      console.log("Error connecting database ... nn");
      throw err;
  }
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/addPost', function (req, res) {
  res.send('Adding post!');
});

app.get('/getPosts', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  


  var sql = "SELECT * FROM posts;";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    for (var i = 0; i < result.length; i++){
      var postDB = result[i];
      console.log("do banco ae: id->");
      console.log(postDB.id);
      console.log("titulo->");
      console.log(postDB.titulo);
      console.log("mensagem->");
      console.log(postDB.mensagem);
      var post = {
        id: postDB.id,
        titulo: postDB.titulo,
        mensagem: postDB.mensagem
      };

      posts.push(post);
    }
    res.send(JSON.stringify(posts));
  });
});

app.listen(3333, function () {
  console.log('Server is listening on port 3333!');
});

