<template>
  <div v-for="section in sections" :key="section.title">
    <h3 class="text-h3-font-size mb-4 footer__title">{{ section.title }}</h3>
    <ul v-if="section.links" class="grid gap-y-2 footer__links">
      <li v-for="link in section.links" :key="link.text">
        <a
          :href="link.href"
          class="text-small-font-size font-font-medium footer__link"
          >{{ link.text }}</a
        >
      </li>
    </ul>
    <ul v-if="section.socialLinks" class="flex gap-x-4 footer__social">
      <li v-for="socialLink in section.socialLinks" :key="socialLink.href">
        <a
          :href="socialLink.href"
          target="_blank"
          class="text-xl text-text-color hover:text-title-color footer__social-link"
        >
          <i :class="socialLink.icon"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    sections: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.footer__link {
  color: var(--text-color);
  transition: 0.3s;
}
.footer__link:hover {
  color: var(--title-color);
}
.footer__social-link {
  transition: 0.3s;
}
</style>
