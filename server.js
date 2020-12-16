/*
 server.js


 @author : Jonathan Ingram
 Version : 11/6/2020
 Project : Lyric Generator
*/

var Haiku = require('./public/haiku')

var express = require('express');
// Create the app
var app = express();

// Set up the server
// process.env.PORT is related to deploying on heroku
var server = app.listen(process.env.PORT || 3000, listen);

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
}

app.use(express.static('public'));


// WebSocket Portion
// WebSockets work with the HTTP server
var io = require('socket.io')(server);

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.on('connection', (socket) => {
  
	console.log("We have a new client: " + socket.id);	
	let haiku = new Haiku.Haiku();
    haikuString = haiku.get_5('', 0) + '\n' + haiku.get_7('', 0) + '\n' + haiku.get_5('', 0);
	console.log(haikuString);

    
	
	socket.emit('generate', {hai: haikuString});

    socket.on('disconnect', () => {
      console.log("Client has disconnected");
	});
	
});

