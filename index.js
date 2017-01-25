const express = require('express')
const request = require('request')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3000, function () {
	console.log('App listening on port 3000')
})
