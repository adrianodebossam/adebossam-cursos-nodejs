var mysql = require('mysql');
// factory method

function createDBConnection (){
	if(!process.env.NODE_ENV){
	return mysql.createConnection({
		host : 'localhost',
		database: 'casadocodigo_nodejs',
		user : 'adriano',
		password: 'abcd1234'
	});
}
	if(process.env.NODE_ENV == 'test'){}
	return mysql.createConnection({
		host : 'localhost',
		database: 'casadocodigo_nodejs',
		user : 'root',
		password: 'root'
	});
}

// wrapper
module.exports = function () {

	return createDBConnection;

};
