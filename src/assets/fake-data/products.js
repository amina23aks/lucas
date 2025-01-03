// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.2.jpg";
import product_01_image_04 from "../images/product_01.3.jpg";
import product_01_image_05 from "../images/product_01.4.jpg";
import product_01_image_06 from "../images/product_01.5.jpg";
import product_01_image_07 from "../images/product_01.6.jpg";
import product_01_image_08 from "../images/product_01.7.jpg";
import product_01_image_09 from "../images/product_01.8.jpg";
import product_01_image_10 from "../images/product_01.9.jpg";
import product_01_image_11 from "../images/product_01.10.jpg";
import product_01_image_12 from "../images/product_01.11.jpg";
import product_01_image_13 from "../images/product_01.12.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";
import product_02_image_04 from "../images/product_2.4.jpg";
import product_02_image_05 from "../images/product_2.5.jpg";
import product_02_image_06 from "../images/product_2.6.jpg";
import product_02_image_07 from "../images/product_2.7.jpg";
import product_02_image_08 from "../images/product_2.8.jpg";
import product_02_image_09 from "../images/product_2.9.jpg";

import product_06_image_01 from "../images/product_6.1.jpg";
import product_06_image_02 from "../images/product_6.2.jpg";
import product_06_image_03 from "../images/product_6.3.jpg";
import product_06_image_04 from "../images/product_6.4.jpg";
import product_06_image_05 from "../images/product_6.5.jpg";
import product_06_image_06 from "../images/product_6.6.jpg";
import product_06_image_07 from "../images/product_6.7.jpg";
import product_06_image_08 from "../images/product_6.8.jpg";

import product_07_image_01 from "../images/product_7.1.jpg";
import product_07_image_02 from "../images/product_7.2.jpg";
import product_07_image_03 from "../images/product_7.3.jpg";
import product_07_image_04 from "../images/product_7.4.jpg";
import product_07_image_05 from "../images/product_7.5.jpg";
import product_07_image_06 from "../images/product_7.6.jpg";
import product_07_image_07 from "../images/product_7.7.jpg";
import product_07_image_08 from "../images/product_7.8.jpg";
import product_07_image_09 from "../images/product_7.9.jpg";
import product_07_image_10 from "../images/product_7.10.jpg";

const products = [
  {
    id: "01",
    title: "100% pistache",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Gros-modèles",
    desc: "Gâteau signature quatre parts composé d'un biscuit moelleux à la pistache, crème légère à la pistache, croustillant praliné pistache. Décoré de macarons pistache et d'éclats de pistaches torréfiées. Sans colorants artificiels, 100% pure pâte de pistache.",

  },

  {
    id: "02",
    title: "Tarte mystère noisette",
    price: 115.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Tarte",
    desc: "Pâte sucrée aux amandes, crémeux praliné noisette, ganache montée noisette, noisettes caramélisées. Garnie de copeaux de chocolat noir et noisettes torréfiées concassées.",
  },

  {
    id: "03",
    title: "Tarte mystère chocolat",
    price: 110.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Tarte",
    desc: "Pâte sucrée au cacao, crémeux chocolat noir 70%, ganache montée chocolat, croustillant feuillantine. Décorée de copeaux de chocolat noir et poudre de cacao.",
  },

  {
    id: "04",
    title: "Tarte mystère pistache",
    price: 110.0,
    image01: product_02_image_03,
    image02: product_02_image_02,
    image03: product_02_image_01,
    category: "Tarte",
    desc: "Pâte sucrée, crémeux pistache, ganache montée pistache, pistaches caramélisées. Garnie d'éclats de pistaches torréfiées et macarons pistache.",
  },

  {
    id: "05",
    title: "pistache chocolat",
    price: 24.0,
    image01: product_01_image_02,
    image02: product_01_image_01,
    image03: product_01_image_03,
    category: "Gros-modèles",
    desc: "Alliance parfaite entre biscuit chocolat, crémeux pistache, mousse chocolat noir 70%. Décoré de macarons pistache et copeaux de chocolat noir.",
  },

  {
    id: "06",
    title: "Pistache fleur d'oranger",
    price: 24.0,
    image01: product_01_image_03,
    image02: product_01_image_02,
    image03: product_01_image_01,
    category: "Gros-modèles",
    desc: "Gâteau quatre parts avec biscuit moelleux à la fleur d'oranger, crème légère pistache, confit d'orange. Garni de pistaches caramélisées et écorces d'orange confites.",

  },

  {
    id: "07",
    title: "Tarte citron meringuée",
    price: 115.0,
    image01: product_02_image_04,
    image02: product_02_image_05,
    image03: product_02_image_06,
    category: "Tarte",
    desc: "Pâte sucrée, crème citron maison, meringue italienne. Réalisée avec des citrons frais non traités, décorée de zestes de citron confits.",
  },

  {
    id: "08",
    title: "Tarte noisette",
    price: 110.0,
    image01: product_02_image_05,
    image02: product_02_image_06,
    image03: product_02_image_07,
    category: "Tarte",
    desc: "Pâte sucrée aux noisettes, crème de noisette, ganache noisette, noisettes caramélisées. Garnie de noisettes du Piémont torréfiées.",
  },
  {
    id: "09",
    title: "Tarte pistache fleur d'oranger",
    price: 110.0,
    image01: product_02_image_06,
    image02: product_02_image_07,
    image03: product_02_image_08,
    category: "Tarte",
    desc: "Pâte sucrée, crème pistache parfumée à la fleur d'oranger, pistaches caramélisées. Décorée d'écorces d'orange confites et pistaches torréfiées.",
  },
  {
    id: "10",
    title: "Sundae fruit rouge",
    price: 24.0,
    image01: product_01_image_04,
    image02: product_01_image_05,
    image03: product_01_image_06,
    category: "Gros-modèles",
    desc: "Gâteau quatre parts composé d'un biscuit moelleux, crème légère vanille, confit de fruits rouges (framboise, fraise, groseille). Décoré de fruits rouges frais et meringues.",
  },

  {
    id: "11",
    title: "Pain au raisin",
    price: 35.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Viennoiserie",
    desc: "Pâte feuilletée levée artisanale, crème pâtissière à la vanille, raisins secs réhydratés au rhum. 27 tours de feuilletage.",
  },

  {
    id: "12",
    title: "Mini torsade",
    price: 35.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Viennoiserie",
    desc: "Pâte feuilletée levée artisanale torsadée, parsemée de sucre perlé. 27 tours de feuilletage, dorée à l'œuf.",
  },

  {
    id: "13",
    title: "Oranais",
    price: 35.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_01,
    category: "Viennoiserie",
    desc: "Pâte feuilletée levée, crème pâtissière à la fleur d'oranger, écorces d'orange confites. Glaçage royal aux zestes d'orange.",
  },

  {
    id: "14",
    title: "Passion vanille",
    price: 24.0,
    image01: product_01_image_05,
    image02: product_01_image_06,
    image03: product_01_image_07,
    category: "Gros-modèles",
    desc: "Gâteau quatre parts avec biscuit moelleux vanille, crémeux fruit de la passion, mousse légère vanille de Madagascar. Décoré de fruits frais de saison.",

  },

  {
    id: "15",
    title: "Framboise citron",
    price: 24.0,
    image01: product_01_image_06,
    image02: product_01_image_07,
    image03: product_01_image_08,
    category: "Gros-modèles",
    desc: "Gâteau quatre parts composé d'un biscuit citron, confit de framboises, mousse citron, crémeux framboise. Décoré de framboises fraîches et zestes de citron confits.",

  },

  {
    id: "16",
    title: "Fraisier",
    price: 24.0,
    image01: product_01_image_07,
    image02: product_01_image_08,
    image03: product_01_image_09,
    category: "Gros-modèles",
    desc: "Gâteau quatre parts avec biscuit génoise, crème mousseline vanille, fraises fraîches. Décoré de pâte d'amande et fraises de saison.",

  },

  {
    id: "17",
    title: "Trianon",
    price: 24.0,
    image01: product_01_image_08,
    image02: product_01_image_09,
    image03: product_01_image_10,
    category: "Gros-modèles",
    desc: "Gâteau quatre parts , croustillant praliné, mousse au chocolat noir 70%. Glaçage miroir chocolat noir.",

  },

  {
    id: "18",
    title: "Tarte pistache",
    price: 115.0,
    image01: product_02_image_09,
    image02: product_02_image_08,
    image03: product_02_image_09,
    category: "Tarte",
    desc: "Pâte sucrée, crème pistache pure, pistaches caramélisées. Décorée de pistaches torréfiées et poudre de pistache.",
  },

  {
    id: "19",
    title: "Tarte framboise passion",
    price: 115.0,
    image01: product_02_image_07,
    image02: product_02_image_02,
    image03: product_02_image_01,
    category: "Tarte",
    desc: "Pâte sucrée, crème passion, framboises fraîches, gelée passion. Décorée de fruits frais et fruits de la passion.",
  },

  {
    id: "20",
    title: "Meringue cacahouète",
    price: 115.0,
    image01: product_06_image_04,
    image02: product_06_image_05,
    image03: product_06_image_06,
    category: "Viennoiserie",
    desc: "Meringue française, praliné cacahuète maison, cacahuètes caramélisées. Saupoudrée de sucre glace.",
  },

  {
    id: "21",
    title: "Pain au raisin",
    price: 115.0,
    image01: product_06_image_05,
    image02: product_06_image_04,
    image03: product_06_image_06,
    category: "Viennoiserie",
    desc: "Pâte feuilletée levée, crème pâtissière vanille, raisins secs marinés au rhum. 27 tours de feuilletage.",
  },

  {
    id: "22",
    title: "New York roll pistache",
    price: 115.0,
    image01: product_06_image_06,
    image02: product_06_image_05,
    image03: product_06_image_04,
    category: "Viennoiserie",
    desc: "Pâte feuilletée levée, crème pistache, éclats de pistaches torréfiées. Roulé et glacé au sucre.",
  },

  {
    id: "23",
    title: "Tarte framboise chocolat",
    price: 110.0,
    image01: product_02_image_08,
    image02: product_02_image_09,
    image03: product_02_image_07,
    category: "Tarte",
    desc: "Pâte sucrée cacao, ganache chocolat noir, framboises fraîches. Décorée de copeaux de chocolat et framboises.",
  },

  {
    id: "24",
    title: "3 chocolat",
    price: 110.0,
    image01: product_01_image_09,
    image02: product_01_image_10,
    image03: product_01_image_08,
    category: "Gros-modèles",
    desc: "Gâteau quatre parts composé d'un biscuit chocolat, mousse chocolat noir, lait et blanc Valrhona. Glaçage miroir trois chocolats.",

  },

  {
    id: "25",
    title: "Choco love",
    price: 110.0,
    image01: product_07_image_01,
    image02: product_07_image_02,
    image03: product_07_image_03,
    category: "Entremets",
    desc: "Biscuit chocolat, crémeux chocolat noir, mousse chocolat au lait. Décoré de cœurs en chocolat.",
  },

  {
    id: "26",
    title: "Sundae fruit rouge",
    price: 110.0,
    image01: product_07_image_02,
    image02: product_07_image_03,
    image03: product_07_image_04,
    category: "Entremets",
    desc: "Biscuit vanille, crème légère, coulis de fruits rouges, fruits rouges frais. Décoré de chantilly et meringues.",
  },

  {
    id: "27",
    title: "Gros macaron framboise",
    price: 110.0,
    image01: product_07_image_03,
    image02: product_07_image_04,
    image03: product_07_image_05,
    category: "Entremets",
    desc: "Macaron géant, ganache montée framboise, confit de framboises. Décoré de framboises fraîches.",
  },

  {
    id: "28",
    title: "Gros macaron pistache",
    price: 110.0,
    image01: product_07_image_04,
    image02: product_07_image_05,
    image03: product_07_image_06,
    category: "Entremets",
    desc: "Macaron géant, ganache montée pistache, croustillant pistache. Décoré de pistaches torréfiées.",
  },

  {
    id: "29",
    title: "Paris Sicile",
    price: 110.0,
    image01: product_07_image_05,
    image02: product_07_image_06,
    image03: product_07_image_07,
    category: "Entremets",
    desc: "Biscuit pistache, crémeux pistache, mousse ricotta, confit de citron. Décoré de pistaches et zestes confits.",
  },

  {
    id: "30",
    title: "Amour 100% pistache",
    price: 110.0,
    image01: product_07_image_06,
    image02: product_07_image_07,
    image03: product_07_image_08,
    category: "Entremets",
    desc: "Biscuit pistache, crémeux pistache, mousse pistache, croustillant pistache. Décoré de macarons pistache et pistaches torréfiées.",

  },

  {
    id: "31",
    title: "Cheesecake pistache",
    price: 110.0,
    image01: product_07_image_07,
    image02: product_07_image_08,
    image03: product_07_image_09,
    category: "Entremets",
    desc: "Base spéculoos, cheesecake à la pistache, coulis de pistache. Décoré de pistaches caramélisées et crumble spéculoos.",
  },

  {
    id: "32",
    title: "Cheesecake vanille caramel",
    price: 110.0,
    image01: product_07_image_08,
    image02: product_07_image_09,
    image03: product_07_image_10,
    category: "Entremets",
    desc: "Base spéculoos, cheesecake vanille bourbon, caramel au beurre salé. Décoré de fruits secs caramélisés.",
  },

  {
    id: "33",
    title: "3 chocolat",
    price: 110.0,
    image01: product_07_image_09,
    image02: product_07_image_08,
    image03: product_07_image_10,
    category: "Entremets",
    desc: "Croustillant praliné, mousse chocolat noir 70%, chocolat au lait 40% et chocolat blanc. Glaçage miroir trois chocolats.",
  },

  {
    id: "34",
    title: "Fraisier pistache",
    price: 110.0,
    image01: product_07_image_10,
    image02: product_07_image_09,
    image03: product_07_image_08,
    category: "Entremets",
    desc: "Biscuit pistache, crème mousseline pistache, fraises fraîches. Décoré de pâte d'amande verte et pistaches torréfiées.",
  },

  {
    id: "35",
    title: "Trianon",
    price: 110.0,
    image01: product_01_image_10,
    image02: product_01_image_09,
    image03: product_01_image_08,
    category: "Gros-modèles",
    desc: "Gâteau quatre parts , croustillant praliné, mousse au chocolat noir 70%. Glaçage miroir chocolat noir.",
  },

  {
    id: "36",
    title: "Pistache fleur d'oranger",
    price: 110.0,
    image01: product_01_image_11,
    image02: product_01_image_10,
    image03: product_01_image_12,
    category: "Gros-modèles",
    desc: "Gâteau quatre parts avec biscuit fleur d'oranger, crème pistache, confit d'orange. Décoré de pistaches et écorces d'orange confites.",

  },

  {
    id: "37",
    title: "Tarte citron",
    price: 110.0,
    image01: product_01_image_12,
    image02: product_01_image_11,
    image03: product_01_image_09,
    category: "Gros-modèles",
    desc: "Gâteau quatre parts avec pâte sucrée, crème citron, meringue italienne. Réalisé avec des citrons jaunes bio, décoré de zestes confits.",


  },

  {
    id: "38",
    title: "Fraisier",
    price: 110.0,
    image01: product_01_image_13,
    image02: product_01_image_05,
    image03: product_01_image_06,
    category: "Gros-modèles",
    desc: "Gâteau quatre parts avec génoise vanille, crème mousseline à la vanille de Madagascar, fraises fraîches de saison. Décoré de pâte d'amande rose.",

  },

  {
    id: "39",
    title: "croissant",
    price: 115.0,
    image01: product_06_image_07,
    image02: product_06_image_08,
    image03: product_06_image_06,
    category: "Viennoiserie",
    desc: "Pâte feuilletée levée au beurre AOP Charentes-Poitou, 27 tours de feuilletage. Façonné à la main, doré à l'œuf.",
  },

  {
    id: "40",
    title: "mini pain au chocolat",
    price: 115.0,
    image01: product_06_image_08,
    image02: product_06_image_07,
    image03: product_06_image_06,
    category: "Viennoiserie",
    desc: "Version miniature du pain au chocolat classique. Pâte feuilletée levée, bâtons de chocolat noir Valrhona, 27 tours de feuilletage.",
  },
];

export default products;
