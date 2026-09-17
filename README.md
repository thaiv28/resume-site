# Resume Site

Static résumé page for `resume.thaiv.dev` with a stable `/resume.pdf` download.

The canonical source is [`resume.tex`](resume.tex). The compiled PDF is committed at
`public/resume.pdf` so the regular static-site build remains fast and deterministic.

## Local development

```bash
npm install
npm run resume:build
npm run dev
```

A push to `main` builds the site and calls the shared static deployment adapter. Before
committing a résumé change, run `npm run resume:build` and commit both `resume.tex` and
`public/resume.pdf`.
