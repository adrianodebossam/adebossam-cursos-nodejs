module.exports = function (app) {
     app.get('/produtos', function (req, res) {		
		var connection = app.infra.connectionFactore();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		produtosDAO.lista(function(err, results) {
			res.format({
				html: function (){
					 res.render('produtos/lista', {lista:results});
					},
					json: function(){
						res.json(results);
					}
		
			});			
		});
			connection.end();
	});

    app.get('/produtos/form', function (req, res){
		res.render('produtos/form');	
	});

	app.post('/produtos', function (req, res){

		var produto = req.body;

		var connection = app.infra.connectionFactore();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		produtosDAO.salva(produto, function(err, results){
			res.redirect('/produtos');
		}); 
		connection.end();
	});

     app.get('/produtos/json', function (req, res) {		
		var connection = app.infra.connectionFactore();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		produtosDAO.lista(function(err, results) {
			res.json(results);
		});
		connection.end();
	});
	

// fora da aula
// usando vanillão
	app.post('/produtos/delete', function (req, res){
		var id = req.body.id;
		var connection = app.infra.connectionFactore();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		produtosDAO.remove(id, function (err, results){
			res.redirect('/produtos?del=true');
		});
	});

} 
