<template>
  <!--==================== MAIN ====================-->
  <MainComponent />

  <!--==================== FOOTER ====================-->
  <FooterComponent />
</template>

<script>
import MainComponent from "./components/main/MainComponent.vue";
import FooterComponent from "./components/footer/FooterComponent.vue";

export default {
  components: {
    MainComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss" scoped></style>
