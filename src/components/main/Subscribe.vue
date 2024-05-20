<template>
  <section class="subscribe section">
    <div class="subscribe__container wrapper">
      <h1 class="subscribe__title">Get Started with Holux</h1>
      <p class="subscribe__description">
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
.subscribe {
  padding: 2.5rem 0;
}
/* py-12 px-8 bg-first-color text-center */
.subscribe__container {
  background-color: var(--first-color);
  padding: 3rem 2rem;
  text-align: center;

  border-radius: 1.25rem;
  border: 6px solid var(--first-color-light);
}
.subscribe__title {
  font-size: var(--h2-font-size);
  color: #fff;
  margin-bottom: 1rem;
}
/* mb-8 text-small-font-size */
.subscribe__description {
  font-size: var(--small-font-size);
  margin-bottom: 2rem;

  color: hsl(228, 90%, 92%);
}
/* bg-first-color-light text-small-font-size */
.subscribe__button {
  background: var(--first-color-light);
  font-size: var(--small-font-size);

  border: 2px solid #fff;
}
/* hover:bg-first-color */
.subscribe__button:hover {
  background-color: var(--first-color);
}

@media screen and (max-width: 320px) {
  .subscribe__container {
    padding: 2rem 1rem;
  }
}

@media screen and (min-width: 767px) {
  .subscribe__container {
    padding: 3rem 13rem;
  }
}

@media screen and (min-width: 1023px) {
  .subscribe__container {
    padding: 4rem 10rem 4.5rem;
    border-radius: 2rem;
    border: 12px solid var(--first-color-light);
  }
  .subscribe__title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  .subscribe__description {
    font-size: var(--normal-font-size);
    padding: 0 8rem;
  }
  .subscribe__button {
    font-size: var(--normal-font-size);
  }
}
</style>
