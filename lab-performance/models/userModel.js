  
const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from users where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0].type);
			}
		});
	},
	getById: function(id, callback){
		var sql = "select * from users where id='"+id+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}
		});
	},
	getAll: function(callback){
		var sql = "select * from users";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(user, callback){
		var sql = "INSERT INTO users(username,email,password,type,companyname,contactno) VALUES ('"+user.username+"','"+user.email+"','"+user.password+"','"+user.type+"','"+user.companyname+"','"+user.contactno+"')";
		
		db.execute(sql,function(status){
			callback(status);
		});
	},
	update: function(user, callback){
		console.log(user);
		var sql = "update users set username = '"+user.username+"',email = '"+user.email+"', password = '"+user.password+"',companyname = '"+user.companyname+"',contactno = '"+user.contactno+"' where id = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(id, callback){
		var sql = "DELETE FROM users WHERE id = '"+id+"'";
		console.log(sql);
		db.execute(sql,function(status){
			callback(status);
		});
	}
}