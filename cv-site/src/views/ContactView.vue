<template>
  <article class="page stack">
    <header class="stack">
      <h1 class="t-h1">Kontakt</h1>
      <p class="muted">
        Skicka ett meddelande så återkommer jag.
      </p>
    </header>

    <section v-if="submitted" class="card stack" aria-live="polite">
      <h2 class="t-h2">Tack!</h2>
      <p>
        Ditt meddelande är skickat. Jag återkommer så snart jag kan.
      </p>

      <div class="row">
        <button class="btn btn--primary" type="button" @click="resetForm">
          Skicka ett nytt meddelande
        </button>
        <RouterLink class="btn btn--ghost" to="/">
          Till startsidan
        </RouterLink>
      </div>
    </section>

    <form
      v-else
      ref="formEl"
      class="form"
      aria-labelledby="contact-title"
      @submit.prevent="onSubmit"
      novalidate
    >
      <h2 id="contact-title" class="sr-only">Kontaktformulär</h2>

      <div class="field">
        <label for="name">Namn</label>
        <input
          id="name"
          v-model.trim="form.name"
          name="name"
          class="input"
          type="text"
          autocomplete="name"
          required
        />
      </div>

      <div class="field">
        <label for="email">E-post</label>
        <input
          id="email"
          v-model.trim="form.email"
          name="email"
          class="input"
          type="email"
          autocomplete="email"
          required
        />
      </div>

      <div class="field">
        <label for="subject">Ämne</label>
        <input
          id="subject"
          v-model.trim="form.subject"
          name="subject"
          class="input"
          type="text"
          autocomplete="off"
        />
      </div>

      <div class="field">
        <label for="message">Meddelande</label>
        <textarea
          id="message"
          v-model.trim="form.message"
          name="message"
          class="input"
          rows="6"
          required
        ></textarea>
      </div>

      <div class="row">
        <button class="btn btn--primary" type="submit">Skicka</button>
        <RouterLink class="btn btn--ghost" to="/">Till startsidan</RouterLink>
      </div>

      <p class="muted meta">
        Genom att skicka formuläret godkänner du att jag hanterar dina uppgifter för att kunna svara.
      </p>
    </form>
  </article>
</template>

<script setup>
import { ref, reactive, nextTick } from "vue";

const submitted = ref(false);
const formEl = ref(null);

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

function onSubmit() {
  // Använd browserns inbyggda validering (required, type="email")
  if (!formEl.value?.checkValidity()) {
    formEl.value?.reportValidity();
    return;
  }

  // Här hade man normalt skickat till API.
  // I skolprojektet räcker det att simulera skickat.
  submitted.value = true;

  // (Valfritt) Logga i dev för att se payloaden:
  // console.log({ ...form });
}

async function resetForm() {
  form.name = "";
  form.email = "";
  form.subject = "";
  form.message = "";
  submitted.value = false;

  // Fokus tillbaka till första fältet
  await nextTick();
  const first = formEl.value?.querySelector("#name");
  first?.focus();
}
</script>
