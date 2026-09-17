# Resume Site

`resume.thaiv.dev` redirects directly to the stable `/resume.pdf` document.

The canonical source is [`resume.tex`](resume.tex). The compiled PDF is committed at
`public/resume.pdf` so the regular static-site build remains fast and deterministic.

## Local development

```bash
npm install
npm run resume:build
npm run dev
```

A push to `main` publishes the redirect and PDF through the shared static deployment adapter. Before
committing a résumé change, run `npm run resume:build` and commit both `resume.tex` and
`public/resume.pdf`.
