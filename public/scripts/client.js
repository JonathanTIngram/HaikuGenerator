/*
    client.js

    @author : Jonathan Ingram
    Version : 11/7/2020
    Project : Haiku Generator
*/

window.onblur = () => {
    document.title = ":(";
}
//Go back to normal when they're back
window.onfocus = () => {
    document.title = "Haiku Generator";
}


//end of JS styling


var socket;

socket = io.connect("http://localhost:3000");
//change the text when the button is pushed
//in addition speach button will also appear when this is pressed

let haik1 = document.getElementById('haiku-line1');
let haik2 = document.getElementById('haiku-line2');
let haik3 = document.getElementById('haiku-line3');
let genBtn = document.getElementById('generate-button');
let speakBtn = document.getElementById('speech-button')

genBtn.addEventListener('click',  () =>{
    socket.emit('generate', haik1);
    socket.on('generate', (data) =>{
        
        //make sure all lines are visable
        haik1.style.opacity = '1';
        haik2.style.opacity = '1';
        haik3.style.opacity = '1';

        //create lines
        haik1.innerHTML = data.hai1;
        haik2.innerHTML = data.hai2;
        haik3.innerHTML = data.hai3;
    })
    
    document.getElementById('speech-button').style.display = "block";

});

speakBtn.addEventListener('click', () =>{

    //speech
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'en-US';
    utter.volume = 0.5;

    //make them all transparent and fade in as they are spoken
    haik1.style.opacity = '0';
    haik2.style.opacity = '0';
    haik3.style.opacity = '0';

    window.setTimeout(() =>{
        haik1.style.opacity = '1';
        utter.text = haik1.textContent;
        window.speechSynthesis.speak(utter)
    }, 300);

    window.setTimeout(() =>{
        haik2.style.opacity = '1';
        utter.text = haik2.textContent;
        window.speechSynthesis.speak(utter)
    }, 1500);

    window.setTimeout(() =>{
        haik3.style.opacity = '1';
        utter.text = haik3.textContent;
        window.speechSynthesis.speak(utter)
    }, 3500);
})
