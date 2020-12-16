/*
    client.js

    @author : Jonathan Ingram
    Version : 11/7/2020
    Project : Haiku Generator
*/

var socket;

socket = io.connect("http://localhost:3000");


window.onblur = () => {
    document.title = "I aint ever seen two pretty best friends";
}
//Go back to normal when they're back
window.onfocus = () => {
    document.title = "Haiku Generator";
}

//change the text when the button is pushed
//in addition speach button will also appear when this is pressed

let haik = document.getElementById('haiku-place');
let genBtn = document.getElementById('generate-button');

genBtn.addEventListener('click',  () =>{
    socket.on('generate', (data) =>{
        haik.innerHTML = data.hai;
    })

    document.getElementById('speech-button').style.display = "block";

});
