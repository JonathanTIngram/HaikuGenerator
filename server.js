/*
 server.js


 @author : Jonathan Ingram
 Created : 11/6/2020
 Project : Lyric Generator
*/

var Haiku = require('./public/haiku')
const https = require('https');
var express = require('express');
// Create the app
var app = express();

// Set up the server

var server = app.listen(process.env.PORT, listen);

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Haiku Generator listening at http://' + host + ':' + port);
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
  //get_line parameters: get_line(lineString, syllGoal, syllCount)
  //haikuString = haiku.get_line('', 5, 0) + '\n' + haiku.get_line('', 7, 0) + '\n' + haiku.get_line('', 5, 0);
  
  //only asking for 4 syllables since "The" and "the" count as a syllable
  haikuLine1 = "The " + haiku.get_line1(4);
  haikuLine2 = haiku.get_line2(7);
  haikuLine3 = "the " + haiku.get_line1(4);
  console.log(haikuLine1, '\n', haikuLine2, '\n', haikuLine3);

    
	
  socket.emit('generate', {hai1: haikuLine1, hai2: haikuLine2, hai3: haikuLine3});
   
  socket.on('generate', () =>{
    let haiku = new Haiku.Haiku();

    //get_line1 is passed a four since "The" counts as a syllable
    haikuLine1 = "The " + haiku.get_line1(4);
    haikuLine2 = haiku.get_line2(7);
    haikuLine3 = "the " + haiku.get_line1(4);
    console.log(haikuLine1, '\n', haikuLine2, '\n', haikuLine3);

    //send to client
    socket.emit('generate', {hai1: haikuLine1, hai2: haikuLine2, hai3: haikuLine3});
  })

    socket.on('disconnect', () => {
      console.log("Client has disconnected");
	});
	
});

