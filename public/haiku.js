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
		//picks random number between 1 and 10
		return Math.floor(Math.random() * max);
	}

	get_word(){
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
			return word;
		} catch (err) {
			console.error(err);
		}
	}


	//method not in use but would be better to use one method to get a line 
	//with just one method with the syllable goal as a parameter. Ex: getline(5) or getline(7)
	get_line(lineString, syllGoal, syllCount){
		let word = this.get_word();
		let syll = syllable(word);
		//console.log(word, syll);


		if(syllCount != syllGoal){
			lineString = lineString + " " + word;
			syllCount = syllCount + syll;

			if (syllCount > syllGoal){
				lineString = "";
			}
		}

		if(syllCount == syllGoal){
			//console.log("5 sylls");
			console.log(lineString, syllCount);
			let finalLine = lineString;
			return finalLine;
		}
		else if (syllCount > syllGoal){
			lineString = " ";
			syllCount = 0;
			return this.get_line(lineString, syllGoal, syllCount) //recursive call
		}
		else if (syllCount < syllGoal){
			//console.log("below 5 sylls");
			return this.get_line(lineString, syllGoal, syllCount); //recursive call
			
		}
	}

	get_5(lineString, syllCount){
		let word = this.get_word();
		let syll = syllable(word);
		//console.log(word, syll);


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
			let finalLine = lineString;
			return finalLine;
		}
		else if (syllCount > 5){
			lineString = " ";
			syllCount = 0;
			return this.get_5(lineString, syllCount) //recursive call
		}
		else if (syllCount < 5 ){
			//console.log("below 5 sylls");
			return this.get_5(lineString, syllCount); //recursive call
			
		}
	}

	get_7(lineString, syllCount){
		let word = this.get_word();
		let syll = syllable(word);
		//console.log(word, syll);


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
			let finalLine = lineString;
			return finalLine;
		}
		else if (syllCount > 7){
			lineString = " ";
			syllCount = 0;
			return this.get_7(lineString, syllCount) //recursive call
		}
		else if (syllCount < 7){
			//console.log("below 5 sylls");
			return this.get_7(lineString, syllCount); //recursive call
			
		}
	}

}

//for including in the server file
exports.Haiku = Haiku;