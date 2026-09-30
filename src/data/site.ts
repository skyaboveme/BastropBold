export const site = {
  name: "Bastrop Bold",
  county: "Bastrop County, Texas",
  tagline: "Data centers that pay into Bastrop County and barely draw on it.",
  description:
    "A civic brief on data centers in Bastrop County, Texas: how they widen the tax base for schools, the county, and emergency services, and how little they ask of residents in students, traffic, water, and power.",
};

export const nav = [
  { href: "/tax-base", label: "Tax base" },
  { href: "/footprint", label: "Footprint" },
  { href: "/corridor", label: "Corridor" },
  { href: "/facts", label: "Facts" },
];

export const sources = [
  {
    name: "Building Bastrop County",
    href: "https://buildingbastropcounty.com/data-centers/",
    note: "Local project figures, the tax comparison with raw land, Pacifico’s full-rate payment, closed-loop water, careers, and answers to resident concerns.",
  },
  {
    name: "Building Bastrop County · EdgeConneX",
    href: "https://buildingbastropcounty.com/projects/edgeconnex/",
    note: "Phase-one and full-buildout investment for the Cedar Creek campus.",
  },
  {
    name: "Tomorrow Begins Here",
    href: "https://tomorrowbeginshere.com/",
    note: "Why a rural data center can fund schools without new enrollment, and how ordinary life already depends on this infrastructure.",
  },
  {
    name: "Tomorrow Begins Here · Texas",
    href: "https://tomorrowbeginshere.com/texas-data-centers/",
    note: "Property-tax relief, careers, and industrial customers paying for their own power infrastructure.",
  },
];

/** Figures published by the two source sites. Do not merge them into a single total. */
export const figures = {
  priorAnnualTax: "$25,000",
  pacificoAnnualTax: "$20 million+",
  pacificoCountyShare: "30%+",
  edgeAbatementPublic: "$107 million+",
  isdAnnualProjection: "$15.5 million",
  isdDecadeProjection: "$155 million",
  combinedInvestment: "$7.2 billion+",
  edgeFull: "$5 billion+",
  edgePhase: "$1.4 billion",
  edgeCapacity: "96 MW",
  pacificoInvestment: "$2.2 billion",
  pacificoPower: "710 MW",
  pacificoAcres: "2,842 acres",
  pacificoLues: "23",
  pacificoDailyWater: "2,000 gallons",
  residentialLues: "about 3,000",
  competingSites: "535",
  constructionJobs: "400–600",
  payRange: "$55,000–$130,000+",
  subdivisionStudents: "about 1,500",
  usFreshwater: "less than 0.5%",
  golfWater: "114 million gallons a year",
  campusWater: "5 million gallons a year",
  subdivisionDailyWater: "300,000 to 400,000 gallons a day",
};

export const ledger = [
  {
    label: "Raw land, before",
    value: figures.priorAnnualTax,
    detail: "a year in property tax",
  },
  {
    label: "Pacifico, full rate",
    value: figures.pacificoAnnualTax,
    detail: "a year, abatement requests withdrawn",
  },
  {
    label: "EdgeConneX, while abated",
    value: figures.edgeAbatementPublic,
    detail: "to the county and ISD over the abatement",
  },
  {
    label: "New students",
    value: "Minimal",
    detail: "the tax payment is not matched by enrollment",
  },
];

export const projects = [
  {
    id: "edgeconnex",
    name: "EdgeConneX",
    place: "Cedar Creek",
    status: "Under construction",
    summary:
      "A hyperscale campus selected over 535 competing sites. Phase one is a $1.4 billion build. The full campus is planned above $5 billion, with capacity up to 96 megawatts.",
    stats: [
      { label: "Phase 1", value: figures.edgePhase },
      { label: "Full buildout", value: figures.edgeFull },
      { label: "Capacity", value: `Up to ${figures.edgeCapacity}` },
      { label: "Won against", value: `${figures.competingSites} sites` },
    ],
  },
  {
    id: "pacifico",
    name: "Pacifico & BlackChamber",
    place: "Cedar Creek",
    status: "Pays full property tax",
    summary:
      "A $2.2 billion campus with 710 megawatts of on-site natural gas generation, on 2,842 acres. Chapter 312 and JETI abatement requests were withdrawn. The published potable draw is about 2,000 gallons a day.",
    stats: [
      { label: "Investment", value: figures.pacificoInvestment },
      { label: "On-site power", value: figures.pacificoPower },
      { label: "Annual tax", value: figures.pacificoAnnualTax },
      { label: "Water equivalents", value: `${figures.pacificoLues} LUEs` },
    ],
  },
];

export const careers = [
  { role: "Data center technician", pay: "$55,000–$85,000", note: "Servers, storage, and the network, around the clock." },
  { role: "HVAC and cooling specialist", pay: "$60,000–$95,000", note: "Closed-loop systems that keep high-density halls in range." },
  { role: "Electrical technician", pay: "$65,000–$100,000", note: "Power distribution, generators, and backup systems." },
  { role: "Security operations", pay: "$50,000–$80,000", note: "Access control and on-site protection. The county is not the night shift." },
  { role: "Network engineer", pay: "$80,000–$130,000+", note: "The fiber and routing that tie the campus to the rest of the internet." },
  { role: "Construction trades", pay: "$45,000–$90,000", note: "Electricians, ironworkers, concrete, and heavy equipment while each phase is built." },
];

export const faqs = [
  {
    q: "Will a data center drain Bastrop’s water?",
    a: "The campuses planned here are designed around closed-loop cooling. The same water stays in a sealed system. It is not an evaporative tower that has to be refilled all day. Building Bastrop County puts Pacifico’s potable use at about 2,000 gallons a day — 23 living-unit equivalents — against roughly 3,000 equivalents for a residential use of that scale. Tomorrow Begins Here compares a modern closed-loop campus, about 5 million gallons a year, with an 18-hole golf course at about 114 million gallons a year, and with a 1,000-home subdivision at 300,000 to 400,000 gallons a day. All U.S. data centers together accounted for less than 0.5% of national freshwater use in 2023.",
  },
  {
    q: "If they only hire a small permanent staff, why do they matter?",
    a: "The value is the taxable asset, not a headcount that fills schools. A billion-dollar building that adds almost no students, little daily traffic, and its own security and fire systems still pays for teachers, classrooms, and emergency equipment. Each construction phase is also published at 400 to 600 jobs, and the permanent technical roles pay roughly $55,000 to $130,000 and up. Many of those paths run through a trade, a certificate, or military technical training, not a four-year degree.",
  },
  {
    q: "Will this do to housing what Austin’s boom did?",
    a: "A permanent crew measured in dozens does not create a new city of commuters. A 1,000-home subdivision, the kind of alternative use discussed for land like this, adds about 1,500 students, a morning rush, and a heavy draw on water and emergency calls. The data center adds the tax base and skips that household demand. Building Bastrop County reports that comparable rural markets have not seen housing spikes attributable to the data center itself.",
  },
  {
    q: "Isn’t a tax abatement just a giveaway?",
    a: "An abatement is a temporary discount to win a project that is choosing among hundreds of sites. On the EdgeConneX land, the starting point was about $25,000 a year. Building Bastrop County reports that during the abatement the county and Bastrop ISD still receive more than $107 million. When the abatement ends, the full commercial value is what gets taxed. Pacifico took the other route: it withdrew its Chapter 312 and JETI applications and is published as paying full property taxes, more than $20 million a year.",
  },
  {
    q: "Will my electric bill go up?",
    a: "Pacifico’s plan is 710 megawatts of generation on the campus itself. Building Bastrop County describes that as no draw on the ERCOT grid and no rate impact from that design. For grid-connected load, Tomorrow Begins Here points to Texas SB 6: large facilities can curtail sharply during grid stress so houses and hospitals keep power, and large industrial customers are expected to pay for the substations and lines they require.",
  },
  {
    q: "How does any of this help my property tax?",
    a: "A county that lives on houses asks those houses to fund every new classroom and ambulance. A commercial asset of this size pays a large share of the same bills without adding a family to the system. Building Bastrop County describes that shift as the buffer that keeps residential rates from having to climb, and that can move them down. This site does not promise a dollar figure off a specific homestead. It describes the structure: more of the levy comes from the campus, less of the need comes from it.",
  },
  {
    q: "What is actually inside the building?",
    a: "Rows of servers, networking gear, and the power and cooling that keep them running. An AI campus packs that building with high-performance chips used to train and run models. The standard the industry builds to is five nines: available 99.999% of the time. Every map search, bank transfer, prescription refill, and storm alert already passes through a building like this somewhere. The local question is whether Bastrop’s tax roll includes one.",
  },
];

export const dayItems = [
  { group: "A morning in the county", items: ["Weather radar before a storm", "A school portal and a payroll deposit", "Maps on the way to work", "A telehealth visit or a prescription refill"] },
  { group: "Money and work", items: ["A card tap at the counter", "Fraud checks on that tap", "Cloud files and a video call", "A permit, a tax filing, a license renewal"] },
  { group: "Home and safety", items: ["911 call routing", "Emergency phone alerts", "A doorbell, a thermostat, a photo backup", "The group text that actually arrives"] },
];
