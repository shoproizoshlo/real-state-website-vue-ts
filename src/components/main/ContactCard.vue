<template>
  <div class="contact__card-box">
    <div class="contact__card-info">
      <i :class="`bx ${icon}`"></i>

      <div>
        <h3 class="contact__card-title">{{ title }}</h3>
        <p class="contact__card-description">{{ description }}</p>
      </div>
    </div>
    <button class="button contact__card-button">
      {{ button }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    button: { type: String, required: true },
  },
};
</script>

<style scoped>
.contact__card-box {
  padding: 1.25rem 0.75rem;
  background-color: var(--body-color);
  border-radius: 0.5rem;

  transition: 0.3s;
  border: 2px solid var(--border-color);
}
/* mb-5 flex items-start gap-x-3 */
.contact__card-info {
  display: flex;
  align-items: flex-start;
  column-gap: 0.75rem;
  margin-bottom: 1.25rem;
}
/* p-2 bg-first-color-lighten rounded-md text-xl text-first-color */
.contact__card i {
  padding: 6px;
  background-color: var(--first-color-lighten);
  border-radius: 6px;
  font-size: 1.2rem;
  color: var(--first-color);
}
/* text-normal-font-size */
.contact__card-title {
  font-size: var(--normal-font-size);
}
/* text-smaller-font-size */
.contact__card-description {
  font-size: var(--smaller-font-size);
}
/* py-4 px-0 text-small-font-size w-full rounded bg-first-color-lighten text-first-color font-font-semi-bold shadow-none */
.contact__card-button {
  font-size: var(--small-font-size);
  padding: 14px 0;
  width: 100%;
  border-radius: 0.25rem;
  background: var(--first-color-lighten);
  color: var(--first-color);
  font-weight: var(--font-semi-bold);
  box-shadow: none;
}
/* hover:bg-first-color hover:text-white */
.contact__card-button:hover {
  background-color: var(--first-color);
  color: #fff;
}
/*  */
.contact__card-box:hover {
  box-shadow: 0 8px 24px hsla(228, 66%, 45%, 0.1);
}

@media screen and (min-width: 1023px) {
  .contact__card-box {
    padding: 28px 1.5rem 1.5rem;
  }

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
