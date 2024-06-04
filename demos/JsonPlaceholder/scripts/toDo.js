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

    const toDoInput = document.getElementById("toDoInput");
    const resultsOutput = document.getElementById("resultsOutput");

    let actualUrl = apiBaseUrl + toDoInput.value;

    console.log ("URL: " + actualUrl);

    fetch(actualUrl)
    .then(response => response.json())
    .then(data =>{
        console.log(data);

        let p = document.createElement("p");
        p.innerHTML = data.title;
        resultsOutput.appendChild(p);
    });
}