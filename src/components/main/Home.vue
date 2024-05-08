<template>
  <section class="home section" id="home">
    <div class="pt-16 gap-y-14 wrapper grid">
      <div class="home__data">
        <h1 class="text-white mb-5 text-biggest-font-size home__title">
          Discover <br />
          Most Suitable <br />
          Property
        </h1>
        <p class="text-text-color-light mb-8">
          Find a variety of properties that suit you very easily, forget all
          difficulties in finding a residence for you
        </p>

        <form
          action=""
          class="mb-4 py-1 ps-1 pe-3 bg-body-color flex items-center rounded-xl border-2 border-solid border-text-color-light"
        >
          <i class="text-xl text-first-color bx bxs-map"></i>
          <input
            type="search"
            placeholder="Search by location..."
            class="my-0 mx-2 w-11/12 bg-body-color text-text-color home__search-input"
          />
          <button class="button">Search</button>
        </form>

        <div class="flex gap-x-10">
          <HomeValue
            number="9K"
            description1="Premium"
            description2="Product"
          />
          <HomeValue number="2K" description1="Happy" description2="Customer" />
          <HomeValue
            number="28K"
            description1="Awards"
            description2="Winning"
          />
        </div>
      </div>

      <div class="home__images">
        <div class="home__orbe"></div>
        <div class="home__img">
          <img src="/src/assets/img/home.jpg" alt="home" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HomeValue from "./HomeValue.vue";
export default {
  components: {
    HomeValue,
  },
};
</script>

<style scoped>
.home {
  background: linear-gradient(170deg, hsl(0, 0%, 22%) 0%, hsl(0, 0%, 6%) 30%);
  padding-bottom: 0;
}
.home__title {
  line-height: 120%;
}
.home__search-input::placeholder {
  color: var(--text-color-light);
}
</style>
