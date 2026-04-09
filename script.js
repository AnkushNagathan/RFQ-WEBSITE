const data = {

  /* ═══════════════════════════════════════════════════════
     BUYER SIDE — You send RFQs. You manage sourcing.
     OEM / mid-tier manufacturer.
  ═══════════════════════════════════════════════════════ */
  buyer: {
    navLabel: "BUYER",

    probTitle: "Three things that break every <em>sourcing cycle.</em>",
    probLead:
      "RFQs go out fragmented. Quotes come back in every format imaginable. " +
      "Contracts get signed — and the supply base starts drifting the week after. " +
      "All three are still managed by people, manually, on every single cycle.",

    problems: [
      {
        num: "01",
        title: "A VAGUE RFQ CREATES A CLARIFICATION LOOP",
        body:
          "The more gaps in your RFQ package, the more assumptions suppliers make. " +
          "More assumptions mean more clarification rounds — and more days before a usable quote arrives."
      },
      {
        num: "02",
        title: "EVERY SUPPLIER RESPONDS IN A DIFFERENT FORMAT",
        body:
          "PDF, Excel, email with a single number and no breakdown. " +
          "Someone rebuilds every response into a comparable structure before any evaluation can begin. " +
          "It happens on every RFQ, for every supplier, without exception."
      },
      {
        num: "03",
        title: "SUPPLIER RISK IS MANAGED REACTIVELY — UNTIL A LINE STOPS",
        body:
          "Open POs tracked in spreadsheets. Risk ratings updated occasionally. Price drift accumulating unnoticed. " +
          "The first signal that a supplier is failing is often a production line " +
          "waiting for a part that was never going to arrive on time."
      }
    ],

    metrics: [
      { val: "14–21d",  label: "Average RFQ-to-award cycle\nin custom manufacturing",      idx: "M.01" },
      { val: "40 parts", label: "Per sourcing engineer —\nthe hard human ceiling",          idx: "M.02" },
      { val: "up to 5%", label: "Price drift on awarded\ncontracts, unmonitored",          idx: "M.03" },
      { val: "Hours",   label: "Rebuilding supplier quotes\ninto a comparable view by hand", idx: "M.04" }
    ],

    procTitle: "Five steps. Every <em>boundary closed.</em>",
    procLead:
      "Every step that currently requires a human to bridge it — Honeycomb closes it. " +
      "From the drawing on your desk to a structured, awarded, and monitored supplier relationship.",

    steps: [
      {
        num: "01",
        cat: "RFQ PACKAGE ASSEMBLY",
        before: "Before: Drawing pulled, spec written manually. Gaps left in. Clarifications follow.",
        after:  "After: Complete, precise RFQ package built from your drawing. Fewer assumptions. Cleaner responses.",
        hl:     "Honeycomb builds a precise RFQ — <em>fewer gaps, fewer clarification rounds.</em>",
        tags:   ["SPEC COMPLETE", "ASSUMPTIONS MINIMISED", "SUPPLIER LIST MATCHED"]
      },
      {
        num: "02",
        cat: "SUPPLIER DISPATCH & FOLLOW-UP",
        before: "Before: Emails sent manually. Tracked in a spreadsheet. You chase by phone.",
        after:  "After: Dispatched to matched suppliers. Auto follow-up. No thread goes cold.",
        hl:     "Honeycomb dispatches and follows up — <em>without a human in the loop.</em>",
        tags:   ["MATCHED BY CAPABILITY", "AUTO FOLLOW-UP", "RESPONSE TRACKING"]
      },
      {
        num: "03",
        cat: "QUOTE INGESTION",
        before: "Before: PDF, Excel, email — every supplier in their own format.",
        after:  "After: Every quote ingested and structured automatically, regardless of format.",
        hl:     "Honeycomb reads every quote & <em>structures it instantly.</em>",
        tags:   ["ANY FORMAT ACCEPTED", "COST BREAKDOWN EXTRACTED", "LEAD TIME CAPTURED"]
      },
      {
        num: "04",
        cat: "STRUCTURED COMPARISON & AWARD",
        before: "Before: Quotes rebuilt side by side in a spreadsheet. Every time.",
        after:  "After: Side-by-side comparison and decision brief generated automatically.",
        hl:     "Honeycomb produces the comparison & <em>decision brief.</em>",
        tags:   ["COST SIDE-BY-SIDE", "DELIVERY COMPARISON", "RISK FLAGS"]
      },
      {
        num: "05",
        cat: "LIVE SUPPLIER MONITORING",
        before: "Before: Contract signed. Supplier risk tracked in spreadsheets. Drift noticed on an invoice.",
        after:  "After: Every PO tracked. Price drift, delivery risk, and compliance — flagged the day they shift.",
        hl:     "Honeycomb monitors your supply base — <em>risk visible before it becomes a problem.</em>",
        tags:   ["OPEN PO TRACKING", "PRICE DRIFT FLAGS", "SUPPLIER RISK RATING"]
      }
    ],

    capTitle: "One workspace. <em>Three problems solved.</em>",
    capLead:
      "Honeycomb connects to your ERP, builds precise RFQ packages, reads quotes in any format, " +
      "and keeps a live view of your supply base — so your team spends time on decisions, not firefighting.",

    caps: [
      {
        num:   "CAP 01",
        title: "Precise RFQ Dispatch — <em>Fewer Gaps, Fewer Clarifications</em>",
        body:
          "Honeycomb builds the RFQ package from your drawing — spec complete, supplier matched, dispatched automatically. " +
          "Fewer assumptions in the package means fewer clarification rounds before a usable quote arrives."
      },
      {
        num:   "CAP 02",
        title: "Quote Normalisation — <em>Any Format, Structured Instantly</em>",
        body:
          "PDF, email, Excel — any format. Honeycomb reads every response, extracts cost breakdowns, " +
          "and produces a structured side-by-side with a decision brief. No spreadsheet required."
      },
      {
        num:   "CAP 03",
        title: "Supplier Network Intelligence — <em>Live Risk, Not Lagging Spreadsheets</em>",
        body:
          "Every awarded contract locked to a commercial baseline. Every open PO tracked. " +
          "Price drift, delivery risk, and compliance deviations flagged the day they appear — " +
          "not the day they show up on an invoice or stop a production line."
      }
    ],

    accessTitle: "Partner early. <em>Compound faster.</em>",
    accessPara1: "Every person in a manufacturing team will work with an agent alongside them. Interpreting requirements, surfacing past decisions, moving faster. We are building that layer — and this is where it starts.",
    accessPara2: "The intelligence compounds from the first job. Build it now and the advantage is already there by the time anyone else starts.",
    accessJourney: "THIS JOURNEY\nSTARTS HERE",
    accessBtn: "REQUEST BUYER ACCESS →"
  },

  /* ═══════════════════════════════════════════════════════
     SUPPLIER SIDE — You receive RFQs. You quote to win.
     Machine shop / fabricator / Tier 2–3 supplier.
  ═══════════════════════════════════════════════════════ */
  supplier: {
    navLabel: "SUPPLIER",

    probTitle: "Speed, accuracy, and knowledge. Right now, <em>all three live in one person.</em>",
    probLead:
      "The constraint is not your shop floor. It is the chain of people, handoffs, and manual steps " +
      "that sit between an RFQ arriving and a quote going out.",

    problems: [
      {
        num: "01",
        title: "THE PROCESS IS LONG AND MANUAL FROM START TO FINISH",
        body:
          "Multiple teams, sequential handoffs, manual work at every step. " +
          "Each pass introduces reinterpretation and delay. " +
          "What should take hours takes days — and nobody can see where it is stuck."
      },
      {
        num: "02",
        title: "A DRAWING IS NOT A DOCUMENT. IT IS A DATABASE.",
        body:
          "Hundreds of data points per page. Your estimator reads it manually, captures most — not all. " +
          "What gets missed does not show up in the quote. It shows up in production."
      },
      {
        num: "03",
        title: "WHEN THEY LEAVE, THE INTELLIGENCE LEAVES",
        body:
          "Your senior estimator carries 15 years of pricing logic: which assumptions are safe, " +
          "which standards override others, what this customer usually expects. " +
          "It is not written down. A junior takes 6–12 months to develop it. One resignation changes everything."
      }
    ],

    metrics: [
      { val: "2–3",      label: "People holding all quoting\nintelligence in a typical shop",         idx: "M.01" },
      { val: "6–12 mo",  label: "Before a junior reads complex\ndrawings without supervision",         idx: "M.02" },
      { val: "25%",      label: "Industry average win rate on\nquoted custom manufacturing work",      idx: "M.03" },
      { val: "Seconds",  label: "Honeycomb interpretation time\nvs half a day for a senior engineer",  idx: "M.04" }
    ],

    procTitle: "Drawing in. Interpreted. Quoted. <em>Fast.</em>",
    procLead:
      "Honeycomb reads the drawing, resolves standard dependencies, checks your shop's capability, " +
      "routes components, coordinates sub-suppliers, and structures the quote — " +
      "while building the institutional memory your shop has never had a system to hold.",

    steps: [
      {
        num: "01",
        cat: "DRAWING INTERPRETATION",
        before: "Before: Senior engineer reads by hand. GD&T, tolerances, standard references — hours.",
        after:  "After: Every dimension, tolerance, and callout extracted and interpreted in seconds.",
        hl:     "Honeycomb reads the drawing — <em>intent, not just dimensions.</em>",
        tags:   ["GD&T & TOLERANCES", "STANDARDS RESOLVED", "IMPLICIT REQUIREMENTS SURFACED"]
      },
      {
        num: "02",
        cat: "CAPABILITY CHECK & ROUTING",
        before: "Before: Manual check against shop capacity. Make vs outsource decided by instinct.",
        after:  "After: Capability matched to job. Per-component routing decided, with reasoning captured.",
        hl:     "Honeycomb decides what stays in-house & what <em>goes out — and why.</em>",
        tags:   ["MACHINE & PROCESS FIT", "PER-COMPONENT ROUTING", "MARGIN LOGIC PRESERVED"]
      },
      {
        num: "03",
        cat: "SUB-SUPPLIER RFQ DISPATCH",
        before: "Before: Outsourced parts go out on email. Slow replies. Customer quote blocked.",
        after:  "After: Sub-supplier RFQs dispatched automatically. Tracked. Quote unblocked.",
        hl:     "Honeycomb dispatches sub-supplier RFQs <em>while the rest of the quote is built.</em>",
        tags:   ["AUTO DISPATCH", "STRUCTURED FOLLOW-UP", "PARALLEL PROCESSING"]
      },
      {
        num: "04",
        cat: "QUOTE STRUCTURING & ASSUMPTION CAPTURE",
        before: "Before: Quote stitched from memory and scattered inboxes. Assumptions never written down.",
        after:  "After: Full cost model generated. Every assumption recorded, auditable, reusable.",
        hl:     "Honeycomb builds the quote & <em>records why every number is what it is.</em>",
        tags:   ["FULL COST MODEL", "ASSUMPTION REGISTER", "CUSTOMER-READY FORMAT"]
      },
      {
        num: "05",
        cat: "INTELLIGENCE CAPTURE",
        before: "Before: Job closes. Lessons learned by individuals. Nothing written down for the next job.",
        after:  "After: Every decision, every interpretation, every override permanently indexed.",
        hl:     "Honeycomb writes down what your senior engineer <em>used to keep in their head.</em>",
        tags:   ["PRICING PATTERNS INDEXED", "INTERPRETATION MEMORY", "COMPOUNDING ADVANTAGE"]
      }
    ],

    capTitle: "We do what your engineer does. <em>Then we do what they cannot.</em>",
    capLead:
      "Honeycomb reads the drawing, flags what is missing, generates the clarification questions, " +
      "and writes down everything it understood. Your engineer reviews — they do not start from scratch. " +
      "And every job makes the next one faster.",

    caps: [
      {
        num:   "CAP 01",
        title: "Drawing Intelligence — <em>Every Callout. Every Dependency.</em>",
        body:
          "GD&T, tolerances, surface finish, material spec, standard references — " +
          "all 150–400 data points extracted and interpreted, not just the obvious ones. " +
          "Missed callouts flagged before they become rework. Your estimator starts quoting, not reading."
      },
      {
        num:   "CAP 02",
        title: "Clarification Before Commitment — <em>Questions Generated, Not Discovered</em>",
        body:
          "Honeycomb flags every ambiguity before you quote — missing datums, conflicting standards, " +
          "implied requirements that need confirmation. " +
          "The questions get asked before you commit to a price, not after production has started."
      },
      {
        num:   "CAP 03",
        title: "Institutional Knowledge — <em>Written Down, Not Walked Out</em>",
        body:
          "Every routing decision, assumption, and feasibility call gets captured permanently. " +
          "A new estimator inherits years of quoting logic on day one. " +
          "Your senior engineer can retire — and nothing leaves with them."
      }
    ],

    accessTitle: "Partner early. <em>Compound faster.</em>",
    accessPara1: "Every person in a manufacturing team will work with an agent alongside them. Interpreting requirements, surfacing past decisions, moving faster. We are building that layer — and this is where it starts.",
    accessPara2: "The intelligence compounds from the first drawing. Build it now and the advantage is already there by the time anyone else starts.",
    accessJourney: "THIS JOURNEY\nSTARTS HERE",
    accessBtn: "REQUEST SUPPLIER ACCESS →",

    compound: {
      title: "Intelligence that <em>compounds.</em>",
      lead:  "Every RFQ processed becomes permanent, searchable institutional memory. The advantage builds — and eventually becomes unreplicable.",
      phases: [
        { label: "PHASE 01", scale: "100",   unit: "RFQs", title: "Pattern Recognition",   body: "System learns part families, common spec patterns, and recurring tolerances across your jobs.", width: "25%" },
        { label: "PHASE 02", scale: "1,000", unit: "RFQs", title: "Institutional Memory",  body: "Historical pricing, feasibility signals, and supplier patterns surface automatically on every new RFQ.", width: "60%" },
        { label: "PHASE 03", scale: "5,000+",unit: "RFQs", title: "Competitive Moat",      body: "No competitor can buy, hire, or shortcut this intelligence layer. It is yours alone.", width: "100%" }
      ]
    }
  }
};

/* ─── DOM refs ────────────────────────────────────────────── */
const compoundTitle   = document.getElementById("compound-title");
const compoundLead    = document.getElementById("compound-lead");
const compoundPhases  = document.getElementById("compound-phases");
const navAudience     = document.getElementById("nav-audience");
const probTitle       = document.getElementById("prob-title");
const probLead        = document.getElementById("prob-lead");
const probList        = document.getElementById("prob-list");
const metricsEl       = document.getElementById("metrics");
const procTitle       = document.getElementById("proc-title");
const procLead        = document.getElementById("proc-lead");
const stepsEl         = document.getElementById("steps");
const capTitle        = document.getElementById("cap-title");
const capLead         = document.getElementById("cap-lead");
const capGrid         = document.getElementById("cap-grid");
const accessTitle     = document.getElementById("access-title");
const accessPara1El   = document.getElementById("access-para1");
const accessPara2El   = document.getElementById("access-para2");
const accessJourneyEl = document.getElementById("access-journey");
const accessBtnRoot   = document.getElementById("access-btn-root");

/* ─── Render ──────────────────────────────────────────────── */
function render(side) {
  const d = data[side];

  navAudience.textContent = d.navLabel;

  probTitle.innerHTML  = d.probTitle;
  probLead.textContent = d.probLead;
  probList.innerHTML = d.problems.map(p => `
    <div class="prob-card">
      <div class="prob-card-num">${p.num}</div>
      <div class="prob-card-title">${p.title}</div>
      <div class="prob-card-body">${p.body}</div>
    </div>
  `).join("");

  metricsEl.innerHTML = d.metrics.map(m => `
    <div class="metric-card">
      <div class="metric-idx">${m.idx}</div>
      <div class="metric-val">${m.val}</div>
      <div class="metric-label">${m.label.replace(/\n/g, "<br>")}</div>
    </div>
  `).join("");

  procTitle.innerHTML  = d.procTitle;
  procLead.textContent = d.procLead;
  stepsEl.innerHTML = d.steps.map(s => `
    <div class="step-card">
      <div class="step-card-num">${s.num}</div>
      <div class="step-content">
        <div class="step-cat">${s.cat}</div>
        <div class="step-before-after">
          <span class="ba-row ba-before">${s.before}</span>
          <span class="ba-row ba-after">${s.after}</span>
        </div>
        <h3 class="step-hl">${s.hl}</h3>
        <div class="step-tags">${s.tags.map(t => `<span class="step-tag">${t}</span>`).join("")}</div>
      </div>
    </div>
  `).join("");

  capTitle.innerHTML  = d.capTitle;
  capLead.textContent = d.capLead;
  capGrid.innerHTML = d.caps.map(c => `
    <div class="bento-card">
      <div class="bento-card-num">${c.num}</div>
      <div class="bento-card-title">${c.title}</div>
      <div class="bento-card-body">${c.body}</div>
    </div>
  `).join("");

  accessTitle.innerHTML        = d.accessTitle;
  accessPara1El.textContent    = d.accessPara1;
  accessPara2El.textContent    = d.accessPara2;
  accessJourneyEl.innerHTML    = d.accessJourney.replace("\n", "<br>");
  if (window.renderBookDemoButton && accessBtnRoot) {
    window.renderBookDemoButton(d.accessBtn);
  } else if (accessBtnRoot) {
    accessBtnRoot.innerHTML = `<button class="access-btn">${d.accessBtn}</button>`;
  }

  const compoundSection = document.querySelector(".compound-section");
  if (d.compound) {
    compoundSection.style.display = "";
    compoundTitle.innerHTML  = d.compound.title;
    compoundLead.textContent = d.compound.lead;
    compoundPhases.innerHTML = d.compound.phases.map(p => `
      <div class="phase-item">
        <div class="phase-left">
          <div class="phase-label">${p.label}</div>
          <div class="phase-scale">${p.scale}<br><em>${p.unit}</em></div>
        </div>
        <div class="phase-right">
          <div class="phase-title">${p.title}</div>
          <div class="phase-body">${p.body}</div>
          <div class="phase-bar"><div class="phase-fill" style="width:${p.width}"></div></div>
        </div>
      </div>
    `).join("");
  } else {
    compoundSection.style.display = "none";
  }

  document.querySelectorAll(".picker-card").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.side === side);
  });
}

document.querySelectorAll(".picker-card").forEach(btn => {
  btn.addEventListener("click", () => render(btn.dataset.side));
});

render("supplier");
