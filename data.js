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
    type: "Lumière",
    level: 8,
    stats: { atk: 3000, def: 2500 },
    image: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/10/Blue-Eyes-White-Dragon-Art-6.jpg?q=50&fit=crop&w=825&dpr=1.5",
    description: "Un dragon légendaire doté d'une puissance d'attaque exceptionnelle."
  },
  {
    id: "#002",
    name: "Dark Magician",
    type: "Ténèbres",
    level: 7,
    stats: { atk: 2500, def: 2100 },
    image: "https://images7.alphacoders.com/122/thumbbig-1226536.webp",
    description: "Un puissant magicien qui maîtrise les forces des ténèbres."
  },
  {
    id: "#003",
    name: "Red-Eyes Black Dragon",
    type: "Ténèbres",
    level: 7,
    stats: { atk: 2400, def: 2000 },
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/13714538-e319-4cce-9062-6941ce18525d/dh6zj1s-74b46e2d-e89f-486c-8279-24414e217264.png/v1/fill/w_1280,h_721,q_80,strp/red_eyes_black_dragon__rush_duel___wallpaper__by_nhociory_dh6zj1s-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIxIiwicGF0aCI6Ii9mLzEzNzE0NTM4LWUzMTktNGNjZS05MDYyLTY5NDFjZTE4NTI1ZC9kaDZ6ajFzLTc0YjQ2ZTJkLWU4OWYtNDg2Yy04Mjc5LTI0NDE0ZTIxNzI2NC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Id9ifW8SivDl6BjWi3abhM3CbYDsd-wbh-fsNh0M0Xw",
    description: "Un dragon noir célèbre pour son potentiel de puissance."
  },
  {
    id: "#004",
    name: "Summoned Skull",
    type: "Ténèbres",
    level: 6,
    stats: { atk: 2500, def: 1200 },
    image: "https://i.pinimg.com/originals/ee/aa/bd/eeaabd0cc9e5d72e18ec217666a4c7e6.jpg",
    description: "Un démon redoutable capable de lancer de puissantes attaques."
  },
  {
    id: "#005",
    name: "Dark Magician Girl",
    type: "Ténèbres",
    level: 6,
    stats: { atk: 2000, def: 1700 },
    image: "https://uploads1.yugioh.com/card_images/3/detail/dark-magician-girl01_480x480.jpg?1372284126",
    description: "Une magicienne talentueuse qui utilise une magie puissante."
  },
  {
    id: "#006",
    name: "Slifer the Sky Dragon",
    type: "Divin",
    level: 10,
    stats: { atk: 2000, def: 1500 },
    image: "https://i.pinimg.com/originals/37/37/20/37372003762a712d777d24e6163bff15.jpg",
    description: "Un dragon divin dont la puissance dépend des cartes en main."
  },
  {
    id: "#007",
    name: "Obelisk the Tormentor",
    type: "Divin",
    level: 10,
    stats: { atk: 4000, def: 4000 },
    image: "https://wallpaperaccess.com/full/4818841.jpg",
    description: "Un dieu égyptien doté d'une force physique et magique immense."
  },
  {
    id: "#008",
    name: "The Winged Dragon of Ra",
    type: "Divin",
    level: 10,
    stats: { atk: 4000, def: 3500 },
    image: "https://i.pinimg.com/originals/f3/7d/79/f37d79b91149cc952676dc114b715ad2.jpg",
    description: "Un dragon divin légendaire associé au pouvoir du soleil."
  },
  {
    id: "#009",
    name: "Kuriboh",
    type: "Ténèbres",
    level: 1,
    stats: { atk: 300, def: 200 },
    image: "https://uploads1.yugioh.com/card_images/275/detail/Kuriboh.jpg?1375127846",
    description: "Une petite créature qui peut protéger son maître au combat."
  },
  {
    id: "#010",
    name: "Celtic Guardian",
    type: "Terre",
    level: 4,
    stats: { atk: 1400, def: 1200 },
    image: "https://uploads1.yugioh.com/card_images/317/detail/Obnoxious-Celtic-Guardian.jpg?1375129445",
    description: "Un guerrier agile qui défend courageusement son territoire."
  },
  {
    id: "#011",
    name: "Mystical Elf",
    type: "Lumière",
    level: 4,
    stats: { atk: 800, def: 2000 },
    image: "https://fbi.cults3d.com/uploaders/20881821/illustration-file/4b3cce60-8dc8-4fda-9a09-5e6bc1e501af/fgyh.png",
    description: "Une elfe mystérieuse connue pour ses grandes capacités défensives."
  },
  {
    id: "#012",
    name: "Gaia The Fierce Knight",
    type: "Terre",
    level: 7,
    stats: { atk: 2300, def: 2100 },
    image: "https://ms.yugipedia.com//thumb/5/52/GaiaTheFierceKnight-MADU-EN-VG-artwork.png/275px-GaiaTheFierceKnight-MADU-EN-VG-artwork.png",
    description: "Un chevalier puissant qui charge ses adversaires avec bravoure."
  }
];

