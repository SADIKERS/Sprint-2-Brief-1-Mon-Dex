// =============================================================
// data.js — les créatures de VOTRE univers
// =============================================================
// TODO : remplissez ce tableau avec au moins 12 créatures
// (Pokémon, Digimon ou Yu-Gi-Oh!), en respectant ce format :
//
// {
//   id: "#001",                                   // "#" suivi de 3 chiffres
//   name: "Exemple",                              // texte
//   type: "Feu",                                  // une valeur d'une liste fixe
//   level: "Base",                                // texte
//   stats: { hp: 45, attack: 49, defence: 49 },   // 3 nombres de 0 à 999
//   image: "https://example.com/001.png",         // lien https vers une image
//   description: "Une courte description."        // 10 à 200 caractères
// }
//
// Pensez à citer la source de vos images dans le README.


const creatures = [
  {
    id: "#001",
    name: "Blue-Eyes White Dragon",
    type: "🔆 Lumière",
    level: 8,
    stats: { atk: 3000, def: 2500 },
    image: "https://s3.zerochan.net/240/00/35/3959250.avif",
    description: "Un dragon légendaire doté d'une puissance d'attaque exceptionnelle."
  },
  {
    id: "#002",
    name: "Dark Magician",
    type: "Ténèbres",
    level: 7,
    stats: { atk: 2500, def: 2100 },
    image: "./images/dark-magician.png",
    description: "Un puissant magicien qui maîtrise les forces des ténèbres."
  },
  {
    id: "#003",
    name: "Red-Eyes Black Dragon",
    type: "Ténèbres",
    level: 7,
    stats: { atk: 2400, def: 2000 },
    image: "./images/red-eyes-black-dragon.png",
    description: "Un dragon noir célèbre pour son potentiel de puissance."
  },
  {
    id: "#004",
    name: "Summoned Skull",
    type: "Ténèbres",
    level: 6,
    stats: { atk: 2500, def: 1200 },
    image: "./images/summoned-skull.png",
    description: "Un démon redoutable capable de lancer de puissantes attaques."
  },
  {
    id: "#005",
    name: "Dark Magician Girl",
    type: "Ténèbres",
    level: 6,
    stats: { atk: 2000, def: 1700 },
    image: "./images/dark-magician-girl.png",
    description: "Une magicienne talentueuse qui utilise une magie puissante."
  },
  {
    id: "#006",
    name: "Slifer the Sky Dragon",
    type: "Divin",
    level: 10,
    stats: { atk: 2000, def: 1500 },
    image: "./images/slifer-the-sky-dragon.png",
    description: "Un dragon divin dont la puissance dépend des cartes en main."
  },
  {
    id: "#007",
    name: "Obelisk the Tormentor",
    type: "Divin",
    level: 10,
    stats: { atk: 4000, def: 4000 },
    image: "./images/obelisk-the-tormentor.png",
    description: "Un dieu égyptien doté d'une force physique et magique immense."
  },
  {
    id: "#008",
    name: "The Winged Dragon of Ra",
    type: "Divin",
    level: 10,
    stats: { atk: 4000, def: 3500 },
    image: "./images/winged-dragon-of-ra.png",
    description: "Un dragon divin légendaire associé au pouvoir du soleil."
  },
  {
    id: "#009",
    name: "Kuriboh",
    type: "Ténèbres",
    level: 1,
    stats: { atk: 300, def: 200 },
    image: "./images/kuriboh.png",
    description: "Une petite créature qui peut protéger son maître au combat."
  },
  {
    id: "#010",
    name: "Celtic Guardian",
    type: "Terre",
    level: 4,
    stats: { atk: 1400, def: 1200 },
    image: "./images/celtic-guardian.png",
    description: "Un guerrier agile qui défend courageusement son territoire."
  },
  {
    id: "#011",
    name: "Mystical Elf",
    type: "Lumière",
    level: 4,
    stats: { atk: 800, def: 2000 },
    image: "./images/mystical-elf.png",
    description: "Une elfe mystérieuse connue pour ses grandes capacités défensives."
  },
  {
    id: "#012",
    name: "Gaia The Fierce Knight",
    type: "Terre",
    level: 7,
    stats: { atk: 2300, def: 2100 },
    image: "./images/gaia-the-fierce-knight.png",
    description: "Un chevalier puissant qui charge ses adversaires avec bravoure."
  }
];

