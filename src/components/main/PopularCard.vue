<template>
  <article
    class="my-0 mx-auto pt-2 lg:pt-3 pb-6 px-2 lg:px-3 lg:pl-8 bg-container-color dark:bg-container-color-dark rounded-2xl popular__card swiper-slide"
  >
    <img
      :src="url"
      alt="popular projet"
      class="mb-4 rounded-2xl popular__img"
    />

    <div class="py-0 pl-4 lg:pl-3 pr-2 lg:py-0 lg:pr-1 popular__data">
      <h2
        class="mb-1 text-h2-font-size text-text-color dark:text-text-color-dark popular__price"
      >
        <span class="text-second-color dark:text-second-color-dark">$</span
        >{{ price }}
      </h2>

      <h3 class="text-h3-font-size mb-3 popular__title">{{ title }}</h3>
      <p class="text-small-font-size popular__description">
        {{ description }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.popular__card {
  width: 290px;
  transition: 0.4s;
}
.popular__card:hover {
  box-shadow: 0 12px 16px hsla(228, 66%, 45%, 0.1);
}

@media screen and (max-width: 320px) {
  .popular__card {
    width: 230px;
    padding: 0.5rem 0.5rem 0.75rem;
  }
}
</style>
