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
      "Livestock agriculture is the second-largest source of greenhouse gases, with enteric fermentation the dominant driver.",
    color: "#EF4444",
  },
  {
    value: "28×",
    label: "more potent than CO₂",
    description:
      "Methane has 28× the global warming potential of CO₂ over a 100-year horizon, making it a priority for rapid reduction.",
    color: "#F97316",
  },
  {
    value: "1.5B",
    label: "cattle worldwide",
    description:
      "Each animal produces 70–120 kg of methane per year via methanogenesis in the rumen — with no infrastructure needed.",
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
    effectiveness: "~80%",
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
    effectiveness: "60–80%*",
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
      "Biodegradable polyhydroxyalkanoate (PHA) nanoparticles are manufactured using engineered microbial fermentation. PHAs are naturally occurring biopolymers — fully safe and metabolisable.",
    detail: "100–300 nm diameter · Rumen-stable · GRAS-safe",
    color: "#00C16E",
  },
  {
    step: "02",
    title: "PeiR Enzyme Surface Display",
    description:
      "PeiR pseudomurein endoisopeptidase enzymes are anchored on the nanoparticle surface using synthetic biology surface-display systems, creating a targeted biological weapon.",
    detail: "~1000 enzyme units per particle · Stable anchoring",
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
    detail: "Target: 60–80% CH₄ reduction · Maintained animal productivity",
    color: "#8B5CF6",
  },
];

export const platformComponents = [
  {
    title: "PHA Nanoparticle Chassis",
    description:
      "Biodegradable biopolymer nanoparticles engineered for rumen stability. Produced via scalable microbial fermentation. Fully GRAS-safe and metabolised post-action.",
    specs: ["100–300 nm diameter", "pH 5.5–7.5 stable", "Biodegrades in 7–14 days", "GRAS-safe biopolymer"],
    color: "#00C16E",
  },
  {
    title: "PeiR Enzyme Payload",
    description:
      "Pseudomurein endoisopeptidase R — a naturally occurring enzyme with intrinsic selectivity for the unique pseudomurein cell wall of methanogens. Literature-validated mechanism.",
    specs: ["Archaea-specific targeting", "No bacterial off-target", "Thermostable 30–40°C", "Published enzyme kinetics"],
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
  { company: "FutureFeed",        technology: "Asparagopsis seaweed extract",   stage: "Commercial",   limitation: "Supply chain & regulatory risk",          funding: "$25M+" },
  { company: "Rumin8",            technology: "Synthetic bromoform delivery",   stage: "Commercial",   limitation: "Regulatory concerns, daily dosing",       funding: "$100M+" },
  { company: "Bovaer (DSM)",      technology: "3-NOP chemical inhibitor",       stage: "Commercial",   limitation: "Daily dosing, chemical safety pathway",   funding: ">$500M" },
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
    role: "Role / Title",
    affiliation: "University of Queensland",
    bio: "Master of Synthetic Biology & Industrial Biotechnology.",
    category: "Masters",
    initials: "FV",
    color: "#00C16E",
    linkedin: "https://www.linkedin.com/in/felipe-victorica-a2b512313/",
  },
  {
    name: "Rachel Mueller",
    role: "Role / Title",
    affiliation: "University of Queensland",
    bio: "Master of Synthetic Biology & Industrial Biotechnology.",
    category: "Masters",
    initials: "RM",
    color: "#3B82F6",
    linkedin: "https://www.linkedin.com/in/rachel-mueller-67b608227/",
  },
  {
    name: "Kierren Cheng",
    role: "Role / Title",
    affiliation: "University of Queensland",
    bio: "Bachelor of Engineering & Science — Chemical & Bioprocess Engineering and Microbiology.",
    category: "Bachelor",
    initials: "KC",
    color: "#8B5CF6",
    linkedin: "https://www.linkedin.com/in/kierren-cheng-7ba5841b2/",
  },
  {
    name: "James Fearon",
    role: "Role / Title",
    affiliation: "University of Queensland",
    bio: "Bachelor of Computer Science & Music.",
    category: "Bachelor",
    initials: "JF",
    color: "#F59E0B",
    linkedin: "https://www.linkedin.com/in/james-fearon-81531a305/",
  },
  {
    name: "Jake Yu",
    role: "Role / Title",
    affiliation: "University of Queensland",
    bio: "Master of Molecular Biology.",
    category: "Masters",
    initials: "JY",
    color: "#60A5FA",
    linkedin: "https://www.linkedin.com/in/shunyi-yu-06a577415/",
  },
];

export const supervisor = {
  name: "Dr. Axayacatl (Axa) Gonzalez",
  role: "Principal Investigator & Scientific Supervisor",
  affiliation: "University of Queensland",
  initials: "AG",
  color: "#60A5FA",
};

export const impactMetrics = [
  { value: 60,   suffix: "%",  label: "Methane Reduction Target",        description: "Per animal, per dosing cycle",               color: "#00C16E" },
  { value: 1.5,  suffix: "B",  label: "Addressable Cattle Population",   description: "Global livestock market opportunity",        color: "#3B82F6", decimals: 1 },
  { value: 200,  suffix: "MT", label: "CO₂e Reduction Potential",        description: "Annual carbon equivalent at 40% adoption",   color: "#8B5CF6" },
  { value: 28,   suffix: "×",  label: "Methane Climate Potency",         description: "Versus CO₂ over a 100-year period",          color: "#F59E0B" },
];

export const partnershipTiers = [
  {
    tier: "Research Partner",
    description: "Co-develop and validate the technology through formal research collaboration agreements with IP provisions.",
    benefits: [
      "IP co-ownership options",
      "Early access to experimental results",
      "Publication co-authorship",
      "Scientific advisory board seat",
    ],
    idealFor: "Universities · Research Institutes · CROs",
    color: "#3B82F6",
  },
  {
    tier: "Industry Pilot Partner",
    description: "Be first to test TacklEmission technology in real livestock operations and participate in the commercial rollout.",
    benefits: [
      "Exclusive pilot program access",
      "Carbon credit participation rights",
      "Co-branding & PR opportunities",
      "Commercial licensing priority",
    ],
    idealFor: "Feedlots · Dairy Farms · Ag Input Companies",
    color: "#4A8DDE",
    featured: true,
  },
  {
    tier: "Strategic Investor",
    description: "Become a foundational capital partner in a novel climate-tech and agri-biotech platform at the earliest stage.",
    benefits: [
      "Equity participation",
      "Board observer rights",
      "Portfolio ESG alignment",
      "First right of refusal — Series A",
    ],
    idealFor: "Climate VCs · Ag Corporate VCs · Impact Funds",
    color: "#8B5CF6",
  },
];
