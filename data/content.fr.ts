// French locale — mirrors the shape of `en` in content.ts (enforced by the
// Content type). Only translatable copy differs; URLs, project names and
// tech-stack tokens stay as-is. `contact` is reused untouched.

import { contact, type Content } from "./content";

export const fr: Content = {
  person: {
    name: "Sasha Sutton",
    roleShort: "IA & science · ingénieur du son",
    roleTags: [
      "IA",
      "Science des données",
      "Ingénierie logicielle",
      "Production musicale",
      "DJ",
    ],
    location: "Paris",
    statement:
      "Je suis arrivé à l'IA par la musique. J'ai passé quelque temps comme ingénieur du son et DJ à Londres avant d'écrire ma première ligne de code.",
    philosophy:
      "Je n'aime pas laisser les choses comme des boîtes noires. Si je m'en sers, je veux comprendre pourquoi ça marche vraiment.",
    intro:
      "Je suis né à Udon Thani, en Thaïlande, et j'ai grandi entre le Laos, la campagne française, le Sénégal et Bordeaux. Je suis arrivé à l'IA par un chemin qui n'avait, au départ, rien à voir avec l'informatique.",
    bio: "J'ai commencé par la musique. J'ai passé deux ans à Point Blank à Londres pour me former comme ingénieur du son, puis deux autres au sein de l'équipe son du Fabric, l'un des clubs les plus connus de Londres. Je suis ensuite retourné étudier les mathématiques et l'informatique simplement pour comprendre comment fonctionnent vraiment les ordinateurs, et j'y suis finalement resté. Je suis aujourd'hui étudiant en M1 Data, Knowledge & Hybrid AI (DKAI) à l'Université Paris-Saclay, avec un axe de recherche en TAL et vision par ordinateur.",
    music:
      "La musique n'a pas disparu. Je mixe toujours, je produis de la musique électronique et je joue de la guitare, et cela continue de se glisser dans mes projets techniques, comme Air Harp.",
    birthplaceNote:
      "Je suis né à Udon Thani, en Thaïlande, et j'ai grandi dans quatre pays et sur deux continents avant Paris. La carte ci-dessous indique les endroits où j'ai réellement vécu.",
  },

  ambition: {
    lead: "Là où je vais.",
    body: "Je veux faire de la recherche en IA, surtout sur la façon dont ces systèmes fonctionnent vraiment, autour de la vision par ordinateur et appliquée au monde réel. Je commence un Master en Data, Knowledge & Hybrid AI à l'Université Paris-Saclay.",
    aims: [
      {
        title: "Recherche en IA & vision",
        detail:
          "M'orienter vers un parcours de recherche en IA centré sur la vision par ordinateur et sur la façon dont ces systèmes fonctionnent réellement, appliqués à des problèmes réels et complexes plutôt qu'à des jeux de données propres.",
      },
      {
        title: "Construire depuis les fondations",
        detail:
          "Continuer à écrire les mathématiques et à les réimplémenter de zéro, comme un réseau de neurones en C, un moteur de recherche vectorielle ou un réseau que l'on peut regarder penser, pour que rien ne reste une boîte noire.",
      },
      {
        title: "L'enseigner publiquement",
        detail:
          "Transformer les articles et les projets construits de zéro en une série de vidéos sur les maths et l'informatique, expliquées comme j'aurais aimé qu'on me les montre.",
      },
    ],
  },

  livedIn: ["France", "Angleterre", "Sénégal", "Laos"],

  lenses: {
    science: {
      title: "Science & IA",
      kicker: "technique / précis",
      blurb:
        "M1 en Data, Knowledge & Hybrid AI à Paris-Saclay. TAL, vision par ordinateur, et tout construit de zéro, de la formation aux publications et aux projets.",
      href: "/science",
    },
    music: {
      title: "Musique & Son",
      kicker: "sonore / expressif",
      blurb:
        "Point Blank et le Fabric à Londres. Le mix, la production, et le moment où le son a commencé à s'infiltrer dans le code.",
      href: "/music",
    },
    content: {
      title: "Contenu",
      kicker: "expliquer / en public",
      blurb:
        "Une nouvelle série de vidéos sur les maths et l'informatique, expliquées de zéro, comme j'aurais aimé qu'on me les montre.",
      href: "/content",
    },
  },

  science: {
    summary:
      "Étudiant en M1 Data, Knowledge & Hybrid AI (DKAI) à l'Université Paris-Saclay, en route vers la recherche en TAL et vision par ordinateur.",
    breadth:
      "Il n'y a pas qu'une seule voie. Des stages de recherche, des statistiques pour la validation d'une thèse, des développements full-stack, une bibliothèque de réseaux de neurones en C et une victoire en hackathon, le tout écrit pour que les maths restent enseignables.",
    facets: [
      "Recherche",
      "Ingénierie",
      "Analyse de données",
      "De zéro",
      "Enseignement",
    ],
    stats: [
      { value: "M1", label: "DKAI · Paris-Saclay" },
      { value: "1er", label: "Victoire en hackathon" },
      { value: "2", label: "Stages de recherche" },
      { value: "5", label: "Projets construits de zéro" },
    ],
    origin:
      "Je viens de la musique. Je suis retourné étudier les maths juste pour comprendre comment fonctionnent les ordinateurs, et c'est devenu ce dans quoi je veux faire de la recherche.",
    researchAreas: [
      "TAL",
      "Vision par ordinateur",
      "Génération augmentée par récupération",
      "Modélisation thématique",
      "Réseaux de neurones",
    ],
    currentFocus:
      "En ce moment, je fais un stage de recherche en TAL au LIS à Marseille, où je suis la dérive des thèmes d'un média d'investigation français sur deux décennies d'archives web avec LDA, BERTopic et CamemBERT, et où je construis un RAG conversationnel sur le corpus historique.",

    log: [
      {
        stamp: "2026",
        tag: "prix",
        note: "1re place au hackathon de l'Université d'Aix-Marseille.",
      },
      {
        stamp: "2026",
        tag: "stage",
        note: "Stagiaire TAL au LIS Marseille, avec le suivi de la dérive thématique dans les archives web avec LDA, BERTopic et CamemBERT, et un RAG conversationnel sur le corpus historique.",
        href: "https://marsactu.fr",
      },
      {
        stamp: "2026",
        tag: "écriture",
        note: "Préprint sur le passage de la propagation avant à la rétropropagation dans les réseaux multicouches.",
        href: "https://hal.science/hal-05628568",
      },
      {
        stamp: "2026",
        tag: "code",
        note: "Écriture d'une petite bibliothèque de réseaux de neurones en C, de zéro, pour vérifier que je pouvais implémenter l'article que je venais de décrire.",
        href: "https://github.com/sashsutton/ML_library",
      },
      {
        stamp: "2025",
        tag: "études",
        note: "Début du M1 Data, Knowledge & Hybrid AI à l'Université Paris-Saclay.",
      },
      {
        stamp: "2025",
        tag: "stage",
        note: "Analyste statistique chez Micron, avec un cadre de reproductibilité validant une précision inférieure à 20 µm sur 126 scans dentaires 3D.",
      },
    ],

    education: [
      {
        title: "M1 en Data, Knowledge & Hybrid AI (DKAI)",
        org: "Université Paris-Saclay",
        dates: "Sept 2026 – Juin 2027",
        detail:
          "Un parcours IA sélectif enseigné en anglais, couvrant le machine learning, le big data et l'IA symbolique et hybride. Gif-sur-Yvette, France.",
        href: "https://www.universite-paris-saclay.fr/en/education/masters-degree/computer-science/m1-data-knowledge-and-hybrid-artificial-intelligence-dkai",
      },
      {
        title: "Licence de Mathématiques (L3, double diplôme)",
        org: "Université d'Aix-Marseille",
        dates: "Sept 2026 – Juin 2027",
        detail:
          "Une seconde licence menée en parallèle du M1, approfondissant les fondements mathématiques de l'IA.",
        href: "https://sciences.univ-amu.fr/fr/formation/licences/licence-mathematiques#pacome-objectifs-8256",
      },
      {
        title: "Licence de Mathématiques et Informatique",
        org: "Université d'Aix-Marseille",
        dates: "Sept 2023 – Juin 2026",
        detail:
          "Structures de données & algorithmes (Java), probabilités & statistiques, POO, algèbre linéaire, analyse.",
        href: "https://sciences.univ-amu.fr/fr/formation/licences/licence-informatique/parcours-mathematiques-informatique",
      },
      {
        title: "Licence en Production Musicale & Ingénierie du Son",
        org: "Middlesex University / Point Blank Music School",
        dates: "Oct 2021 – Oct 2023",
        detail:
          "Là où tout a commencé, en apprenant la production et l'ingénierie du son. Londres, Royaume-Uni.",
        href: "https://www.pointblankmusicschool.com/courses/london/he/ba-hons-music-production-and-sound-engineering-degree-3-years-reval/",
      },
    ],

    experience: [
      {
        title: "Stagiaire TAL",
        org: "Laboratoire d'Informatique et Systèmes (LIS), Marseille",
        dates: "Avr – Juil 2026",
        detail:
          "Extraction de thèmes à partir d'archives web. Récupération de captures WARC de Marsactu (un média d'investigation français) auprès de la Bibliothèque nationale de France et des archives de l'INA, et suivi de l'évolution de ses thèmes au fil du temps avec LDA, BERTopic et CamemBERT. Conception de pipelines RAG conversationnels sur les données d'archives historiques.",
        href: "https://marsactu.fr",
      },
      {
        title: "Stagiaire Analyste de Données Statistiques",
        org: "Micron Applied Dentistry SAS, Marseille",
        dates: "Sep – Déc 2025",
        detail:
          "Construction d'un pipeline Python pour nettoyer et agréger 126 scans dentaires 3D haute résolution. Conception d'un cadre de validation de reproductibilité (cartes d'écart-type pixel par pixel, agrégation spatiale, test t de Student unilatéral) pour vérifier une précision inférieure à 20 µm, et un algorithme de détection automatique de points de repère anatomiques par régression polynomiale cubique et analyse de la dérivée seconde. Analyse de puissance et simulations de Monte-Carlo, et visualisations de qualité publication pour un rapport de validation de thèse.",
      },
    ],

    publication: {
      title:
        "De la propagation avant à la rétropropagation : une analyse des mécanismes d'apprentissage dans les réseaux de neurones multicouches",
      authors: "S. Sutton",
      venue: "Université d'Aix-Marseille / hal.science, 2026",
      description:
        "Un parcours à travers les mathématiques de l'apprentissage dans les réseaux multicouches, du perceptron de Rosenblatt à la rétropropagation.",
      links: [
        {
          label: "hal.science/hal-05628568",
          href: "https://hal.science/hal-05628568",
        },
        {
          label: "Google Scholar",
          href: "https://scholar.google.com/scholar?q=Sasha+Sutton",
        },
      ],
    },

    projects: [
      {
        name: "WARC NLP Pipeline",
        tags: ["Python", "Pandas", "BERTopic", "CamemBERT", "LDA"],
        description:
          "Le code du stage au LIS. Extrait et nettoie des captures d'archives web (Trafilatura, Solr Wayback) en DataFrames, puis applique la modélisation thématique pour suivre l'évolution des thèmes d'un média d'investigation français au fil des ans.",
        github: "https://github.com/sashsutton/warc-nlp-pipeline",
      },
      {
        name: "Neural Vision 3D",
        tags: ["React", "Three.js", "Python", "FastAPI", "NumPy", "TypeScript"],
        description:
          "Visualisation 3D interactive d'un réseau de neurones construit de zéro avec React Three Fiber, montrant les activations en temps réel dans une architecture 784-64-10. Le moteur d'inférence est une passe avant manuelle en Python/NumPy (Sigmoïde, Softmax, sans bibliothèque ML de haut niveau), servie via FastAPI pour la reconnaissance en temps réel de chiffres dessinés à la main.",
      },
      {
        name: "Vector Search Engine",
        tags: ["Python", "FastAPI", "React", "NumPy"],
        description:
          "Recherche sémantique de zéro : similarité cosinus par multiplication matricielle sur des embeddings Sentence-Transformer (BERT) de dimension 384, classant les documents par sens plutôt que par mots-clés. Déploiement full-stack en microservices, avec FastAPI sur Render et React sur Vercel.",
        github: "https://github.com/sashsutton/vector-search-engine",
      },
      {
        name: "ML Library",
        tags: ["C", "sans dépendances"],
        description:
          "Une petite bibliothèque de réseaux de neurones de zéro : opérations matricielles, ReLU/Sigmoïde, couches denses, MSE. Écrite après l'article sur la rétropropagation, pour vérifier que je pouvais réellement implémenter ce que j'avais décrit.",
        github: "https://github.com/sashsutton/ML_library",
      },
      {
        name: "Air Harp",
        tags: ["Python", "OpenCV", "MediaPipe", "Pygame"],
        description:
          "Pointez votre index vers une webcam et jouez d'une harpe dans les airs. Suivi de la main avec MediaPipe + OpenCV pour la détection des doigts, Pygame pour un audio à faible latence. La collision la plus directe entre les univers de la musique et de l'informatique à ce jour.",
        github: "https://github.com/sashsutton/computer_vision_air_harp",
      },
    ],

    skills: [
      {
        label: "Data Science & IA",
        items: [
          "NumPy",
          "PyTorch",
          "TensorFlow",
          "Sentence-Transformers (BERT)",
          "Pandas",
          "Matplotlib",
          "OpenCV",
          "MediaPipe",
          "Génération augmentée par récupération (RAG)",
          "Modélisation thématique",
          "Architectures de réseaux de neurones",
          "Embeddings vectoriels",
          "Tests statistiques",
        ],
      },
      {
        label: "Ingénierie",
        items: [
          "FastAPI",
          "Node.js",
          "Express.js",
          "Spring Boot",
          "AWS (S3, EC2, Lambda)",
          "API REST",
          "React.js",
          "Next.js",
          "Three.js",
          "Tailwind CSS",
        ],
      },
      {
        label: "Langages",
        items: [
          "Python",
          "JavaScript (ES6+)",
          "TypeScript",
          "Java",
          "C",
          "SQL (PostgreSQL, Supabase)",
        ],
      },
    ],

    achievements: [
      "1re place, Hackathon (Université d'Aix-Marseille, 2026)",
      "Club d'échecs et club de mathématiques, Université d'Aix-Marseille",
    ],
  },

  music: {
    summary:
      "Deux ans de formation comme ingénieur du son à Londres, puis deux autres au sein de l'équipe son du Fabric, l'un des clubs les plus connus de la ville. C'est là que j'ai compris comment j'apprends vraiment : avec les mains, de fond en comble, jusqu'à comprendre comment une chose fonctionne réellement. C'est de la même façon que j'ai abordé les maths et le code ensuite.",
    pull: "Gravir les échelons jusqu'à l'équipe son de l'un des clubs les plus connus de Londres.",
    soundwork: [
      "Sets DJ",
      "Production électronique",
      "Guitare",
      "Son live",
      "Ingénierie du son",
    ],
    chapters: [
      {
        title: "Point Blank Music School",
        org: "Londres",
        dates: "Oct 2021 – Oct 2023",
        detail:
          "Licence en Production Musicale & Ingénierie du Son. Installé à Londres en septembre 2021 pour repartir de zéro après une première tentative difficile en école d'ingénieur en France, et deux ans à apprendre la production et l'ingénierie du son de fond en comble.",
        href: "https://www.pointblankmusicschool.com/courses/london/he/ba-hons-music-production-and-sound-engineering-degree-3-years-reval/",
      },
      {
        title: "Fabric London, Équipe Ingénierie du Son",
        org: "Londres",
        dates: "Sept 2022 – Oct 2024",
        detail:
          "Au sein de l'équipe ingénierie du son du Fabric de septembre 2022 à octobre 2024, en parallèle de mes études. Installation et line-check du système son avant les événements, mixage façade pendant les soirées, gestion des retours et des micros pour les lives, et maintenance du rig dans les différentes salles.",
      },
    ],
    producing:
      "Je produis toujours de la musique électronique et je joue de la guitare, et cela trouve continuellement sa place dans mes projets techniques. Air Harp en est l'exemple le plus clair, un instrument contrôlé par webcam et joué à la main avec MediaPipe et OpenCV, de la vision par ordinateur construite spécifiquement pour fabriquer un instrument.",
    videoId: "bTA1Srxxnmc",
    crossover: {
      title: "Là où le son rencontre le code",
      body: "Le même instinct qui me donnait envie d'expliquer une chaîne de signal ou un mix à quelqu'un sans bagage est ce qui anime le versant rédactionnel du travail en IA. Il s'agit d'expliquer pourquoi la rétropropagation fonctionne plutôt que de se contenter d'énoncer les formules, ou de construire un visualiseur de réseau de neurones pour que les maths deviennent quelque chose que l'on peut réellement regarder se produire.",
      airHarpGithub: "https://github.com/sashsutton/computer_vision_air_harp",
    },
  },

  content: {
    summary:
      "Je lance une série de vidéos expliquant les maths et l'informatique de zéro. Ce sont les idées que j'ai dû m'approprier à la force du poignet, montrées comme j'aurais aimé qu'on me les montre.",
    ethos:
      "C'est le même instinct que d'expliquer une chaîne de signal à quelqu'un sans bagage. Ne pas se contenter d'énoncer la formule, mais parcourir pourquoi elle fonctionne jusqu'à pouvoir la regarder se produire.",
    status: "Chaîne bientôt disponible",
    series: [
      {
        title: "La rétropropagation, à la main",
        detail:
          "Du perceptron de Rosenblatt à la règle de la chaîne. L'article que j'ai écrit, transformé en quelque chose que l'on peut regarder.",
      },
      {
        title: "Un réseau de neurones en C, de zéro",
        detail:
          "Sans bibliothèque. Des matrices, ReLU, une couche dense, et le moment où il commence à apprendre.",
      },
      {
        title: "Ce qu'est vraiment un embedding vectoriel",
        detail:
          "Similarité cosinus, 384 dimensions, et pourquoi le sens devient géométrie.",
      },
      {
        title: "Modélisation thématique sur de vraies archives",
        detail:
          "LDA vs BERTopic sur des années d'un journal français, et ce que les maths trouvent réellement.",
      },
      {
        title: "De la vision par ordinateur que l'on peut jouer",
        detail:
          "Construire Air Harp en direct, le suivi de la main transformé en son, des maths que l'on peut entendre.",
      },
    ],
  },

  marqueeTerms: [
    "Apprentissage profond",
    "Paris-Saclay",
    "Science des données",
    "Production musicale",
    "DJ",
    "Vision par ordinateur",
    "Mathématiques",
  ],

  contact,

  ui: {
    nav: {
      science: "Science",
      music: "Musique",
      content: "Contenu",
      contact: "Contact",
      cv: "CV",
      downloadCv: "Télécharger le CV",
      theme: "Basculer clair / sombre",
      language: "Langue",
    },
    landing: {
      currentlyIn: "Actuellement à",
      scroll: "défiler pour explorer",
      aboutMe: "À propos",
      whatIDo: "Ce que je fais",
      whatIWant: "Ce que je veux faire",
      countries: "Pays où j'ai vécu",
      livedHere: "J'y ai vécu",
    },
    science: {
      kicker: "(science & ia) · technique / précis",
      heading: "TAL & vision par ordinateur",
      researchNotes: "Notes de recherche",
      researchIntro: "L'article, et ce qui est sur l'établi en ce moment.",
      preprint: "Préprint · 2026",
      currentFocus: "Axe actuel",
      fieldExperience: "Expérience de terrain",
      creativeSide: "Le versant son & création",
      compiledProjects: "Projets compilés",
      builtFromScratch: "Ce que j'ai construit.",
      techStack: "Stack technique",
      education: "Formation",
      fromMaths: "Des arts à la science.",
      honors: "Distinctions",
    },
    music: {
      kicker: "(musique & son) · sonore / expressif",
      heading: "Avant toutes les maths, il y avait la musique.",
      londonLabel: "Londres, 2021–2024",
      londonTitle: "Gravir les échelons jusqu'à l'équipe son.",
      producing: "Production & DJing",
      crossover: "Croisement",
      airHarp: "Air Harp, la vision par ordinateur comme instrument",
      seeScience: "Voir le versant science",
      videoPlaceholder: "Vidéo bientôt disponible",
    },
    content: {
      kicker: "(contenu) · expliquer / en public",
      heading: "Maths & informatique, de zéro.",
      plannedSeries: "Série prévue",
      fiveToStart: "Cinq pour commencer.",
      seriesIntro:
        "Chacune découle de quelque chose déjà construit ou écrit, les vidéos viennent donc avec du code qui fonctionne derrière.",
      why: "Pourquoi",
      whyBody:
        "C'est le même instinct qui traverse la science et le son. Ne pas se contenter d'énoncer le résultat, mais le parcourir jusqu'à ce que quelqu'un sans bagage puisse le voir faire tilt.",
      builtOn: "Voir ce sur quoi c'est bâti",
    },
    footer: {
      kicker: "(contact)",
      headline: "Parlons de là où le son rencontre le code.",
      tagline: "une identité, trois regards.",
    },
  },
};
