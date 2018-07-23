var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

var mysql = require('mysql');
app.use(cors({origin: '*'}));

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* INSTALEM O MYSQL com o XAMPP ou o MYSQL Comunity, rodem o serviço e configurem o usuário e substituam no host e pasword abaixo.
* Depois, executem o comando abaixo:
CREATE DATABASE forum;
USE forum;
CREATE TABLE posts (
    id INT NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(75),
    mensagem TEXT,
    PRIMARY KEY (id)
);*/
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "forum"
});

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

app.post('/addPost', jsonParser, function (req, res) {
    const titulo = req.body.titulo;
    const mensagem = req.body.mensagem;
    console.log('Titulo: ' + titulo);
    console.log('Mensagem: ' + mensagem);
    const sql = "INSERT INTO posts(titulo, mensagem) VALUES ('" + titulo + "', '" + mensagem + "');";
    con.query(sql, function (err) {
        if (err) {
            throw err;
        }else{
            console.log("Post adicionado!");
        }

    })
});

app.get('/getPosts', function (req, res) {
    res.setHeader('Content-Type', 'application/json');



  var sql = "SELECT * FROM posts;";
  con.query(sql, function (err, result, fields) {
  var posts = [];
    if (err) throw err;
    for (var i = 0; i < result.length; i++){
      var postDB = result[i];
/*
      console.log("do banco ae: id->");
      console.log(postDB.id);
      console.log("titulo->");
      console.log(postDB.titulo);
      console.log("mensagem->");
      console.log(postDB.mensagem);*/
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

