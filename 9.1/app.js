var modal = document.getElementById("cookie1");
var lt = document.getElementById("leeftijd");
var kleur = document.getElementById("body");
var btn = document.getElementById("button");
var tekst = document.getElementById("tekst");

 function open_modal() {
    modal.style.display = "block"; 
}

function close_modal() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function leeftijd() {
    if (lt.value < 18) {
        modal.style.display = "none";
        kleur.style.backgroundColor = "red";
        btn.style.display = "none";
        tekst.innerText = "Je Bent te Jong!";
        console.log ("test1")
    }

    else {
        window.location.href ="https://efteling.com/";
    }

}