<template>
  <div class="app">
    <header class="site-header">
      <SiteHeader />
    </header>

    <main class="site-main">
      <RouterView />
    </main>

    <footer class="site-footer">
      <nav class="footer-nav" aria-label="Sidfot">
        <a class="footer-link" href="https://www.linkedin.com/in/antonsson/?locale=sv_SE" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <RouterLink class="footer-link" to="/kontakt">Kontakt</RouterLink>
        <RouterLink class="footer-link" to="/om">Om</RouterLink>
      </nav>

      <p class="footer-meta muted">© 2025 Johan Daniel Antonsson</p>
    </footer>
  </div>
</template>

<script setup>
import SiteHeader from "./components/SiteHeader.vue";
</script>

