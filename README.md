# 90s JDM Museum

## Project Summary
This museum-style website showcases 1990s Japanese Domestic Market (JDM) sports cars as curated exhibition artifacts. The site highlights the Toyota Supra, Nissan Skyline GT-R, Mazda RX-7, and Honda NSX while explaining how engineering, culture, and media combined to make these cars iconic.

## Design Framework
- **Design Style**: Swiss Bauhaus
  - Clean grid layout
  - Typographic hierarchy
  - Minimal, museum-like presentation
  - Visual clarity for curation and storytelling

- **Cialdini Principle**: Authority
  - The site is framed as a curator-led exhibition
  - Labels, narrative tone, and organization build trust
  - Visitors are guided by expert context and interpretive text

- **Brand Archetype**: The Explorer
  - Emphasis on discovery, curiosity, and cultural exploration
  - The voice invites visitors to uncover the significance of each car
  - The exhibition encourages deeper engagement with JDM history

## What’s Included
- `index.html` — homepage with exhibit introduction, timeline, featured cars, and process summary
- `gallery.html` — artifact archive with curator-style details for each car
- `styles.css` — Swiss Bauhaus-inspired visual system and responsive layout

## Reference Project Review
The instructor’s reference repository emphasizes:
- **Spec-driven development**: clear planning before implementation
- **Iterative workflow**: review early, build incrementally, and refine
- **Context management**: keep the site focused by splitting content into smaller, reviewable sections
- **Quality patterns**: presentation as an exhibition; not just a page, but a museum-like narrative
- **Documentation**: explain the process in `README.md` and use the repo as a project record

## Development Process
This project follows the spec-driven workflow:
1. **Spec**: define the concept, design style, persuasion principle, and brand archetype.
2. **QA**: review the assignment and site structure from a curator’s perspective.
3. **Sprint**: build the homepage and artifact archive page.
4. **Implement**: apply museum-style layout, typography, and narrative.
5. **Review**: strengthen the site with timeline context and exhibition details.

## How AI Was Used
- Analyzed the assignment and reference project requirements.
- Suggested a museum-style content structure and page architecture.
- Created the homepage and a second artifact archive page.
- Wrote the README with presentation and GitHub setup guidance.
- Reviewed the site from a Smithsonian-style curator perspective.

## How to Use This Repository
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/jdm-museum-site.git
   cd jdm-museum-site
   ```
2. Review the files:
   - `index.html`
   - `gallery.html`
   - `styles.css`
   - `README.md`
3. Stage and commit:
   ```bash
   git add .
   git commit -m "Complete 90s JDM Museum website with artifact archive"
   git push origin main
   ```
4. Optionally publish with GitHub Pages from the `main` branch.

## Presentation Outline
- Concept: a museum exhibition celebrating 90s JDM sports cars
- Design style: Swiss Bauhaus for a curated, modern visual system
- Cialdini principle: Authority through curator-style storytelling
- Archetype: The Explorer, inviting discovery and cultural context
- AI workflow: spec → QA → sprint → implement → review
- Curator review: narrative flow, artifact presentation, educational value, and museum coherence

## Final Review Improvements
- Added a dedicated `gallery.html` artifact archive page.
- Included a timeline of key 90s JDM milestones.
- Expanded the homepage with curator review and process documentation.
- Strengthened the museum narrative and visitor guidance.

## Optional Future Enhancements
- Add real car images or sketches.
- Create an interactive exhibit map or timeline.
- Add a “media influence” page showing movies, games, and pop culture connections.
- Add quotes, sources, or curated references to strengthen credibility.
 
## Visuals and animations added
- Inline SVG placeholders and decorative silhouettes were added to key artifact cards.
- CSS reveal animations and hover transitions provide smooth micro-interactions.
- A small `scripts.js` file uses IntersectionObserver to animate sections on scroll.

To replace the SVG placeholders with your own images:

1. Add images to the repo in an `assets/` folder (e.g., `assets/supra.jpg`).
2. Replace the inline SVG block inside the car card with an `<img src="assets/supra.jpg" alt="Toyota Supra">`.
3. Update the README or page copy to credit image sources where required.

If you'd like, I can add an `assets/` folder and wire example images into the gallery next.
