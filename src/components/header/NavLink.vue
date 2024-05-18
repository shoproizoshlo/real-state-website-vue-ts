<template>
  <li class="nav__item">
    <a
      :href="`#${id}`"
      class="text-text-color lg:text-text-light flex p-2 rounded-full nav__link"
      :class="{ 'active-link': active }"
    >
      <i :class="`lg:hidden text-xl bx ${icon}`"></i>
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
  color: #fff;
  box-shadow: 0 4px 8px hsla(228, 66%, 45%, 0.25);
}

@media screen and (max-width: 1023px) {
  .nav__link {
    color: var(--text-color);
    display: flex;
    padding: 0.5rem;
    border-radius: 50%;
  }

  .nav__link i {
    font-size: 1.22rem;
  }
  .nav__link span {
    display: none;
  }
}
</style>
