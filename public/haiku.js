/* 
haiku.js

@author : Jonathan T Ingram
Created : 12/05/2020
Project : Haiku Generator
*/

let syllable = require('syllable');
let fs = require('fs');
class Haiku {

	constructor () {
		console.log("Haiku Generated");
	}

	randomNum(max){
		//picks random number between 1 and max
		return Math.floor(Math.random() * max);
	}

	get_adj(){
		try {
			const data = fs.readFileSync('words/adj.txt', "UTF-8");

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

	get_noun(){
		try {
			const data = fs.readFileSync('words/noun.txt', "UTF-8");

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

	get_verb(){
		try {
			const data = fs.readFileSync('words/verbs.txt', "UTF-8");

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

			if(word.slice(-1) == 'e'){
				word = word + 'd';
			}
			else {
				word = word + 'ed';
			}
			return word;
		} catch (err) {
			console.error(err);
		}
	}

	get_adverb(){
		try {
			const data = fs.readFileSync('words/adverbs.txt', "UTF-8");

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


	get_line1(syllGoal){
		let line = this.get_adj() + " " + this.get_noun(); 
		let syllCount = syllable(line);

		if(syllCount != syllGoal){
			return this.get_line1(syllGoal);
		}
		else if (syllCount == syllGoal){
			console.log(line, syllCount);
			return line;
		}
	}

	get_line2(syllGoal){
		let line = this.get_adverb() + " " + this.get_verb(); 
		let syllCount = syllable(line);

		if(syllCount != syllGoal){
			return this.get_line2(syllGoal);
		}
		else if (syllCount == syllGoal){
			console.log(line, syllCount);
			return line;
		}
	}
}

//for including in the server file
exports.Haiku = Haiku;