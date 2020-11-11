/*
 app.js


 @author : Jonathan Ingram
 Version : 11/6/2020
 Project : Lyric Generator
*/

//library calls
const express = require('express');
const app = express();
const http = require('http').createServer(app)
const io = require('socket.io')(http);
const fs = require('fs');
const { Socket } = require('socket.io');
const PORT = 3000;

//tells expres to locate files in public directory 
app.use(express.static('public'));

//new user connected to server
io.on('connect', (socket) => {
	console.log("connected");
});

//listens to given port
app.listen(PORT, () => {
	console.log('Server listening on port: ${PORT}');
});
