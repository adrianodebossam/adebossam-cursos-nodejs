function ProdutosDAO(connection) {
	this._connection = connection;
}

ProdutosDAO.prototype.lista = function (callback) {
   	this._connection.query('select * from livros', callback);
}
ProdutosDAO.prototype.salva = function (produto, callback) {
   	this._connection.query('insert into livros set ?',produto, callback);
}

ProdutosDAO.prototype.remove = function (id, callback) {
	var params = [ id ];
	this._connection.query('delete from livros where id = ?', params, callback);
}

module.exports = function () {
	return ProdutosDAO;
}
