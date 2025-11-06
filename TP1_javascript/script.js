// Partie 1 

document.getElementById('run-1').addEventListener('click', () => {
  const out = document.getElementById('out-1');
  var a = 1;
  let b = 2;
  const c = 3;
  out.innerHTML = `Avant bloc : var a=${a}, let b=${b}, const c=${c}<br>`;
  {
    var a = 10;
    let b = 20;
    const c = 30;
    out.innerHTML += `Dans bloc : var a=${a}, let b=${b}, const c=${c}<br>`;
  }
  out.innerHTML += `Après bloc : var a=${a}, let b=${b}, const c=${c}<br>`;
  out.innerHTML += `une const provoque une erreur.`;
});

document.getElementById('run-2').addEventListener('click', () => {
  const somme = (a, b) => a + b;
  document.getElementById('out-2').textContent = `somme(3,4) = ${somme(3, 4)}`;
});

document.getElementById('run-3').addEventListener('click', () => {
  const user = { name: "Nour", age: 10, city: "Tunis" };
  const { name, age } = user;
  document.getElementById('out-3').textContent = `name=${name}, age=${age}`;
});

document.getElementById('run-4').addEventListener('click', () => {
  const a1 = [1, 2, 3];
  const a2 = [4, 5, 6];
  const merged = [...a1, ...a2];
  const obj = { x: 1, y: 2 };
  const copy = { ...obj, y: 42 };
  document.getElementById('out-4').innerHTML =
    `Fusion: [${merged}]<br>Copie modifiée: ${JSON.stringify(copy)}`;
});

// Partie 2 

document.getElementById('run-5').addEventListener('click', () => {
  const livre = {
    titre: "The Metamorphosis",
    auteur: "Franz Kafka",
    annee: 1915,
    getInfo() { return `${this.titre} — ${this.auteur} (${this.annee})`; }
  };
  document.getElementById('out-5').textContent = livre.getInfo();
});

document.getElementById('run-6').addEventListener('click', () => {
  class Etudiant {
    constructor(nom, note) { this.nom = nom; this.note = note; }
    getMention() {
      if (this.note >= 16) return "Très bien";
      if (this.note >= 14) return "Bien";
      if (this.note >= 10) return "Passable";
      return "Échec";
    }
  }
  const e1 = new Etudiant("Zeineb", 17);
  const e2 = new Etudiant("Aziz", 13.5);
  const e3 = new Etudiant("Maissa", 9);
  document.getElementById('out-6').innerHTML =
    `${e1.nom}: ${e1.getMention()}<br>${e2.nom}: ${e2.getMention()}<br>${e3.nom}: ${e3.getMention()}`;
});

document.getElementById('run-7').addEventListener('click', () => {
  const notes = [12, 5, 17, 9, 20];
  const moyenne = notes.reduce((s, n) => s + n, 0) / notes.length;
  const triDesc = [...notes].sort((a, b) => b - a);
  const filt = notes.filter(n => n >= 10);
  document.getElementById('out-7').innerHTML =
    `Moyenne = ${moyenne.toFixed(2)}<br>Tri décroissant : [${triDesc}]<br>Notes >= 10 : [${filt}]`;
});

// Partie 3 

const wait = ms => new Promise(res => setTimeout(res, ms));

document.getElementById('run-8').addEventListener('click', async () => {
  const out = document.getElementById('out-8');
  out.textContent = "Début...";
  await wait(2000);
  out.textContent = "Fin après 2 s";
});

document.getElementById('run-9').addEventListener('click', async () => {
  const out = document.getElementById('out-9');
  out.textContent = "Chargement...";
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await resp.json();
    const first5 = posts.slice(0, 5).map(p => `#${p.id} — ${p.title}`);
    out.innerHTML = `<strong>5 premiers titres :</strong><br>${first5.join('<br>')}`;
  } catch (err) {
    out.textContent = "Erreur: " + err.message;
  }
});

// Mini-projet : To-Do list

document.getElementById('open-mini').addEventListener('click', () => {
  const area = document.getElementById('mini-area');
  area.innerHTML = `
    <div style="border:1px solid #ccc;padding:10px;border-radius:8px;">
      <input id="todo-text" placeholder="Nouvelle tâche" style="width:70%;padding:6px;" />
      <button id="todo-add">Ajouter</button>
      <div id="todo-list" style="margin-top:10px"></div>
    </div>`;
  const KEY = 'tpjs_todos_v1';
  const listEl = document.getElementById('todo-list');
  const input = document.getElementById('todo-text');

  function load() {
    const arr = JSON.parse(localStorage.getItem(KEY) || '[]');
    render(arr);
  }
  function save(arr) {
    localStorage.setItem(KEY, JSON.stringify(arr));
    render(arr);
  }
  function render(arr) {
    if (arr.length === 0) return listEl.innerHTML = '<em>Aucune tâche</em>';
    listEl.innerHTML = arr.map((t, i) => `
      <div>
        <input type="checkbox" ${t.done ? 'checked' : ''} data-i="${i}" class="chk">
        <span style="text-decoration:${t.done ? 'line-through' : 'none'}">${t.text}</span>
        <button data-i="${i}" class="del">Suppr</button>
      </div>`).join('');
    listEl.querySelectorAll('.del').forEach(b => b.onclick = e => {
      const i = +e.target.dataset.i;
      const arr = JSON.parse(localStorage.getItem(KEY) || '[]');
      arr.splice(i, 1);
      save(arr);
    });
    listEl.querySelectorAll('.chk').forEach(c => c.onchange = e => {
      const i = +e.target.dataset.i;
      const arr = JSON.parse(localStorage.getItem(KEY) || '[]');
      arr[i].done = e.target.checked;
      save(arr);
    });
  }
  document.getElementById('todo-add').onclick = () => {
    const text = input.value.trim();
    if (!text) return;
    const arr = JSON.parse(localStorage.getItem(KEY) || '[]');
    arr.push({ text, done: false });
    save(arr);
    input.value = '';
  };
  load();
});
