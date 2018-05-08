var http = require('http');

var configuracoes = {
	hostname: 'localhost',
	port: 3000,
	method: 'post',
	path: '/produtos.json',
	headers: {
		'Accept':'application/json',
		'Content-type':'application/json'	
	}
};

//usar o hetp request está quebrando algo na minha máquina.

var client = http.request(configuracoes,function(res){
	console.log(res.statusCode);
	res.on('data',function(body){
		console.log('Corpo:'+body);
	});
}); 

var produto = {
	titulo: '',
	descricao: 'teste descricso',
	preco: 100
};

client.end(JSON.stringify(produto))