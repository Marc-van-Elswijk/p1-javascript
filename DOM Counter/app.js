//////////////////////////////////////////////////
/////////////// Variable /////////////////////////
//////////////////////////////////////////////////
var button = document.getElementById("Daddy");
var count = 0;
var min = document.getElementById("stepbro"); 
var titel = document.getElementById("stepdad");

//////////////////////////////////////////////////
/////////////// Functions ////////////////////////
//////////////////////////////////////////////////
function clicker() {
    count += 1;
    titel.innerText = count + " keer gerold";
    document.body.style.backgroundColor = "blue";
    button.style.backgroundColor = "red"
}
function counter2() {
    count -= 1;
    titel.innerText = count + " keer gerold"; 
    document.body.style.backgroundColor = "red";
    min.style.backgroundColor = "blue"
}