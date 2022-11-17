(function () {
const canvas = document.getElementById("gamecontainer")
const ctx = canvas.getContext('2d');
let tekst = document.getElementById("log");

ctx.beginPath();
ctx.fillStyle = 'red';
ctx.strokeStyle = 'orange';

    ctx.rect(0,0,100,50);
    ctx.fill();
    ctx.stroke();

    canvas.addEventListener('keydown', (event) => {
        var key = event.key;
        var code = event.code;

        if (key == "ArrowUp") {
            console.log ('up');
        }

        if (key == "ArrowDown") {
            console.log ('down');
        }

        if (key == "ArrowRight") {
            console.log ('right');
        }

        if (key == "ArrowLeft") {
            console.log ('left');
        }
    })
})()

var lastDownTarget, canvas;
window.onload = function() {
    canvas = document.getElementById('gamecontainer');
}