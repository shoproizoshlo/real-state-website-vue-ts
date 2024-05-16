<template>
  <div
    class="bg--body-color rounded-lg py-4 px-3 value__accordion-item"
    :class="{ 'accordion-open': isOpen }"
  >
    <header
      class="flex items-center cursor-pointer value__accordion-header"
      @click="toggleAccordion"
    >
      <i
        class="bx me-3 p-1 bg-first-color-lighten rounded text-lg text-first-color value__accordion-icon"
        :class="icon"
      ></i>
      <h3 class="text-small-font-size">{{ title }}</h3>
      <div
        class="ms-auto p-1 inline-flex bg-first-color-lighten text-lg text-first-color rounded-sm value__accordion-arrow"
      >
        <i class="bx bxs-down-arrow" :class="{ 'bx-rotate-180': isOpen }"></i>
      </div>
    </header>
    <div
      class="value__accordion-content"
      :style="{ height: isOpen ? '120px' : '0' }"
    >
      <p class="text-smaller-font-size pt-5 pe-9 pb-0 ps-11">
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
    isOpen: {
      type: Boolean,
      required: true,
    },
    toggleAccordion: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
.value__accordion-item {
  border: 2px solid var(--border-color);
}
.value__accordion-icon {
  transition: 0.3s;
}
.value__accordion-arrow {
  transition: 0.3s;
}
.value__accordion-arrow i {
  transition: 0.4s;
}
.value__accordion-content {
  overflow: hidden;
  transition: all 0.25s ease;
}

/* Rotate icon and add shadows */
.accordion-open {
  box-shadow: 0 12px 32px hsla(228, 66%, 45%, 0.1);
}
.accordion-open .value__accordion-icon {
  box-shadow: 0 4px 4px hsla(228, 66%, 45%, 0.1);
}
.accordion-open .value__accordion-arrow {
  box-shadow: 0 2px 4px hsla(228, 66%, 45%, 0.1);
}
.accordion-open .value__accordion-arrow i {
  transform: rotate(-180deg);
}
</style>
