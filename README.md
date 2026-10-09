# Islamic software portfolio

A single-page portfolio of seven open-source Islamic projects by Abdalla Eldoumani: a Qur'an verse video pipeline, Tajweed Trainer, Noor al-Seerah, Asmaa, Noor Guide, a Qur'an and Sunnah browser extension, and Salaat Widget. Each entry links to its source and, where one exists, to the live site or store listing.

The site is static. It has no backend, no database and no analytics, and it does not generate any religious text. The Arabic on the page is fixed in the source.

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

- `src/data/projects.ts` holds every project card: title, description, figures, tech list and links. Edit it to change what the page says. Update the figures and links when a project changes.
- `src/components/` holds the page sections. `projects-showcase.tsx` is the only client component, because it keeps the category filter state.
- `src/app/globals.css` defines the colours, type scale and light and dark themes. The theme follows the visitor's system setting.
- `vercel.json` sets the security headers and the content security policy.

## Deploying

The repository deploys to Vercel from `main`. No environment variables are needed.
