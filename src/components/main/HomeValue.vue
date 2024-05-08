<template>
  <div>
    <h1 class="home__value-number">{{ number }} <span>+</span></h1>
    <span class="home__value-description">
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
