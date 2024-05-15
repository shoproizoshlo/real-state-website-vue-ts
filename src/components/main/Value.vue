<template>
  <section class="value section" id="value">
    <div class="gap-y-12 wrapper grid">
      <div class="relative flex justify-center">
        <div class="value__orbe"></div>
        <div class="m-auto absolute overflow-hidden inset-0 value__img">
          <img src="/src/assets/img/value.jpg" alt="value" />
        </div>
      </div>
      <div class="value__content">
        <div class="value__data">
          <span class="section__subtitle">Our Value</span>
          <h2 class="section__title">Value We Give To You<span>.</span></h2>
          <p class="text-small-font-size mb-8">
            We always ready to help by providing the best service for you. We
            believe a good place to live can make your life better.
          </p>
        </div>
        <div class="grid gap-y-6">
          <AccordionItem
            v-for="(item, index) in accordionItem"
            :key="index"
            :icon="item.icon"
            :title="item.title"
            :description="item.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import AccordionItem from "./AccordionItem.vue";

export default {
  components: { AccordionItem },
  setup() {
    const accordionItem = ref([
      {
        icon: "bxs-shield-x",
        title: "Best interest rates on the market",
        description:
          "Price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.",
      },
      {
        icon: "bxs-x-square",
        title: "Prevent unstable prices",
        description:
          "Price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.",
      },
      {
        icon: "bxs-bar-chart-square",
        title: "Best prices on the market",
        description:
          "Price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.",
      },
      {
        icon: "bxs-check-square",
        title: "Security of your data",
        description:
          "Price we provides is the best for you, we guarantee no price changes on your property due to various unexpected costs that may come.",
      },
    ]);

    return { accordionItem };
  },
};
</script>

<style scoped>
.value__orbe {
  width: 266px;
  height: 316px;
  background-color: hsl(228, 24%, 97%);
  border-radius: 135px 135px 16px 16px;
}
.value__img {
  width: 250px;
  height: 300px;
  border-radius: 125px 125px 12px 12px;
  box-shadow: 0 16px 32px hsla(228, 66%, 25%, 0.25);
}
</style>
