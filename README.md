# Academic Research & Technical Showcase Portfolio

A static showcase website presenting the scholarly research, policy analyses, and professional profile of **Brandon Wong**.

This website is designed and deployed as a public showcase. It brings together rigorous academic research in European Studies and Public Administration with a high-performance static web architecture.

- **Live Deployment:** [https://bretomart.github.io/portfolio-site/](https://bretomart.github.io/portfolio-site/)
- **Contact Forwarder:** [brandon@bretom.art](mailto:brandon@bretom.art)
- **LinkedIn:** [https://www.linkedin.com/in/brandon-wong-652461340](https://www.linkedin.com/in/brandon-wong-652461340)

---

## Showcase Overview

This portfolio serves as an integrated digital showcase with two primary objectives:

1. **Academic and Policy Showcase:** Documenting primary empirical fieldwork, legal analyses, diplomatic negotiation models, and historical research conducted across European Studies, Public Administration, and Caribbean migration governance.
2. **Technical Architecture Showcase:** Demonstrating modern static web engineering principles, including zero-JavaScript-by-default rendering, strict source data isolation, accessible high-contrast academic typography, and automated continuous deployment.

---

## Scholarly Research Corpus

The website features full-text reader views, executive abstracts, core analytical takeaways, and complete APA bibliographies for four authored works:

1. **Funded Without Protection: How Political Priorities Undermine the Frameworks Built to Support Migrants**  
   *Domain: Migration Governance & Caribbean Policy (2026)*  
   Investigates frontline organizational precarity at CMMA (Coordination Center on Human Trafficking and Migrant Smuggling Aruba), analyzing how a tripartite funding collapse was compounded by the January 2026 Venezuelan geopolitical crisis and enabled by the Kingdom Charter Overseas Country and Territory (OCT) constitutional gap.

2. **Strategic Consolidation or Normative Erosion: Assessing the European Union's Internal Readiness for a New Global Era**  
   *Domain: European Union Policy & Geopolitics (2026)*  
   Assesses the transactional turn in European foreign and asylum policy, examining Council Document 10363/26, the offshore detention mechanisms of Article 17, external conditionality under Article 37a, and the imperatives of internal democratic legitimacy.

3. **German Climate Diplomacy and the European Green Deal: Negotiating Strategy, Energy Transition, and the Just Transition Fund**  
   *Domain: Diplomatic Negotiations & Climate Policy (2025)*  
   Models the diplomatic negotiating strategy of the Federal Republic of Germany in the Council of the European Union, formulating Green Growth Group coalitions, Just Transition Fund conditionalities, and multi-issue bargaining linkages.


4. **Multiple Imaginations: Memory, Ideological Structures, and Historical Rupture**  
   *Domain: Political Theory & Historical Poetics (2025)*  
   Synthesizes Fritz Stern's historiographical reflections with Moishe Postone's critical theory of modern antisemitism, accompanied by the original historical poem *Dormant* situated in Wrocław (formerly Breslau).

---

## Professional Profile and Curriculum Vitae

The curriculum vitae showcases Brandon Wong's dual trajectory across academic scholarship and enterprise server infrastructure:

- **Academic Education:**
  - Bachelor of Arts in European Studies (NHL Stenden University of Applied Sciences, 2023 - 2027)
  - Bachelor of Arts in Public Administration (NHL Stenden University of Applied Sciences, 2020 - 2023)
  - Bachelor of Arts in Security and Safety Management (NHL Stenden University of Applied Sciences, 2019 - 2020)
  - University of Aruba (Academic Foundation Year & Organization, Governance and Management)
- **Enterprise Hosting Operations:**
  - Client Services Manager at Bearded Host PTY LTD (Tasmania, Australia, 2025 - Present)
  - Systems Technician at ArmaHosts (Oregon, United States, 2022 - 2025)
  - Technical Support Specialist at DedicatedMC, LLC (Virginia, United States, 2021 - 2025)

---

## Technical Architecture & Engineering Standards

The codebase adheres to strict engineering constraints:

- **Static Generation Engine:** Built with [Astro](https://astro.build/) in pure static output mode (`output: 'static'`) for zero-JavaScript performance.
- **Typography and Design System:** Clean academic styling built with [Tailwind CSS](https://tailwindcss.com/) and the `@tailwindcss/typography` plugin, utilizing a high-contrast warm stone aesthetic.
- **Source Data Isolation:** All raw reference materials and background drafts reside in `./context/`, which is permanently isolated and untracked via `.gitignore`.
- **Dynamic Full-Text Navigator:** The full-text reader view incorporates a dynamic sidebar that automatically parses document headings to provide smooth in-page jumping on desktop and mobile viewports.
- **Automated Deployment Pipeline:** GitHub Actions automatically tests, builds, and deploys the site to GitHub Pages on every push to the `main` branch using `actions/checkout@v7`, `withastro/action@v6`, and `actions/deploy-pages@v5`.

---

## Local Development and Build Commands

Use Bun to manage dependencies and build the site:

```bash
# Install dependencies
bun install

# Start local development server
bun run dev

# Compile static distribution with verbose output
bun run build --verbose

# Preview static production build on port 4321
bun run preview -- --port 4321 --host
```

---

## License & Attribution

All research texts, policy analyses, and creative works are the original intellectual property of Brandon Wong. Built for public scholarly presentation and portfolio review.
