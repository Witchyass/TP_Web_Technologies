let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearAll");
const counter = document.getElementById("counter");

function afficherTaches() {
  list.innerHTML = "";
  tasks.forEach((tache, i) => {
    const li = document.createElement("li");
    li.textContent = tache.text;
    if (tache.done) li.classList.add("completed");

    const terminerBtn = document.createElement("button");
    terminerBtn.textContent = "✓";
    terminerBtn.onclick = () => terminerTache(i);

    const supprimerBtn = document.createElement("button");
    supprimerBtn.textContent = "🗑️";
    supprimerBtn.onclick = () => supprimerTache(i);

    li.append(terminerBtn, supprimerBtn);
    list.appendChild(li);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  mettreAJourCompteur();
}

function ajouterTache() {
  const texte = input.value.trim();
  if (texte === "") return;
  tasks.push({ text: texte, done: false });
  input.value = "";
  afficherTaches();
}

function supprimerTache(index) {
  tasks.splice(index, 1);
  afficherTaches();
}

function terminerTache(index) {
  tasks[index].done = !tasks[index].done;
  afficherTaches();
}

function mettreAJourCompteur() {
  const total = tasks.length;
  const terminees = tasks.filter(t => t.done).length;
  counter.textContent = `Terminées: ${terminees} / ${total}`;
}

addBtn.addEventListener("click", ajouterTache);
input.addEventListener("keypress", e => { if (e.key === "Enter") ajouterTache(); });
clearBtn.addEventListener("click", () => {
  tasks = [];
  afficherTaches();
});

afficherTaches();
