<template>
  <section class="popular section" id="popular">
    <div class="wrapper">
      <span class="section__subtitle">Best Choice</span>
      <h2 class="section__title">Popular Residences<span>.</span></h2>
      <div class="popular__container swiper" ref="swiperContainer">
        <div class="swiper-wrapper">
          <PopularCard
            v-for="(residence, index) in popularResidences"
            :key="index"
            :url="residence.url"
            :price="residence.price"
            :title="residence.title"
            :description="residence.description"
          />
        </div>

        <div class="swiper-button-next" @click="nextSlide">
          <i class="bx bx-chevron-right"></i>
        </div>
        <div class="swiper-button-prev" @click="prevSlide">
          <i class="bx bx-chevron-left"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import PopularCard from "./PopularCard.vue";
import Swiper from "swiper";

export default {
  components: { PopularCard },
  setup() {
    const popularResidences = ref([
      {
        url: "/src/assets/img/popular1.jpg",
        price: "66,356",
        title: "Garden City Assat",
        description:
          "Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876",
      },
      {
        url: "/src/assets/img/popular2.jpg",
        price: "35,159",
        title: "Gables Luxurious House",
        description:
          "Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876",
      },
      {
        url: "/src/assets/img/popular3.jpg",
        price: "75,043",
        title: "Garden Orchard City",
        description:
          "Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876",
      },
      {
        url: "/src/assets/img/popular4.jpg",
        price: "62,024",
        title: "Luxurious City Garden",
        description:
          "Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876",
      },
      {
        url: "/src/assets/img/popular5.jpg",
        price: "47,043",
        title: "Aliva Private Garden",
        description:
          "Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876",
      },
    ]);

    let swiperPopular;

    onMounted(() => {
      swiperPopular = new Swiper(".popular__container", {
        spaceBetween: 32,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });

    const nextSlide = () => {
      swiperPopular.slideNext();
    };

    const prevSlide = () => {
      swiperPopular.slidePrev();
    };

    return { popularResidences, nextSlide, prevSlide };
  },
};
</script>

<style scoped>
.popular__container {
  padding: 1rem 0 5rem;
}
/* Swiper class */
.swiper-button-prev::after,
.swiper-button-next::after {
  content: "";
}

.swiper-button-next,
.swiper-button-prev {
  top: initial;
  bottom: 0;
  width: initial;
  height: initial;
  /* background-color: var(--container-color); */
  border: 2px solid;
  padding: 6px;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  /* color: var(--first-color); */
}
.swiper-button-next,
.swiper-button-prev {
  @apply text-first-color dark:text-first-color-dark bg-container-color dark:bg-container-color-dark border-text-color-light dark:border-border-color-dark;
}
.swiper-button-prev {
  left: calc(50% - 3rem);
}
.swiper-button-next {
  right: calc(50% - 3rem);
}

@media screen and (min-width: 1023px) {
  .popular__container {
    padding-top: 3rem;
  }
}
</style>
