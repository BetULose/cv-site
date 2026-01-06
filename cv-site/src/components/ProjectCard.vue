<template>
  <article class="card stack">
    <header class="stack" style="gap: var(--s-1);">
      <h3 class="t-h3">{{ title }}</h3>
      <p v-if="period" class="meta">{{ period }}</p>
    </header>

    <p v-if="summary" class="muted">{{ summary }}</p>

    <p v-if="context" class="meta">{{ context }}</p>

    <ul v-if="bullets?.length" class="list">
        <li v-for="(b, i) in bullets" :key="i">{{ b }}</li>
    </ul>

    <ul v-if="tags?.length" class="tags" aria-label="Teknik">
      <li v-for="tag in tags" :key="tag" class="tag">{{ tag }}</li>
    </ul>

    <div v-if="links?.length" class="row">
      <a
        v-for="link in links"
        :key="link.href"
        class="link"
        :href="link.href"
        target="_blank"
        rel="noreferrer"
      >
        {{ link.label }}
      </a>
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  context: { type: String, default: "" },
  period: { type: String, default: "" }, // om du vill behålla den
  summary: { type: String, default: "" },
  bullets: { type: Array, default: () => [] },
  tags: { type: Array, default: () => [] },
  links: { type: Array, default: () => [] },
});

</script>
