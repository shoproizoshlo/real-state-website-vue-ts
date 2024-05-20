<template>
  <section class="value section" id="value">
    <div class="value__container wrapper grid">
      <OrbeImg :url="'./src/assets/img/value.jpg'" :contact="false" />
      <div class="value__content">
        <div class="value__data">
          <span class="section__subtitle">Our Value</span>
          <h2 class="section__title">Value We Give To You<span>.</span></h2>
          <p class="section__description">
            We always ready to help by providing the best service for you. We
            believe a good place to live can make your life better.
          </p>
        </div>
        <div class="value__accordion">
          <AccordionItem
            v-for="(item, index) in accordionItems"
            :key="index"
            :icon="item.icon"
            :title="item.title"
            :description="item.description"
            :isOpen="openIndex === index"
            :toggleAccordion="() => toggleAccordion(index)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import AccordionItem from "./AccordionItem.vue";
import OrbeImg from "./OrbeImg.vue";

export default {
  components: { AccordionItem, OrbeImg },
  setup() {
    const openIndex = ref(null);
    const accordionItems = ref([
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

    const toggleAccordion = (index) => {
      openIndex.value = openIndex.value === index ? null : index;
    };

    const contact = ref(false);

    return { accordionItems, openIndex, toggleAccordion, contact };
  },
};
</script>

<style scoped>
.value__container {
  row-gap: 3rem;
}
.value__accordion {
  display: grid;
  row-gap: 1.5rem;
}

@media screen and (max-width: 320px) {
  .value__orbe {
    width: 236px;
    height: 280px;
  }
}
@media screen and (min-width: 767px) {
  .value__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
}
@media screen and (min-width: 1023px) {
  .value__container {
    align-items: flex-start;
    column-gap: 5rem;
  }
}
</style>
