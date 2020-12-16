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

	get_line(lineString, syllGoal){
		let word = this.get_word();
		let syll = syllable(word);
		lineString = lineString + word;
		let stringSyll = syllable(lineString);



		if(stringSyll < syllGoal){
			let newWord = this.get_word();
			lineString = lineString + " " + newWord;
			stringSyll = syllable(lineString);
		}
		if (stringSyll > syllGoal){
			//delete the last word added
			lineString = lineString.replace(word, '');
			let newWord = this.get_word();
			lineString = lineString + " " + newWord;
			stringSyll = syllable(lineString);
		}
		

		if(stringSyll == syllGoal){
			return lineString;
		}
	}

	get_5(lineString, syllCount){
		let word = this.get_word();
		let syll = syllable(word);
		//console.log(word, syll);

		let finalLine = "";


		lineString = lineString + " " + word;
		console.log(lineString);
		syllCount = syllCount + syll;


		if(syllCount == 5){
			//console.log("5 sylls");
			//console.log(lineString, syllCount);
			return (lineString, syllCount);
		}
		if (syllCount > 5){
			lineString = " ";
			syllCount = 0;
			this.get_5(lineString, syllCount) //recursive call
		}
		else if (syllCount < 5 ){
			//console.log("below 5 sylls");
			this.get_5(lineString, syllCount); //recursive call
			
		}
	}

	get_7(lineString, syllCount){
		let word = this.get_word();
		let syll = syllable(word);
		//console.log(word, syll);
		


		if(syllCount != 7){


			if (syllCount > 7){
				lineString = " ";
				syllCount = 0;
				this.get_7(lineString, syllCount) //recursive call
			}
			else if (syllCount < 7 ){
				//console.log("below 7 sylls");
				lineString = lineString + " " + word;
				syllCount = syllCount + syll;
				this.get_7(lineString, syllCount); //recursive call
			}
		}

		else if(syllCount == 7){
			//console.log("5 sylls");

			return lineString;
		}
	}

}

//for including in the server file
exports.Haiku = Haiku;