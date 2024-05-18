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

<style scoped></style>
