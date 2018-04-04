module.exports = function (app) {
	app.get('/produtos', function (req, res) {
		
		var connection = app.infra.connectionFactore();

		var produtosBanco = new app.infra.produtosBanco(connection);


		console.log(produtosBanco.valor);		
		// consulta 
		produtosBanco.lista(function(err, results) {

			res.render('produtos/lista', { lista:results });

		});

		connection.end();
	});

	app.get('produtos/remove', function(){
		var connection = app.infra.connectionFactore;
		var produtosBanco = app.infra.connectionFactore(connection);
		var produto =  produtosBanco.carrega(id,callback);
		if (produto) {
			produtosBanco.remove(produto,callback);
		}
	});

} 
