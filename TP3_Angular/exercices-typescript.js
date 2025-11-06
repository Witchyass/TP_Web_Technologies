// Exercices TypeScript – TP3
console.log("Bienvenue dans TypeScript !");
// Variables
var nom = "Yasmin";
var age = 23;
var etudiant = true;
// Objet
var user = { nom: nom, age: age, etudiant: etudiant };
console.log(user);
// Fonction
function saluer(personne) {
    return "Bonjour, " + personne + " !";
}
console.log(saluer("Yasmin"));
// Partie 5 
//Fonction générique
function creerTableau(a, b, c) {
    return [a, b, c];
}
var nombres = creerTableau(10, 20, 30);
var mots = creerTableau("HTML", "CSS", "JavaScript");
console.log("Nombres:", nombres);
console.log("Mots:", mots);
//Union et paramètre optionnel
function afficherInfo(nom, age) {
    if (age) {
        console.log("Nom:", nom, ":Âge:", age);
    }
    else {
        console.log("Nom:", nom, ":Âge non donné");
    }
}
afficherInfo("Yasmin", 21);
afficherInfo("Omar");
afficherInfo("Nour", "vingt ans");
//Enum
var Statut;
(function (Statut) {
    Statut[Statut["EnCours"] = 0] = "EnCours";
    Statut[Statut["Terminee"] = 1] = "Terminee";
    Statut[Statut["Annulee"] = 2] = "Annulee";
})(Statut || (Statut = {}));
var tache1 = { titre: "Apprendre Angular", statut: Statut.EnCours };
var tache2 = { titre: "Faire TP JavaScript", statut: Statut.Terminee };
var tache3 = { titre: "Créer mini projet", statut: Statut.Annulee };
console.log("Tâches:");
console.log(tache1.titre, "-", Statut[tache1.statut]);
console.log(tache2.titre, "-", Statut[tache2.statut]);
console.log(tache3.titre, "-", Statut[tache3.statut]);
