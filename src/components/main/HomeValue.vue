<template>
  <div>
    <h1 class="text-white text-h1-font-size font-font-medium">
      {{ number }} <span class="text-second-color">+</span>
    </h1>
    <span class="flex text-text-color-light">
      {{ description1 }} <br />
      {{ description2 }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    number: { type: String, required: true },
    description1: { type: String, required: true },
    description2: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped></style>
