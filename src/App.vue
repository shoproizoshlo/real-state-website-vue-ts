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

export default {
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss" scoped></style>
