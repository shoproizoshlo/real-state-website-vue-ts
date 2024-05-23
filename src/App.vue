<template>
  <!--==================== HEADER ====================-->
  <HeaderComponent :sr="sr" />

  <!--==================== MAIN ====================-->
  <MainComponent :sr="sr" />

  <!--==================== FOOTER ====================-->
  <FooterComponent :sr="sr" />

  <!--========== SCROLL UP ==========-->
  <a
    href="#"
    class="p-1 inline-flex fixed right-4 bg-container-color dark:bg-container-color-dark rounded text-title-color hover:text-first-color dark:text-title-color-dark dark:hover:text-first-color-dark text-xl z-50 scrollup"
    :class="{ 'show-scroll': showScroll }"
    id="scroll-up"
  >
    <i class="bx bx-chevrons-up"></i>
  </a>
</template>

<script>
// =============== BOXICONS ===============
import "boxicons/css/boxicons.min.css";
import ScrollReveal from "scrollreveal";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import styles bundle
import "swiper/css/bundle";

import { ref, onMounted, onUnmounted } from "vue";

import HeaderComponent from "./components/header/HeaderComponent.vue";
import MainComponent from "./components/main/MainComponent.vue";
import FooterComponent from "./components/footer/FooterComponent.vue";

// =============== SWIPER ===============
// core version + navigation, pagination modules:

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});

export default {
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
  setup() {
    /*=============== SHOW SCROLL UP ===============*/
    const showScroll = ref(false);

    const scrollUp = () => {
      showScroll.value = window.scrollY >= 350;
    };

    onMounted(() => {
      window.addEventListener("scroll", scrollUp);
      window.addEventListener("scroll", scrollActive);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", scrollUp);
      window.removeEventListener("scroll", scrollActive);
    });

    // =============== SCROLL REVEAL ANIMATION ===============
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
      // reset: true
    });

    return { showScroll, sr };
  },
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
    window.addEventListener("scroll", scrollActive);
  });
};
</script>

<style scoped>
/*=============== SCROLL UP ===============*/
.scrollup {
  bottom: -36%;
  box-shadow: 0 8px 12px hsla(228, 66%, 45%, 0.1);
  transition: 0.3s;
  animation: 0.4s hideScroll;
}
.scrollup {
  @apply dark:shadow-none;
}
.scrollup:hover {
  transform: translateY(-0.25rem);
}
/* Show Scroll Up*/
.show-scroll {
  bottom: 8rem;
  animation: 0.7s showScroll;
}

@keyframes showScroll {
  0% {
    bottom: 0;
  }
  100% {
    bottom: 8rem;
  }
}
@keyframes hideScroll {
  0% {
    bottom: 8rem;
  }
  100% {
    bottom: -1rem;
  }
}
</style>
