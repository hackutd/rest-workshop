const express = require('express')
const request = require('request')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const apiKey = 'YOUR-API-KEY'

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/', function (req, res) {
	var city = req.body.city
	const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + apiKey
	console.log(city)

	request(url, function(err, resp, body) {
		if (!err && res.statusCode == 200) {
			res.send("The weather in " + city + " is: " + JSON.parse(body).weather[0].description)
		} else {
			console.log(err)
		}

	})
})

app.listen(3000, function () {
	console.log('App listening on port 3000')
})
