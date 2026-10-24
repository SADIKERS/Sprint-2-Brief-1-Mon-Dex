// =============================================================
// script.js — Mon Dex
// =============================================================
// Les données viennent de data.js (la constante `creatures`).
// Écrivez votre code ici, fonctionnalité par fonctionnalité.
// Une carte GitHub Projects et au moins un commit par fonctionnalité.


// -------------------------------------------------------------
// 1. AFFICHAGE
// Supprimez les cartes écrites à la main dans index.html et
// construisez la grille à partir du tableau `creatures`.
// -------------------------------------------------------------
const grid = document.querySelector("#grid");

function displaymonsters() {
  grid.innerHTML = creatures.map(creature => `
        <article data-id = "${creature.id}" class="flex min-w-0 flex-col gap-2 border-2 border-black rounded-card bg-yellow-500/50 p-2 shadow-2xl sm:gap-3 sm:p-3">
          <div class="relative overflow-hidden rounded-xl bg-brand-light">
            <img src="${creature.image}" alt="${creature.name}"
            class= "aspect-[4/3] w-full object-cover w-full transition-transform hover:scale-105">
            <span
              class="absolute left-2 top-2 rounded-lg bg-black/80 px-2 py-1 font-mono text-xs font-bold text-white sm:text-sm">
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
            <span>DEF <strong>${creature.stats.atk}</strong></span>
          </div>

          <button type="button" data-add-team="${creature.id}" class="btn-outline w-full">
            Ajouter à l'équipe
          </button>
        </article>

        `).join("");
}
displaymonsters();

// -------------------------------------------------------------
// 2. DÉTAIL
// Un clic sur une carte ouvre le panneau de détail :
// image, description, et statistiques affichées en barres.
// -------------------------------------------------------------

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
const closeDetail = document.querySelector("close-detail")


grid.addEventListener("click", function (event) {
  const card = event.target.closest("article[data-id]");

  if (!card) return;
  if (event.target.closest("button")) return;

  const creatureId = card.dataset.id;

  const selectedCreature = creatures.find(
    creature => creature.id === creatureId
  );
  
  document.querySelector("#detail").classList.remove("hidden");
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
  detailAtkBar.style.width = `${(selectedCreature.stats.atk / 4000) * 100}%`;
  detailDefBar.style.width = `${(selectedCreature.stats.def / 4000) * 100}%`;
  detailLevelBar.style.width = `${(selectedCreature.level / 12) * 100}%`;
});
// 
closeDetail.addEventListener("click", function(){
  
  detail.classList.add("hidden");
  deatil.classList.remove("hidden");
});

// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 4. FILTRE
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 6. MON ÉQUIPE
// Boutons « Ajouter à l'équipe » et « Retirer », gérés avec UN SEUL
// écouteur sur la grille et UN SEUL sur l'équipe (délégation).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 7. RÈGLES DE L'ÉQUIPE
// 6 créatures au maximum, pas de doublon, un message clair quand
// une action est refusée, et un compteur (x/6).
// -------------------------------------------------------------


// -------------------------------------------------------------
// BONUS : LocalStorage, Fetch API, tri, comparaison
// -------------------------------------------------------------
