<template>
  <section class="popular section" id="popular">
    <div class="container">
      <span class="section__subtitle">Best Choise</span>
      <h2 class="section__title">Popular Residences<span>.</span></h2>
      <div class="popular__container swiper">
        <div class="swiper-wrapper">
          <PopularCard
            url="/src/assets/img/popular1.jpg"
            price="'66,356'"
            title="'Garden City Assat'"
            description="'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876'"
          />
          <PopularCard
            url="/src/assets/img/popular2.jpg"
            price="'35,159'"
            title="'Gables Luxurious House'"
            description="'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876'"
          />
          <PopularCard
            url="/src/assets/img/popular3.jpg"
            price="'75,043'"
            title="'Garden Orchard City'"
            description="'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876'"
          />
          <PopularCard
            url="/src/assets/img/popular4.jpg"
            price="'62,024'"
            title="'Luxurious City Garden'"
            description="'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876'"
          />
          <PopularCard
            url="/src/assets/img/popular5.jpg"
            price="'47,043'"
            title="'Aliva Private Garden'"
            description="'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876'"
          />
        </div>

        <div class="swiper-button-next">
          <i class="bx bx-chevron-right"></i>
        </div>
        <div class="swiper-button-prev">
          <i class="bx bx-chevron-left"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PopularCard from "./PopularCard.vue";
export default {
  components: { PopularCard },
};
</script>

<style scoped>
.popular__container {
  padding: 1rem 0 5rem;
}
</style>
