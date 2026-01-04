<template>
  <article class="page stack">
    <header class="stack">
      <h1 class="t-h1">Erfarenhet</h1>
      <p class="muted">
        Ett urval av roller och ansvar. Klicka på “Läs mer” för detaljer.
      </p>
    </header>

    <section class="stack" aria-labelledby="filters">
      <h2 id="filters" class="t-h2">Filter</h2>

      <div class="row">
        <button
          class="btn"
          :class="activeFilter === 'all' ? 'btn--primary' : 'btn--ghost'"
          type="button"
          @click="activeFilter = 'all'"
        >
          Alla
        </button>

        <button
          class="btn"
          :class="activeFilter === 'hp' ? 'btn--primary' : 'btn--ghost'"
          type="button"
          @click="activeFilter = 'hp'"
        >
          HP
        </button>

        <button
          class="btn"
          :class="activeFilter === 'bollplanket' ? 'btn--primary' : 'btn--ghost'"
          type="button"
          @click="activeFilter = 'bollplanket'"
        >
          Bollplanket
        </button>
      </div>
    </section>

    <section class="stack" aria-labelledby="jobs">
      <h2 id="jobs" class="t-h2">Tidigare roller</h2>

      <div v-if="filteredExperiences.length" class="jobs">
        <ExperienceItem
          v-for="job in filteredExperiences"
          :key="job.id"
          v-bind="job"
        />
      </div>

      <div v-else class="card stack" aria-live="polite">
        <p>Inga träffar för valt filter.</p>
        <button class="btn btn--ghost" type="button" @click="activeFilter = 'all'">
          Visa alla
        </button>
      </div>
    </section>
  </article>
</template>

<script setup>
import { computed, ref } from "vue";
import ExperienceItem from "../components/ExperienceItem.vue";
import { experiences } from "../data/experience";

const activeFilter = ref("all");

function toSortValue(job) {
  const end = job.end && job.end.trim() ? job.end : "9999-12";
  return `${end}|${job.start}`;
}

const sortedExperiences = computed(() => {
  return [...experiences].sort((a, b) => toSortValue(b).localeCompare(toSortValue(a)));
});

const filteredExperiences = computed(() => {
  const list = sortedExperiences.value;

  if (activeFilter.value === "hp") {
    return list.filter((j) => j.company.toLowerCase().includes("hp"));
  }

  if (activeFilter.value === "bollplanket") {
    return list.filter((j) => j.company.toLowerCase().includes("bollplanket"));
  }

  return list;
});
</script>
