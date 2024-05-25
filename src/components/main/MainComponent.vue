<template>
  <main class="main">
    <!--==================== HOME ====================-->
    <Home :sr="sr" :showAlert="showAlert" />

    <!--==================== LOGOS ====================-->
    <Logos :sr="sr" />

    <!--==================== POPULAR ====================-->
    <Popular :sr="sr" />

    <!--==================== VALUE ====================-->
    <Value :sr="sr" />

    <!--==================== CONTACT ====================-->
    <Contact :sr="sr" :showAlert="showAlert" />

    <!--==================== SUBSCRIBE ====================-->
    <Subscribe :sr="sr" :showAlert="showAlert" />
  </main>
</template>

<script lang="ts">
import { PropType } from "vue";
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
      required: true,
    },
    showAlert: {
      type: Function as PropType<(payload: MouseEvent) => void>,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
