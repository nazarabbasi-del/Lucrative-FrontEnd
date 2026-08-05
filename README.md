# Lucrative AI — Marketing Site

A React rebuild of the Lucrative AI landing page from the provided Figma screenshots: hero, live dashboard mockup, product overview, feature deep-dives, an interactive problem/solution tab section, an animated "every customer, every workflow" orbit diagram, an animated LLM connection diagram (glowing traveling dots, infinite loop), a persona switcher, capabilities grid, comparison table, testimonial carousel, FAQ accordion, and footer — all with hover states and scroll-reveal animations.

## Running it

```bash
npm install
npm run build     # builds the site into dist/
npm run serve     # serves dist/ locally so you can open it in a browser
```

Then open the URL `serve` prints (usually `http://localhost:3000`).

**Important:** don't open `dist/index.html` by double-clicking it — browsers block the `<script type="module">` bundle from loading over the `file://` protocol. Always view it through a local server (`npm run serve`, or any static server / your usual dev workflow).

For live-reload while editing, use `npm run dev` (rebuilds on file save — refresh the browser manually).

## Fonts

The site loads **Montserrat** (headings) and **Lato** (body) from Google Fonts via a normal `<link>` tag in `index.html`. That requires the browser opening the page to have internet access — which your computer has, so it'll just work. (It was built in a sandboxed environment without internet access, so those two fonts couldn't be visually previewed during development — everything else was tested normally.)

## Structure

- `src/sections/` — one component per section of the page
- `src/assets/` — the graphics you provided, renamed descriptively
- `src/styles.css` — all styling, using CSS custom properties for the color palette/spacing scale
- `build.mjs` — a small esbuild-based build script (no framework lock-in, easy to read/modify)

## Notes / things you may want to adjust

- **Brand logos**: HubSpot, Mailchimp, and Snowflake marks are lightweight CSS/SVG recreations (not the official brand files), since those weren't included in the graphics you sent. Swap in real logo files under `src/assets/` and update `src/sections/BrandLogos.jsx` if you'd like pixel-perfect versions.
- **Persona tabs & testimonials**: only the "Sales" persona and one testimonial were shown in your screenshots. I wrote plausible matching copy for the other 4 personas and 4 extra testimonials, consistent with the product's voice — swap in real copy whenever you have it (in `src/sections/PersonaSwitcher.jsx` and `src/sections/Testimonial.jsx`).
- **FAQ answers**: only the first question's answer was visible in your screenshot; the other six answers are written to plausibly match — replace in `src/sections/FAQ.jsx`.
- All copy/content lives inline in each section component, so it's easy to find and edit.
