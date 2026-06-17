export const navLinks = [
  { href: "#problem",    label: "Problem" },
  { href: "#solution",   label: "Solution" },
  { href: "#technology", label: "Technology" },
  { href: "#market",     label: "Market" },
  { href: "#research",   label: "R&D" },
  { href: "#team",       label: "Team" },
  { href: "#impact",     label: "Impact" },
  { href: "#contact",    label: "Contact" },
];

export const problemStats = [
  {
    value: "14.5%",
    label: "of global GHG emissions",
    description:
      "Livestock is a leading source of agricultural emissions and the dominant source of agricultural methane, driven by enteric fermentation.",
    color: "#EF4444",
  },
  {
    value: "27×",
    label: "more potent than CO₂",
    description:
      "Biogenic methane has 27× the global warming potential of CO₂ over a 100-year horizon (IPCC AR6), making it a priority for rapid reduction.",
    color: "#F97316",
  },
  {
    value: "1.5B",
    label: "cattle worldwide",
    description:
      "Each animal produces roughly 100–150 kg of methane per year via methanogenesis in the rumen (beef to dairy).",
    color: "#3B82F6",
  },
  {
    value: "~100M",
    label: "tonnes CH₄/year",
    description:
      "Enteric fermentation alone emits approximately 100 million tonnes of methane annually, representing a massive mitigation target.",
    color: "#00C16E",
  },
];

export const currentSolutions = [
  {
    name: "Seaweed (Asparagopsis)",
    company: "FutureFeed",
    effectiveness: "37–95%",
    limitations: [
      "Supply chain bottlenecks",
      "Palatability & taste effects",
      "Climate-sensitive cultivation",
      "Regulatory uncertainty",
    ],
    status: "Commercial",
    statusColor: "#F97316",
  },
  {
    name: "Bovaer (3-NOP)",
    company: "DSM-Firmenich",
    effectiveness: "~30%",
    limitations: [
      "Requires daily dosing",
      "High cost at scale",
      "Chemical regulatory pathway",
      "Non-specific inhibition",
    ],
    status: "Commercial",
    statusColor: "#F97316",
  },
  {
    name: "Methane Capture",
    company: "Various",
    effectiveness: "~50%",
    limitations: [
      "Wearable devices on cattle",
      "Animal welfare concerns",
      "High capital costs",
      "Not practically scalable",
    ],
    status: "Niche",
    statusColor: "#EF4444",
  },
  {
    name: "PHA Nano-PeiR",
    company: "TacklEmission",
    effectiveness: "30%+*",
    limitations: ["Novel approach — in validation"],
    status: "R&D Stage",
    statusColor: "#4A8DDE",
    isOurs: true,
  },
];

export const solutionSteps = [
  {
    step: "01",
    title: "PHA Nanoparticle Synthesis",
    description:
      "Biodegradable polyhydroxyalkanoate (PHA) nanoparticles are manufactured using engineered microbial fermentation. PHAs are naturally occurring biopolymers — biocompatible and metabolisable.",
    detail: "50–500 nm diameter · Rumen-stable · Food-contact grade",
    color: "#00C16E",
  },
  {
    step: "02",
    title: "PeiR Enzyme Surface Display",
    description:
      "PeiR pseudomurein endoisopeptidase enzymes are anchored on the nanoparticle surface using synthetic biology surface-display systems, creating a targeted biological weapon.",
    detail: "PhaC surface display · Stable anchoring",
    color: "#22d87a",
  },
  {
    step: "03",
    title: "Feed Additive Delivery",
    description:
      "Nanoparticles are incorporated into standard cattle feed. No infrastructure changes are required for farmers. Once ingested, particles transit to the rumen where methanogens reside.",
    detail: "pH 5.5–7.0 stable · Compatible with existing feed systems",
    color: "#3B82F6",
  },
  {
    step: "04",
    title: "Selective Archaea Targeting",
    description:
      "PeiR cleaves pseudomurein — a cell wall component found exclusively in methanogenic archaea. This gives exquisite selectivity: no effect on beneficial rumen bacteria.",
    detail: "Archaea-specific · Zero off-target bacterial activity",
    color: "#60A5FA",
  },
  {
    step: "05",
    title: "Sustained Methane Reduction",
    description:
      "Disruption of methanogenic archaea reduces rumen methane output while preserving the microbial ecosystem essential for cattle nutrition, productivity, and welfare.",
    detail: "Target: 30%+ CH₄ reduction · Maintained animal productivity",
    color: "#8B5CF6",
  },
];

export const platformComponents = [
  {
    title: "PHA Nanoparticle Chassis",
    description:
      "Biodegradable biopolymer nanoparticles engineered for rumen stability. Produced via scalable microbial fermentation. Biocompatible and metabolised post-action.",
    specs: ["50–500 nm diameter", "pH 5.5–7.5 stable", "Fully biodegradable", "FDA food-contact grade"],
    color: "#00C16E",
  },
  {
    title: "PeiR Enzyme Payload",
    description:
      "Pseudomurein endoisopeptidase R — a naturally occurring enzyme with intrinsic selectivity for the unique pseudomurein cell wall of methanogenic archaea, primarily Methanobrevibacter (~74% of rumen archaea). Literature-validated mechanism.",
    specs: ["Targets Methanobrevibacter spp.", "No bacterial off-target", "Archaea-specific lysis"],
    color: "#3B82F6",
  },
  {
    title: "Synthetic Biology Platform",
    description:
      "State-of-the-art genetic engineering tools to optimise PHA production pathway, enzyme expression levels, and surface-display efficiency across iterative design cycles.",
    specs: ["Modular genetic design", "Codon-optimised expression", "Directed evolution ready", "Iterative DBTL cycles"],
    color: "#8B5CF6",
  },
  {
    title: "Scalable Manufacturing",
    description:
      "Microbial fermentation production enables cost-effective, large-scale manufacturing compatible with existing pharmaceutical and bioprocessing infrastructure globally.",
    specs: ["Fermentation-based production", "GMP-compatible pathway", "Competitive COGS potential", "Existing infrastructure"],
    color: "#F59E0B",
  },
];

export const platformAdvantages = [
  { title: "Specificity",       description: "Targets only methane-producing archaea — zero impact on beneficial rumen bacteria or animal health.",   color: "#00C16E" },
  { title: "Biodegradability",  description: "PHA completely biodegrades — no chemical residues in meat, milk, environment, or supply chain.",         color: "#22d87a" },
  { title: "Scalability",       description: "Microbial fermentation is an established industrial process enabling production at any required scale.",   color: "#3B82F6" },
  { title: "Low Dosing Burden", description: "Potential for single or low-frequency dosing versus competing daily additives — reducing farmer burden.", color: "#60A5FA" },
  { title: "Modularity",        description: "The platform is adaptable to other microbial targets, creating a versatile livestock health technology.",  color: "#8B5CF6" },
];

export const competitors = [
  { company: "FutureFeed",        technology: "Asparagopsis seaweed extract",   stage: "Commercial",   limitation: "Supply chain & regulatory risk",          funding: "$13M" },
  { company: "Rumin8",            technology: "Synthetic bromoform delivery",   stage: "Commercial",   limitation: "Regulatory concerns, daily dosing",       funding: "$17M" },
  { company: "Bovaer (DSM)",      technology: "3-NOP chemical inhibitor",       stage: "Commercial",   limitation: "Daily dosing, chemical safety pathway",   funding: "DSM-backed" },
  { company: "Mootral",           technology: "Garlic & citrus extract",        stage: "Commercial",   limitation: "Inconsistent efficacy, palatability",     funding: "$30M+" },
  { company: "TacklEmission",    technology: "Targeted PHA-PeiR nanoparticles", stage: "Pre-Seed R&D", limitation: "— Differentiated novel approach",       funding: "Seeking seed", isOurs: true },
];

export const researchTimeline = [
  {
    year: "2025",
    phase: "Concept & Proof of Concept",
    status: "current",
    milestones: [
      "Systematic literature review of PeiR enzyme activity & pseudomurein structure",
      "PHA nanoparticle synthesis and characterisation protocols",
      "Proof-of-concept PeiR expression in E. coli",
      "Team formation and UQ research partnership",
    ],
  },
  {
    year: "2026",
    phase: "Nanoparticle Engineering",
    status: "upcoming",
    milestones: [
      "PeiR surface-display system optimisation",
      "In vitro archaea activity assays (lysis confirmation)",
      "Nanoparticle stability in simulated rumen fluid (SRF)",
      "Provisional patent application filing",
    ],
  },
  {
    year: "2027",
    phase: "Validation Studies",
    status: "upcoming",
    milestones: [
      "In vitro rumen fermentation gas-production assays",
      "Ethics-approved animal feeding trials",
      "Methane reduction quantification (GreenFeed / SF₆ tracer)",
      "Milk / meat safety and quality analysis",
    ],
  },
  {
    year: "2028",
    phase: "Commercial Partnerships",
    status: "upcoming",
    milestones: [
      "Industry partner pilot programs in Australian feedlots",
      "Regulatory submissions (APVMA / international equivalents)",
      "Scale-up fermentation studies and COGS modelling",
      "Series A fundraising and global licensing strategy",
    ],
  },
];

export const teamMembers = [
  {
    name: "Felipe Victorica",
    affiliation: "University of Queensland",
    bio: "Master of Synthetic Biology & Industrial Biotechnology.",
    category: "Masters",
    initials: "FV",
    photo: "/Felipe.jpeg",
    color: "#00C16E",
    linkedin: "https://www.linkedin.com/in/felipe-victorica-a2b512313/",
  },
  {
    name: "Rachel Mueller",
    affiliation: "University of Queensland",
    bio: "Master of Synthetic Biology & Industrial Biotechnology.",
    category: "Masters",
    initials: "RM",
    photo: "/Rachel.jpeg",
    color: "#3B82F6",
    linkedin: "https://www.linkedin.com/in/rachel-mueller-67b608227/",
  },
  {
    name: "Kierren Cheng",
    affiliation: "University of Queensland",
    bio: "Bachelor of Engineering & Science — Chemical & Bioprocess Engineering and Microbiology.",
    category: "Bachelor",
    initials: "KC",
    photo: "",
    color: "#8B5CF6",
    linkedin: "https://www.linkedin.com/in/kierren-cheng-7ba5841b2/",
  },
  {
    name: "James Fearon",
    affiliation: "University of Queensland",
    bio: "Bachelor of Computer Science & Music.",
    category: "Bachelor",
    initials: "JF",
    photo: "/James.jpeg",
    color: "#F59E0B",
    linkedin: "https://www.linkedin.com/in/james-fearon-81531a305/",
  },
  {
    name: "Jake Yu",
    affiliation: "University of Queensland",
    bio: "Master of Molecular Biology.",
    category: "Masters",
    initials: "JY",
    photo: "/Jake.jpeg",
    color: "#60A5FA",
    linkedin: "https://www.linkedin.com/in/shunyi-yu-06a577415/",
  },
];

export const supervisor = {
  name: "Dr. Axayacatl (Axa) Gonzalez",
  role: "Principal Investigator & Scientific Supervisor",
  affiliation: "University of Queensland",
  initials: "AG",
  photo: "/Axa.jpeg",
  color: "#60A5FA",
};

export const impactMetrics = [
  { value: 30,   suffix: "%+", label: "Methane Reduction Target",        description: "Per animal, per dosing cycle",               color: "#00C16E" },
  { value: 1.5,  suffix: "B",  label: "Addressable Cattle Population",   description: "Global livestock market opportunity",        color: "#3B82F6", decimals: 1 },
  { value: 27,   suffix: "×",  label: "Methane Climate Potency",         description: "Versus CO₂ over 100 years (IPCC AR6)",        color: "#F59E0B" },
];

export const references = [
  {
    ref: "FAO, 2013",
    source:
      "Gerber et al., Tackling Climate Change Through Livestock — livestock ≈ 14.5% of global GHG, with enteric fermentation the dominant driver.",
    url: "https://www.fao.org/4/i3437e/i3437e.pdf",
    cite: "fao.org",
  },
  {
    ref: "FAO GLEAM",
    source:
      "Global Livestock Environmental Assessment Model — enteric fermentation ≈ 98 Mt CH₄/yr; ~1.5 billion cattle worldwide.",
    url: "https://www.fao.org/gleam/en/",
    cite: "fao.org/gleam",
  },
  {
    ref: "IPCC AR6, 2021",
    source:
      "Sixth Assessment Report (WG1) — biogenic methane has a 100-year global warming potential of ≈ 27× CO₂.",
    url: "https://www.ipcc.ch/report/ar6/wg1/",
    cite: "ipcc.ch",
  },
  {
    ref: "Altermann et al., 2018",
    source:
      "PeiR lytic enzyme on PHA bionanoparticles reduced methane up to 97% in pure culture. Front. Microbiol.",
    url: "https://doi.org/10.3389/fmicb.2018.02378",
    cite: "doi:10.3389/fmicb.2018.02378",
  },
  {
    ref: "Altermann et al., 2022",
    source:
      "Tailored PHA–PeiR nanoparticles across rumen models (5–15% in continuous flow). Front. Microbiol. 13:816695.",
    url: "https://doi.org/10.3389/fmicb.2022.816695",
    cite: "doi:10.3389/fmicb.2022.816695",
  },
  {
    ref: "Henderson et al., 2015",
    source:
      "Global Rumen Census — ~74% of rumen archaea are Methanobrevibacter across 32 ruminant species. Sci. Rep. 5:14567.",
    url: "https://doi.org/10.1038/srep14567",
    cite: "doi:10.1038/srep14567",
  },
  {
    ref: "PNAS, 2024",
    source:
      "Asparagopsis seaweed additive reduced enteric methane ~37.7% in grazing beef cattle (feedlot trials reach >90%).",
    url: "https://www.pnas.org/doi/10.1073/pnas.2410863121",
    cite: "pnas.org",
  },
  {
    ref: "dsm-firmenich",
    source: "Bovaer (3-NOP) reduces dairy enteric methane ~30% as a daily feed additive.",
    url: "https://www.bovaer.com/",
    cite: "bovaer.com",
  },
  {
    ref: "GMInsights, 2024",
    source:
      "Ruminant Methane Reduction Market — USD 2.7B (2024) → 5.2B (2034) at 6.7% CAGR; feed additives >90% of share.",
    url: "https://www.gminsights.com/industry-analysis/ruminant-methane-reduction-market",
    cite: "gminsights.com",
  },
  {
    ref: "AgFunderNews",
    source: "Reported funding for FutureFeed (~$13M) and Rumin8 (~$17M, 2023).",
    url: "https://agfundernews.com/red-seaweed-was-billed-as-a-gamechanger-for-livestock-methane-reduction-so-when-will-it-deliver",
    cite: "agfundernews.com",
  },
];
