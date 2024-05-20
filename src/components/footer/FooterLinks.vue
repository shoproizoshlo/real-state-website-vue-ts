<template>
  <div v-for="section in sections" :key="section.title">
    <h3 class="footer__title">{{ section.title }}</h3>
    <ul v-if="section.links" class="footer__links">
      <li v-for="link in section.links" :key="link.text">
        <a :href="link.href" class="footer__link">{{ link.text }}</a>
      </li>
    </ul>
    <ul v-if="section.socialLinks" class="footer__social">
      <li v-for="socialLink in section.socialLinks" :key="socialLink.href">
        <a :href="socialLink.href" target="_blank" class="footer__social-link">
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
.footer__description,
.footer__link {
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
}
/* grid */
.footer__content,
.footer__links {
  display: grid;
}
.footer__title {
  font-size: var(--h3-font-size);
  margin-bottom: 1rem;
}
/* gap-y-2 */
.footer__links {
  row-gap: 0.5rem;
}
/*  */
.footer__link {
  color: var(--text-color);
  transition: 0.3s;
}
.footer__link:hover {
  color: var(--title-color);
}
/* flex gap-x-4 */
.footer__social {
  display: flex;
  column-gap: 1rem;
}
/* text-xl text-text-color */
.footer__social-link {
  font-size: 1.25rem;
  color: var(--text-color);

  transition: 0.3s;
}
/* hover:text-title-color */
.footer__social-link:hover {
  color: var(--title-color);
}

@media screen and (min-width: 1023px) {
  .footer__title {
    margin-bottom: 1.5rem;
  }
  .footer__links {
    row-gap: 1rem;
  }
}
</style>
