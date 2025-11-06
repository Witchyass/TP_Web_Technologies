// Exercices TypeScript – TP3
console.log("Bienvenue dans TypeScript !");

// Variables
let nom: string = "Yasmin";
let age: number = 23;
let etudiant: boolean = true;

// Objet
let user = { nom, age, etudiant };
console.log(user);

// Fonction
function saluer(personne: string): string {
  return "Bonjour, " + personne + " !";
}
console.log(saluer("Yasmin"));

// Partie 5 

//Fonction générique
function creerTableau<T>(a: T, b: T, c: T): T[] {
  return [a, b, c];
}

let nombres = creerTableau(10, 20, 30);
let mots = creerTableau("HTML", "CSS", "JavaScript");

console.log("Nombres:", nombres);
console.log("Mots:", mots);

//Union et paramètre optionnel
function afficherInfo(nom: string, age?: number | string) {
  if (age) {
    console.log("Nom:", nom, ":Âge:", age);
  } else {
    console.log("Nom:", nom, ":Âge non donné");
  }
}

afficherInfo("Yasmin", 21);
afficherInfo("Omar");
afficherInfo("Nour", "vingt ans");

//Enum
enum Statut {
  EnCours,
  Terminee,
  Annulee
}

let tache1 = { titre: "Apprendre Angular", statut: Statut.EnCours };
let tache2 = { titre: "Faire TP JavaScript", statut: Statut.Terminee };
let tache3 = { titre: "Créer mini projet", statut: Statut.Annulee };

console.log("Tâches:");
console.log(tache1.titre, "-", Statut[tache1.statut]);
console.log(tache2.titre, "-", Statut[tache2.statut]);
console.log(tache3.titre, "-", Statut[tache3.statut]);
