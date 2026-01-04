<template>
  <article class="page stack">
    <header class="stack">
      <h1 class="t-h1">Kontakt</h1>
      <p class="muted">
        Skicka ett meddelande så återkommer jag.
      </p>
    </header>

    <form class="form" aria-labelledby="contact-title">
      <h2 id="contact-title" class="t-h2" style="position:absolute; left:-9999px;">
        Kontaktformulär
      </h2>

      <div class="field">
        <label for="name">Namn</label>
        <input
          id="name"
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

      <p class="muted" style="font-size:14px;">
        Genom att skicka formuläret godkänner du att jag hanterar dina uppgifter för att kunna svara.
      </p>
    </form>
  </article>
</template>
