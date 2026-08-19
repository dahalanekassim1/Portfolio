const valNom = document.getElementById('nom');
const valPrenom = document.getElementById('prenom');
const valEmail = document.getElementById('email')
const valMessage = document.getElementById('message');
const valBtn = document.getElementById('bouton');

const ErrNom = document.querySelector('.erreur_nom');
const ErrPrenom = document.querySelector('.erreur_prenom');
const ErrEmail = document.querySelector('.erreur_email');


function afficherMessage() {
    const nom = valNom.value.trim();
    const prenom = valPrenom.value.trim();
    const email = valEmail.value.trim();
    const msg = valMessage.value.trim();

    if (nom === "") {
        alert("Veuillez saisir votre nom");
    }
    else if (prenom === "") {
        alert("Veuillez saisir votre prenom");
    }
    else if (email === "" || !email.includes("@")){
        alert("Veuillez saisir votre email correctement");
    }
    else if (msg === "") {
        alert("Veuillez décrire votre souhait");
    }
}