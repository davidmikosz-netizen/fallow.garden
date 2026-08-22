# fallow.garden

> **An anthology of small, restorative digital utilities.**

In agriculture, leaving land fallow is not neglect—it is a deliberate pause that allows depleted soil to naturally replenish itself. Our minds and bodies require the same unhurried rest.

**fallow.garden** is an evolving collection of focused, single-purpose micro-tools published as self-contained "episodes." Each utility is designed to address a specific dimension of recovery—easing cognitive friction, repairing physical strain, navigating bureaucratic burnout, or offering imaginative rest—without algorithmic feeds, telemetry, or distractions.

---

## 🌿 Published Episodes

| Episode | Title | Description | Delivery |
| :--- | :--- | :--- | :--- |
| **01** | **Attention Restore** | Guided optical resets, pacing timers, and brown noise synthesis modeled on Attention Restoration Theory (ART) and Default Mode Network (DMN) activation. | `episodes/garden/` |
| **02** | **Gut Biome Recovery** | Practical, evidence-backed dietary strategies to help digestive flora regenerate after antibiotics, colonoscopies, or acute illness. | [getrepoopulate.com](https://getrepoopulate.com) |
| **03** | **Federal Retirement Horizon** | Granular countdown for civil servants calculating net remaining duty shifts to MRA, Age 60, and Age 62—accounting for federal holidays, leave accrual tiers, and the MRA+10 postponed annuity exit. | `episodes/fers-countdown/` |
| **04** | **The Digital Thought Composter** | A cathartic text-disposal engine. Feed looping dread, unread inbox guilt, or administrative sludge to simulated microbes and watch it break down into nutrient-dense digital loam. | `episodes/composter/` |
| **05** | **Past Lives Dossier** | A diagnostic intake for modern fatigue. Uncover your plausible, unglamorous past (or deep-space future) life across classical, medieval, industrial, and frontier epochs. | `episodes/past-lives/` |

---

## 🏛️ Core Principles & Architecture

Every application in this anthology adheres to a strict design and engineering ethos:

* **Zero Telemetry & Local-First:** No analytics scripts, cookies, or tracking pixels. All calculations, procedural audio, text parsing, and storage run 100% client-side in the user's browser.
* **Single-File Portability:** Each episode is self-contained in a single `index.html` file containing its own HTML, CSS, and vanilla JavaScript—making deployment, archival, and modification effortless.
* **Installable as Web Apps:** Configured with inline PWA manifests and mobile meta tags so users can save individual tools directly to their phone's home screen for focused, browser-free use.
* **No Algorithmic Lock-In:** Tools are built to address a specific friction, deliver immediate value, and step aside.

---

## 📁 Repository Structure

```text
fallow.garden/
├── index.html                      # Root catalog, manifesto, and episode index
├── robots.txt                      # Crawler directives for domain root
├── README.md                       # Project documentation and publishing guide
└── episodes/
    ├── garden/
    │   └── index.html              # Episode 01: Attention Restore
    ├── fers-countdown/
    │   └── index.html              # Episode 03: Federal Retirement Horizon
    ├── composter/
    │   └── index.html              # Episode 04: The Digital Thought Composter
    └── past-lives/
        └── index.html              # Episode 05: Historical Past Lives Dossier
