<template>
  <article class="page stack">
    <header class="stack">
      <h1 class="t-h1">Projekt</h1>
      <p class="muted">
        Ett urval av projekt. Jag håller strukturen enkel så att det går snabbt att lägga till fler.
      </p>
    </header>

    <section class="stack" aria-labelledby="project-list">
      <h2 id="project-list" class="t-h2">Projektlista</h2>

      <div class="stack">
        <ProjectCard
          v-for="p in projects"
          :key="p.id"
          v-bind="p"
        />
      </div>
    </section>
  </article>
</template>

<script setup>
import ProjectCard from "../components/ProjectCard.vue";
import { projects } from "../data/projects";
</script>
