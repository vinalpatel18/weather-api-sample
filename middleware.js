var middleware = {
	requireAuthentication: function (req,res,next) {
		console.log('private route it');
		next();	
	},
	logger: function(req,res,next){
		var date = new Date().toString();
		console.log('Request on '+date+' with method '+req.method+' URL: '+req.originalUrl);
		next();
	}
};

module.exports=middleware;