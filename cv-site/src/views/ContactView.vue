<template>
  <section class="page">
    <h1>Kontakt</h1>

    <form class="form" @submit.prevent="onSubmit" novalidate>
      <div class="field">
        <label for="name">Namn</label>
        <input id="name" v-model.trim="form.name" type="text" autocomplete="name" required />
      </div>

      <div class="field">
        <label for="email">E-post</label>
        <input id="email" v-model.trim="form.email" type="email" autocomplete="email" required />
      </div>

      <div class="field">
        <label for="message">Meddelande</label>
        <textarea id="message" v-model.trim="form.message" rows="6" required />
      </div>

      <button type="submit">Skicka</button>

      <p v-if="status" class="status" role="status">{{ status }}</p>
    </form>
      </section>
</template>

<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const status = ref("");

function onSubmit() {
  // Första versionen: bara validera enkelt och “fejka” submit.
  if (!form.name || !form.email || !form.message) {
    status.value = "Fyll i alla fält.";
    return;
  }
  
  status.value = "Tack! Jag återkommer så snart jag kan.";
  form.name = "";
  form.email = "";
  form.message = "";
}
</script>