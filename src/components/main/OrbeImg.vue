<template>
  <div
    class="relative flex justify-center value__images"
    :class="contact ? 'value__images-order' : ''"
  >
    <div class="value__orbe"></div>
    <div class="value__img">
      <img :src="url" alt="value" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    contact: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.value__orbe {
  width: 266px;
  height: 316px;
  border-radius: 135px 135px 16px 16px;
}
.value__orbe {
  @apply bg-[#F6F6F9] dark:bg-container-color-dark;
}
.value__img {
  width: 250px;
  height: 300px;
  border-radius: 125px 125px 12px 12px;
  box-shadow: 0 16px 32px hsla(228, 66%, 25%, 0.25);
  position: absolute;
  overflow: hidden;
  inset: 0;
  margin: auto;
}
.value__img {
  @apply dark:shadow-none;
}
@media screen and (max-width: 320px) {
  .value__img {
    width: 220px;
    height: 260px;
  }
  .value__orbe {
    width: 236px;
    height: 280px;
  }
}
@media screen and (min-width: 767px) {
  .value__images-order {
    order: 1;
  }
}
@media screen and (min-width: 1023px) {
  .value__orbe {
    width: 501px;
    height: 641px;
    border-radius: 258px 258px 16px 16px;
  }
  .value__img {
    width: 461px;
    height: 601px;
    border-radius: 238px 238px 12px 12px;
  }
  .value__img img {
    max-width: inherit;
    width: 490px;
  }
}
</style>
