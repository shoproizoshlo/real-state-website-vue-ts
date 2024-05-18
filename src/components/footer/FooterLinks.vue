<template>
  <div class="footer__content">
    <div v-for="section in sections" :key="section.title">
      <h3 class="footer__title">{{ section.title }}</h3>
      <ul v-if="section.links" class="footer__links">
        <li v-for="link in section.links" :key="link.text">
          <a :href="link.href" class="footer__link">{{ link.text }}</a>
        </li>
      </ul>
      <ul v-if="section.socialLinks" class="footer__social">
        <li v-for="socialLink in section.socialLinks" :key="socialLink.href">
          <a
            :href="socialLink.href"
            target="_blank"
            class="footer__social-link"
          >
            <i :class="socialLink.icon"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    sections: { type: Array, required: true },
  },
};
</script>

<style scoped>
.footer__content {
  grid-template-columns: repeat(2, max-content);
  gap: 2.5rem 4rem;
}
/* text-h3-font-size mb-4 */
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
/* flex */
.footer__info,
.footer__privacy {
  display: flex;
}
/* mt-20 pb-24 flex-col text-center gap-y-6 */
.footer__info {
  padding-bottom: 6rem;
  margin-top: 5.5rem;
  flex-direction: column;
  text-align: center;
  row-gap: 1.5rem;
}
/* text-smaller-font-size font-font-medium text-text-color */
.footer__copy,
.footer__privacy a {
  font-size: var(--smaller-font-size);
  font-weight: var(--font-medium);
  color: var(--text-color);
}
/* justify-center gap-x-5 */
.footer__privacy {
  justify-content: center;
  column-gap: 1.25rem;
}
</style>
