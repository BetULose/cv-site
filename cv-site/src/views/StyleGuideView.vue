<template>
  <article class="page">
    <header class="stack">
      <h1>Style Guide</h1>
      <p class="muted">Tokens och grundkomponenter för sajten.</p>
    </header>

    <section class="stack" aria-labelledby="colors">
      <h2 id="colors">Färger</h2>
      <div class="grid">
        <div class="swatch">
          <div class="swatch__box bg-surface"></div>
          <div class="swatch__meta">
            <strong>Surface</strong>
            <code>--c-surface</code>
          </div>
        </div>

        <div class="swatch">
          <div class="swatch__box bg-text"></div>
          <div class="swatch__meta">
            <strong>Text</strong>
            <code>--c-text</code>
          </div>
        </div>

        <div class="swatch">
          <div class="swatch__box bg-accent"></div>
          <div class="swatch__meta">
            <strong>Accent</strong>
            <code>--c-accent</code>
          </div>
        </div>

        <div class="swatch">
          <div class="swatch__box bg-border"></div>
          <div class="swatch__meta">
            <strong>Border</strong>
            <code>--c-border</code>
          </div>
        </div>
      </div>
    </section>

    <section class="stack" aria-labelledby="type">
      <h2 id="type">Typografi</h2>
      <div class="stack">
        <p class="t-h1">Rubrik H1</p>
        <p class="t-h2">Rubrik H2</p>
        <p class="t-h3">Rubrik H3</p>
        <p>Brödtext. Det här är normaltext och ska vara lätt att läsa.</p>
        <p class="muted">Muted text för hjälpinformation.</p>
      </div>
    </section>

    <section class="stack" aria-labelledby="components">
      <h2 id="components">Komponenter</h2>

      <div class="stack">
        <h3>Buttons</h3>
        <div class="row">
          <button class="btn btn--primary" type="button">Primär</button>
          <button class="btn btn--secondary" type="button">Sekundär</button>
          <button class="btn btn--ghost" type="button">Ghost</button>
        </div>
      </div>

      <div class="stack">
        <h3>Inputs</h3>
        <div class="stack" style="max-width: 40ch;">
          <label class="field">
            <span>Namn</span>
            <input class="input" type="text" placeholder="Skriv ditt namn" />
          </label>

          <label class="field">
            <span>E-post</span>
            <input class="input" type="email" placeholder="namn@exempel.se" />
          </label>

          <label class="field">
            <span>Meddelande</span>
            <textarea class="input" rows="4" placeholder="Skriv ett meddelande"></textarea>
          </label>
        </div>
      </div>

      <div class="stack">
        <h3>Card</h3>
        <div class="card">
          <h4 class="card__title">Kort</h4>
          <p class="muted">Används för erfarenheter, projekt och liknande.</p>
        </div>
      </div>
    </section>
  </article>
</template>
