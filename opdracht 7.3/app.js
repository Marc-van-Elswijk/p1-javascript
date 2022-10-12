var count = 0;
var titel = document.getElementById ("titel")
var tekst = document.getElementById ("h1")

function clicker() {
    count += 1;
    tekst.innerText = count;
    if (count == 10) {
        count = 0;
    }
}
