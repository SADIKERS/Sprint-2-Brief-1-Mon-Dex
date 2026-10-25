
/* ============================================================
   MON DEX - SCRIPT.JS
   Les données viennent de data.js.
   ============================================================ */


/* 1. AFFICHAGE DES MONSTRES */

const grid = document.querySelector("#grid");

// Afficher les cartes des monstres dans la grille.
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

      <button type="button" data-add-team="${creature.id}" class="btn-outline w-full">
        Ajouter à l'équipe
      </button>
    </article>
  `).join("");
}

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

// Afficher les détails du monstre sélectionné.
grid.addEventListener("click", function (event) {
  const card = event.target.closest("article[data-id]");

  if (!card) return;
  if (event.target.closest("button")) return;

  const creatureId = card.dataset.id;

  const selectedCreature = creatures.find(
    creature => creature.id === creatureId
  );

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

  detailAtkBar.style.width =
    `${(selectedCreature.stats.atk / 4000) * 100}%`;

  detailDefBar.style.width =
    `${(selectedCreature.stats.def / 4000) * 100}%`;

  detailLevelBar.style.width =
    `${(selectedCreature.level / 10) * 100}%`;
});

// Fermer le panneau de détail.
closeDetail.addEventListener("click", function () {
  detail.classList.add("hidden");
});


/* 3. RECHERCHE ET FILTRE */

const searchInput = document.querySelector("#search");
const filters = document.querySelector("#filters");
let selectedType = "Tous";

// Filtrer les monstres selon le nom recherché et le type choisi.
function updateMonsters() {
  const searchText = searchInput.value.toLowerCase().trim();

  const filteredCreatures = creatures.filter(function (creature) {
    const matchesSearch = creature.name.toLowerCase().includes(searchText);

    const matchesType =
      selectedType === "Tous" || creature.type === selectedType;

    return matchesSearch && matchesType;
  });

  displaymonsters(filteredCreatures);
}

// Actualiser les résultats pendant la recherche.
searchInput.addEventListener("input", function () {
  updateMonsters();
});

// Actualiser les résultats lors du choix d'un filtre.
filters.addEventListener("click", function (event) {
  const clickedButton = event.target.closest("button[data-type]");

  if (!clickedButton) return;

  selectedType = clickedButton.dataset.type;
  updateMonsters();
});


/* 4. CRÉATION D'UNE CRÉATURE */


/* 5. MON ÉQUIPE */


/* 6. BONUS : LOCALSTORAGE, FETCH API, TRI, COMPARAISON */
