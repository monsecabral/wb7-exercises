"use strict";


console.log("toDo");

//https://jsonplaceholder.typicode.com/
const apiBaseUrl = "https://jsonplaceholder.typicode.com/todos/1"


window.onload = function(){
    const getResultsButton = document.getElementById("getResultsButton");
    getResultsButton.onclick = onGetResultsButtonClick;
};

function onGetResultsButtonClick(){
    console.log("clicked");

    const toDoinput = document.getElementById("toDoinput");
    const resultsOutput = document.getElementById("resultsOutput");

    let actualUrl = apiBaseUrl + toDoinput.value;

    console.log ("URL: " + actualUrl);

    // ???
}