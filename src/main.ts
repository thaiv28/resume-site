import "./styles.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <section class="shell">
    <p class="eyebrow">resume.thaiv.dev</p>
    <h1>Thai Villaluna</h1>
    <p class="lede">Software engineer building useful systems, machine-learning tools, and thoughtful web products.</p>
    <nav aria-label="Résumé actions">
      <a class="primary" href="/resume.pdf">View résumé (PDF)</a>
      <a href="https://linkedin.com/in/thaivillaluna">LinkedIn</a>
      <a href="https://github.com/thaiv28">GitHub</a>
    </nav>
    <p class="note">The résumé is maintained in LaTeX and published automatically from GitHub.</p>
  </section>
`;
