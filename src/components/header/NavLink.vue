<template>
  <li class="nav__item">
    <a :href="`#${id}`" class="text-text-color flex p-2 rounded-full nav__link">
      <i :class="`text-xl bx ${icon}`"></i>
      <span class="hidden">{{ name }}</span>
    </a>
  </li>
</template>

<script lang="ts">
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
