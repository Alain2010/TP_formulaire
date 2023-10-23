function validation() {

    let password1 = document.getElementById('password').value;
    let password2 = document.getElementById('confirmation').value;
    let error_message = document.getElementById('error_msg');
    let parent = document.body;

    if (password1 == "") {

        error_message.innerHTML = "Veuillez remplir correctement les formulaires";
        error_message.style.color = "red";
    }
    if (password2 == "") {

        error_message.innerHTML = "Veuillez remplir correctement les formulaires";
        error_message.style.color = "red";

    }
    if (password1 != password2) {

        error_message.innerHTML = "Les deux mots de passe ne sont pas identiques";
        error_message.style.color = "red";

    }
    if (password1 != "" && password2 == password1) {

        error_message.innerHTML = "Mot de passe validé !";
        error_message.style.color = "green";
        document.getElementById("soumettre").remove();
        document.getElementById('next_step').style.visibility = 'visible';
    }


}
let soumettre = document.querySelector('#soumettre');
soumettre.addEventListener('click', function () {

    validation();

})
