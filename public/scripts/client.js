/*
    client.js

    @author : Jonathan Ingram
    Version : 11/7/2020
    Project : Haiku Generator
*/

//JS styling
window.onblur = () => {
    document.title = "I aint ever seen two pretty best friends";
}
//Go back to normal when they're back
window.onfocus = () => {
    document.title = "Haiku Generator";
}

window.onload = () => {
    //wait three seconds then fade in
    window.setTimeout(fade_in(), 300);
  }
  
  function fade_in() {
    //opacity goes from 0 to 1
    document.getElementById('content-header').style.opacity = '1';
    
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

genBtn.addEventListener('click',  () =>{
    socket.emit('generate', haik1);
    socket.on('generate', (data) =>{
        haik1.innerHTML = data.hai1;
        haik2.innerHTML = data.hai2;
        haik3.innerHTML = data.hai3;
    })
    
    document.getElementById('speech-button').style.display = "block";

});
