const dicht_aap = document.querySelector(".closed");
const open_aap = document.querySelector(".open");

function openFace() {
    if (open_aap.classList.contains('active')) {
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
}

function closedFace() {
    if (dicht_aap.classList.contains('active')) {
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
}