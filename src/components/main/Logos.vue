<template>
  <section class="logos section">
    <div
      class="pt-8 grid-cols-2 gap-y-12 gap-x-8 justify-items-center wrapper grid"
    >
      <!-- <LogosImg url="/src/assets/img/logo1.png" />
      <LogosImg url="/src/assets/img/logo2.png" />
      <LogosImg url="/src/assets/img/logo3.png" />
      <LogosImg url="/src/assets/img/logo4.png" /> -->
      <LogosImg
        v-for="(logo, index) in logosUrl"
        :key="index"
        :url="logo.url"
      />
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import LogosImg from "./LogosImg.vue";

export default {
  components: { LogosImg },
  setup() {
    const logosUrl = ref([
      {
        url: "/src/assets/img/logo1.png",
      },
      {
        url: "/src/assets/img/logo2.png",
      },
      {
        url: "/src/assets/img/logo3.png",
      },
      {
        url: "/src/assets/img/logo4.png",
      },
    ]);

    return { logosUrl };
  },
};
</script>
<style scoped></style>
