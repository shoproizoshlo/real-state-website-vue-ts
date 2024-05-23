<template>
  <div>
    <h1
      class="text-white text-h1-font-size lg:text-h1-font-size-large font-font-medium home__value-number"
    >
      {{ number }}
      <span class="text-second-color dark:text-second-color-dark">+</span>
    </h1>
    <span class="flex text-text-color-light home__value-description">
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

<style scoped></style>
