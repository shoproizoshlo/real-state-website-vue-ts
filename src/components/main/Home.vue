<template>
  <section class="home section" id="home">
    <div class="home__container wrapper grid">
      <div class="home__data">
        <h1 class="text-white mb-5 text-biggest-font-size home__title">
          Discover <br />
          Most Suitable <br />
          Property
        </h1>
        <p class="text-text-color-light mb-8 home__description">
          Find a variety of properties that suit you very easily, forget all
          difficulties in finding a residence for you
        </p>

        <form
          action=""
          class="mb-8 py-1 ps-1 pe-3 bg-body-color flex items-center rounded-xl border-2 border-solid border-text-color-light home__search"
        >
          <i class="text-xl text-first-color bx bxs-map"></i>
          <input
            type="search"
            placeholder="Search by location..."
            class="my-0 mx-2 w-11/12 bg-body-color text-text-color home__search-input"
          />
          <button class="button">Search</button>
        </form>

        <div class="flex gap-x-10 home__value">
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
        <div class="home__orbe"></div>
        <div
          class="absolute overflow-hidden inline-flex items-end -bottom-6 home__img"
        >
          <img src="/src/assets/img/home.jpg" alt="home" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import HomeValue from "./HomeValue.vue";

export default {
  components: {
    HomeValue,
  },
  setup() {
    const values = ref([
      { number: "9K", description1: "Premium", description2: "Product" },
      { number: "2K", description1: "Happy", description2: "Customer" },
      { number: "28K", description1: "Awards", description2: "Winning" },
    ]);
    return { values };
  },
};
</script>

<style scoped>
.home {
  background: linear-gradient(170deg, hsl(0, 0%, 22%) 0%, hsl(0, 0%, 6%) 30%);
  padding-bottom: 0;
}
.home__container {
  padding-top: 4rem;
  row-gap: 3.5rem;
}
.home__title,
.home__value-number {
  color: #fff;
}
.home__title {
  font-size: var(--biggest-font-size);
  line-height: 120%; /*!!!*/
  margin-bottom: 1.25rem;
}
.home__description {
  color: var(--text-color-light);
  margin-bottom: 2rem;
}
.home__search-input::placeholder {
  color: var(--text-color-light);
}
.home__search {
  margin-bottom: 2rem;
  padding: 0.35rem 0.35rem 0.35rem 0.75rem;
  background-color: var(--body-color);
  display: flex;
  align-items: center;
  border-radius: 0.75rem;
  border: 3px solid var(--text-color-light);
}
/* text-xl text-first-color */
.home__search i {
  font-size: 1.25rem;
  color: var(--first-color);
}
/* my-0 mx-2 w-11/12 bg-body-color text-text-color */
.home__search-input {
  margin: 0 0.5rem;
  width: 90%;
  background-color: var(--body-color);
  color: var(--text-color);
}
.home__search-input::placeholder {
  color: var(--text-color-light);
}
/* flex gap-x-10 */
.home__value {
  display: flex;
  column-gap: 2.5rem;
}
.home__images {
  position: relative;
  display: flex;
  justify-content: center;
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
/* absolute overflow-hidden inline-flex items-end -bottom-6 */
.home__img {
  position: absolute;
  overflow: hidden;
  display: inline-flex;
  align-items: flex-end;
  bottom: -1.5rem;
  box-shadow: 0 16px 32px hsla(228, 66%, 25%, 0.25);
  width: 250px;
  height: 300px;
  border-radius: 125px 125px 12px 12px;
}
@media screen and (max-width: 320px) {
  .home__value {
    column-gap: 1rem;
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
    padding-top: 2rem;
  }
  .home__orbe {
    align-self: flex-end;
  }
  .home__data {
    padding-bottom: 2rem;
  }
}
@media screen and (min-width: 1023px) {
  .home {
    padding-bottom: 0;
  }
  .home__container {
    padding-top: 5rem;
    column-gap: 2rem;
  }
  .home__data {
    padding-bottom: 4rem;
  }
  .home__title {
    margin-bottom: 2rem;
  }
  .home__description,
  .home__search {
    margin-bottom: 3rem;
  }
  .home__value {
    column-gap: 3.5rem;
  }
  .home__orbe {
    width: 504px;
    height: 611px;
    border-radius: 256px 256px 0 0;
  }
  .home__img {
    width: 472px;
    height: 634px;
    border-radius: 236px 236px 12px 12px;
    bottom: -2.5rem;
  }
}
@media screen and (min-width: 1040px) {
  .home__container {
    column-gap: 4rem;
  }
}
</style>
