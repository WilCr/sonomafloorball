# Contributing to Sonoma County Floorball Club Website

Thanks for helping improve the site! Here's how to make changes.

## Setup (one-time)

1. Clone the repo:
   ```bash
   git clone https://github.com/WilCr/sonomafloorball.git
   cd sonomafloorball
   ```
2. Install dependencies (if any):
   ```bash
   npm install
   ```

   This is a static HTML/CSS/JS site — there is no `package.json`, so you can skip `npm install` and open `index.html` or run `python -m http.server 5500`.

## Making a change

1. Create a new branch:
   ```bash
   git checkout -b feature/short-description
   ```
2. Make your edits.
3. Commit and push:
   ```bash
   git add .
   git commit -m "Short description of change"
   git push origin feature/short-description
   ```
4. Open a Pull Request (PR) on GitHub against `main`.
5. Vercel will automatically build a **preview link** on your PR — check that the site looks right before merging.
6. Once approved, merge the PR. This deploys automatically to the live site.

## Editing without coding (text/image tweaks only)

- Go to the file on GitHub.com
- Click the pencil (Edit) icon
- Make your change and click "Propose changes" — this creates a PR automatically

## Guidelines

- Keep commit messages short and clear
- One change/feature per PR when possible
- Don't push directly to `main` — always use a branch + PR
- Replace placeholder images/videos in the `images/` folder and video embed sections as real content becomes available

## Questions?

Contact [socofloorball@gmail.com](mailto:socofloorball@gmail.com) with any questions.
