# Sonoma County Floorball Club

Static website for the club (est. 2023) — plain HTML, CSS, and JavaScript. No build step, no framework.

## Run locally

From the project folder, serve the files over HTTP (needed for some browsers with the video embeds):

```bash
npx --yes serve .
```

Or with Python:

```bash
python -m http.server 5500
```

Then open `http://localhost:3000` (serve) or `http://localhost:5500` (Python). You can also open `index.html` directly in a browser.

## Deploy to Vercel via GitHub

1. Create a GitHub repository and push this project.
2. Sign in at [vercel.com](https://vercel.com) and choose **Add New… → Project**.
3. Import the GitHub repo. Framework Preset: **Other**. Output directory can stay empty — Vercel will publish the root as a static site.
4. Deploy. Later pushes to the connected branch will republish automatically.

`vercel.json` enables clean URLs (`/adult-league` as well as `/adult-league.html`).

## Swap placeholder content

**YouTube (homepage `#videos`)**  
In `index.html`, replace each 11-character video ID in:

`https://www.youtube-nocookie.com/embed/VIDEO_ID`

**Photos**  
Replace `images/gallery-1.svg` through `images/gallery-8.svg` with JPEG/PNG files. Keep the same filenames, or update `src` on both `index.html` and `pictures.html`.

**Logo**  
`images/logo.png` is used in the navbar, hero, footer, and favicon.

**Schedule**  
Edit the tables/cards in `index.html`, `schedules.html`, and the league/tournament pages.

**Login**  
`login.html` is a front-end placeholder. Forms do not save data.

Club flyers and PDFs can go in `assets/`.
