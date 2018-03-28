
var url ='http://api.openweathermap.org/data/2.5//weather?q=Philadelphia&APPID=14ba22273fc1c4dd6d6289c3dec0e4de';
var request = require ('request');

module.exports = function (location,callback) {
	encodeURIComponent(location);
	url = 'http://api.openweathermap.org/data/2.5//weather?q='+encodeURIComponent(location)+'&APPID=14ba22273fc1c4dd6d6289c3dec0e4de'
	//callback(url);
	request({
		url:url,
		json: true}
		,function (error, response, body) {
			if(error){
				callback('unable to fetch weather')
			}
			else{
				callback(JSON.stringify(body, null, 4));
			}
		});


	//callback('weather')
}