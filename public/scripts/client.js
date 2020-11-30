/*
    client.js

    @author : Jonathan Ingram
    Version : 11/7/2020
    Project : Haiku Generator
*/

//Give a message when the user leaves the tab
window.onblur = () => {
    document.title = "I aint ever seen two pretty best friends";
}
//Go back to normal when they're back
window.onfocus = () => {
    document.title = "Haiku Generator";
}

//change the text when the button is pushed
//in addition speach button will also appear when this is pressed

var socket;
function changeText() { 
  
    socket.on('testerEvent', function(data){console.log(data.description)}); 
    //changing text
    document.getElementById("lyrics").innerHTML = "Haiku Implimented";
    //show speech button
    document.getElementById('speech-button').style.display = "block";
}
