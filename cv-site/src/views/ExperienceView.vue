<template>
  <article class="page">
    <h1>Erfarenhet</h1>

    <section aria-labelledby="jobs">
      <h2 id="jobs">Tidigare roller</h2>

      <div class="jobs">
<ExperienceItem
  v-for="job in sortedExperiences"
  :key="job.id"
  v-bind="job"
/>

      </div>
    </section>
  </article>
</template>

<script setup>
import { computed } from "vue";
import ExperienceItem from "../components/ExperienceItem.vue";
import { experiences } from "../data/experience";

function toSortValue(job) {
  // Pågående roller ska komma först
  const end = (job.end && job.end.trim()) ? job.end : "9999-12";
  // Sortera primärt på end (nyast), sekundärt på start (nyast)
  return `${end}|${job.start}`;
}

const sortedExperiences = computed(() => {
  return [...experiences].sort((a, b) => {
    const av = toSortValue(a);
    const bv = toSortValue(b);
    // Descending: "9999-12" (pågående) hamnar överst
    return bv.localeCompare(av);
  });
});
</script>
