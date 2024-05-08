<template>
  <section class="logos section">
    <div
      class="pt-8 grid-cols-2 gap-y-12 gap-x-8 justify-items-center wrapper grid"
    >
      <LogosImg url="/src/assets/img/logo1.png" />
      <LogosImg url="/src/assets/img/logo2.png" />
      <LogosImg url="/src/assets/img/logo3.png" />
      <LogosImg url="/src/assets/img/logo4.png" />
    </div>
  </section>
</template>

<script>
import LogosImg from "./LogosImg.vue";
export default {
  components: { LogosImg },
};
</script>

<style scoped></style>
