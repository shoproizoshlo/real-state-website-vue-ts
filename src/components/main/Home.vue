<template>
  <section class="home section" id="home">
    <div class="pt-16 gap-y-14 home__container wrapper grid">
      <div class="md:pb-8 lg:pb-16">
        <h1
          class="mb-5 lg:mb-8 text-biggest-font-size lg:text-biggest-font-size-large text-white home__title"
        >
          Discover <br />
          Most Suitable <br />
          Property
        </h1>
        <p class="text-text-color-light mb-8 lg:mb-12 home__description">
          Find a variety of properties that suit you very easily, forget all
          difficulties in finding a residence for you
        </p>

        <form
          action=""
          class="mb-8 lg:mb-12 py-1 ps-1 pe-3 bg-body-color dark:bg-body-color-dark flex items-center rounded-xl border-2 border-solid border-text-color-light dark:border-border-color-dark home__search"
        >
          <i
            class="text-xl text-first-color dark:text-first-color-dark bx bxs-map"
          ></i>
          <input
            type="search"
            placeholder="Search by location..."
            class="my-0 mx-2 w-11/12 bg-body-color dark:bg-body-color-dark text-text-color dark:text-text-color-dark dark:shadow-none home__search-input"
          />
          <button class="button">Search</button>
        </form>

        <div class="flex gap-x-10 lg:gap-x-14 home__value">
          <HomeValue
            v-for="(value, index) in values"
            :key="index"
            :number="value.number"
            :description1="value.description1"
            :description2="value.description2"
          />
        </div>
      </div>

      <div class="relative flex justify-center home__images">
        <div class="md:self-end home__orbe"></div>
        <div
          class="absolute overflow-hidden inline-flex items-end -bottom-6 lg:-bottom-10 home__img"
        >
          <img src="/src/assets/img/home.jpg" alt="home" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import HomeValue from "./HomeValue.vue";
import ScrollReveal from "scrollreveal";

export default {
  components: {
    HomeValue,
  },
  props: {
    sr: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const values = ref([
      { number: "9K", description1: "Premium", description2: "Product" },
      { number: "2K", description1: "Happy", description2: "Customer" },
      { number: "28K", description1: "Awards", description2: "Winning" },
    ]);

    onMounted(() => {
      props.sr.reveal(".home__title");
      props.sr.reveal(".home__description", { delay: 500 });
      props.sr.reveal(".home__search", { delay: 600 });
      props.sr.reveal(".home__value", { delay: 700 });
      props.sr.reveal(".home__images", { delay: 800, origin: "bottom" });
    });

    return { values };
  },
};
</script>

<style scoped>
.home {
  padding-bottom: 0;
  background: linear-gradient(170deg, hsl(0, 0%, 22%) 0%, hsl(0, 0%, 6%) 30%);
}

.home__title {
  line-height: 120%;
}
.home__search {
  padding: 0.35rem 0.35rem 0.35rem 0.75rem;
}
.home__search-input::placeholder {
  color: var(--text-color-light);
}

.home__orbe {
  width: 265px;
  height: 284px;
  background: linear-gradient(
    100deg,
    hsl(0, 0%, 16%) 93%,
    hsl(0, 0%, 67%) 100%
  );
  border-radius: 135px 135px 0 0;
}

.home__img {
  box-shadow: 0 16px 32px hsla(228, 66%, 25%, 0.25);
  width: 250px;
  height: 300px;
  border-radius: 125px 125px 12px 12px;
}
@media screen and (max-width: 320px) {
  .home__value {
    column-gap: 1rem;
    font-size: 14px;
  }
  .home__img {
    width: 220px;
    height: 280px;
  }
  .home__orbe {
    width: 240px;
    height: 264px;
  }
}
@media screen and (max-width: 350px) {
  .home {
    padding-bottom: 0;
  }
}
@media screen and (min-width: 576px) {
  .home__search {
    width: 412px;
  }
}
@media screen and (min-width: 767px) {
  .home__container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 1023px) {
  .home__orbe {
    width: 504px;
    height: 611px;
    border-radius: 256px 256px 0 0;
  }

  .home__img {
    width: 472px;
    height: 634px;
    border-radius: 236px 236px 12px 12px;
  }
}
@media screen and (min-width: 1040px) {
  .home__container {
    column-gap: 4rem;
  }
}
</style>
