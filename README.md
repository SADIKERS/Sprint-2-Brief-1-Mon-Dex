# Mon Dex — dépôt de départ

Sprint 2 — Brief 1. Une page Tailwind **statique** à rendre interactive avec JavaScript, pour l'univers de votre choix : Pokémon, Digimon ou Yu-Gi-Oh!.

Lisez le brief complet avant de commencer.

## Installation

Prérequis : [Node.js](https://nodejs.org) (version 18 ou plus).

```bash
npm install
npm run dev
```

`npm run dev` surveille vos fichiers et régénère `dist/output.css` à chaque modification. Ouvrez ensuite `index.html` dans votre navigateur (ou avec l'extension Live Server).

Avant de mettre en ligne sur GitHub Pages :

```bash
npm run build
```

Puis committez `dist/output.css` : GitHub Pages ne lance pas Tailwind pour vous.

## Contenu du dépôt

| Fichier | Rôle |
| --- | --- |
| `index.html` | La page Dex, statique, avec 6 cartes écrites à la main |
| `tailwind.config.js` | Le thème neutre à remplacer par celui de votre univers |
| `src/input.css` | Les directives Tailwind et quelques classes de composants |
| `dist/output.css` | Le CSS généré par Tailwind (ne pas modifier à la main) |
| `data.js` | Le tableau `creatures`, à remplir avec au moins 12 créatures |
| `script.js` | Votre JavaScript, avec la liste des fonctionnalités à coder |
| `design/` | La maquette de la version finale |

## À compléter par vous

- **Univers choisi :** [Pokémon / Digimon / Yu-Gi-Oh!]
- **Lien GitHub Pages :** [lien]
- **Sources des images :** [liens]
- **Tests des expressions régulières :** [collez ici vos tests console : 2 valeurs valides et 2 invalides par expression]
- **Bonus réalisés :** [liste]
