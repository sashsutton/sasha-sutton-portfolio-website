// Single source of truth for all site copy.
// Every string here is lifted from README.md, research-ai.md, or music-creative.md.
// Update this file to update the site — no component edits required.

export type Mode = "science" | "music" | "content";

export interface ContactLink {
  label: string;
  href: string;
}

export interface TimelineEntry {
  title: string;
  org: string;
  dates: string;
  detail: string;
  href?: string;
}

export interface Project {
  name: string;
  tags: string[];
  description: string;
  github?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

// A lab-notebook entry — the running log of what's actually been happening.
export interface LogEntry {
  stamp: string; // year / period marker
  tag: string; // short category: study, internship, writing, award, build
  note: string;
  href?: string;
}

/* ------------------------------------------------------------------ */
/* Shared identity                                                     */
/* ------------------------------------------------------------------ */

export const person = {
  name: "Sasha Sutton",
  roleShort: "AI & science · sound engineer",
  // Hero role tags — the disciplines, in order, shown above the name.
  roleTags: [
    "AI",
    "Data science",
    "Software engineering",
    "Music production",
    "DJ",
  ],
  // Current base — surfaced as a location pill in the hero.
  location: "Paris",
  // Oversized landing statement — trimmed from the README intro, his own words.
  statement: "I came to AI from music. I spent some time as a sound engineer and DJ in London before I ever wrote a line of code.",
  // Philosophy pull-quote — faithful to music-creative.md.
  philosophy:
    "I don't like leaving things as black boxes. If I use something, I want to know why it actually works.",
  intro:
    "I was born in Udon Thani, Thailand, and grew up between Laos, the French countryside, Senegal, and Bordeaux. I ended up in AI by a route that had nothing to do with computers at first.",
  bio: "I started out in music. I spent two years at Point Blank in London training as a sound engineer, then two more on the sound engineering team at Fabric, one of London's best-known clubs. I went back to study maths and computer science just to understand how computers actually work, and I ended up staying for the whole thing. I'm now an M1 student in Data, Knowledge & Hybrid AI (DKAI) at Université Paris-Saclay, focusing my research on NLP and computer vision.",
  music:
    "The music hasn't gone anywhere. I still DJ, produce electronic music, and play guitar, and it keeps finding its way into my technical projects, like Air Harp.",
  // Intro line for the "countries I've lived in" section.
  birthplaceNote:
    "I was born in Udon Thani, Thailand, and grew up across four countries and two continents before Paris. The map below marks where I've actually lived.",
};

/* ------------------------------------------------------------------ */
/* What I want to do — the direction                                   */
/* ------------------------------------------------------------------ */

export const ambition = {
  lead: "Where I'm heading.",
  body: "I want to do research in AI, above all in how these systems actually work, focused on computer vision and applied to the real world. I'm starting a Master's in Data, Knowledge & Hybrid AI at Université Paris-Saclay.",
  aims: [
    {
      title: "Research in AI & vision",
      detail:
        "Move into an AI research track centred on computer vision and how these systems really work, applied to messy real-world problems rather than clean benchmarks.",
    },
    {
      title: "Build from first principles",
      detail:
        "Keep writing the maths down and re-implementing it from zero, like a neural net in C, a vector search engine, or a network you can watch think, so nothing stays a black box.",
    },
    {
      title: "Teach it in public",
      detail:
        "Turn the papers and the from-scratch builds into a video series on maths and CS, explained the way I wish they'd been shown to me.",
    },
  ],
};

// Countries lived in — labels for the world map legend / captions.
export const livedIn: string[] = ["France", "England", "Senegal", "Laos"];

// Kinetic marquee keywords for the hero — all drawn from the real material.
export const marqueeTerms: string[] = [
  "Deep Learning",
  "Paris-Saclay",
  "Data science",
  "Music producer",
  "DJ",
  "Computer vision",
  "Mathematics",
];

export const contact: ContactLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sashasutton4" },
  { label: "GitHub", href: "https://github.com/sashsutton" },
  { label: "Email", href: "mailto:sashasuttons3@icloud.com" },
];

/* ------------------------------------------------------------------ */
/* Landing — the two lenses                                            */
/* ------------------------------------------------------------------ */

export const lenses: Record<
  Mode,
  { title: string; kicker: string; blurb: string; href: string }
> = {
  science: {
    title: "Science & AI",
    kicker: "technical / precise",
    blurb:
      "M1 in Data, Knowledge & Hybrid AI at Paris-Saclay. NLP, computer vision, and everything built from scratch, from my education to my publications and projects.",
    href: "/science",
  },
  music: {
    title: "Music & Sound",
    kicker: "sonic / expressive",
    blurb:
      "Point Blank and Fabric London. DJing, production, and where sound started finding its way into the code.",
    href: "/music",
  },
  content: {
    title: "Content",
    kicker: "explaining / in public",
    blurb:
      "A new series of videos on maths and computer science, explained from scratch, the way I wish they'd been shown to me.",
    href: "/content",
  },
};

/* ------------------------------------------------------------------ */
/* Science / AI                                                        */
/* ------------------------------------------------------------------ */

export const science = {
  summary:
    "M1 student in Data, Knowledge & Hybrid AI (DKAI) at Université Paris-Saclay, working towards research in NLP and computer vision.",
  // The point of this line + the facet chips: it isn't one narrow lane.
  breadth:
    "There isn't one narrow lane. Research internships, statistics for a PhD validation, full-stack builds, a neural-net library in C, and a hackathon win, all written down so the maths stays teachable.",
  facets: [
    "Research",
    "Engineering",
    "Data analysis",
    "From scratch",
    "Teaching",
  ],
  // At-a-glance figures for the hero stat strip.
  stats: [
    { value: "M1", label: "DKAI · Paris-Saclay" },
    { value: "1st", label: "Hackathon win" },
    { value: "2", label: "Research internships" },
    { value: "5", label: "Builds from scratch" },
  ],
  origin:
    "I came to this from a music background. I went back to study maths just to understand how computers work, and it turned into the thing I want to do research in.",

  // Research areas — the technical tags shown in the Research notes section.
  researchAreas: [
    "NLP",
    "Computer Vision",
    "Retrieval-Augmented Generation",
    "Topic Modelling",
    "Neural Networks",
  ],
  // What's on the bench right now — the Current focus block.
  currentFocus:
    "Right now I'm doing an NLP research internship at LIS Marseille, tracking how a French investigative outlet's topics drift across two decades of web archives with LDA, BERTopic and CamemBERT, and building conversational RAG over the historical corpus.",

  // Reverse-chronological lab log — the running record, most recent first.
  log: [
    {
      stamp: "2026",
      tag: "award",
      note: "1st place at the Aix-Marseille University hackathon.",
    },
    {
      stamp: "2026",
      tag: "internship",
      note: "NLP intern at LIS Marseille, tracking topic drift across web archives with LDA, BERTopic and CamemBERT, plus conversational RAG over the historical corpus.",
      href: "https://marsactu.fr",
    },
    {
      stamp: "2026",
      tag: "writing",
      note: "Preprint on going from forward-propagation to backpropagation in multilayer networks.",
      href: "https://hal.science/hal-05628568",
    },
    {
      stamp: "2026",
      tag: "build",
      note: "Wrote a small neural-net library in C from scratch to check I could implement the paper I'd just described.",
      href: "https://github.com/sashsutton/ML_library",
    },
    {
      stamp: "2025",
      tag: "study",
      note: "Started the M1 in Data, Knowledge & Hybrid AI at Université Paris-Saclay.",
    },
    {
      stamp: "2025",
      tag: "internship",
      note: "Statistical data analyst at Micron, building a reproducibility framework that validated sub-20 µm precision across 126 3D dental scans.",
    },
  ] satisfies LogEntry[],

  education: [
    {
      title: "M1 in Data, Knowledge & Hybrid AI (DKAI)",
      org: "Université Paris-Saclay",
      dates: "Sept 2026 – June 2027",
      detail:
        "A selective AI track taught in English, covering machine learning, big data, and symbolic and hybrid AI. Gif-sur-Yvette, France.",
      href: "https://www.universite-paris-saclay.fr/en/education/masters-degree/computer-science/m1-data-knowledge-and-hybrid-artificial-intelligence-dkai",
    },
    {
      title: "BSc Mathematics (L3, double-degree)",
      org: "Aix-Marseille University",
      dates: "Sept 2026 – June 2027",
      detail:
        "A second bachelor's completed alongside the M1, deepening the mathematical foundations of AI.",
      href: "https://sciences.univ-amu.fr/fr/formation/licences/licence-mathematiques#pacome-objectifs-8256",
    },
    {
      title: "BSc Mathematics and Computer Science",
      org: "Aix-Marseille University",
      dates: "Sept 2023 – June 2026",
      detail:
        "Data structures & algorithms (Java), probability & statistics, OOP, linear algebra, calculus. 1st place at the Aix-Marseille University hackathon (2026), and a member of the Chess and Mathematics clubs.",
      href: "https://sciences.univ-amu.fr/fr/formation/licences/licence-informatique/parcours-mathematiques-informatique",
    },
    {
      title: "BA Music Production & Sound Engineering",
      org: "Middlesex University / Point Blank Music School",
      dates: "Oct 2021 – Oct 2023",
      detail: "Where it all started, learning production and sound engineering. London, UK.",
      href: "https://www.pointblankmusicschool.com/courses/london/he/ba-hons-music-production-and-sound-engineering-degree-3-years-reval/",
    },
  ] satisfies TimelineEntry[],

  experience: [
    {
      title: "NLP Intern",
      org: "Laboratoire d'Informatique et Systèmes (LIS), Marseille",
      dates: "Apr – Jul 2026",
      detail:
        "Theme extraction from web archives. Pulled WARC captures of Marsactu (a French investigative outlet) from the French National Library and INA archives, and tracked how its topics evolved over time using LDA, BERTopic, and CamemBERT. Also designed conversational RAG pipelines over the historical archive data.",
      href: "https://marsactu.fr",
    },
    {
      title: "Statistical Data Analyst Intern",
      org: "Micron Applied Dentistry SAS, Marseille",
      dates: "Sep – Dec 2025",
      detail:
        "Built a Python pipeline to clean and aggregate 126 high-resolution 3D dental scans. Designed a reproducibility validation framework (pixel-wise standard deviation maps, spatial aggregation, one-sided Student's t-test) to verify sub-20 µm precision, and an automatic anatomical landmark detection algorithm using cubic polynomial regression and second-derivative analysis. Ran power analysis and Monte Carlo simulations, and produced publication-quality visualisations for a PhD thesis validation report.",
    },
  ] satisfies TimelineEntry[],

  publication: {
    title:
      "De la propagation avant à la rétropropagation : une analyse des mécanismes d'apprentissage dans les réseaux de neurones multicouches",
    authors: "S. Sutton",
    venue: "Aix-Marseille Université / hal.science, 2026",
    description:
      "A walk through the mathematics of learning in multilayer networks, from the Rosenblatt perceptron to backpropagation.",
    links: [
      { label: "hal.science/hal-05628568", href: "https://hal.science/hal-05628568" },
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
        "Code from the LIS internship. Extracts and cleans web archive captures (Trafilatura, Solr Wayback) into DataFrames, then runs topic modelling to track how a French investigative outlet's themes shifted over the years.",
      github: "https://github.com/sashsutton/warc-nlp-pipeline",
    },
    {
      name: "Neural Vision 3D",
      tags: ["React", "Three.js", "Python", "FastAPI", "NumPy", "TypeScript"],
      description:
        "Interactive 3D visualization of a neural network built from scratch with React Three Fiber, showing real-time activations in a 784-64-10 architecture. The inference engine is a manual forward pass in Python/NumPy (Sigmoid, Softmax, no high-level ML libraries), served via FastAPI for real-time hand-drawn digit recognition.",
    },
    {
      name: "Vector Search Engine",
      tags: ["Python", "FastAPI", "React", "NumPy"],
      description:
        "Semantic search from scratch: cosine similarity via matrix multiplication over Sentence-Transformer (BERT) 384-dimensional embeddings, ranking documents by meaning rather than keywords. Full-stack microservices deployment, with FastAPI on Render and React on Vercel.",
      github: "https://github.com/sashsutton/vector-search-engine",
    },
    {
      name: "ML Library",
      tags: ["C", "no dependencies"],
      description:
        "A small neural network library from scratch: matrix ops, ReLU/Sigmoid, dense layers, MSE. Written after the backpropagation paper, to check I could actually implement what I'd described.",
      github: "https://github.com/sashsutton/ML_library",
    },
    {
      name: "Air Harp",
      tags: ["Python", "OpenCV", "MediaPipe", "Pygame"],
      description:
        "Point your index finger at a webcam and play a harp in the air. MediaPipe hand tracking + OpenCV for finger detection, Pygame for low-latency audio. The most direct collision of the music and CS backgrounds so far.",
      github: "https://github.com/sashsutton/computer_vision_air_harp",
    },
  ] satisfies Project[],

  skills: [
    {
      label: "Data Science & AI",
      items: [
        "NumPy",
        "PyTorch",
        "TensorFlow",
        "Sentence-Transformers (BERT)",
        "Pandas",
        "Matplotlib",
        "OpenCV",
        "MediaPipe",
        "Retrieval-Augmented Generation (RAG)",
        "Topic modelling",
        "Neural network architectures",
        "Vector embeddings",
        "Statistical testing",
      ],
    },
    {
      label: "Engineering",
      items: [
        "FastAPI",
        "Node.js",
        "Express.js",
        "Spring Boot",
        "AWS (S3, EC2, Lambda)",
        "REST APIs",
        "React.js",
        "Next.js",
        "Three.js",
        "Tailwind CSS",
      ],
    },
    {
      label: "Languages",
      items: ["Python", "JavaScript (ES6+)", "TypeScript", "Java", "C", "SQL (PostgreSQL, Supabase)"],
    },
  ] satisfies SkillGroup[],

  achievements: [
    "1st Place, Hackathon (Aix-Marseille University, 2026)",
    "Chess Club and Mathematics Club, Aix-Marseille University",
  ],
};

/* ------------------------------------------------------------------ */
/* Music / Sound                                                       */
/* ------------------------------------------------------------------ */

export const music = {
  summary:
    "Two years training as a sound engineer in London, then two more on the sound team at Fabric, one of the city's best-known clubs. It's where I learned how I actually learn: hands-on, from the ground up, until I understand how a thing really works. That's the same way I came at maths and code later on.",

  // Short pull-quote for the music hero.
  pull: "Working my way onto the sound team at one of London's best-known clubs.",

  // Chip row — the sound work, at a glance.
  soundwork: [
    "DJ sets",
    "Electronic production",
    "Guitar",
    "Live sound",
    "Sound engineering",
  ],

  chapters: [
    {
      title: "Point Blank Music School",
      org: "London",
      dates: "Oct 2021 – Oct 2023",
      detail:
        "BA in Music Production & Sound Engineering. Moved to London in September 2021 to start over after a difficult first attempt at engineering school in France, and spent two years learning production and sound engineering from the ground up.",
      href: "https://www.pointblankmusicschool.com/courses/london/he/ba-hons-music-production-and-sound-engineering-degree-3-years-reval/",
    },
    {
      title: "Fabric London, Sound Engineering Team",
      org: "London",
      dates: "Sept 2022 – Oct 2024",
      detail:
        "Worked on the sound engineering team at Fabric from September 2022 to October 2024, alongside my studies. Setting up and line-checking the sound system before events, running front-of-house sound through club nights, handling monitors and mics for live acts, and keeping the rig maintained across the rooms.",
    },
  ] satisfies TimelineEntry[],

  producing:
    "Still producing electronic music and playing guitar, and it keeps finding its way into my technical projects. Air Harp is the clearest example, a webcam-controlled instrument played with hand gestures using MediaPipe and OpenCV, computer vision built specifically to make an instrument.",

  // Drop a YouTube video ID here (e.g. "dQw4w9WgXcQ") to replace the placeholder.
  videoId: "bTA1Srxxnmc",

  crossover: {
    title: "Where sound meets code",
    body: "The same instinct that made me want to explain a signal chain or a mix to someone with no background is what drives the technical writing side of the AI work. It's about walking through why backpropagation works rather than just stating the formulas, or building a neural network visualizer so the maths is something you can actually watch happen.",
    airHarpGithub: "https://github.com/sashsutton/computer_vision_air_harp",
  },
};

/* ------------------------------------------------------------------ */
/* Content — videos on maths & CS                                      */
/* ------------------------------------------------------------------ */

export const content = {
  summary:
    "I'm starting a series of videos explaining maths and computer science from scratch. These are the ideas I had to claw my way into, shown the way I wish they'd been shown to me.",
  ethos:
    "Most explanations just hand you the formula and move on. I'd rather show where it comes from and why it actually works, so it's something you understand instead of memorize.",
  status: "Channel coming soon",

  // Planned series — each one grows out of something already built or written.
  series: [
    {
      title: "Backpropagation, by hand",
      detail:
        "From the Rosenblatt perceptron to the chain rule. The paper I wrote, turned into something you can watch.",
    },
    {
      title: "A neural net in C, from zero",
      detail:
        "No libraries. Matrices, ReLU, a dense layer, and the moment it starts to learn.",
    },
    {
      title: "What a vector embedding really is",
      detail:
        "Cosine similarity, 384 dimensions, and why meaning turns into geometry.",
    },
    {
      title: "Topic modelling on real archives",
      detail:
        "LDA vs. BERTopic over years of a French newspaper, and what the maths actually finds.",
    },
    {
      title: "Computer vision you can play",
      detail:
        "Building Air Harp live, turning hand tracking into sound, maths you can hear.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* UI micro-copy — all inline labels, so pages stay fully translatable */
/* ------------------------------------------------------------------ */

export const ui = {
  nav: {
    science: "Science",
    music: "Music",
    content: "Content",
    contact: "Contact",
    cv: "CV",
    downloadCv: "Download CV",
    theme: "Toggle light / dark",
    language: "Language",
  },
  landing: {
    currentlyIn: "Currently in",
    scroll: "scroll to explore",
    aboutMe: "About me",
    whatIDo: "What I do",
    whatIWant: "What I want to do",
    countries: "Countries I've lived in",
    livedHere: "Lived here",
  },
  science: {
    kicker: "(science & ai) · technical / precise",
    heading: "NLP & computer vision",
    researchNotes: "Research notes",
    researchIntro: "The paper, and what's on the bench right now.",
    preprint: "Preprint · 2026",
    currentFocus: "Current focus",
    fieldExperience: "Field experience",
    creativeSide: "The sound-engineering & creative side",
    compiledProjects: "Compiled projects",
    builtFromScratch: "Things I've built.",
    techStack: "Tech stack",
    education: "Education",
    fromMaths: "From arts to science.",
    honors: "Honors",
  },
  music: {
    kicker: "(music & sound) · sonic / expressive",
    heading: "Before any of the maths, there was music.",
    londonLabel: "London, 2021–2024",
    londonTitle: "Working my way onto the sound team.",
    producing: "Producing & DJing",
    crossover: "Crossover",
    airHarp: "Air Harp, computer vision as an instrument",
    seeScience: "See the science side",
    videoPlaceholder: "Video coming soon",
  },
  content: {
    kicker: "(content) · explaining / in public",
    heading: "Maths & CS, from scratch.",
    plannedSeries: "Planned series",
    fiveToStart: "Five to start with.",
    seriesIntro:
      "Each one grows out of something already built or written, so the videos come with working code behind them.",
    why: "Why",
    whyBody:
      "It's the same instinct that runs through the science and the sound. Don't just state the result, walk through it until someone with no background can watch it click.",
    builtOn: "See what it's built on",
  },
  footer: {
    kicker: "(contact)",
    headline: "Let's talk where sound meets code.",
    tagline: "one identity, three lenses.",
  },
};

/* ------------------------------------------------------------------ */
/* English bundle — the default locale. The French mirror lives in     */
/* content.fr.ts and must match this shape (enforced by the Content    */
/* type).                                                              */
/* ------------------------------------------------------------------ */

export const en = {
  person,
  ambition,
  livedIn,
  lenses,
  science,
  music,
  content,
  marqueeTerms,
  contact,
  ui,
};

export type Content = typeof en;
