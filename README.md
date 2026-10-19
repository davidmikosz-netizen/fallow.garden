fallow.garden 🌱

To lie fallow is not to be idle.

fallow.garden is an independent anthology of single-purpose, restorative digital micro-utilities created to counter cognitive fatigue, algorithmic noise, and relentless optimization culture.

Every instrument is built to run 100% client-side inside the browser with zero external accounts, zero trackers, and zero backend databases.

🏛️ Anthology Architecture (The 6 Sections)

The anthology is organized across six distinct thematic corridors:

I. Mortality, Time & Verbal Vitals

Tools for measuring the arc of time, the practical pivot to a post-career horizon, and the daily weather of cognition.

The Garden of Finite Days (/episodes/gardenoffinitedays/index.html)

Actuarial Mindfulness. Visualizes remaining life expectancy, seasonal transitions, and high-vitality weeks based on official actuarial cohorts and lifestyle inputs.

Word Recall & Verbal Vitals (/episodes/verbal/index.html) — [NEW]

Computational Linguistics & Cognitive Vitality. A 3-minute open-ended spoken baseline checkup. Uses browser-local NLP to assess vocabulary richness (MATTR), pronoun-to-noun specificity, idea density, and conversational loops—paired with a restorative pre-flight check on reversible factors (sleep, hearing health, medications, and stress).

Next Chapter (/episodes/nextchapter/index.html)

Post-Career Transition. A gentle, structured framework for navigating the identity and routine shifts of leaving the full-time workforce without existential dread.

II. Mind & Attention Restoration

Quiet instruments for circadian pacing, soft fascination, and open-loop offloading.

Attention Restore (/episodes/garden/index.html)

Cognitive Pacing. Implements Attention Restoration Theory (ART), ultradian rhythm pacing, and zero-input micro-breaks to dissolve mental fatigue.

III. Body & The Microbiome

Tending the internal ecosystem: gut biome audio explorations, metabolic windows, and weekly botanical diversity.

You Are More Than You (https://youaremorethanyou.com)

Audio Series. A standalone audio exploration framing the human body as a complex living garden rather than an isolated machine.

The Multitudes Within (/episodes/multitudes/index.html)

Gut Biome Primer & Simulator. Multi-tiered guide to microbiome physiology paired with an interactive ecological simulator.

Metabolic & Gut Biome Counter (/episodes/fastcounter/index.html)

Metabolic Motility. Real-time timestamp tracker for digestive rest windows, MMC (migrating motor complex) activation, and gentle fast-breaking protocols.

The Inner Meadow (/episodes/inner-meadow/index.html)

Biome Stewardship. Weekly botanical diversity scorecard targeting 30+ unique plant species and living ferments.

getrepoopulate.com (https://getrepoopulate.com)

Acute Gut Rewilding. Clinical and culinary protocols for recolonizing native gut flora after ecological shocks (antibiotics, procedures, illnesses).

IV. Ecology & The Living Yard

Restoring native Mid-Atlantic habitat, living landscapes, and pollinator corridors.

betterfly.garden (https://betterfly.garden)

Ecological Corridor. Native habitat and pollinator planning utility for Maryland and the Mid-Atlantic, featuring soil matching and deer-resistant companion guilds.

Landscape & Living Ecology (/episodes/garden-primer/index.html)

Botanical Primer. An essayistic guide exploring plant signaling, forest chemistry, volatile organic compounds, and participatory land stewardship.

V. Worldly Passages & Cosmic Play

Pragmatic calculators for civil service milestones alongside lighthearted cosmic and terrestrial diversions.

FERS Retirement Countdown (/episodes/fers-countdown/index.html)

Vocational Horizon. A clear milestone tracker for federal employees calculating MRA, working days, annuity accruals, and sovereign time.

Your Penguin Pal (/episodes/penguin-pal/index.html)

Domestic Cryogenics. A low-friction freezer ledger and cold-storage provision tracker to prevent waste.

Past Life Oracle (/episodes/past-lives/index.html)

Existential Play. A lighthearted karmic generator exploring historical eras and esoteric vocations to lighten the weight of modern routines.

VI. The Compost Pile (Experimental Sandbox)

Unfinished experiments and rough drafts still breaking down into rich soil.

Digital Thought Composter (/episodes/composter/index.html)

Prototype. An experimental sandbox converting cyclical or ruminative thoughts into metaphorical meadow compost. Actively seeking feedback.

🔬 Deep Dive: Word Recall & Verbal Vitals

The newest addition (/episodes/verbal/index.html) explores elicited speech phenotyping as a non-clinical, self-administered vitality check.

Core Architecture

Zero-Server Audio Stream: Audio is captured using the browser's native Web Speech API (SpeechRecognition). Raw audio is immediately discarded; only transient text chunks and inter-utterance pause durations are held in client-side memory.

Local Natural Language Processing: Linguistic tagging is handled entirely in-memory using compromise.js:

Moving-Average Type-Token Ratio (MATTR-50): Rolling 50-word window calculating lexical richness without sample-length bias.

Specificity Index: Mathematical ratio of proper/concrete nouns to vague deictic placeholders (thing, stuff, it, that).

Intra-Sample Semantic Looping: Jaccard/cosine token overlap checks across sentence pairs to detect inadvertent perseveration.

Hesitation Latency: Millisecond tracking of mid-clause pauses (>1.2s) and filled pauses (um, uh).

The Confounder Guardrail: Contextualizes speech against the Lancet Commission's modifiable cognitive factors (untreated hearing load, sleep deprivation, anticholinergic medications, and acute stress) so temporary fatigue is never mistaken for structural cognitive decline.

Graduated Consent Gate: Users choose between a restorative, lifestyle-oriented summary or an unvarnished computational linguistics scorecard.

🛠️ Repository & File Layout

fallow.garden/
├── index.html                           # Main anthology landing page & category jump-bar
├── README.md                            # Architecture documentation
├── Fallowstate/                         # Agent guardrails and project principles
│   └── index.html
└── episodes/
    ├── verbal/                          # [NEW] Word Recall & Verbal Vitals
    │   └── index.html
    ├── garden/                          # Attention Restore
    │   └── index.html
    ├── gardenoffinitedays/              # The Garden of Finite Days
    │   └── index.html
    ├── nextchapter/                     # Next Chapter
    │   └── index.html
    ├── multitudes/                      # The Multitudes Within
    │   └── index.html
    ├── fastcounter/                     # Metabolic & Gut Biome Counter
    │   └── index.html
    ├── inner-meadow/                    # The Inner Meadow
    │   └── index.html
    ├── garden-primer/                   # Landscape & Living Ecology
    │   └── index.html
    ├── fers-countdown/                  # FERS Retirement Countdown
    │   └── index.html
    ├── penguin-pal/                     # Your Penguin Pal
    │   └── index.html
    ├── past-lives/                      # Past Life Oracle
    │   └── index.html
    └── composter/                       # Digital Thought Composter (The Compost Pile)
        └── index.html


🌿 Technical Principles

Single-File Deployability: Each episode is self-contained with minimal external dependencies.

No Telemetry / No Tracking: No third-party ad networks, trackers, user accounts, or persistent remote databases.

Client-Side Persistence: Longitudinal metrics (such as Verbal Vitals history or freezer ledgers) are stored exclusively in the user's browser localStorage.

Static Hosting: Compatible with Vercel, GitHub Pages, or any standard static file server.
