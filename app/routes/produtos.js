module.exports = function (app) {
     app.get('/produtos', function (req, res, next) {		
		var connection = app.infra.connectionFactore();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		produtosDAO.lista(function(err, results) {
			if(erros){
				return next(erros);
			}
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
		res.render('produtos/form',
			{errosValidacao:{},produto:{}});	
	});

	app.post('/produtos', function (req, res){

		var produto = req.body;

		req.assert('titulo','Titulo é obrigatório').notEmpty();
		req.assert('preco', 'Formato inválido').isFloat();
		

		var erros = req.validationErrors();
		if (erros) {
			res.format({
				html: function (){
					res.status(400).render('produtos/form',{errosValidacao : erros, produto:produto});
				},
				json: function(){
					res.status(400).json(erros);
				}
		
			});			
			
			return;
		}

		var connection = app.infra.connectionFactore();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		produtosDAO.salva(produto, function(err, results){
			res.redirect('/produtos');
		})
	});


     app.get('produtos/json', function (req, res) {		
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
