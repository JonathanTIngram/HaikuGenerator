/*
 server.js


 @author : Jonathan Ingram
 Version : 11/6/2020
 Project : Lyric Generator
*/

//library calls
const express = require('express');
const app = express();
const rhymes = require('rhymes');
const http = require('http').createServer(app)
const io = require('socket.io')(http);
const fs = require('fs');
const { Socket } = require('socket.io');
const PORT = 3000;

//tells expres to locate files in public directory 
app.use(express.static('public'));

//picks random number between 1 and 10
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
//set rhyme json data to myRhyme
let myRhyme = rhymes('cat')[getRandomInt(5)];


//new user connected to server
io.on('connection', (socket) => {
	console.log("connect");
});

//listens to given port 
app.listen(PORT, () => {
	console.log('Server listening on port: ${PORT}');
	console.log(myRhyme.word);
});
