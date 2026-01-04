<template>
  <article class="page stack">
    <header class="stack">
      <h1 class="t-h1">Sidan finns inte</h1>
      <p class="muted">
        Länken verkar vara fel eller så har sidan flyttats.
      </p>
    </header>

    <section class="card stack" aria-label="Förslag">
      <p>
        Prova någon av dessa sidor i stället:
      </p>

      <nav class="row" aria-label="Genvägar">
        <RouterLink class="btn btn--primary" to="/">Start</RouterLink>
        <RouterLink class="btn btn--ghost" to="/cv">Erfarenhet</RouterLink>
        <RouterLink class="btn btn--ghost" to="/kontakt">Kontakt</RouterLink>
      </nav>
    </section>
  </article>
</template>
