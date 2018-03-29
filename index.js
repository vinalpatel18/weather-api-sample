var weather = require('./weather.js');
var location = require('./location.js');
var express= require('express');
var app = express();
var PORT= process.env.PORT || 3000;
var middleware = require('./middleware');

app.use(middleware.logger);
app.use(express.static(__dirname + '/html'));

app.get('/weather',middleware.logger,function (req,res) {
	var city= req.query.City;
	console.log('Ciy name is '+city);
	if(typeof city ==='string' && city.length > 0 ){
		console.log('Ciy name is '+city);
		weather(city,function (weather) {
			if(weather.cod === 200){
				 res.send("Tempreture in "+city+ " is " +weather.main.temp+ " farenhite" );
			
				}
			else{
			res.send('City not found');
				
		}
		});
	}
	else{
		location(function (location) {
			console.log('City: '+location.city);
			city=location.city;

			weather(city,function (weather) {
					 res.send("You are located in "+city+ " and temperature is " +weather.main.temp+ " farenhite" );
			
			});

		});
	}


});

app.listen(PORT,function () {
	console.log('Express server started on '+PORT);
	// body...
});