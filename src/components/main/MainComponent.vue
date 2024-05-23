<template>
  <main class="main">
    <!--==================== HOME ====================-->
    <Home :sr="sr" />

    <!--==================== LOGOS ====================-->
    <Logos />

    <!--==================== POPULAR ====================-->
    <Popular />

    <!--==================== VALUE ====================-->
    <Value />

    <!--==================== CONTACT ====================-->
    <Contact />

    <!--==================== SUBSCRIBE ====================-->
    <Subscribe />
  </main>
</template>

<script>
import Home from "./Home.vue";
import Logos from "./Logos.vue";
import Popular from "./Popular.vue";
import Value from "./Value.vue";
import Contact from "./Contact.vue";
import Subscribe from "./Subscribe.vue";

export default {
  components: {
    Home,
    Logos,
    Popular,
    Value,
    Contact,
    Subscribe,
  },
  props: {
    sr: {
      type: Object,
      required: true, // исправлено с 'requested' на 'required'
    },
  },
};
</script>

<style lang="scss" scoped></style>
