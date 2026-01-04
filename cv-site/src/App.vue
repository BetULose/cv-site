<template>
  <div class="app">
    <header class="site-header">
      <nav class="site-nav" aria-label="Huvudmeny">
        <RouterLink to="/" class="nav-link">Start</RouterLink>
        <RouterLink to="/cv" class="nav-link">CV</RouterLink>
        <RouterLink to="/projekt" class="nav-link">Projekt</RouterLink>
        <RouterLink to="/kontakt" class="nav-link">Kontakt</RouterLink>
      </nav>
    </header>

    <main id="main" class="site-main">
      <RouterView />
    </main>

    <footer class="site-footer">
      <small>© {{ new Date().getFullYear() }} Ditt Namn</small>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
