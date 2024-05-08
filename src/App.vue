<template>
  <!--==================== HEADER ====================-->
  <HeaderComponent />

  <!--==================== MAIN ====================-->
  <MainComponent />

  <!--==================== FOOTER ====================-->
  <FooterComponent />

  <!--========== SCROLL UP ==========-->
  <a href="#" class="scrollup" id="scroll-up">
    <i class="bx bx-chevrons-up"></i>
  </a>
</template>

<script>
// =============== BOXICONS ===============
import "boxicons/css/boxicons.min.css";

import HeaderComponent from "./components/header/HeaderComponent.vue";
import MainComponent from "./components/main/MainComponent.vue";
import FooterComponent from "./components/footer/FooterComponent.vue";

// =============== SWIPER ===============
// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import styles bundle
import "swiper/css/bundle";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});

// =============== SCROLLREVEAL ===============
import ScrollReveal from "scrollreveal";

export default {
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
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
  });
};
window.addEventListener("scroll", scrollActive);
</script>

<style scoped>
.active-link {
  background: linear-gradient(101deg, hsl(228, 66%, 53%), hsl(228, 66%, 47%));
  color: #fff;
  box-shadow: 0 4px 8px hsla(228, 66%, 45%, 0.25);
}
</style>
