<template>
  <li class="nav__item">
    <a
      :href="`#${id}`"
      class="text-text-color dark:text-text-color-dark lg:text-text-color-light flex p-2 rounded-full nav__link"
      :class="{ 'active-link': active }"
    >
      <i class="" :class="`bx ${icon} text-xl inline`"></i>
      <span class="hidden lg:inline">{{ name }}</span>
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
    active: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Active link */
.active-link {
  background: linear-gradient(101deg, hsl(228, 66%, 53%), hsl(228, 66%, 47%));
  box-shadow: 0 4px 8px hsla(228, 66%, 45%, 0.25);
}
.active-link {
  @apply text-body-color dark:text-body-color-dark;
}

@media screen and (min-width: 1023px) {
  .nav__link i {
    display: none;
  }
  .active-link {
    background: none;
    box-shadow: none;
    font-weight: var(--font-medium);
  }
  .active-link {
    @apply text-first-color dark:text-first-color-dark;
  }
}
</style>
