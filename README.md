# Portfolio

This repository is a personal portfolio website built with React and Vite. It contains pages for Home, About, Projects, Gallery and more. The site is designed for quick development (Vite dev server) and production deployment as a static site.

## Features
- React + Vite single-page app
- Framer Motion animations
- Responsive layout and project cards
- Simple contact links (Email, LinkedIn, WhatsApp, GitHub, etc.)

## Prerequisites
- Node.js (recommended >= 16)
- npm (bundled with Node) or yarn
- EmailJS account (for contact form functionality)

## Environment Setup
Create a `.env` file in the project root with your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**How to get EmailJS credentials:**
1. Sign up at [emailjs.com](https://www.emailjs.com) (free tier: 200 emails/month)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{from_name}}`, `{{contact_info}}`, `{{subject}}`, `{{message}}`
4. Copy your Service ID, Template ID, and Public Key to `.env`

**Important:** Never commit `.env` to Git - it's already in `.gitignore`.

## Quick start (development)
1. Install dependencies:

```powershell
npm install
```

2. Start the dev server (fast HMR):

```powershell
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`). Changes you make to `src/` will update via HMR.

## Production build & preview
1. Create a production build (outputs to `dist`):

```powershell
npm run build
```

2. Preview the production build locally:

```powershell
npm run preview
```

The preview server will show the production static site. Use this to verify what will be deployed.

## Deploy to Netlify (manual ZIP upload)
If you deploy by drag & drop, make sure you upload the contents of `dist` at the ZIP root (not the parent `dist/` folder). Follow these steps:

1. Build the site:

```powershell
npm run build
```

2. Add a redirect rule for client-side routing (single-page app). Create `_redirects` inside `dist` with this content:

```powershell
Set-Content -Path .\dist\_redirects -Value '/* /index.html 200' -NoNewline -Encoding UTF8
```

3. Create a ZIP where `index.html` is at the archive root and upload that ZIP to Netlify:

```powershell
# compress files in dist (all files inside dist become root entries in deploy.zip)
Compress-Archive -Path .\dist\* -DestinationPath .\deploy.zip -Force
```

4. Drag & drop `deploy.zip` into Netlify (Sites → New site → Deploy manually → drag & drop) or use Netlify CLI (recommended):

```powershell
npm i -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

Notes:
- If you upload the project root instead of `dist`, Netlify will serve your source files (no `index.html` at site root) and you will get a 404.
- If direct URLs (e.g. `/projects`) return 404 after deploy, the `_redirects` rule is required so Netlify serves `index.html` for all routes.

## Troubleshooting
- If characters appear garbled (e.g. `Iâ€™m`): ensure your source files are saved as UTF‑8 in your editor. In VS Code: click the encoding in the status bar → "Save with Encoding" → `UTF-8`.
- If you make changes but don't see them in the browser:
   - For development: restart `npm run dev` and check the terminal for errors.
   - For preview/deploy: clear browser cache (Ctrl+F5), unregister any Service Worker (DevTools → Application → Service Workers → Unregister), and ensure you uploaded the new `dist`.
- To confirm the built files contain your change, search the built bundle:

```powershell
Get-Content .\dist\assets\index-*.js -Raw | Select-String "Your changed text" -SimpleMatch
```

## Editing site content
- **Contact Form**: Messages are sent via EmailJS to the email configured in your EmailJS dashboard. Update credentials in `.env` file.
- **Resume/Internships**: Edit `src/pages/Resume.jsx` to update education, skills, projects, and internship details.
- **Project cards**: Defined in `src/pages/Projects.jsx` — update the `PROJECTS` array to add or edit projects.
- **Home and About**: Pages are in `src/pages/Home.jsx` and `src/pages/About.jsx`.
- **Gallery**: Add images to `public/gallery/` and update `IMAGES` object in `src/pages/Gallery.jsx`.
- **Images**: Place in `public/` folder (referenced by path such as `/photo.jpg`).

## Git workflow (basic)
Stage, commit, and push your changes:

```powershell
git add -A
git commit -m "Describe your changes"
git push
```

If you are pushing a new branch the first time, set upstream:

```powershell
git push -u origin HEAD
```

## Optional: CI / GitHub Pages / Vercel
- If you use GitHub Actions to build and deploy, check the Actions tab for build logs and errors.
- Vercel and Netlify integrate automatically with GitHub and will deploy on push to the configured branch. Check their dashboards for logs and deployment status.

## License & Attribution
This is a personal portfolio project. Add your own license if you want to publish under a specific license.

---

If you'd like, I can commit this README update and push it to `main` for you, or create a short `docs/` page instead. Tell me which you prefer.
