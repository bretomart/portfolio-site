# Workspace Operational Directives

## Writing and Content Standards
1. Punctuation Constraint: Never use em-dashes under any circumstances in generated HTML, Markdown, or UI text. Use commas, colons, parentheses, or separate sentences instead.
2. Structural Style: Write biographical summaries, academic project overviews, and policy analyses in cohesive, formal paragraphs. Do not overuse bullet points.
3. Domain Voice: Maintain an analytical academic tone for sections covering International Affairs, Migration, Public Administration, and European Studies. For technical documentation and Linux server administration showcases, apply ASD-STE100 Simplified Technical English in pragmatic mode.
4. Privacy and Email Forwarder Constraint: Never expose raw personal or student email addresses (such as Gmail or student domains). Always and exclusively use the public forwarder brandon@bretom.art across all HTML, Markdown, content collections, and metadata.

## Technical Architecture Standards
1. Framework: Build a lightweight, static portfolio using Astro with Tailwind CSS for zero-JavaScript-by-default performance and clean typography.
2. Source Isolation: Read biographical and project data from ./context/, synthesize it into structured data collections inside src/content/, and never modify or remove ./context/ from .gitignore.
3. Deployment Target: Configure astro.config.mjs and .github/workflows/deploy.yml using actions/checkout@v7, withastro/action@v6, and actions/deploy-pages@v5 for automated GitHub Pages deployment on pushes to the main branch.
4. Command Execution: Whenever executing shell, file, or Git commands in the terminal, include verbose flags (-v or --verbose) so all operations remain transparent in the logs.
5. Commit Message Protocol: Never generate automated or assumed Git commit messages. Always prompt the user to provide their own commit message before executing any Git commit operation.
