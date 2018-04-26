var express = require('../config/express')();
var request = require('supertest')(express);

describe('ProdutosController',function(){
	it('listagem json',function(done){
		request.get('/produtos')
 			request.get('application/json')
 			.set('Accept','application/json')
 			.expect('Content-Type',/json/)
 			.expect(200,done);
 			done();			
		});
	it('#Cadastro de novo produto com dados inválidos', function(done){
		request.post('/produtos')
		.send({titulo: "", descricao: "novo livro"})
		.expect(400,done)
	});

	it('#Cadastro de novo produto com dados válidos', function(done){
		request.post('/produtos')
		.send({titulo: "novo titulo", descricao: "novo livro", preco: 20.50})
		.expect(302,done)
	});
	});