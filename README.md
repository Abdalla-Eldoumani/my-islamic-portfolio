# Islamic software portfolio

A one-page catalogue of nine open-source Islamic projects by Abdalla Eldoumani: Noor Guide, Tajweed Trainer, Noor al-Seerah, Asmaa, the Qur'an & Sunnah Companion browser extension, Salaat Widget, Sukoon, the Quran Verse Videos pipeline and Maqra. Each project is one plate with a screenshot, its number, its English and Arabic name, a sentence on what it is and who it is for, three figures, a sources line and its links.

The site is static. It has no backend, no database and no analytics, and it does not generate any religious text. The Arabic on the page is fixed in the source and every plate is readable without JavaScript.

## Run it

Requires Node 22.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Other scripts:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Where things live

- `src/data/projects.ts` holds everything a plate says: names, sentence, figures, sources line, image description and links. The order of the list is the order of the plates, and the plate numbers follow it. Check a project's repository before changing a figure.
- `src/components/` holds the page: the header, the title page with the basmala and the contents, one `plate.tsx` per project, the about section and the footer. All of it renders on the server.
- `src/app/globals.css` defines the colours, the type and the plate layout. The theme follows the visitor's system setting, and motion is limited to link colour changes and is switched off for visitors who ask for reduced motion.
- `public/projects/` holds the plate images as WebP.
- `vercel.json` sets the security headers and the content security policy.

## Plate images

`scripts/capture-screenshots.mjs` photographs the live sites at 1440 by 900 in the light theme and writes optimised WebP files to `public/projects/`. It is safe to run again: each run replaces the image of every site it reaches, and a site that fails to load keeps its existing image.

Playwright is not a dependency of the site. Install it separately, or point the script at an existing install:

```bash
PLAYWRIGHT_MODULE=/path/to/playwright/index.mjs node scripts/capture-screenshots.mjs
```

```bash
node scripts/capture-screenshots.mjs --only seerah        # one site
node scripts/capture-screenshots.mjs --import extension shot.png   # optimise a ready image
```

The live sites are Noor Guide, Tajweed Trainer, Noor al-Seerah, Asmaa and the Maqra dataset page on Hugging Face. The images for the browser extension, Salaat Widget, Sukoon and the video pipeline are assembled from those projects' own screenshots, because none has a live page, and are added with `--import`. Run the script again after a project's site changes, then commit the changed image.

## Deploying

The repository deploys to Vercel from `main`. No environment variables are needed.
