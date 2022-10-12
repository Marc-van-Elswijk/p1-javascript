var answer = document.getElementById("answer"); 

function multiply() {
    var x = Number(document.getElementById("input1").value); 
    var y = Number(document.getElementById("input2").value);

    answer.innerText  = x * y;    
}

function devide() {
    var x = Number(document.getElementById("input1").value); 
    var y = Number(document.getElementById("input2").value);

    answer.innerText  = x / y; 
}

function add() {
    var x = Number(document.getElementById("input1").value); 
    var y = Number(document.getElementById("input2").value);

    answer.innerText  = x + y; 

}

function minus() {
    var x = Number(document.getElementById("input1").value); 
    var y = Number(document.getElementById("input2").value);

    answer.innerText  = x - y; 
    
}