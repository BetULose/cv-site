<template>
  <article class="page stack">
    <!-- Hero -->
    <header class="home-hero">
      <aside class="home-profile" aria-label="Profil">
        <img class="avatar" :src="profileImg" alt="Profilbild på Daniel Antonsson" />
        <div class="home-badges">
          <a class="icon-link" href="https://www.linkedin.com/in/antonsson/?locale=sv_SE" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <RouterLink class="icon-link" to="/kontakt">Kontakt</RouterLink>
        </div>
      </aside>

      <div class="home-intro stack">
        <h1 class="t-h1">Daniel Antonsson</h1>

        <p class="home-lead">
          Ledarskap, försäljning och förändring. Bakgrund från HP och idag verksam inom coaching
          och utbildning.
        </p>

        <div class="row">
          <RouterLink class="btn btn--primary" to="/cv">Se erfarenhet</RouterLink>
          <RouterLink class="btn btn--ghost" to="/kontakt">Kontakta mig</RouterLink>
        </div>

        <p class="muted">
          Stockholm. Hybrid. ICF ACC.
        </p>
      </div>
    </header>

    <!-- Highlights -->
    <section class="stack" aria-labelledby="highlights">
      <h2 id="highlights" class="t-h2">I korthet</h2>

      <div class="home-cards">
        <article class="card stack">
          <h3 class="t-h3">Erfarenhet</h3>
          <p class="muted">
            20 år i IT-branschen med fokus på partnerkanal, försäljning och ledarskap.
          </p>
          <RouterLink class="link" to="/cv">Läs mer</RouterLink>
        </article>

        <article class="card stack">
          <h3 class="t-h3">Coaching</h3>
          <p class="muted">
            Certifierad coach (ICF ACC). Praktiskt, tydligt och med fokus på beteenden i vardagen.
          </p>
          <RouterLink class="link" to="/kontakt">Boka ett samtal</RouterLink>
        </article>

        <article class="card stack">
          <h3 class="t-h3">Projekt</h3>
          <p class="muted">
            Exempel på projekt och arbetssätt, både från arbetslivet och från studier/utveckling.
          </p>
          <RouterLink class="link" to="/projekt">Se projekt</RouterLink>
        </article>
      </div>
    </section>

    <!-- Latest experience -->
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
import profileImg from "../assets/profile.jpg";

function toSortValue(job) {
  const end = job.end && job.end.trim() ? job.end : "9999-12";
  return `${end}|${job.start}`;
}

const latest = computed(() => {
  const sorted = [...experiences].sort((a, b) => toSortValue(b).localeCompare(toSortValue(a)));
  return sorted[0] || null;
});
</script>
