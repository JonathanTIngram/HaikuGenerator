/*
 server.js


 @author : Jonathan Ingram
 Version : 11/6/2020
 Project : Lyric Generator
*/

//library calls
const express = require('express');
const app = express();
const rhymes = require('rhymes'); //don't need this
var syllable = require('syllable');
const http = require('http').createServer(app)
const io = require('socket.io')(http);
const fs = require('fs');
const { Socket } = require('socket.io');
const { get } = require('http');
const PORT = 3000;

//tells expres to locate files in public directory 
app.use(express.static('public'));


//set rhyme json data to myRhyme
//let myRhyme = rhymes('cat')[getRandomInt(5)];


//new user connected to server
io.on('connection', (socket) => {
	console.log("connect");
});

//listens to given port 
app.listen(PORT, () => {
	console.log('Server listening on port: ${PORT}');
	let haiku = new Haiku();
	haiku.get_5("", 0);
	haiku.get_7("", 0);
	haiku.get_5("", 0);
});


class Haiku {

	constructor () {
		console.log("Haiku Generated");
	}

	randomNum(max){
		//picks random number between 1 and 10
		return Math.floor(Math.random() * max);
	}

	get_word(){
		try {
			const data = fs.readFileSync('words.txt', "UTF-8");

			//split contents by line
			const lines = data.split(/\r?\n/);

			//populate array
			let filledArray = new Array(data);
			let i = 0;
			lines.forEach((line) => {
				filledArray[i] = line;
				i += 1;
			});

			let word = filledArray[this.randomNum(lines.length)];
			return word;
		} catch (err) {
			console.error(err);
		}
	}

	get_5(lineString, syllCount){
		let word = this.get_word();
		let syll = syllable(word);
		//console.log(word, syll);

		let finalLine = "";

		if(syllCount != 5){
			lineString = lineString + " " + word;
			syllCount = syllCount + syll;

			if (syllCount > 5){
				lineString = "";
			}
		}

		if(syllCount == 5){
			//console.log("5 sylls");
			console.log(lineString, syllCount);
			finalLine = lineString;
		}
		else if (syllCount > 5){
			lineString = " ";
			syllCount = 0;
			this.get_5(lineString, syllCount) //recursive call
		}
		else if (syllCount < 5 ){
			//console.log("below 5 sylls");
			this.get_5(lineString, syllCount); //recursive call
			
		}
		return finalLine;
	}

	get_7(lineString, syllCount){
		let word = this.get_word();
		let syll = syllable(word);
		//console.log(word, syll);

		let finalLine = "";

		if(syllCount != 7){
			lineString = lineString + " " + word;
			syllCount = syllCount + syll;

			if (syllCount > 7){
				lineString = "";
			}
		}

		if(syllCount == 7){
			//console.log("5 sylls");
			console.log(lineString, syllCount);
			finalLine = lineString;
		}
		else if (syllCount > 7){
			lineString = " ";
			syllCount = 0;
			this.get_7(lineString, syllCount) //recursive call
		}
		else if (syllCount < 7 ){
			//console.log("below 7 sylls");
			this.get_7(lineString, syllCount); //recursive call
			
		}
		return finalLine;
	}

}
