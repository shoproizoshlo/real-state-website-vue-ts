<template>
  <!--==================== HEADER ====================-->
  <HeaderComponent />

  <!--==================== MAIN ====================-->
  <MainComponent />

  <!--==================== FOOTER ====================-->
  <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/main/HeaderComponent.vue";
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
