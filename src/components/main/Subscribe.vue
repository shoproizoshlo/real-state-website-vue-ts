<template>
  <section class="subscribe py-10 p-0 section">
    <div
      class="py-12 lg:pt-16 pb-16 px-8 md:px-52 lg:px-40 bg-first-color dark:bg-container-color-dark text-center subscribe__container wrapper"
    >
      <h1
        class="mb-4 lg:mb-6 text-h2-font-size lg:text-4xl text-white subscribe__title"
      >
        Get Started with Holux
      </h1>
      <p
        class="mb-8 lg:px-32 lg:py-0 text-small-font-size lg:text-normal-font-size-large text-[#D8E0FD] dark:text-text-color-dark subscribe__description"
      >
        Subscribe and find super attractive price quotes from us, Find your
        residence soon
      </p>
      <a href="#" class="button subscribe__button">Get Started</a>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.subscribe__container {
  border-radius: 1.25rem;
  border: 6px solid;
}
.subscribe__container {
  @apply border-first-color-light dark:border-border-color-dark;
}
.subscribe__description {
  /* color: hsl(228, 90%, 92%); */
}
.subscribe__button {
  background: var(--first-color-light);
  font-size: var(--small-font-size);

  border: 2px solid #fff;
}
.subscribe__button:hover {
  @apply bg-first-color dark:bg-first-color-dark;
}

@media screen and (max-width: 320px) {
  .subscribe__container {
    padding: 2rem 1rem;
  }
}

@media screen and (min-width: 1023px) {
  .subscribe__container {
    border-radius: 2rem;
    border: 12px solid var(--first-color-light);
  }
  .subscribe__button {
    font-size: var(--normal-font-size);
  }
}
</style>
