var mysql = require('mysql');
// factory method

function createDBConnection (){
	return mysql.createConnection({
		host : 'localhost',
		database: 'casadocodigo_nodejs',
		user : 'adriano',
		password: 'abcd1234'
	});
}

// wrapper
module.exports = function () {

	return createDBConnection;

};
