<template>
  <div v-if="open" class="overlay" role="dialog" aria-modal="true" aria-label="Meny">
    <div class="overlay__backdrop" @click="$emit('close')" aria-hidden="true"></div>

    <div class="overlay__panel">
      <div class="overlay__header">
        <strong>Meny</strong>
        <button class="icon-btn" type="button" @click="$emit('close')" aria-label="Stäng meny">
          ✕
        </button>
      </div>

      <nav class="overlay__nav" aria-label="Navigering">
        <RouterLink class="overlay__link" to="/" @click="$emit('close')">Start</RouterLink>
        <RouterLink class="overlay__link" to="/cv" @click="$emit('close')">Erfarenhet</RouterLink>
        <RouterLink class="overlay__link" to="/projekt" @click="$emit('close')">Projekt</RouterLink>
        <RouterLink class="overlay__link" to="/kontakt" @click="$emit('close')">Kontakt</RouterLink>
        <RouterLink class="overlay__link" to="/om" @click="$emit('close')">Om</RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";

defineProps({
  open: { type: Boolean, default: false },
});
const emit = defineEmits(["close"]);

function onKeydown(e) {
  if (e.key === "Escape") emit("close");
}

onMounted(() => window.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown));
</script>

