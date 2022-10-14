const dicht_aap = document.querySelector(".closed");
const open_aap = document.querySelector(".open");
let counter = 0;
const text = document.getElementById("text")

function openFace() {
    if (open_aap.classList.contains('active')) {
        dicht_aap.classList.add('active');
        open_aap.classList.remove('active');
    }

    counter = counter + 1
    console.log(counter)

    if (counter > 10) {
text.innerText = "Lekker bezig"
    }
}

function closedFace() {
    if (dicht_aap.classList.contains('active')) {
        open_aap.classList.add('active');
        dicht_aap.classList.remove('active');
    }
    counter = counter + 1
    console.log(counter)
    
    if (counter > 10) {
        text.innerText = "Lekker bezig"
     }
}

