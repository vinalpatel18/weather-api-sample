var url = 'http://ipinfo.io';
var request = require('request')

module.exports= function (callback) {
	request({
		url: url,
		json: true},
		function (error,responce,body) {
			if(error){
				callback('unnable to fetch data')
			}
			else{
				callback(body);
			}
		})

}