
//Exercice chrono

const date_du_jour = new Date().getTime();
const date_futur = new Date('october 27, 2023').getTime();
console.log(date_du_jour, date_futur);

let soustraction = date_futur - date_du_jour
let jour_miliseconde = 1000 * (60 * 60 * 24);
console.log(jour_miliseconde);
console.log(soustraction);

let jour = Math.floor(soustraction / jour_miliseconde);
console.log(jour);

let heure = Math.floor(soustraction % jour_miliseconde) / (1000 * 60 * 60);
console.log(heure);

let minutes = Math.floor(soustraction % (1000 * 60 * 60));
console.log(minutes);

// Travail pratique en cours.. pas terminé.