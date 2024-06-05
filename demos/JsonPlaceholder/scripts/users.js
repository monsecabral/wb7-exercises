"use strict";


console.log("address");

//https://jsonplaceholder.typicode.com/
const apiBaseUrl = "https://jsonplaceholder.typicode.com/todos/1"

window.onload = function(){
    const getResultsButton = document.getElementById("getResultsButton");
    getResultsButton.onclick = onGetResultsButtonClick;
};

function onGetResultsButtonClick(){
    console.log("clicked");

    const categoryInput = document.getElementById("categoryInput");
    const resultsOutput = document.getElementById("resultsOutput");

    let actualUrl = apiBaseUrl + categoryInput.ariaValueMax;

    console.log("URL: " + actualUrl);

    fetch(actualUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        for (let d in data){
            let table = document.createElement("table");
            console.log(d + " " + data[d]);
        }
    })
}
