<template>
  <div v-if="open" class="overlay" role="dialog" aria-modal="true" aria-label="Meny">
    <div class="overlay__backdrop" @click="$emit('close')" aria-hidden="true"></div>

    <div class="overlay__panel">
      <div class="overlay__header">
        <div class="overlay__profile">
          <img class="overlay__avatar" :src="profileImg" alt="Profilbild" />
          <div class="overlay__profile-text">
            <strong class="overlay__name">Daniel Antonsson</strong>
            <span class="muted" style="font-size: 14px;">Ledarskap · Försäljning · Coaching</span>
          </div>
        </div>

        <button class="icon-btn" type="button" @click="$emit('close')" aria-label="Stäng meny">
          ✕
        </button>
      </div>

<nav class="overlay__nav" aria-label="Navigering">
  <RouterLink
    ref="firstLink"
    class="overlay__link"
    to="/"
    @click="$emit('close')"
  >
    Start
  </RouterLink>

  <RouterLink class="overlay__link" to="/cv" @click="$emit('close')">Erfarenhet</RouterLink>
  <RouterLink class="overlay__link" to="/projekt" @click="$emit('close')">Projekt</RouterLink>
  <RouterLink class="overlay__link" to="/kontakt" @click="$emit('close')">Kontakt</RouterLink>
  <RouterLink class="overlay__link" to="/om" @click="$emit('close')">Om</RouterLink>
</nav>


      <div class="overlay__footer">
        <a class="overlay__smalllink" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from "vue";
import profileImg from "../assets/profile.jpg";

const props = defineProps({
  open: { type: Boolean, default: false },
});

const emit = defineEmits(["close"]);

const firstLink = ref(null);

watch(
  () => props.open,
  async (isOpen) => {
    if (isOpen) {
      await nextTick();
      // RouterLink är en komponent, därför $el
      firstLink.value?.$el?.focus?.();
    }
  }
);

function onKeydown(e) {
  if (e.key === "Escape") emit("close");
}

onMounted(() => window.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown));
</script>


