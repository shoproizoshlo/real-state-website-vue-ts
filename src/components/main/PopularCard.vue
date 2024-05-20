<template>
  <article
    class="my-0 mx-auto pt-2 pb-6 px-2 bg-container-color rounded-2xl popular__card swiper-slide"
  >
    <img :src="url" alt="popular projet" class="mb-4 rounded-2xl" />

    <div class="py-0 ps-4 pe-2">
      <h2 class="mb-1 text-h2-font-size text-text-color">
        <span class="text-second-color">$</span>{{ price }}
      </h2>

      <h3 class="text-h3-font-size mb-3">{{ title }}</h3>
      <p class="text-small-font-size">
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
@media screen and (min-width: 1023px) {
  .popular__card {
    width: 320px;
    padding: 0.75rem 0.75rem 2rem;
  }
}
</style>
