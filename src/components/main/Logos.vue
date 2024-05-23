<template>
  <section class="logos section">
    <div
      class="pt-8 grid-cols-2 gap-y-12 gap-x-8 justify-items-center md:justify-center logos__container wrapper grid"
    >
      <LogosImg
        :sr="sr"
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
  props: {
    sr: {
      type: Object,
      required: true,
    },
  },
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
<style scoped>
@media screen and (max-width: 320px) {
  .logos__container {
    gap: 2rem 1rem;
  }
}

@media screen and (min-width: 767px) {
  .logos__container {
    grid-template-columns: repeat(4, max-content);
  }
}
</style>
