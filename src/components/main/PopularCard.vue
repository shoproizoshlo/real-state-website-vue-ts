<template>
  <article class="popular__card swiper-slide">
    <img :src="url" alt="popular projet" class="popular__img" />

    <div class="popular__data">
      <h2 class="popular__price">
        <span class="text-second-color">$</span>{{ price }}
      </h2>

      <h3 class="popular__title">{{ title }}</h3>
      <p class="popular__description">
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
/* my-0 mx-auto pt-2 pb-6 px-2 bg-container-color rounded-2xl  */
.popular__card {
  margin: 0 auto;
  padding: 0.5rem 0.5rem 1.5rem;
  background-color: var(--container-color);
  border-radius: 1rem;

  width: 290px;
  transition: 0.4s;
}
.popular__card:hover {
  box-shadow: 0 12px 16px hsla(228, 66%, 45%, 0.1);
}
/* mb-4 rounded-2xl */
.popular__img {
  margin-bottom: 1rem;
  border-radius: 1rem;
}
/* py-0 pl-4 lg:pl-3 pr-2 lg:py-0 lg:pr-1 */
.popular__data {
  padding: 0 1rem 0 0.5rem;
}
/* mb-1 text-h2-font-size text-text-color  */
.popular__price {
  font-size: var(--h2-font-size);
  color: var(--text-color);
  margin-bottom: 0.25rem;
}
/* text-second-color */
.popular__price span {
  color: var(--second-color);
}
/* text-h3-font-size mb-3  */
.popular__title {
  font-size: var(--h3-font-size);
  margin-bottom: 0.75rem;
}
/* text-small-font-size  */
.popular__description {
  font-size: var(--small-font-size);
}

@media screen and (max-width: 320px) {
  .popular__card {
    width: 230px;
    padding: 0.5rem 0.5rem 0.75rem;
  }
}

@media screen and (min-width: 1023px) {
  /* lg:pt-3 lg:px-3 lg:pl-8 */
  .popular__card {
    width: 320px;
    padding: 0.75rem 0.75rem 2rem;
  }
  /* lg:py-0 pr-1 pl-3 */
  .popular__data {
    padding: 0 0.25rem 0 0.75rem;
  }
}
</style>
