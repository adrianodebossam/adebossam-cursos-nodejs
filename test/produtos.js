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
	});