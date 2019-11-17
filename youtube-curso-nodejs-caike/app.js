const express = require('express');

const app = express();

// baixar o  packete mysql no npm 


//connectando com o banco de dados mysql
const mysql = require('mysql');

const connection = mysql.createConnection({
	host:'localhost',
	user: 'root',
	password: '',
	database:'test'
});

connection.connect(function(err) {
	if(err){
		console.error("erro na conexão " + err.stack)
	}else {
		
	
	console.log('conexão feita com sucesso ID da conexão:' + connection.threadId);
	}
});

// faZENDO UM SELECT COM NODE E MYSQL
connection.query('SELECT * FROM user', function(err, rows, fields) {
	
	if(!err){
		console.log('Resultado: ', rows);
	} else {
		console.log('Erro ao realizar a query ');
	}
});

connection.connect(function(err, ) {
	if(err) console.error(' erro na conexão' + err.stack );
	return;
});

//connection.query("INSERT INTO user(nome, email) VALUES ('Clara', 'clara@gmail.com')", function(err, result){

	//if(!err){
	//	console.log('inserido com sucesso:');
	//} else {
	//	console.log('erro ao cadastra user');
//	}
//});


connection.query("UPDATE user SET  email = 'clarapereita@gmail.com' WHERE id = 2 ", function(err, result){

	if(!err){
		console.log('user  alterado com sucesso:');
	} else {
		console.log('erro ao atualizarpp user');
	}
});

connection.query("DELETE FROM user WHERE id = 16 ", function(err, result){

	if(!err){
		console.log('user  deletado com sucesso:');
	} else {
		console.log('user não deletado');
	}
});

/////////////////////////////
//INTRODUÇÃO AO SEQUELIZE
//sequelize é um ORM e faz o mapeamento de do banco de dados
 // packate:npm install --save sequelize
 // extensão mysql:  npm install --save mysql2

const Sequelize = require('sequelize');

///conexão com o banco dom o sequelize ...
const sequelize = new Sequelize('test', 'root', '', {
	host:'localhost',
	dialect:'mysql'
});


/// teste conexão com o banco dom o sequelize ...
sequelize.authenticate().then(function(){
	console.log('connexão feita com sucesso (No SEQUELIZE)');
}).catch(function(err){
	console.log('Erro na conexão' + err);
	
	
});


/// criando 

//-----------------------------------------------
// ROTAS com EXPRESS  PACKATES


app.get("/", function(req, res){
	res.sendFile(__dirname + "/src/index.html");
})


app.get("/sobre", function(req, res){
		res.sendFile(__dirname + "/src/sobre.html");
})

app.get("/contato", function(req, res){
		res.sendFile(__dirname + "/src/contato.html");
})

app.get("/blog", function(req, res){
		res.sendFile(__dirname + "/src/blog.html");
})


//SOBE O SEVIDOR LOCALHOST: 8081
app.listen(8081);


//  servidor ser recarregado automaticamente NODEMON
//para ativar de um  "nodemon index.js"
