export interface VerticalData {
  slug: string;
  name: string;
  heroHeadline: string;
  oneLineThesis: string;
  image: string;
  whatWeBelieve: string[];
  whereWeAreLooking: string[];
  fundableCompany: string[];
  fastNo: string[];
  ecosystemReference: {
    disclaimer: string;
    companies: string[];
  };
  teamCoverage: {
    lead: string;
    icMembers: string[];
  };
}

export const VERTICALS: Record<string, VerticalData> = {
  "ai-advanced-computing": {
    slug: "ai-advanced-computing",
    name: "AI & Advanced Computing",
    heroHeadline: "INVESTING IN THE FUTURE OF SILICON",
    oneLineThesis: "Models are commoditising. The durable value is moving down the stack.",
    image: "/sectors/ai-computing.jpg",
    whatWeBelieve: [
      "The Indian AI opportunity is not another application layer. Models are commoditising faster than anyone forecast, and durable value is migrating down the stack — into infrastructure, optimisation, and the physics of how computation consumes power. India holds an under-exploited asset here: two decades of engineering talent trained inside global technology companies, now available to build for themselves.",
      "We are interested in three things. Infrastructure and optimisation tooling that makes computation cheaper or possible where it was not. Domain-specific and Indic language models where the defensibility is proprietary data, regulatory position or workflow depth rather than the model itself. And the security layer — AI safety and cyber — where India has both a genuine research base and a sovereign buyer.",
      "We are sceptical of anything whose defensibility rests on a prompt, a dataset that can be re-collected, or a distribution advantage in a market with no switching costs. We will say so in the first meeting rather than the fourth.",
    ],
    whereWeAreLooking: [
      "Indic and domain-specific language models with proprietary data or workflow depth",
      "AI infrastructure and optimisation tooling",
      "AI safety, assurance and evaluation",
      "Cyber security, including quantum-safe cryptography",
      "Edge inference under hard power, thermal or latency constraints",
      "AI applied to scientific discovery — materials, molecules, simulation",
    ],
    fundableCompany: [
      "A working system with users or a signed pilot, and a clear statement of what is proprietary: data, hardware, workflow lock-in or a regulatory position.",
      "Technical depth that a domain expert can interrogate — our diligence includes exactly that conversation.",
      "An honest account of what happens to the business when the underlying model layer gets ten times cheaper, because it will.",
      "A first revenue wedge that does not depend on winning an entire market.",
    ],
    fastNo: [
      "An application built on a third-party model with no proprietary data, hardware or workflow lock-in",
      "\"India's answer to [company]\" offered as the whole strategic argument",
      "A benchmark score with no customer behind it",
      "A capital plan that assumes the next round is certain",
    ],
    ecosystemReference: {
      disclaimer: "SINE incubation portfolio, not Y-Point Fund-I investments (per Section 4.4 disclosure rule)",
      companies: ["Babbelbots.ai", "Cogno.ai", "Whiterabbit.ai", "QNu Labs"],
    },
    teamCoverage: {
      lead: "Saurabh Jain (Fund Manager)",
      icMembers: ["Samir Kumar (GP, Athera Ventures)", "Gagan Goyal (GP, IndiaQuotient)"],
    },
  },

  "advanced-manufacturing-semiconductor": {
    slug: "advanced-manufacturing-semiconductor",
    name: "Advanced Manufacturing & Semiconductor",
    heroHeadline: "INVESTING IN THE FUTURE OF THE FACTORY FLOOR",
    oneLineThesis: "India will not win manufacturing on labour cost. It will win on automation and on silicon.",
    image: "/sectors/semiconductor.jpg",
    whatWeBelieve: [
      "India will not become a manufacturing power on labour cost. That race is being lost to countries with lower wages and won by countries with higher automation. The route available to India is to skip a generation: build plants that compete because of what the machines do.",
      "Semiconductors belong in this conversation rather than alongside AI, and we have deliberately grouped them that way. A fabless startup's binding constraints are industrial ones — tape-out economics, packaging, yield, qualification, supply chain — and they are the same constraints a robotics or precision manufacturing company faces. The India Semiconductor Mission has changed what is financeable here, and chip design and photonics are now a realistic venture category rather than a policy aspiration.",
      "We are drawn to companies where the process capability is the product: where the founding insight is something competitors cannot easily replicate, and the manufactured output is how that capability is monetised.",
    ],
    whereWeAreLooking: [
      "Chip design — analog, mixed-signal, RF, and domain-specific silicon",
      "Photonics and optical components",
      "Advanced industrial robotics and motion control",
      "Human-machine interfaces and industrial autonomy",
      "Machine vision, in-line inspection and metrology",
      "Precision manufacturing, tooling and process capability as a business",
      "Electronics assembly and semiconductor supply chain equipment",
    ],
    fundableCompany: [
      "For silicon: a taped-out device, or a costed path to tape-out with a named foundry and packaging partner, and a specific view of the capital cliff that tape-out represents.",
      "For manufacturing and robotics: a machine or line that a paying customer has run in a production environment, or a signed pilot with a named industrial buyer.",
      "Unit economics that survive contact with the customer's real cost of the incumbent solution.",
      "A credible answer on service and support — which is where Indian industrial hardware companies most often die.",
    ],
    fastNo: [
      "A chip concept with no silicon, no simulation results and no foundry conversation",
      "A demo that has only ever run in a lab or at a trade show",
      "Automation priced against Western competitors rather than against Indian labour",
      "No service or spares plan for a machine expected to run three shifts",
    ],
    ecosystemReference: {
      disclaimer: "SINE incubation portfolio, not Y-Point Fund-I investments (per Section 4.4 disclosure rule)",
      companies: ["Peppermint Robotics", "MumbaiSemi", "Matterwave"],
    },
    teamCoverage: {
      lead: "Saurabh Jain (Fund Manager)",
      icMembers: ["Ravin Kulshrestha (Retd, MoD Production / iDEX)", "Samir Kumar (GP, Athera Ventures)"],
    },
  },

  "next-gen-materials": {
    slug: "next-gen-materials",
    name: "Next Gen Materials",
    heroHeadline: "INVESTING IN THE FUTURE OF MATTER",
    oneLineThesis: "Every hard problem in energy, space and electronics is a materials problem wearing a disguise.",
    image: "/sectors/advanced-manufacturing.jpg",
    whatWeBelieve: [
      "Almost every hard constraint in energy, space, electronics and mobility is a materials problem wearing a disguise. Batteries are limited by chemistry and interfaces; hypersonics by thermal protection; semiconductors by substrates and packaging; hydrogen by catalysts and membranes. Solve the material and the downstream industry reorganises around you.",
      "Materials companies are also the most commonly mis-underwritten venture bet in existence, and the reason is a category error rather than a fundamental flaw. They are assessed as product companies when, for their first several years, they are process companies. The valuable asset is rarely the molecule — which is usually published — but the ability to make it consistently at a price and volume nobody else can hit.",
      "We underwrite the process. We want to know your yield, your variance, what happens at ten times the batch size, and who qualifies you. This is a sector where our entry at TRL 4–7 is not a limitation but the entire point: we fund the scale-up, not the discovery.",
    ],
    whereWeAreLooking: [
      "Advanced carbon materials — carbon nanotubes, graphene and derivatives",
      "Energy transition materials — battery chemistries, catalysts, membranes",
      "Semiconductor substrates, packaging materials and thermal interfaces",
      "Structural composites and high-temperature materials for aerospace and defence",
      "Computational and AI-accelerated materials discovery with a path to physical production",
      "Coatings and surface engineering with a qualified industrial application",
    ],
    fundableCompany: [
      "Material produced repeatedly and characterised by someone other than the founding team.",
      "A quantified performance advantage against the named incumbent material, expressed in the customer's units rather than the lab's.",
      "A defensible position that is a process, a piece of equipment or a trade secret — not only a composition patent.",
      "An identified qualification pathway with a named customer, and an honest statement of how long qualification takes, because in aerospace and semiconductors it can outlast a seed round.",
    ],
    fastNo: [
      "Grams in a lab with no process engineering work and no view on scale-up",
      "A performance claim measured only by the founders, under conditions the customer will not replicate",
      "A patent portfolio presented as the moat with no manufacturing capability behind it",
      "No named target customer — in materials, the customer defines the specification",
    ],
    ecosystemReference: {
      disclaimer: "SINE incubation portfolio, not Y-Point Fund-I investments (per Section 4.4 disclosure rule)",
      companies: ["NCF Green", "Myoworks"],
    },
    teamCoverage: {
      lead: "Saurabh Singh (Investment Manager)",
      icMembers: ["Dr Seshagiri Rao V (Retd, ISRO Satish Dhawan)", "Gagan Goyal (GP, IndiaQuotient)"],
    },
  },

  "space-defence": {
    slug: "space-defence",
    name: "Space & Defence",
    heroHeadline: "INVESTING IN THE FUTURE OF ORBIT",
    oneLineThesis: "Sovereign capability became a commercial market, and the procurement door is finally open.",
    image: "/sectors/space-defence.jpg",
    whatWeBelieve: [
      "Sovereign capability has become a commercial market. India's space sector has opened to private operators, defence procurement has built real channels for startups, and the strategic case for domestic supply is no longer something founders have to argue — it is the buyer's stated policy.",
      "What has not changed is the difficulty of the sale. Procurement cycles outlast seed rounds. Qualification is brutal and non-negotiable. A single programme delay can consume a year of runway. We invest here clear-eyed about that, which is why we care disproportionately about whether a company has a commercial or export revenue line that can carry it while an institutional contract matures.",
      "We have an unusual advantage in this sector. Our investment committee includes a former Associate Director at ISRO's Satish Dhawan Space Centre who contributed to Chandrayaan-1 and Mangalyaan, and a co-creator of the iDEX initiative who served as a Director in the Ministry of Defence Production. When we assess a propulsion architecture or a procurement pathway, we are not learning it from a market report.",
    ],
    whereWeAreLooking: [
      "Reusable launch vehicles and propulsion",
      "GaN, RF, analog and mixed-signal integrated circuits for space and defence",
      "Satellite servicing, ground segment and space situational awareness",
      "Defence systems, autonomy and unmanned platforms",
      "Sensors, electronic warfare and secure communications",
      "Test, qualification and mission assurance infrastructure",
    ],
    fundableCompany: [
      "Hardware that has been environmentally tested, flown, or trialled with an institutional user.",
      "A named programme, tender or prime contractor rather than a market-size argument.",
      "Founders who understand the procurement process they are entering — iDEX, TDF, ISRO, DRDO or a prime — and can name the next three gates.",
      "A revenue path that does not depend entirely on one government programme landing on schedule.",
    ],
    fastNo: [
      "A total-addressable-market slide where a named customer conversation should be",
      "A capital plan that assumes an eighteen-month procurement cycle completes in six",
      "No security clearance, licensing or compliance pathway identified",
      "A product viable only at a volume the domestic market will not reach, with no export strategy",
    ],
    ecosystemReference: {
      disclaimer: "SINE incubation portfolio, not Y-Point Fund-I investments (per Section 4.4 disclosure rule)",
      companies: ["Bellatrix Aerospace"],
    },
    teamCoverage: {
      lead: "Saurabh Jain (Fund Manager)",
      icMembers: [
        "Dr Seshagiri Rao V (Retd, Assoc. Dir. ISRO Satish Dhawan)",
        "Ravin Kulshrestha (Retd, Co-creator iDEX & Dir. MoD Production)",
      ],
    },
  },

  "climate-cleantech": {
    slug: "climate-cleantech",
    name: "Climate & CleanTech",
    heroHeadline: "INVESTING IN THE FUTURE OF ENERGY",
    oneLineThesis: "Decarbonising an industrialising economy is a different problem from decarbonising a rich one.",
    image: "/sectors/climate-energy.jpg",
    whatWeBelieve: [
      "Decarbonising an industrialising economy is a structurally different problem from decarbonising a wealthy one, and most available climate technology was designed for the second case. India is adding industrial capacity, not retiring it. Its buyers are price-sensitive to a degree that Western climate business models rarely survive. Its grid, land and water constraints are specific.",
      "This is an advantage for companies that design for it. Technology that reaches parity without a subsidy in India will be exportable to every other industrialising market on earth, which is where most of this century's emissions growth will occur. Technology that needs a carbon price to work is, for our purposes, a research project.",
      "We look hardest at the industrial and infrastructure end — hydrogen and ammonia, storage chemistry, energy efficiency, water — rather than the consumer end, where technical difficulty is low and the capital requirement is mostly marketing.",
    ],
    whereWeAreLooking: [
      "Green hydrogen and ammonia production, including electrolyser components",
      "Alternative battery chemistries and long-duration storage",
      "Energy efficiency, storage integration and grid infrastructure",
      "Industrial decarbonisation — process heat, cement, steel, chemicals",
      "Water treatment, desalination and industrial reuse",
      "Circularity — battery, e-waste and critical mineral recovery",
    ],
    fundableCompany: [
      "A pilot running on a real industrial site, with performance data the customer collected.",
      "Cost parity, or a credible and dated path to it, without assuming a carbon price or a subsidy that does not currently exist.",
      "A first customer buying for a commercial reason — energy cost, compliance, supply security — rather than a sustainability commitment.",
      "A defensible technical position rather than a project-development advantage.",
    ],
    fastNo: [
      "A model that only works with a carbon price India has not adopted",
      "Technology licensed from abroad and localised, with no proprietary development",
      "A pilot that has never left a controlled environment",
      "A project developer wearing a technology company's clothes",
    ],
    ecosystemReference: {
      disclaimer: "SINE incubation portfolio, not Y-Point Fund-I investments (per Section 4.4 disclosure rule)",
      companies: ["ART-PV", "NXPEC", "Indra Water"],
    },
    teamCoverage: {
      lead: "Saurabh Singh (Investment Manager)",
      icMembers: ["Samir Kumar (GP, Athera Ventures)", "Gagan Goyal (GP, IndiaQuotient)"],
    },
  },

  "life-sciences": {
    slug: "life-sciences",
    name: "Life Sciences",
    heroHeadline: "INVESTING IN THE FUTURE OF MEDICINE",
    oneLineThesis: "Indian clinical scale and Indian engineering cost is an advantage nobody else can assemble.",
    image: "/sectors/life-sciences.jpg",
    whatWeBelieve: [
      "India has two assets in health that are difficult for anyone else to assemble: clinical scale — patient populations, disease diversity and trial capacity — and an engineering cost base that can build an instrument or a therapy for a fraction of what it costs elsewhere. ImmunoACT priced India's first indigenous CAR-T therapy at roughly a tenth of international equivalents. That is not a discount; it is a different cost structure, and it opens markets the incumbents have written off.",
      "We concentrate on novel biologics, precision medicine, and stem cell and tissue engineering, alongside the instrumentation and diagnostics layer where our engineering diligence is strongest. Where a programme requires clinical capital beyond what a fund of our size can responsibly underwrite alone, we expect to participate alongside a specialist lead rather than lead it ourselves.",
      "Regulatory strategy is not a later problem in this sector. It is the product architecture, and we will ask about it in the first meeting.",
    ],
    whereWeAreLooking: [
      "Novel biologics development",
      "Precision medicine and clinical genomics",
      "Stem cell and tissue engineering",
      "Diagnostics and point-of-care devices designed for Indian cost and infrastructure",
      "Biomedical instrumentation, imaging and lab automation",
      "Computational diagnostics with a defined regulatory pathway",
    ],
    fundableCompany: [
      "Data from real clinical samples or real patients, not simulated inputs.",
      "A named regulatory pathway — CDSCO class, and where relevant the FDA or CE route — with the team's own assessment of timeline and cost.",
      "A clinical champion at a named institution.",
      "A reimbursement or payment answer, because in Indian healthcare the question of who actually pays defeats more good technology than the technology itself does.",
    ],
    fastNo: [
      "An algorithm trained on public datasets with no clinical validation and no regulatory plan",
      "A device designed for a Western price point and then discounted for India",
      "No clinical partner, no ethics approval, no sample access",
      "A therapeutics programme seeking us as sole lead investor",
    ],
    ecosystemReference: {
      disclaimer: "SINE incubation portfolio, not Y-Point Fund-I investments (per Section 4.4 disclosure rule)",
      companies: ["ImmunoACT", "Haystack Analytics", "Endimension"],
    },
    teamCoverage: {
      lead: "Shaji Varghese (Director, Y-Point & CEO SINE)",
      icMembers: [
        "Dr T S Balganesh (President GangaGen, former MD AstraZeneca India)",
        "Jay Dhadhal (Senior Analyst)",
      ],
    },
  },
};
