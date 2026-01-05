<template>
  <div class="site-header__inner">
    <RouterLink class="brand" to="/" aria-label="Till startsidan">
      <span class="brand__name">Daniel</span>
    </RouterLink>

    <!-- Desktop nav -->
    <div class="site-header__nav">
      <SiteNav />
    </div>

    <!-- Mobile menu button -->
    <button
      class="icon-btn site-header__menu"
      type="button"
      @click="open = true"
      aria-label="Öppna meny"
      aria-haspopup="dialog"
      :aria-expanded="open ? 'true' : 'false'"
    >
      ☰
    </button>

    <MenuOverlay :open="open" @close="open = false" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import SiteNav from "./SiteNav.vue";
import MenuOverlay from "./MenuOverlay.vue";

const open = ref(false);
import { watch } from "vue";
watch(open, (isOpen) => {
  document.body.style.overflow = isOpen ? "hidden" : "";
});

</script>
