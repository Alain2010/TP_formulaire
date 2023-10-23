
let price = Math.floor(Math.random() * 10);
let compteur = 5
console.log(price);
function juste_prix() {
    console.log(price);
    let essai = document.getElementById('price').value
    let message = document.querySelector('#message');
    let test = document.querySelector('#test');

    if (essai == "") {
        message.innerHTML = "Vous n'avez pas renseigner le prix";
        message.style.color = "red";
    }
    for (i = 0; i >= 0; i--) {

        if (essai > price) {
            message.innerHTML = "Prix trop élévé veuillez ressayer";
            message.style.color = "red";
        }
        if (essai < price && essai != "") {
            message.innerHTML = "Prix trop petit veuillez ressayer"
            message.style.color = "red";
        }
        if (essai == price) {

            document.getElementById('soumettre').style.visibility = "hidden";
            message.innerHTML = "Bravo vous avez trouvé !";
            message.style.color = "green";
            document.getElementById('next_step').style.visibility = "visible";
        }
    }
}
let validation = document.getElementById('soumettre');
validation.addEventListener('click', function () {
    juste_prix();
})
