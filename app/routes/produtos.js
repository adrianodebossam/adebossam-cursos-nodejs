module.exports = function (app) {
	    var listaProdutos = function (req, res) {		
		var connection = app.infra.connectionFactore();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		produtosDAO.lista(function(err, results) {
			res.render('produtos/lista', {lista:results});
		});
		connection.end();
	};
	app.get('/produtos', listaProdutos);

	app.get('/produtos/form', function(req,res){
		res.render('produtos/form');
	});

	app.post('/produtos/salva', function(req, res){

		var produto = req.body;
		

		var connection = app.infra.connectionFactore();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		produtosDAO.salva(produto, function(err, results){
			res.redirect('/produtos');
		}); 
	});


	app.get('produtos/remove', function(){
		var connection = app.infra.connectionFactore;
		var produtosDAO = app.infra.connectionFactore(connection);
		var produto =  produtosDAO.carrega(id,callback);
		if (produto) {
			produtosDAO.remove(produto,callback);
		}
	});

} 
