/*
    client.js

    @author : Jonathan Ingram
    Version : 11/7/2020
    Project : Lyric Generator
*/

//Give a message when the user leaves the tab
window.onblur = () => {
    document.title = "Why did you leave me?";
}
//Go back to normal when they're back
window.onfocus = () => {
    document.title = "Sentance Generator";
}

//change the text when the button is pushed
//in addition speach button will also appear when this is pressed
function changeText() { 
    //changing text
    document.getElementById("lyrics").innerHTML = "These be lyrics bro";
    //show speech button
    
}

