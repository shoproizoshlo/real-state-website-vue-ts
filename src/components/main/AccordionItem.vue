<template>
  <div class="value__accordion-item">
    <header class="value__accordion-header">
      <i class="bx value__accordion-icon" :class="icon"></i>
      <h3 class="value__accordion-title">{{ title }}</h3>
      <div class="value__accordion-arrow">
        <i class="bx bxs-down-arrow"></i>
      </div>
    </header>
    <div class="value__accordion-content">
      <p class="value__accordion-description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
