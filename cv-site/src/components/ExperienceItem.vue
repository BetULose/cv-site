<template>
  <article class="job">
    <header class="job__header">
      <h3 class="job__title">{{ role }} <span class="job__at">på</span> {{ company }}</h3>

      <p class="job__meta">
        <time :datetime="start">{{ formatMonth(start) }}</time>
        <span aria-hidden="true"> - </span>
        <time v-if="end" :datetime="end">{{ formatMonth(end) }}</time>
        <span v-else>nu</span>
        <span v-if="location"> · {{ location }}</span>
      </p>
    </header>

    <p v-if="summary" class="job__summary">{{ summary }}</p>

    <details v-if="bullets?.length" class="job__details">
      <summary class="job__summary-toggle">Läs mer</summary>

      <ul class="job__bullets">
        <li v-for="(item, idx) in bullets" :key="idx">{{ item }}</li>
      </ul>
    </details>
  </article>
</template>
<script setup>
defineProps({
  role: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, default: "" },
  start: { type: String, required: true }, // YYYY-MM
  end: { type: String, default: "" },      // YYYY-MM eller tom
  summary: { type: String, default: "" },
  bullets: { type: Array, default: () => [] },
});

function formatMonth(value) {
  // Tillåt "YYYY-MM" eller "YYYY-MM-DD"
  const [y, m] = value.split("-");
  const months = [
    "jan", "feb", "mar", "apr", "maj", "jun",
    "jul", "aug", "sep", "okt", "nov", "dec"
  ];

  const idx = Number(m) - 1;
  if (!y || Number.isNaN(idx) || idx < 0 || idx > 11) return value;

  return `${months[idx]} ${y}`;
}
</script>