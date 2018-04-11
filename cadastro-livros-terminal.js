var http = require('http');

var configuracoes = {
	hostname: 'localhost',
	port: 3030,
	method: 'post',
	path: '/produtos.json',
	headers: {
		'Accept':'application/json',
		'Content-type':'application/json'	
	}
};


var client = http.request(configuracoes,function(res){
	console.log(res.statusCode);
	res.on('data',function(body){
		console.log('Corpo:'+body);
	});
}); 

var produto = {
	titulo: 'teste titulo',
	descricao: 'teste descricso',
	preco: 100
};

client.end(JSON.stringify(produto))