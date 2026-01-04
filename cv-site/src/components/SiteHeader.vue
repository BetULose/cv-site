<template>
  <div class="site-header__inner">
    <RouterLink class="brand" to="/" aria-label="Till startsidan">Daniel</RouterLink>
    <SiteNav />
  </div>
</template>

<script setup>
import SiteNav from "./SiteNav.vue";
</script>
