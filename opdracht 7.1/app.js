var budget = 100;
var product = 60;
var tekst = document.getElementById ("h1")

if (budget > product) {
    tekst.innerText = "U heeft genoeg geld!"
}

else {
    tekst.innerText = "Helaas, te weinig geld"
}
