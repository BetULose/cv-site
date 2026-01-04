<template>
  <article class="page stack">
    <header class="stack">
      <h1 class="t-h1">Johan Daniel Antonsson</h1>
      <p>
        Ledarskap, försäljning och förändring. Bakgrund från HP och idag verksam
        inom coaching och utbildning.
      </p>

      <div class="row">
        <RouterLink class="btn btn--primary" to="/cv">Se erfarenhet</RouterLink>
        <RouterLink class="btn btn--ghost" to="/kontakt">Kontakta mig</RouterLink>
      </div>
    </header>

    <section class="stack" aria-labelledby="highlights">
      <h2 id="highlights" class="t-h2">I korthet</h2>

      <div class="home-cards">
        <article class="card stack">
          <h3 class="t-h3">Erfarenhet</h3>
          <p class="muted">
            20 år i IT-branschen med fokus på partnerkanal, försäljning och
            ledarskap.
          </p>
          <RouterLink class="link" to="/cv">Läs mer</RouterLink>
        </article>

        <article class="card stack">
          <h3 class="t-h3">Coaching</h3>
          <p class="muted">
            Certifierad coach (ICF ACC). Praktiskt, tydligt och med fokus på
            beteenden i vardagen.
          </p>
          <RouterLink class="link" to="/kontakt">Boka ett samtal</RouterLink>
        </article>

        <article class="card stack">
          <h3 class="t-h3">Projekt</h3>
          <p class="muted">
            Exempel på projekt och arbetssätt, både från rollen och från
            studier/utveckling.
          </p>
          <RouterLink class="link" to="/projekt">Se projekt</RouterLink>
        </article>
      </div>
    </section>

    <section class="stack" aria-labelledby="latest">
      <h2 id="latest" class="t-h2">Senaste roll</h2>

      <div class="jobs">
        <ExperienceItem v-if="latest" v-bind="latest" />
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed } from "vue";
import ExperienceItem from "../components/ExperienceItem.vue";
import { experiences } from "../data/experience";

function toSortValue(job) {
  const end = (job.end && job.end.trim()) ? job.end : "9999-12";
  return `${end}|${job.start}`;
}

const latest = computed(() => {
  const sorted = [...experiences].sort((a, b) =>
    toSortValue(b).localeCompare(toSortValue(a))
  );
  return sorted[0] || null;
});
</script>
