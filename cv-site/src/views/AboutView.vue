<template>
  <article class="page stack">
    <header class="stack">
      <h1 class="t-h1">Om mig</h1>
      <p class="about-lead">
        Jag arbetar i gränslandet mellan ledarskap, försäljning och förändring. Mitt fokus är att
        göra saker begripliga, genomförbara och hållbara i vardagen.
      </p>
    </header>

    <section class="stack" aria-labelledby="summary">
      <h2 id="summary" class="t-h2">Sammanfattning</h2>
      <div class="card stack">
        <p>
          Jag har lång erfarenhet från IT-branschen, bland annat från HP där jag arbetade i flera
          roller inom direktförsäljning, produktledning och partnerkanal. De senaste åren har jag
          kombinerat kommersiellt ansvar med att leda förändring, bygga team och utveckla arbetssätt.
        </p>
        <p class="muted">
          Jag trivs när det finns ett tydligt mål, men vägen dit behöver ofta byggas under resans
          gång. Det är där jag brukar göra mest nytta.
        </p>
      </div>
    </section>

    <section class="stack" aria-labelledby="strengths">
      <h2 id="strengths" class="t-h2">Så jobbar jag</h2>

      <div class="about-grid">
        <article class="card stack">
          <h3 class="t-h3">Struktur utan onödig komplexitet</h3>
          <p class="muted">
            Jag gillar enkla ramverk som gör det lätt att prioritera, följa upp och samarbeta,
            särskilt när vardagen är rörig.
          </p>
        </article>

        <article class="card stack">
          <h3 class="t-h3">Coachande ledarskap</h3>
          <p class="muted">
            Jag ställer hellre bra frågor än ger snabba svar. Det skapar ägarskap och gör att
            förändring håller längre.
          </p>
        </article>

        <article class="card stack">
          <h3 class="t-h3">Affärsfokus och relationer</h3>
          <p class="muted">
            Jag har arbetat nära partners och kunder i många år och är van vid att kombinera
            förtroende med tydliga förväntningar.
          </p>
        </article>
      </div>
    </section>

    <section class="stack" aria-labelledby="values">
      <h2 id="values" class="t-h2">Värderingar</h2>

      <div class="card stack">
        <ul class="list">
          <li>Tydlighet och ansvar, hellre än långa dokument.</li>
          <li>Respekt och omtanke, även när det behöver vara rakt.</li>
          <li>Lärande i praktiken, med fokus på beteenden i vardagen.</li>
        </ul>
      </div>

      <aside class="note" aria-label="Notering">
        <p class="muted">
          Jag har också hållit föreläsningar om mångfald, inkludering och hållbarhet. För mig handlar
          det om att bygga kultur som gör både människor och affär bättre.
        </p>
      </aside>
    </section>

    <section class="stack" aria-labelledby="cta">
      <h2 id="cta" class="t-h2">Kontakt</h2>
      <div class="row">
        <RouterLink class="btn btn--primary" to="/kontakt">Kontakta mig</RouterLink>
        <RouterLink class="btn btn--ghost" to="/cv">Se erfarenhet</RouterLink>
      </div>
    </section>
  </article>
</template>
