import type { Topic } from "./types";
import { slugify } from "./slug";

const advisorCtas = [
  { label: "Find a technical advisor", href: "/#join" },
  { label: "Search the technical library", href: "/101" },
];

export const topics: Topic[] = [
  {
    slug: "coating",
    navLabel: "Coating",
    kicker: "101 · COATING",
    title: "Roll-to-Roll Coating Methods & Selection Guide",
    description:
      "Mayer rod, knife-over-roll, slot die, gravure, reverse roll, curtain, and the fundamentals of coat weight and rheology.",
    blocks: [
      {
        type: "lead",
        text: "Coating applies a liquid, adhesive, or functional formulation to a web's surface, transforming a base substrate into a material with new properties — a barrier layer, an adhesive, a printable surface, a conductive circuit, or countless other functions. The coating method chosen for a given line has a direct impact on precision, cost, achievable coat weight, and the range of viscosities and materials that can be run.",
      },
      {
        type: "prose",
        heading: "The Basics",
        paragraphs: [
          "A coating process generally involves three stages: applying the coating fluid to the web (application), removing any excess to achieve the target thickness (metering), and drying or curing the coating into its final form. Some methods combine application and metering into a single step (premetered methods), while others apply an excess of fluid and remove the surplus afterward (postmetered methods).",
        ],
      },
      {
        type: "definitions",
        items: [
          {
            term: "Coat weight",
            definition:
              "The amount of coating applied per unit area — typically the most important quality target in a coating process. Usually specified as a wet coat weight (as applied) and a dry coat weight (after drying or curing removes solvent or water).",
          },
          {
            term: "Viscosity & rheology",
            definition:
              "How the coating fluid flows and behaves under the shear forces of the process. Different coating methods suit different viscosity ranges, and a fluid's rheology affects how well it can be metered, leveled, and dried without defects.",
          },
          {
            term: "Coating window",
            definition:
              "The range of line speeds and flow rates within which a given method can apply a stable, defect-free coating. Running outside this window can lead to streaking, air entrainment, or an unstable coating bead.",
          },
        ],
      },
      { type: "image", label: "Viscosity / rheology test setup" },
      {
        type: "methods",
        heading: "Common Coating Methods",
        items: [
          {
            title: "Mayer Rod Coating",
            description:
              "A wire-wound metering rod is drawn across the web (or a roll carrying excess fluid), with the wire's diameter controlling how much fluid passes through the grooves between wraps. Changing to a rod with a different wire diameter changes the coat weight, making the method simple to adjust.",
            image: "Mayer rod coating head",
            why: "Simplicity and low cost. Straightforward to set up and operate, well suited to lower-viscosity fluids and thinner, uniform coatings.",
            uses: "Adhesives, primers, release coatings, and functional coatings where precise but modest coat-weight control is needed.",
          },
          {
            title: "Knife-Over-Roll (Blade) Coating",
            description:
              "A stationary blade is set at a fixed gap above a roller carrying the web. Excess coating fluid, applied ahead of the blade, is scraped off as the web passes beneath it, leaving a layer controlled by the blade gap.",
            image: "Knife-over-roll coating station",
            why: "Handles a wider range of viscosities than rod coating, including thicker fluids, and is a cost-effective way to apply heavier coat weights.",
            uses: "Textile and carpet backcoating, adhesive coatings, and paper coating where heavier or more viscous coatings are required.",
          },
          {
            title: "Slot Die Coating",
            description:
              "A premetered method: coating fluid is pumped through a precision-engineered die with a narrow slot, depositing an exact, predetermined amount of fluid directly onto the web. Because the coating is metered before it touches the web, there's no excess to remove afterward.",
            image: "Slot die coater",
            why: "Precision and minimal waste. Excellent control over coat-weight uniformity — critical in applications where consistency matters most.",
            uses: "Battery electrode coating, membranes, optical films, and high-value electronics applications where uniformity and repeatability are essential.",
          },
          {
            title: "Gravure Coating",
            description:
              "An engraved roller with a pattern of small cells picks up coating fluid from a reservoir. A doctor blade wipes excess fluid from the roller's surface, leaving fluid only in the engraved cells, which is then transferred to the web. The volume of the engraved cells directly determines the coat weight.",
            image: "Gravure coating station",
            why: "High-speed, precise application of thin coatings, with coat weight easy to control by changing the engraving pattern.",
            uses: "Printing inks, thin functional and adhesive coatings, and high-speed applications where cell-volume control gives reliable, repeatable results.",
            subitems: [
              {
                title: "Direct gravure",
                description: "The engraved roller contacts the web directly, transferring fluid straight from the cells onto the substrate.",
              },
              {
                title: "Reverse gravure",
                description: "The engraved roller rotates in the opposite direction to web travel, creating a shearing action that produces a smoother, more leveled finish than direct gravure.",
              },
              {
                title: "Offset gravure",
                description: "Fluid transfers from the engraved roller to an intermediate roller before reaching the web, allowing for gentler transfer suited to more sensitive substrates.",
              },
            ],
          },
          {
            title: "Reverse Roll Coating",
            description:
              "Coating fluid is metered onto an applicator roller by precisely setting the gap between it and an upstream metering roller. The applicator roller then transfers the fluid to the web as it passes over a backing roller, running in the opposite direction to web travel.",
            image: "Reverse roll coating station",
            why: "Precise, roller-gap-based coat-weight control across a wide range of viscosities, without fluid pooling directly on the web.",
            uses: "Coated papers, films, and foils where consistent, roller-controlled metering is preferred over a doctor blade.",
          },
          {
            title: "Curtain Coating",
            description:
              "A continuous, falling curtain of fluid coats the web as it passes beneath, with no part of the equipment contacting the web. The curtain must remain stable and unbroken, requiring careful control of fluid rheology and a minimum line speed.",
            image: "Curtain coater in operation",
            why: "High-speed, contactless application across wide coating widths, with the ability to apply multiple layers simultaneously in a single pass.",
            uses: "Hot-melt adhesive application in hygiene and nonwoven products (diapers, personal care), photographic film, and other contactless-coating applications.",
          },
        ],
      },
      {
        type: "otherList",
        heading: "Other Coating Methods",
        intro: "A number of additional methods are used across the industry for specific requirements:",
        items: [
          { tag: "CT-08", title: "Air Knife Coating", description: "Fluid is applied in excess and a focused jet of air blows off the surplus, leaving a very thin, uniform layer. Common in paper coating." },
          { tag: "CT-09", title: "Spray Coating", description: "Fine droplets of fluid are sprayed onto the web, offering flexibility across a range of fluids at some cost to precision compared to premetered methods." },
          { tag: "CT-10", title: "Dip Coating", description: "The web is immersed in a bath of coating fluid and withdrawn — a simple method often used for saturation or impregnation-style coatings." },
        ],
      },
      {
        type: "table",
        heading: "Choosing a Coating Method",
        columns: ["Method", "Viscosity Range", "Precision", "Speed", "Cost / Complexity"],
        rows: [
          ["Mayer Rod", "Low", "Moderate", "Moderate", "Low"],
          ["Knife-Over-Roll", "Low–High", "Moderate", "Moderate", "Low–Moderate"],
          ["Slot Die", "Low–Medium", "High", "Moderate–High", "High"],
          ["Gravure", "Low", "High", "High", "Moderate–High"],
          ["Reverse Roll", "Low–High", "High", "Moderate", "Moderate"],
          ["Curtain", "Medium", "Moderate", "High", "High"],
        ],
      },
      {
        type: "closing",
        paragraphs: [
          "Coating method selection also depends on factors like solvent-based versus water-based versus solventless formulations, drying and curing technology, and specific defect modes for each method. This page is a starting point — for practical detail on coat-weight ranges, troubleshooting, or process optimization, ARC's coating SMEs and technical library are the right next step.",
        ],
        ctas: [
          { label: "Find a coating technical consultant", href: "/#join" },
          { label: "Search the technical library", href: "/101" },
        ],
      },
    ],
  },
  {
    slug: "laminating",
    navLabel: "Laminating",
    kicker: "101 · LAMINATING",
    title: "Lamination Methods in R2R Converting",
    description:
      "Wet bond, dry bond, solventless, extrusion, and thermal lamination — how converters combine layers into one structure.",
    blocks: [
      {
        type: "lead",
        text: "Laminating bonds two or more layers of material together into a single, multi-layer structure, combining the properties of each layer — strength, barrier performance, printability — into a combination that no single material could deliver alone.",
      },
      { type: "image", label: "Wide shot of a laminating line or lamination nip in operation" },
      {
        type: "definitions",
        heading: "The Basics",
        items: [
          { term: "Primary & secondary web", definition: "The two (or more) substrates being combined; some structures involve three or more layers bonded in sequence." },
          { term: "Bond strength (peel strength)", definition: "How well the laminated layers resist separating — the primary quality measure for most laminations." },
          { term: "Adhesive coat weight", definition: "The amount of adhesive applied per unit area. Too little risks a weak bond; too much adds cost and can cause defects." },
          { term: "Cure time (aging)", definition: "Some lamination methods — notably solventless — require a period of time for the adhesive to fully cross-link and reach full bond strength after lamination rather than curing instantly in-line." },
        ],
      },
      { type: "image", label: "Peel strength test being performed on a laminated sample" },
      {
        type: "methods",
        heading: "Common Lamination Methods",
        items: [
          {
            title: "Wet Bond Adhesive Lamination",
            description: "Adhesive is applied to one web and the two substrates are combined while the adhesive is still wet. The resulting sandwich passes through a dryer where the solvent or water evaporates out through the more porous substrate.",
            image: "Wet bond adhesive lamination station",
            why: "Works well when at least one substrate is porous enough to let the solvent or moisture escape during drying.",
            uses: "Paper-to-film laminations and other combinations involving at least one porous substrate.",
          },
          {
            title: "Dry Bond Adhesive Lamination",
            description: "Adhesive is applied to one web and dried in-line — removing the solvent — before the coated web is combined with the second substrate under heat and pressure, which reactivates the dried adhesive to form the bond.",
            image: "Dry bond adhesive lamination station",
            why: "Works for combining two nonporous substrates such as film-to-film structures, where a wet bond process wouldn't allow the solvent to escape.",
            uses: "Flexible packaging structures combining multiple film layers.",
          },
          {
            title: "Solventless Lamination",
            description: "A 100% solids adhesive with no carrier is applied at a very thin, precisely metered coat weight and then laminated to the second substrate. The adhesive cures over time after lamination (aging) rather than being dried in-line.",
            image: "Solventless laminator — precision metering rolls",
            why: "No dryer required since there's no carrier to remove, making the process faster, more compact, and lower in emissions.",
            uses: "Increasingly the standard method for flexible packaging.",
          },
          {
            title: "Extrusion Lamination",
            description: "A molten polymer — most often polyethylene — is extruded as a thin film directly between two substrates and immediately nipped between a chill roll and a rubber roller, where it cools and solidifies, bonding the layers together.",
            image: "Extrusion laminator — extruder die and chill roll",
            why: "The extruded layer contributes functional properties — such as a moisture barrier — in addition to acting as the adhesive.",
            uses: "Barrier packaging structures combining paper or film with an extruded polyethylene layer.",
          },
          {
            title: "Thermal (Hot Melt) Lamination",
            description: "A hot melt adhesive, applied in a molten state, bonds two substrates together under heat and pressure and solidifies quickly as it cools — without any solvent to evaporate.",
            image: "Hot melt lamination station",
            why: "Fast bonding without a drying step, generally at lower equipment cost than solvent-based systems.",
            uses: "General-purpose bonding, including many paper-based and lower-cost packaging structures.",
          },
        ],
      },
      {
        type: "otherList",
        heading: "Other Lamination Methods",
        items: [
          { tag: "LM-08", title: "Flame Lamination", description: "A substrate's surface — typically foam — passes briefly over an open flame to melt it slightly, then bonds to a second substrate under pressure using the melted surface as adhesive. Common in automotive interiors." },
          { tag: "LM-09", title: "Wax Lamination", description: "A largely legacy method using wax as the bonding agent. Low-cost but generally weaker than modern adhesive systems; replaced in most applications." },
        ],
      },
      {
        type: "table",
        heading: "Choosing a Lamination Method",
        columns: ["Method", "Substrate Porosity", "Dryer Required", "VOC Emissions"],
        rows: [
          ["Wet bond", "≥1 porous", "Yes", "Higher"],
          ["Dry bond", "Nonporous OK", "Yes", "Higher"],
          ["Solventless", "Any", "No", "Minimal"],
          ["Extrusion", "Any", "No", "Minimal"],
          ["Thermal", "Any", "No", "Minimal"],
        ],
      },
      { type: "image", label: "Cross-section of a finished multi-layer laminate showing the distinct bonded layers" },
      {
        type: "closing",
        paragraphs: [
          "Lamination method selection involves additional considerations around specific formulations, defect modes, and process variables — areas that benefit from SME review before this page goes live.",
        ],
        ctas: advisorCtas,
      },
    ],
  },
  {
    slug: "finishing",
    navLabel: "Finishing",
    kicker: "101 · FINISHING",
    title: "Finishing Operations in R2R Converting",
    description:
      "Die cutting, embossing, perforating, scoring, and sheeting — the operations that bring a web to its near-final form.",
    blocks: [
      {
        type: "lead",
        text: "Finishing refers to value-adding operations that transform a web — or portions of it — into its near-final or final form. These operations happen after primary converting processes and prepare the material for packaging, end use, or onward processing by a customer.",
      },
      { type: "image", label: "Wide shot of a converting line or station performing a finishing operation" },
      {
        type: "methods",
        items: [
          {
            title: "Die Cutting",
            description: "Die cutting uses a shaped die — either flat or rotary — to cut a web into specific shapes, cut out windows, or kiss-cut (cut through just one layer of a laminate) to produce labels and other products that require a precise outline.",
            image: "Rotary die cutting station",
            subitems: [
              { title: "Through cutting", description: "The die cuts completely through all layers of the web — producing cut shapes or blanks." },
              { title: "Kiss cutting", description: "The die cuts through the face material and adhesive of a label stock, but not through the carrier or liner — leaving the label easy to remove by hand." },
              { title: "Rotary die cutting", description: "A die mounted on a cylinder engages the web continuously — the highest-speed die cutting method, typically used on high-volume label and flexible packaging lines." },
            ],
          },
          {
            title: "Embossing & Debossing",
            description: "Embossing mechanically deforms the web using a male and female roll pair to create a three-dimensional relief pattern in the substrate's surface. Debossing creates an indent rather than a raised pattern. Both are applied in-line on a converting machine.",
            image: "Embossing roll pair in operation — male and female rolls",
            why: "Adds texture, aesthetics, or functional surface structure without a coating.",
            uses: "Textured tissue, decorative packaging films, embossed aluminum foil, functional surface micro-structures.",
          },
          {
            title: "Perforating",
            description: "A pattern of small holes is cut through the web — either as a functional feature (easy-open, breathability) or to create a tear path that allows a consumer to separate sections of a product cleanly.",
            image: "Perforating blades or pin roll",
            why: "Simple, in-line, and adds consumer convenience or functional breathability.",
            uses: "Easy-open packaging, toilet tissue, food packaging requiring controlled atmosphere.",
          },
          {
            title: "Scoring",
            description: "A blade or rule creates a crease line in a substrate — not cutting through but weakening it along a specific path so it folds cleanly without cracking or irregular tearing.",
            image: "Scoring blade or rule in operation",
            why: "Improves fold quality and prevents cracking of coated or laminated materials when folded.",
            uses: "Folding cartons, book spines, and any R2R-produced product that is later folded.",
          },
          {
            title: "Sheeting",
            description: "Sheeting converts a continuous web into discrete flat sheets of a specified length — the transition from roll-fed to sheet-fed form. Used when downstream operations require sheets rather than continuous web.",
            image: "Sheeting unit or cutter-creaser",
            why: "Produces flat sheet output from a continuous web in a single pass.",
            uses: "Converting paper, film, or foil rolls into sheet stock for subsequent printing, cutting, or forming.",
          },
        ],
      },
      {
        type: "otherList",
        heading: "Other Finishing Operations",
        items: [
          { tag: "FN-07", title: "In-Line Inspection", description: "100% inspection systems — camera, spectrophotometer — detect defects in real time and may automatically flag, reject, or stop the line. See the Testing & Inspection page." },
          { tag: "FN-08", title: "In-Line Rewinding & Splicing", description: "Automated roll change and splicing systems can replace an expiring roll and join the new web without stopping the line — critical for continuous production." },
        ],
      },
      {
        type: "closing",
        paragraphs: ["Finishing operation selection and troubleshooting involves additional considerations that benefit from SME review before this page goes live."],
        ctas: advisorCtas,
      },
    ],
  },
  {
    slug: "testing-inspection",
    navLabel: "Testing & Inspection",
    kicker: "101 · TESTING & INSPECTION",
    title: "Testing & Inspection Methods in R2R Converting",
    description:
      "In-line measurement, vision inspection, coat weight gauging, tension monitoring, and off-line lab testing.",
    blocks: [
      {
        type: "lead",
        text: "In R2R converting, quality cannot be recovered after the web has been wound, processed, and delivered — by then the material may have been converted, printed, or shipped. Effective quality control builds measurement into the process at each step, enabling real-time decisions and continuous improvement.",
      },
      { type: "image", label: "100% inspection camera system mounted over web" },
      {
        type: "definitions",
        heading: "In-Process vs. Off-Line Testing",
        items: [
          { term: "In-line measurement", definition: "Sensors or cameras mounted directly over the web as it runs — coating weight, thickness, tension, color. Enables real-time feedback without stopping the line." },
          { term: "On-press sampling", definition: "Samples cut from the web at regular intervals are taken off-line for lab testing — bond strength, barrier testing, surface energy. Periodic rather than continuous." },
          { term: "End-of-line inspection", definition: "100% inspection of the completed roll before it leaves the line — using camera systems to check every square meter for surface defects." },
        ],
      },
      {
        type: "methods",
        heading: "Vision & Surface Inspection",
        items: [
          {
            title: "Vision & Surface Inspection",
            description: "Camera-based inspection systems scan the full web width at line speed, detecting defects like pinholes, inclusions, streaks, coating defects, and print errors. Detected defects are logged with their position and can trigger a stop, a slow-down, or an automated flag mark on the roll.",
            image: "Vision inspection system mounted over a wide converting line",
            why: "100% coverage of the web surface at production speed — finding defects that sample-based inspection would miss.",
            uses: "High-value, defect-sensitive products: medical packaging, barrier films, printed flexible packaging.",
          },
        ],
      },
      {
        type: "otherList",
        heading: "Coat Weight Measurement",
        intro: "Measuring how much coating has been applied to the web — and confirming it's uniform across the width and along the length — is critical for both product performance and material cost control.",
        items: [
          { tag: "QC-03", title: "Beta Gauge", description: "Measures coating weight by transmitting beta radiation through the web and detecting the attenuation — common for in-line coat weight monitoring." },
          { tag: "QC-04", title: "X-Ray Gauge", description: "Uses X-ray transmission rather than beta radiation — better for thicker coatings and when radiation source handling is a concern." },
          { tag: "QC-05", title: "Near-Infrared (NIR)", description: "Measures moisture content, coat weight, or specific chemical species by analyzing how the web absorbs infrared light. Widely used in drying control." },
        ],
      },
      {
        type: "prose",
        heading: "Tension & Web Control Monitoring",
        paragraphs: [
          "Tension sensors — typically load cells under rollers — provide continuous measurement of web tension in each zone of the machine. Monitoring tension profiles across a run is important both for product quality (avoiding deformation) and machine safety (preventing breaks).",
        ],
      },
      { type: "image", label: "Load cell tension measurement roller" },
      {
        type: "definitions",
        heading: "Off-Line Lab Testing",
        items: [
          { term: "Peel strength (bond strength)", definition: "Measured on a tensile tester — quantifies how much force is required to separate laminated layers. The primary quality measure for most laminations." },
          { term: "Barrier testing (OTR / WVTR)", definition: "Oxygen Transmission Rate and Water Vapor Transmission Rate measure how much gas or moisture permeates a film or laminate — critical for food packaging performance." },
          { term: "Surface energy (dyne level)", definition: "Confirms treatment level using dyne pens or fluids. A basic, fast on-press check before printing or laminating begins." },
          { term: "Optical density (OD)", definition: "For metallized films — measures the opacity of the metal layer as a proxy for thickness and barrier quality." },
        ],
      },
      { type: "image", label: "Tensile tester performing a peel strength test on a laminated sample" },
      {
        type: "closing",
        paragraphs: ["Testing, inspection, and quality control selection involves additional considerations that benefit from SME review before this page goes live."],
        ctas: advisorCtas,
      },
    ],
  },
  {
    slug: "slitting",
    navLabel: "Slitting",
    kicker: "101 · SLITTING",
    title: "Slitting Methods in Roll-to-Roll Converting",
    description:
      "Shear, razor, and score slitting — plus duplex, turret, and log slitter configurations.",
    blocks: [
      {
        type: "lead",
        text: "Slitting cuts a wide \"master roll\" into narrower rolls — the widths required for the next process step or the end customer. It's often one of the last operations in a converting line, and the precision achieved here has a direct downstream impact on waste, registration, and rewinding efficiency.",
      },
      {
        type: "image",
        label: "Wide shot of a slitter-rewinder in operation",
        src: "/images/slitting-rewinder.jpg",
        credit: "Photo courtesy of Contiweb",
      },
      {
        type: "definitions",
        heading: "The Basics",
        items: [
          { term: "Slit width", definition: "The final width of each output roll. Slit widths are typically specified by the customer or next process." },
          { term: "Slitting accuracy", definition: "How precisely the actual slit position matches the target — especially critical when slitting into narrow widths or when downstream equipment has tight web-width tolerance requirements." },
          { term: "Edge quality", definition: "The cleanliness and consistency of the slit edge. Poor edge quality (burrs, dust, ragged cuts) leads to problems in subsequent laminating, printing, or rewinding operations." },
        ],
      },
      {
        type: "methods",
        heading: "Common Slitting Methods",
        items: [
          {
            title: "Shear Slitting",
            description: "Two circular blades — one upper, one lower — are set to overlap slightly. The web passes between them and is sheared rather than cut. The cleanest cut available, with the lowest dust generation.",
            image: "Shear slitting blades (upper and lower) in slitting position",
            why: "Best edge quality and lowest dust generation of any slitting method — the cleanest cut.",
            uses: "Most films, foils, and any application where dust generation or edge quality is critical.",
          },
          {
            title: "Razor Slitting",
            description: "A razor or razor-like blade is held in a fixed position and the web is pulled through it. Simple and inexpensive — the blade itself is cheap and easy to replace — but edge quality is sensitive to blade sharpness and angle.",
            image: "Razor blade slitting station — blade holder and web",
            why: "Lowest cost and simplest setup; easy blade changes.",
            uses: "Paper, board, and less-demanding film applications where edge quality is acceptable.",
          },
          {
            title: "Score (Crush) Slitting",
            description: "A hardened upper circular blade presses the web against a hardened anvil roller, compressing it until it splits. The least precise of the three methods and produces the roughest edge — rarely used in flexible packaging.",
            image: "Score slitting setup — upper blade and anvil roller",
            why: "Simplicity and low cost; requires no opposing blade.",
            uses: "Thicker materials like board where edge quality requirements are less stringent.",
          },
        ],
      },
      {
        type: "definitions",
        heading: "Machine Configurations",
        items: [
          { term: "Duplex (center winder)", definition: "The slitter-rewinder winds slit rolls onto two shafts simultaneously — odd-numbered rolls on one shaft, even on the other — preventing roll interference from adjacent lanes." },
          { term: "Turret winder", definition: "Multiple winding positions on a rotating frame allow finished rolls to be removed and new cores staged without stopping the machine — maximizing throughput." },
          { term: "Log slitter", definition: "Cuts a finished wound roll perpendicular to its axis — reducing a wide roll to shorter log lengths — rather than slitting along the web direction." },
        ],
      },
      { type: "image", label: "Duplex slitter-rewinder showing two output shafts" },
      {
        type: "table",
        heading: "Slitting Method Comparison",
        columns: ["Method", "Edge Quality", "Dust Generation", "Cost / Complexity", "Best For"],
        rows: [
          ["Shear", "Excellent", "Very low", "Moderate", "Films, foils, sensitive materials"],
          ["Razor", "Good", "Moderate", "Low", "Paper, general film"],
          ["Score", "Fair", "Higher", "Low", "Board, thicker materials"],
        ],
      },
      {
        type: "closing",
        paragraphs: ["Slitting method selection and troubleshooting involves additional considerations that benefit from SME review before this page goes live."],
        ctas: advisorCtas,
      },
    ],
  },
  {
    slug: "flexographic-printing",
    navLabel: "Flexographic Printing",
    kicker: "101 · PRINTING",
    title: "Flexo & Other Printing Methods in Converting",
    description:
      "Flexographic press configurations, digital, screen, and offset printing used across R2R converting.",
    blocks: [
      {
        type: "lead",
        text: "Flexographic printing (flexo) is the dominant print process for flexible packaging and labels — and increasingly for functional printing applications. A number of other methods, from digital to screen and inkjet, are growing in use alongside it. This page covers flexo and the other print technologies commonly used in R2R converting.",
      },
      { type: "image", label: "Wide shot of a flexographic printing press" },
      {
        type: "definitions",
        heading: "Flexographic Printing",
        intro:
          "Flexo uses a flexible raised-image printing plate — typically made from photopolymer — mounted on a cylinder. Ink is metered from a fountain roll via an anilox roll (an engraved roll that controls ink volume) to the raised areas of the plate, which then transfer ink to the web.",
        items: [
          { term: "Anilox roll", definition: "The heart of a flexo deck: a hard, engraved roll with a fine cell structure that meters a precise, repeatable volume of ink from the fountain to the printing plate." },
          { term: "Doctor blade", definition: "Used in enclosed chamber systems to wipe excess ink from the anilox surface, leaving only what's in the cells." },
          { term: "Plate", definition: "The flexible photopolymer plate carries the raised image that directly contacts the web. One plate is required for each color." },
        ],
      },
      {
        type: "otherList",
        heading: "Common Flexo Press Configurations",
        items: [
          { tag: "FP-02", title: "Central Impression (CI)", description: "All print decks print against a single large central drum. Excellent registration because the web never leaves the drum between colors. Standard for most flexible packaging." },
          { tag: "FP-03", title: "In-Line Stack", description: "Individual print decks arranged in a horizontal line; the web passes sequentially through each. More economical for narrow widths; registration is more sensitive to web tension." },
          { tag: "FP-04", title: "Stack Press", description: "Print decks stacked vertically or in a tower configuration. Compact footprint; commonly used for narrower label printing." },
        ],
      },
      {
        type: "methods",
        heading: "Other R2R Print Methods",
        items: [
          {
            title: "Digital (Inkjet)",
            description: "Non-contact process: droplets of ink are ejected directly onto the web from a printhead array. No plates required — each pass can print different content, making digital the natural choice for variable-data printing, short runs, and print-on-demand applications.",
            image: "Digital inkjet print head or press in-line on a converting line",
            why: "No plates, no setup time, variable data. Economics improve for short and medium runs.",
            uses: "Labels, packaging, direct mail, functional printing where content varies.",
          },
          {
            title: "Screen Printing",
            description: "A screen (mesh) stretched on a frame carries a stencil image. Ink is forced through the open mesh areas onto the web below using a squeegee. Screen printing deposits extremely thick ink layers — orders of magnitude heavier than flexo or gravure.",
            image: "R2R screen printing station or rotary screen unit",
            why: "Unique ability to deposit very thick ink layers — required for specialty coatings, raised effects, and functional applications.",
            uses: "Specialty inks, UV-curable thick coatings, braille, and functional printing requiring film build.",
          },
          {
            title: "Offset Lithography",
            description: "Image is transferred from a plate to a rubber blanket cylinder and then to the web — the substrate never contacts the plate directly. Less common in R2R flexible packaging but used in publication-grade web printing and some label work.",
            image: "Offset lithography print deck",
            why: "High image quality with fine halftone reproduction; no direct plate-to-web contact protects delicate plates.",
            uses: "High-quality label and publication printing.",
          },
        ],
      },
      {
        type: "table",
        heading: "Print Method Comparison",
        columns: ["Method", "Run Length", "Setup Cost", "Variable Data", "Ink Film Weight"],
        rows: [
          ["Flexo (CI)", "Long", "Moderate", "No", "Thin"],
          ["Gravure", "Very long", "High", "No", "Thin"],
          ["Digital (inkjet)", "Short–Long", "Low", "Yes", "Thin"],
          ["Screen", "Short–Med", "Moderate", "No", "Very thick"],
        ],
      },
      {
        type: "closing",
        paragraphs: ["Print method selection and troubleshooting involves additional considerations that benefit from SME review before this page goes live."],
        ctas: advisorCtas,
      },
    ],
  },
  {
    slug: "gravure-printing",
    navLabel: "Gravure Printing",
    kicker: "101 · PRINTING",
    title: "Gravure Printing in Roll-to-Roll Converting",
    description:
      "Engraved cylinders, engraving methods, and why gravure delivers consistent density on long runs.",
    blocks: [
      {
        type: "lead",
        text: "Gravure (also called rotogravure) uses an engraved cylinder to transfer ink directly from a liquid reservoir onto the substrate. The cylinder's surface is engraved with millions of tiny cells that hold ink; a doctor blade wipes the non-engraved surface clean, leaving ink only in the cells, which transfers to the web. The cell depth and size determine how much ink is deposited — making gravure one of the most precise and consistent print processes for long runs.",
      },
      { type: "image", label: "Full gravure printing line or wide-format gravure press" },
      {
        type: "definitions",
        heading: "The Basics",
        items: [
          { term: "Gravure cylinder", definition: "A steel or steel-based roller engraved with a pattern of cells, then chrome-plated for durability. Each color in the design requires its own cylinder." },
          { term: "Doctor blade", definition: "A thin blade that wipes excess ink from the non-recessed surface of the gravure cylinder, leaving ink only in the engraved cells." },
          { term: "Cell volume", definition: "The geometry of each engraved cell — its depth, width, and shape — determines how much ink it holds and how much is transferred to the substrate." },
          { term: "Impression roller", definition: "A rubber-covered roller that presses the web against the gravure cylinder to ensure good ink transfer from the cells to the substrate." },
        ],
      },
      { type: "image", label: "Close-up of gravure cylinder and doctor blade assembly" },
      {
        type: "otherList",
        heading: "Cylinder Engraving Methods",
        items: [
          { tag: "GP-03", title: "Electromechanical Engraving", description: "A diamond-tipped stylus vibrates at controlled frequencies, cutting cells directly into the cylinder surface. The most common method for flexible packaging today." },
          { tag: "GP-04", title: "Chemical Etching", description: "An acid solution etches cells into a coated cylinder surface through a mask. A legacy process largely replaced by electromechanical engraving." },
          { tag: "GP-05", title: "Laser Engraving", description: "A laser ablates cell geometry directly into the cylinder surface. Enables very fine detail and unique geometric possibilities." },
        ],
      },
      {
        type: "definitions",
        heading: "Advantages of Gravure",
        items: [
          { term: "Consistent density", definition: "Because the engraved cells transfer a precise, repeatable volume of ink, gravure produces exceptionally consistent color density and tonal gradation across long runs." },
          { term: "Long run economics", definition: "Gravure cylinders are durable and run millions of impressions before re-engraving is needed, making per-unit costs very low at high volumes." },
          { term: "High line speeds", definition: "Gravure runs at very high web speeds — up to 1,000+ m/min in some installations — making it well-suited to high-volume production." },
        ],
      },
      {
        type: "definitions",
        heading: "Considerations",
        items: [
          { term: "Cylinder cost", definition: "Gravure cylinders are expensive to produce and require a full new set for every design change — making short-run work uneconomical." },
          { term: "Make-ready time", definition: "Lengthy setup times compared to digital printing; best suited to runs where setup cost is amortized across large volumes." },
          { term: "Solvents", definition: "Gravure inks are typically solvent-based, requiring drying ovens and solvent recovery or destruction systems to manage emissions." },
        ],
      },
      { type: "image", label: "Multi-color gravure press showing multiple print decks in sequence" },
      {
        type: "closing",
        paragraphs: ["Gravure printing selection and troubleshooting involves additional considerations that benefit from SME review before this page goes live."],
        ctas: advisorCtas,
      },
    ],
  },
  {
    slug: "surface-treatment",
    navLabel: "Surface Treatment",
    kicker: "101 · SURFACE TREATMENT",
    title: "Surface Treatment Methods in R2R Converting",
    description:
      "Corona, plasma, and flame treatment — how converters raise surface energy for better adhesion.",
    blocks: [
      {
        type: "lead",
        text: "Many substrates — especially polyolefin films like polyethylene and polypropylene — have naturally low surface energy, which prevents inks, adhesives, and coatings from properly wetting and bonding. Surface treatment modifies the substrate's surface chemistry to increase that energy and improve adhesion, without changing the bulk properties of the material.",
      },
      { type: "image", label: "Treatment station in-line on a converting line" },
      {
        type: "definitions",
        heading: "The Basics",
        items: [
          { term: "Surface energy", definition: "A measure of how strongly a material's surface attracts and bonds with other substances, expressed in dynes per centimeter. Higher surface energy means better wetting and adhesion." },
          { term: "Wetting (wettability)", definition: "How well a liquid — like an ink or adhesive — spreads evenly across a surface rather than beading up." },
          { term: "Treatment level", definition: "The degree to which a treatment process has raised a substrate's surface energy, typically checked with a dyne test or contact angle measurement." },
          { term: "Treatment decay", definition: "Surface treatment isn't permanent. Treated surfaces gradually lose surface energy over time (hours to days), which is why materials are often treated close to the time they'll be printed, coated, or laminated." },
        ],
      },
      { type: "image", label: "Dyne test being performed on a treated film sample" },
      {
        type: "methods",
        heading: "Common Treatment Methods",
        items: [
          {
            title: "Corona Treatment",
            description: "A high-voltage electrical discharge is generated across an air gap between an electrode and a grounded roller the web passes over. The discharge ionizes the surrounding air, creating reactive species that bombard and oxidize the web's surface, raising its surface energy.",
            image: "Corona treatment station — electrode and treated roller",
            why: "Widely used and cost-effective; works well on most common polyolefin films.",
            uses: "Films headed into printing, coating, or laminating — especially polyethylene and polypropylene packaging films.",
          },
          {
            title: "Plasma Treatment",
            description: "A plasma (ionized gas) generated at or near atmospheric pressure is directed at the web's surface. Different process gases — air, nitrogen, argon — achieve more specifically tailored surface chemistries than corona typically allows.",
            image: "Atmospheric plasma treatment station",
            why: "More precise surface chemistry control than corona; treats a broader range of substrates with less ozone generation.",
            uses: "Medical devices, specialty films, and applications requiring tightly controlled surface chemistry.",
          },
          {
            title: "Flame Treatment",
            description: "An open flame from a fuel/air or fuel/oxygen mixture passes directly over the web's surface, oxidizing it and raising surface energy — similar in principle to corona and plasma but through direct flame contact.",
            image: "Flame treatment station in operation",
            why: "Achieves very high, long-lasting treatment levels; well suited to more heat-tolerant or thicker substrates.",
            uses: "Rigid or semi-rigid plastic containers, thicker films, and substrates that can tolerate direct flame exposure.",
          },
        ],
      },
      {
        type: "callout",
        text: "Note: flame treatment (modifying surface energy) is distinct from flame lamination (on the Laminating page), where a flame melts a foam surface for immediate bonding. Both use an open flame but for different purposes.",
      },
      {
        type: "definitions",
        heading: "Measuring Treatment Level",
        items: [
          { term: "Dyne test", definition: "Fast on-press quality check using dyne pens or fluids calibrated to specific surface energy values. Fluid beads up if surface energy is below the test value; spreads evenly if at or above it." },
          { term: "Contact angle measurement", definition: "A droplet of liquid is placed on the surface and the angle it forms is measured — more precise than a dyne test, typically used in lab settings." },
        ],
      },
      { type: "image", label: "Contact angle measurement instrument in a lab" },
      {
        type: "table",
        heading: "Choosing a Treatment Method",
        columns: ["Method", "Substrate Heat Tolerance", "Treatment Level", "Chemistry Precision", "Cost / Speed"],
        rows: [
          ["Corona", "Moderate", "Good", "Standard", "Low / Fast"],
          ["Plasma", "Low heat", "High", "Precise", "Moderate"],
          ["Flame", "Must tolerate heat", "Very high", "Good", "Moderate"],
        ],
      },
      {
        type: "closing",
        paragraphs: ["Surface treatment selection involves additional considerations around specific formulations, defect modes, and safety systems — areas that benefit from SME review before this page goes live."],
        ctas: advisorCtas,
      },
    ],
  },
  {
    slug: "metallizing",
    navLabel: "Metallizing",
    kicker: "101 · METALLIZING",
    title: "Metallizing in Roll-to-Roll Converting",
    description:
      "Thermal evaporation, e-beam, and sputtering — how converters deposit thin metal and oxide layers in vacuum.",
    blocks: [
      {
        type: "lead",
        text: "Metallizing applies an extremely thin metallic or metal oxide layer to a web's surface through vacuum deposition, adding barrier protection, reflectivity, or conductivity. The entire process takes place inside a sealed vacuum chamber — the metal vapor needs an unobstructed, contamination-free path from its source to the web.",
      },
      { type: "image", label: "Metallizer's vacuum chamber — exterior view" },
      {
        type: "definitions",
        heading: "The Basics",
        items: [
          { term: "Vacuum chamber", definition: "The sealed environment where deposition takes place. Removing air prevents vaporized metal from oxidizing or scattering before it reaches the web." },
          { term: "Chill (cooling) drum", definition: "A large, cooled, rotating drum the web passes over during deposition. Keeps the web from being damaged by heat from the vaporized metal source." },
          { term: "Optical density (OD)", definition: "A measure of how opaque the metallized layer is. Higher OD corresponds to a thicker, more opaque metal layer — a common way to specify and check metallizing quality." },
        ],
      },
      { type: "image", label: "Chill / cooling drum inside metallizer" },
      { type: "image", label: "Optical density measurement on metallized sample" },
      {
        type: "methods",
        heading: "Common Metallizing Methods",
        items: [
          {
            title: "Thermal (Resistance) Evaporation",
            description: "Aluminum wire is fed onto small heated ceramic boats (crucibles), where electrical resistance heating vaporizes the metal. The vapor travels upward and condenses onto the web passing over the chill drum above.",
            image: "Thermal evaporation source — ceramic boats with aluminum wire feed",
            why: "The most common and cost-effective method for standard aluminum metallizing at production scale.",
            uses: "Food packaging films, balloons, insulation products, and decorative films.",
          },
          {
            title: "Electron Beam (E-Beam) Evaporation",
            description: "A high-energy electron beam is directed at a source material held in a crucible, vaporizing it directly. Delivers concentrated, controllable energy — enabling materials with much higher melting points than aluminum.",
            image: "E-beam evaporation source",
            why: "Enables deposition of a wider range of materials with more precise control than thermal evaporation.",
            uses: "Optical coatings, specialty metals, and higher-precision deposition applications.",
          },
          {
            title: "Sputtering (Magnetron Sputtering)",
            description: "Rather than melting a source, sputtering bombards a target material with ions, physically ejecting atoms that deposit onto the substrate. Runs at lower substrate heat than evaporation-based methods.",
            image: "Sputtering target or chamber interior",
            why: "Better film uniformity and adhesion; can deposit alloys and compounds with more precision than evaporation.",
            uses: "High-precision electronics, functional and conductive coatings, specialty optical films.",
          },
        ],
      },
      {
        type: "otherList",
        heading: "Other Deposition Methods",
        items: [
          { tag: "CVD", title: "Chemical Vapor Deposition (CVD)", description: "Reacts gaseous precursor chemicals at the substrate surface to build up a thin film. Often used to deposit transparent oxide barrier coatings." },
          { tag: "MZ-06", title: "Oxide Coating (Transparent)", description: "Thin transparent oxide layers (SiOx, AlOx) provide strong barrier properties while allowing the packaged product to remain visible. Common in microwaveable food packaging." },
          { tag: "MZ-07", title: "Demetallization", description: "Selective removal of the metallized layer in a specific pattern through etching or laser ablation — used to create windows for RFID transparency, microwave use, or decorative patterns." },
        ],
      },
      {
        type: "table",
        heading: "Choosing a Metallizing Method",
        columns: ["Method", "Material Range", "Uniformity", "Substrate Heat", "Cost"],
        rows: [
          ["Thermal evaporation", "Aluminum primary", "Good", "Higher", "Low"],
          ["E-beam evaporation", "Broad", "High", "Moderate", "Moderate"],
          ["Sputtering", "Broadest", "Highest", "Low", "Higher"],
        ],
      },
      { type: "image", label: "Finished metallized film being rewound exiting the vacuum chamber" },
      {
        type: "closing",
        paragraphs: ["Metallizing involves additional considerations around specific formulations, defect modes, and safety systems — areas that benefit from SME review before this page goes live."],
        ctas: advisorCtas,
      },
    ],
  },
  {
    slug: "winders-unwinders",
    navLabel: "Winders & Unwinders",
    kicker: "101 · WEB HANDLING",
    title: "Winders & Unwinders in R2R Converting",
    description:
      "Shaft-mounted, shaftless, and turret unwinds; center, surface, and gap winding configurations.",
    blocks: [
      {
        type: "lead",
        text: "Winding and unwinding are the bookends of nearly every converting line — where a roll enters the machine and where the finished material leaves it. The right configuration for each end depends on substrate sensitivity, roll size, line speed, and how much changeover downtime is acceptable.",
      },
      { type: "image", label: "Shaft-mounted unwind stand" },
      {
        type: "methods",
        heading: "Unwind Types",
        items: [
          {
            title: "Shaft-Mounted Unwind",
            description: "The incoming roll is mounted on a shaft that passes through its core, held in bearing stands on either side. Tension is managed via a brake or driven motor. Simple and cost-effective for most standard operations.",
            image: "Shaft-mounted unwind",
            why: "Simplicity and lower cost — easier to maintain and operate than more complex configurations.",
            uses: "Standard operations where roll weights are manageable and changeover speed is not the primary constraint.",
          },
          {
            title: "Shaftless Unwind",
            description: "Air-operated sliding chucks grip the core directly from either end, eliminating the need for a through-shaft. Requires rigidity to prevent vibration from eccentric rolls.",
            image: "Shaftless unwind (chuck-style)",
            why: "Operator safety and faster changeovers as roll weights increase — no shaft threading required.",
            uses: "Heavy rolls where shaft handling creates physical strain and pinch-point risk.",
          },
          {
            title: "Turret Unwind",
            description: "A rotating frame mounts two or more roll positions. While one roll runs, the next is staged, and the turret rotates to bring it into the running position. Almost always paired with automatic splicing.",
            image: "Turret unwind with two roll positions",
            why: "Continuous, high-speed production — eliminates downtime from manual roll changes.",
            uses: "High-speed lines where even a short stop represents significant lost output.",
          },
        ],
      },
      {
        type: "otherList",
        heading: "Wind Types",
        intro: "Winder classes are defined by which of three control points — tension, nip, and torque (TNT) — are available to control wound roll hardness and internal structure.",
        items: [
          { tag: "WU-05", title: "Center Winding", description: "Drive motor applies torque directly to the core — the precision choice, allowing direct MD tension and tapered tension control. Critical for sensitive materials and tight tolerances." },
          { tag: "WU-06", title: "Surface (Contact) Winding", description: "Roll is driven by friction with a drum nipped against its surface. Excellent for large, heavy rolls; less sensitive to changing inertia. Risk: roll weight can increase nip pressure as it grows." },
          { tag: "WU-07", title: "Center-Surface (Gap) Winding", description: "Hybrid: drives through core torque while using a driven nipping roller. Controls all three TNT knobs. Can switch between nipped mode (air exclusion) and gap mode (wrinkle resistance)." },
        ],
      },
      {
        type: "methods",
        items: [
          {
            title: "Turret (Duplex) Winding",
            description: "Holds two or more winding spindles on a rotating frame, allowing on-the-fly transfers — while one roll winds, a new core is staged and accelerated to match line speed, and the web is cut and transferred without stopping the line.",
            image: "Turret (duplex) winder",
          },
        ],
      },
      {
        type: "table",
        heading: "Choosing a Configuration",
        columns: ["Configuration", "Best For", "Key Advantage", "Key Limitation"],
        rows: [
          ["Shaft-mounted unwind", "Standard rolls, manageable weight", "Low cost", "Manual roll change required"],
          ["Shaftless unwind", "Heavy rolls", "Safety & speed", "Rigidity requirement"],
          ["Turret unwind", "High-speed / high-volume", "Continuous", "Higher cost"],
          ["Center winding", "Sensitive / precision materials", "Tension control", "Complex control"],
          ["Surface winding", "Large, heavy rolls", "Simple drive", "Nip pressure risk"],
          ["Center-surface (gap)", "Wide range of materials", "Full TNT control", "Most complex"],
          ["Turret winding", "Continuous production", "No downtime", "Higher cost"],
        ],
      },
      {
        type: "closing",
        paragraphs: ["Winding and unwinding also involves considerations around specific formulations, safety systems, and defect troubleshooting — areas that benefit from SME review before this goes live."],
        ctas: advisorCtas,
      },
    ],
  },
  {
    slug: "web-handling",
    navLabel: "Web Handling",
    kicker: "101 · WEB HANDLING",
    title: "Web Handling Fundamentals",
    description:
      "Web path, tension, guiding, nip safety, and the defects that come from getting web handling wrong.",
    blocks: [
      {
        type: "lead",
        text: "Web handling is the process technology of moving a web — a structure that is long, wide, thin, and flexible — through a machine line, encompassing unwinding, guiding, tension control, and winding. The primary goal is to present the web correctly to each process step: flat, straight, at the correct speed, and under the proper tension. Failure to do so leads to defects like wrinkles, misalignment, and tension transients that compound as the material moves downstream.",
      },
      { type: "image", label: "Diagram of a full web path from unwind to rewind" },
      {
        type: "definitions",
        heading: "Key Terms",
        items: [
          { term: "Web path", definition: "The actual route or position of the web centerline as it travels from the unwind to the rewind." },
          { term: "Span length", definition: "The distance the web travels between two support elements, such as rollers. Longer spans are more sensitive to wrinkling and path control errors." },
          { term: "Steering", definition: "The active correction of the web's lateral position using actuators and sensors to keep it aligned with a target centerline or edge." },
          { term: "Spreading", definition: "Applying cross-direction tensile stresses to move web edges outward, removing wrinkles or separating slit lanes." },
        ],
      },
      {
        type: "definitions",
        heading: "Substrate Basics",
        intro: "Each substrate type requires the line to be tuned differently — the tension, roller configuration, and speed that work well for a heavy paperboard won't necessarily work for a thin polymer film.",
        items: [
          { term: "Film", definition: "Typically thin and elastic; prone to permanent deformation or \"neck-in\" (narrowing) if tension is too high." },
          { term: "Nonwovens", definition: "Often porous and lightweight; easily damaged by compression in nips and require low tension to avoid pulling the fiber structure apart." },
          { term: "Paper", definition: "Extremely sensitive to moisture and humidity, which causes dimensional changes, curl, and an increased risk of web breaks in dry environments." },
          { term: "Metal foil", definition: "Very thin and stiff; has a low elastic limit, meaning it will permanently crease or dent if subjected to even minor tension or alignment errors." },
        ],
      },
      {
        type: "definitions",
        heading: "Rollers, Drives & Nips",
        intro: "A web travels over a series of rollers between unwind and rewind, each serving a specific purpose.",
        items: [
          { term: "Dancer roller", definition: "A moveable roller that accumulates or dispenses web to absorb speed mismatches and maintain a constant tension setpoint." },
          { term: "Tension roller (load cell)", definition: "Mounted on transducers to measure the actual tension force of the web for feedback control." },
          { term: "Driven roller", definition: "Powered by a motor to provide the motive force required to transport the web and separate different tension zones." },
          { term: "Steering guide", definition: "A specialized assembly that pivots a roller in the plane of the incoming web to correct lateral tracking errors based on the Normal Entry Law." },
        ],
      },
      { type: "image", label: "Dancer, load cell, and driven roller photos" },
      {
        type: "callout",
        text: "Nip points — where two rollers press the web between them — are critical for tension isolation but are among the most dangerous hazards in web handling. Every in-running nip can pull in fingers, hair, or loose clothing. Guarding and lockout/tag-out (LOTO) procedures are the primary defenses.",
      },
      { type: "image", label: "Close-up of a nip point" },
      {
        type: "prose",
        heading: "Traction & Tension Basics",
        paragraphs: [
          "The capstan (belt) effect governs the maximum tension ratio a roller can sustain without the web sliding — governed by coefficient of friction and wrap angle, where increasing either exponentially increases grip. At high line speeds, air entrainment (hydroplaning) occurs when a thin film of air dragged between the web and roller floats the web, causing total loss of traction; grooved or textured rollers vent this air to maintain contact.",
        ],
      },
      {
        type: "prose",
        heading: "Guides & the Normal Entry Law",
        paragraphs: [
          "Guiding systems use the Normal Entry Law — a web in traction will always attempt to enter a downstream roller at a 90-degree angle to that roller's axis — to manage lateral position. Active systems use a sensor (infrared, ultrasonic, or pneumatic), a controller, and an actuator. A critical best practice: place the edge sensor as close as possible to the moving roller to avoid \"deadly delay\" control lag.",
        ],
      },
      { type: "image", label: "Guiding system edge sensor" },
      {
        type: "definitions",
        heading: "Web Defects",
        items: [
          { term: "Troughs", definition: "Out-of-plane wavy patterns in open web spans. An early warning that the web is approaching the buckling limit." },
          { term: "Wrinkles & ridges", definition: "A ridge is a lack of flatness as the web wraps a roller. If severe, it can collapse into a permanent crease — especially damaging to foils and thin films." },
          { term: "Baggy web", definition: "Machine-direction tension variations across the width, where some lanes are longer or looser — typically caused by persistent CD variations in thickness or moisture." },
        ],
      },
      { type: "image", label: "Wrinkled web" },
      { type: "image", label: "Baggy web" },
      {
        type: "prose",
        heading: "Winding",
        paragraphs: [
          "A properly wound roll must have sound internal structure. Well-wound rolls typically employ tapered tension — reducing tension as diameter increases — to prevent outer layers from crushing inner layers. Common winding defects include telescoping (axial layer shift), starring (spoke-like buckles near the core), and crushed cores from excessive radial pressure.",
        ],
      },
      { type: "image", label: "Well-wound roll with straight edges" },
      {
        type: "closing",
        paragraphs: ["Web handling also involves detailed considerations around winding models, finite element analysis, sensor calibration, and specific defect troubleshooting. For process-specific guidance, the Technical Advisory Panel and technical library are the right next step."],
        ctas: [
          { label: "Find a web handling advisor", href: "/#join" },
          { label: "Search the technical library", href: "/101" },
        ],
      },
    ],
  },
  {
    slug: "drying-curing",
    navLabel: "Drying & Curing",
    kicker: "101 · DRYING & CURING",
    title: "Drying & Curing in Roll-to-Roll Converting",
    description:
      "Convection, infrared, UV, EB, and conduction — how converters take a wet coating to its final solid form.",
    blocks: [
      {
        type: "lead",
        text: "After a coating, adhesive, or ink is applied to a web, it typically has to be transformed from a wet, liquid state into its final, functional form. Depending on the formulation, that transformation happens through drying (removing a solvent or water) or curing (chemically converting the formulation into a solid), and the method chosen has a major impact on line speed, energy cost, and the final quality of the product.",
      },
      {
        type: "definitions",
        heading: "The Basics",
        items: [
          { term: "Drying", definition: "The removal of a liquid carrier — typically water or a solvent — from a wet coating through evaporation. What's left behind is the solid content of the formulation." },
          { term: "Curing", definition: "A chemical process, rather than simple evaporation, where the applied formulation reacts and converts into its final solid form — triggered by heat, ultraviolet (UV) light, or electron beam (EB) radiation, depending on the chemistry." },
          { term: "Formulation types", definition: "Solvent-based and water-based coatings both require evaporating a liquid carrier and typically need more energy and processing length to fully dry. 100% solids formulations (common with UV- and EB-curable systems) contain no carrier to remove — the entire applied material becomes part of the final coating once cured." },
          { term: "Web support in the dryer", definition: "As the web travels through a drying or curing zone, it must be supported without damaging the wet, uncured coating. Common approaches include floating the web on cushions of air (air flotation) or supporting it on rollers only in uncoated areas." },
        ],
      },
      { type: "image", label: "Web floating on air bars through a dryer" },
      {
        type: "methods",
        heading: "Common Drying & Curing Methods",
        items: [
          {
            title: "Convection (Hot Air) Drying",
            description: "Heated air is circulated through the drying chamber and directed at the web — typically through a series of nozzles — to evaporate the liquid carrier. Ovens are often divided into multiple zones, with temperature and airflow tuned differently at each stage to control the drying rate without causing defects.",
            image: "Convection drying oven",
            why: "Versatility. Convection drying works across a wide range of coating weights and formulations, and is a well-established, widely understood technology.",
            uses: "General-purpose drying for solvent-based and water-based coatings, adhesives, and inks across packaging, labels, paper, and film converting.",
          },
          {
            title: "Infrared (IR) Drying",
            description: "Infrared emitters direct radiant heat energy at the coated web, heating the coating (and often the substrate beneath it) directly, rather than heating the surrounding air first. IR is often used in combination with convection drying rather than as a sole drying method.",
            image: "Infrared dryer emitter array",
            why: "Fast, direct heat transfer — especially useful early in a drying process to quickly begin evaporation before finishing with convection airflow.",
            uses: "A common supplement to convection ovens; a component of many combination drying systems for coatings, inks, and adhesives.",
          },
          {
            title: "UV Curing",
            description: "Ultraviolet light triggers a near-instantaneous chemical reaction (polymerization) in specially formulated inks, coatings, or adhesives, converting them from a liquid to a solid without evaporation. Because there's no liquid carrier to remove, curing happens in a fraction of the time required for conventional drying.",
            image: "UV curing station / lamp housing",
            why: "Speed and a compact footprint. UV stations are far shorter than conventional drying ovens, curing happens almost instantly, and the process runs at low temperatures — well suited to heat-sensitive substrates.",
            uses: "Printing inks, protective coatings, and adhesives — especially in labels, packaging, and other applications where line speed and substrate heat sensitivity matter.",
          },
          {
            title: "Electron Beam (EB) Curing",
            description: "Similar in concept to UV curing, but the curing reaction is triggered by a beam of accelerated electrons rather than UV light. EB curing doesn't require the photoinitiators that UV-curable formulations rely on to start the reaction.",
            image: "Electron beam curing unit",
            why: "Very fast curing with deep, uniform cure through thicker or pigmented coatings that UV light may not fully penetrate, and formulations without photoinitiators.",
            uses: "Coatings and inks where a deep, thorough cure is required — including packaging, industrial, and specialty coating applications.",
          },
          {
            title: "Conduction (Contact) Drying",
            description: "The web is drawn over the surface of one or more heated rollers or drums, transferring heat directly into the substrate and coating through direct contact. Because conduction generally moves heat more effectively than heating the surrounding air, this method offers efficient energy transfer.",
            image: "Heated drum / conduction drying cylinder",
            why: "Efficient, direct heat transfer — conduction moves heat more effectively than heating surrounding air.",
            uses: "Paper and other substrates that can tolerate direct roller contact with a wet or drying coating, often used in combination with other drying methods.",
          },
        ],
      },
      {
        type: "prose",
        heading: "Choosing a Method",
        paragraphs: [
          "The right drying or curing approach depends on a handful of practical factors. Use the table below as a starting point — final method selection involves additional variables specific to your formulation chemistry, substrate, and line configuration.",
        ],
      },
      {
        type: "table",
        columns: ["Method", "Formulation Type", "Line Speed", "Heat Sensitivity", "Footprint"],
        rows: [
          ["Convection (Hot Air)", "Solvent / Water-based", "Moderate", "Low tolerance", "Large"],
          ["Infrared (IR)", "Solvent / Water-based", "Moderate–High", "Moderate", "Medium"],
          ["UV Curing", "100% Solids (UV)", "High", "High tolerance", "Compact"],
          ["EB Curing", "100% Solids (EB)", "High", "High tolerance", "Medium"],
          ["Conduction", "Solvent / Water-based", "Moderate", "Low tolerance", "Medium"],
        ],
      },
      {
        type: "closing",
        paragraphs: ["Drying and curing also involve significant considerations around energy efficiency, solvent recovery and emissions control, oven zoning and airflow design, and safety systems — especially for solvent-based drying and EB curing. For practical guidance on line speeds, safety requirements, or energy comparisons, ARC's coating and drying SMEs and technical library are the right next step."],
        ctas: advisorCtas,
      },
    ],
  },
];

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}

export function getToc(topic: Topic) {
  const entries: { id: string; label: string }[] = [];
  for (const block of topic.blocks) {
    if (block.type === "methods" && !block.heading) {
      for (const item of block.items) {
        entries.push({ id: slugify(item.title), label: item.title });
      }
      continue;
    }
    if ("heading" in block && typeof block.heading === "string" && block.heading.length > 0) {
      entries.push({ id: slugify(block.heading), label: block.heading });
    }
  }
  return entries;
}

export function getRelatedTopics(topic: Topic, count = 3) {
  const index = topics.findIndex((t) => t.slug === topic.slug);
  const related: Topic[] = [];
  for (let i = 1; related.length < count && i <= topics.length; i++) {
    const candidate = topics[(index + i) % topics.length];
    if (candidate.slug !== topic.slug) related.push(candidate);
  }
  return related;
}
