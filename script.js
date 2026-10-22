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
const detail = document.querySelector("#detail");
function displaymonsters() {

    grid.innerHTML = creatures.map(creature => `
        <article class="flex min-w-0 flex-col gap-2 border-2 border-black rounded-card bg-yellow-500/50 p-2 shadow-2xl sm:gap-3 sm:p-3">
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
