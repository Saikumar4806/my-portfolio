This folder contains the updated page files for the portfolio site (prepared for Sai Kumar Dasam).

How to apply:
1. Copy the files from `portfolio-ready/src/pages/` into your repo's `src/pages/` (overwrite existing files).
2. Place your profile photo at `public/photo.jpg` and your resume at `public/resume.pdf`.
3. From your repo root run:

   git checkout -b feature/personalize-portfolio
   git add -A
   git commit -m "Personalize portfolio for Sai Kumar Dasam: bio, education, projects"
   git push -u origin feature/personalize-portfolio

4. Open a Pull Request on GitHub and merge to `main` (or push directly to `main` if you prefer).

Notes:
- If any imports or file names in your project are different, adjust the paths accordingly.
- To enable contact form email delivery, set EmailJS env vars on your deployment platform: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY.
