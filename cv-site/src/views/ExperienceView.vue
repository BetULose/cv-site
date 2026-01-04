<template>
  <article class="page">
    <h1>Erfarenhet</h1>

    <section aria-labelledby="jobs">
      <h2 id="jobs">Tidigare roller</h2>

      <div class="jobs">
        <ExperienceItem
          v-for="job in experiences"
          :key="job.id"
          v-bind="job"
        />
      </div>
    </section>
  </article>
</template>

<script setup>
import ExperienceItem from "../components/ExperienceItem.vue";
import { experiences } from "../data/experience";
</script>