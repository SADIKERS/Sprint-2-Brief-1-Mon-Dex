# Mon Dex — Yu-Gi-Oh!

**Sprint 2 — Brief 1**

Mon Dex est une application web interactive dédiée à l'univers de **Yu-Gi-Oh!**. Le projet utilise HTML, Tailwind CSS et JavaScript pour afficher, rechercher, filtrer et gérer une collection de monstres.

## Démo

- **Lien GitHub Pages :** https://sadikers.github.io/Sprint-2-Brief-1-Mon-Dex/

## Technologies utilisées

- HTML5
- Tailwind CSS
- JavaScript
- Git et GitHub

## Fonctionnalités réalisées

### 1. Affichage des monstres
- Affichage dynamique des monstres à partir du tableau `creatures` dans `data.js`.
- Création des cartes avec JavaScript.
- Affichage des informations principales des monstres.

### 2. Détails d'un monstre
- Affichage des informations du monstre sélectionné.
- Présentation de son image, de sa description et de ses statistiques.

### 3. Recherche et filtres
- Recherche des monstres par nom.
- Filtrage des monstres par attribut.
- Combinaison de la recherche et des filtres.

### 4. Création d'un monstre
- Formulaire permettant d'ajouter un nouveau monstre.
- Validation des champs avec des expressions régulières.
- Vérification du format et de l'unicité de l'identifiant.
- Vérification du nom, de l'attribut, du niveau, des statistiques, de l'image et de la description.
- Affichage des messages d'erreur et indication visuelle des champs valides ou invalides.
- Ajout du monstre à la collection et actualisation de l'affichage après validation.

### 5. Mon équipe
- Ajout des monstres à une équipe.
- Limite de six monstres.
- Prévention des doublons.

## Installation et lancement

Prérequis : [Node.js](https://nodejs.org) version 18 ou supérieure.

```bash
npm install
npm run dev
```

La commande `npm run dev` surveille les fichiers et régénère le CSS lorsque des modifications sont effectuées.

Ouvrez ensuite `index.html` dans votre navigateur, par exemple avec l'extension Live Server.

Avant de déployer le projet sur GitHub Pages :

```bash
npm run build
```

Pensez à inclure `dist/output.css` dans vos commits, car GitHub Pages ne génère pas automatiquement le CSS de Tailwind.

## Structure du projet

| Fichier | Rôle |
| --- | --- |
| `index.html` | Structure HTML et interface de Mon Dex |
| `tailwind.config.js` | Configuration du thème Tailwind CSS |
| `src/input.css` | Fichier source CSS |
| `dist/output.css` | CSS généré par Tailwind CSS |
| `data.js` | Tableau `creatures` contenant les données des monstres |
| `script.js` | JavaScript : affichage, recherche, filtres, validation et gestion de l'équipe |
| `design/` | Maquettes du projet |

## Tests des expressions régulières

Les expressions régulières utilisées pour valider les champs du formulaire doivent être testées dans la console du navigateur.

Pour chaque expression régulière, ajoutez au moins :
- Deux valeurs valides.
- Deux valeurs invalides.

Les résultats des tests sont à compléter ici.

## Bonus

Les fonctionnalités bonus seront ajoutées et documentées lorsqu'elles seront réalisées.

## Auteur

Projet réalisé individuellement dans le cadre du Sprint 2 de YouCode.
