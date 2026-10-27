
/* ============================================================
   MON DEX - SCRIPT.JS
   Les données dyal les monstres kaynin f data.js
   ============================================================ */


/* 1. AFFICHAGE DES MONSTRES */

const grid = document.querySelector("#grid");

// Had function kat'affichi les cartes dyal les monstres f page
function displaymonsters(monsterToDisplay) {
  grid.innerHTML = monsterToDisplay.map(creature => `
    <article data-id="${creature.id}" class="flex min-w-0 flex-col gap-2 border-2 border-black rounded-card bg-yellow-500/50 p-2 shadow-2xl sm:gap-3 sm:p-3">
      <div class="relative overflow-hidden rounded-xl bg-brand-light">
        <img src="${creature.image}" alt="${creature.name}"
          class="aspect-[4/3] w-full object-cover transition-transform hover:scale-105">

        <span class="absolute left-2 top-2 rounded-lg bg-black/80 px-2 py-1 font-mono text-xs font-bold text-white sm:text-sm">
          ${creature.id}
        </span>
      </div>

      <h3 class="break-words font-display text-sm font-bold sm:text-base">
        ${creature.name}
      </h3>

      <div class="flex items-center justify-between gap-1 text-xs sm:text-sm">
        <span>${creature.type}</span>
        <span class="shrink-0 font-bold text-amber-500">★${creature.level}</span>
      </div>

      <div class="flex flex-wrap justify-between gap-1 text-xs font-semibold sm:text-sm">
        <span>ATK <strong>${creature.stats.atk}</strong></span>
        <span>DEF <strong>${creature.stats.def}</strong></span>
      </div>

      <button type="button" data-add-team="${creature.id}" class="btn-outline w-full min-w-0 whitespace-normal break-words px-2 py-2 text-center text-xs leading-tight sm:text-sm">
        Ajouter à l'équipe
      </button>
    </article>
  `).join("");
}

// Kan'affichiw ga3 les monstres mlli kat7ell page
displaymonsters(creatures);


/* 2. DÉTAIL DU MONSTRE */

const detail = document.querySelector("#detail");
const detailTitle = document.querySelector("#detail-title");
const detailImage = document.querySelector("#detail-image");
const detailName = document.querySelector("#detail-name");
const detailType = document.querySelector("#detail-type");
const detailLevel = document.querySelector("#detail-level");
const detailLevelValue = document.querySelector("#detail-level-value");
const detailDescription = document.querySelector("#detail-description");
const detailAtk = document.querySelector("#detail-atk");
const detailDef = document.querySelector("#detail-def");
const detailAtkBar = document.querySelector("#detail-atk-bar");
const detailDefBar = document.querySelector("#detail-def-bar");
const detailLevelBar = document.querySelector("#detail-level-bar");
const closeDetail = document.querySelector("#close-detail");

// Mlli katklik 3la carte, kan'affichiw les détails dyal monster
grid.addEventListener("click", function (event) {
  const card = event.target.closest("article[data-id]");

  // Ila ma kanch click 3la carte, kan7ebso l'exécution
  if (!card) return;

  // Ila kan click 3la bouton, ma kan7ellouch les détails
  if (event.target.closest("button")) return;

  // Kanakhdo l'ID dyal monster li tkhtar
  const creatureId = card.dataset.id;

  // Kan9elbo 3la monster f data.js
  const selectedCreature = creatures.find(
    creature => creature.id === creatureId
  );

  // Kanbano panneau dyal détails w kan3emro les informations
  detail.classList.remove("hidden");
  detailTitle.textContent = `${selectedCreature.id} - Détail`;
  detailImage.src = selectedCreature.image;
  detailImage.alt = selectedCreature.name;
  detailName.textContent = selectedCreature.name;
  detailType.textContent = selectedCreature.type;
  detailLevel.textContent = selectedCreature.level;
  detailLevelValue.textContent = selectedCreature.level;
  detailDescription.textContent = selectedCreature.description;
  detailAtk.textContent = selectedCreature.stats.atk;
  detailDef.textContent = selectedCreature.stats.def;

  // Kan7esbo tol dyal les barres 7asab les statistiques
  detailAtkBar.style.width =
    `${(selectedCreature.stats.atk / 4000) * 100}%`;

  detailDefBar.style.width =
    `${(selectedCreature.stats.def / 4000) * 100}%`;

  detailLevelBar.style.width =
    `${(selectedCreature.level / 10) * 100}%`;
});

// Mlli katklik 3la bouton fermer, kan5ebiw panneau dyal détails
closeDetail.addEventListener("click", function () {
  detail.classList.add("hidden");
});


/* 3. RECHERCHE ET FILTRE */

// Kanjiبو champ dyal recherche w les boutons dyal filtre
const searchInput = document.querySelector("#search");
const filters = document.querySelector("#filters");

// Had variable kat7fed type li khtar l'utilisateur
let selectedType = "Tous";

// Kanfiltriw les monstres 7asab smiya w type li tkhtar

function updateMonsters() {
  const searchText = searchInput.value.toLowerCase().trim();

  const filteredCreatures = creatures.filter(function (creature) {
    // Wach smiya dyal monster fiha texte li kteb l'utilisateur?
    const matchesSearch = creature.name.toLowerCase().includes(searchText);

    // Wach type dyal monster howa nafs type li tkhtar?
    const matchesType =
      selectedType === "Tous" || creature.type === selectedType;

    // Monster khaso yوافق recherche w filtre بجوج
    return matchesSearch && matchesType;
  });

  // Kan'affichiw ghir les monstres li kayوافقو les conditions
  displaymonsters(filteredCreatures);
}

// Kan3awdo recherche kolma tbdel texte
searchInput.addEventListener("input", function () {
  updateMonsters();
});

// Kanbeddlo filtre mlli l'utilisateur kayklik 3la bouton
filters.addEventListener("click", function (event) {
  const clickedButton = event.target.closest("button[data-type]");

  // Ila ma kanch click 3la bouton dyal filtre, kan7ebso l'exécution
  if (!clickedButton) return;

  selectedType = clickedButton.dataset.type;
  updateMonsters();
});


/* 4. CRÉATION D'UNE CRÉATURE */


/* 5. MON ÉQUIPE */

// Had array katjme3 les monstres li khtar l'utilisateur
const myTeam = [];

// Kanjiبو les emplacements w les compteurs dyal l'équipe

const teamslots = document.querySelector("#team-slots");
const teamcount = document.querySelector("#team-count");
const headerteamcount = document.querySelector("#count-team");

// Mlli l'utilisateur kayklik 3la bouton ajouter, kantraitiw l'événement
grid.addEventListener("click", function (event) {
  const addbutton = event.target.closest("button[data-add-team]");

  // Ila ma kanch click 3la bouton ajouter, kan7ebso l'exécution
  if (!addbutton) return;

  // Kanakhdo l'ID dyal monster li bgha l'utilisateur yzid
  const creatureId = addbutton.dataset.addTeam;

  // Ila l'équipe 3amra b 6 monstres, ma kanzido ta monster akhor
  if (myTeam.length >= 6) {
    alert("Votre équipe est complète !");
    return;
  }

  // Ila monster deja kayn f'équipe, ma kanzidouhch mra khra
  if (myTeam.some(function (creature) {
    return creature.id === creatureId;
  })) {
    alert("Ce monstre est déjà dans votre équipe !");
    return;
  }

  // Kan9elbo 3la les informations dyal monster li tkhtar
  const selectedCreature = creatures.find(function (creature) {
    return creature.id === creatureId;
  });

  // Kanzido monster l'équipe w kan3awdo n'affichiwha
  myTeam.push(selectedCreature);
  displayTeam();
});

// Had function kat'affichi l'équipe w kat7edded les compteurs
function displayTeam() {
  // Kan7eddto 3adad les monstres f les deux compteurs
  teamcount.textContent = `${myTeam.length}/6`;
  headerteamcount.textContent = myTeam.length;

  // Kancréyiw emplacement dyal kol monster f'équipe
  teamslots.innerHTML = myTeam.map(function (creature) {
    return `
      <div class="overflow-hidden rounded-lg border border-amber-600">
        <img
          src="${creature.image}"
          alt="${creature.name}"
          title="${creature.name}"
          class="aspect-[3/4] w-full object-cover"
        >
      </div>
    `;
  }).join("");

  // Kanzido emplacements khawyin 7ta ywliw 6 emplacements
  for (let i = myTeam.length; i < 6; i++) {
    teamslots.innerHTML += `
      <div class="flex aspect-[3/4] items-center justify-center rounded-lg border border-dashed border-gray-300 text-xl text-gray-500">
        +
      </div>
    `;
  }
}


/* 6. BONUS : LOCALSTORAGE, FETCH API, TRI, COMPARAISON */