<template>
  <div v-for="section in sections" :key="section.title">
    <h3 class="mb-4 lg:mb-6 text-h3-font-size footer__title">
      {{ section.title }}
    </h3>
    <ul v-if="section.links" class="grid gap-y-2 lg:gap-y-4 footer__links">
      <li v-for="link in section.links" :key="link.text">
        <a
          :href="link.href"
          class="text-small-font-size text-text-color dark:text-text-color-dark hover:text-title-color dark:hover:text-title-color-dark font-font-medium duration-300 footer__link"
          @click.stop.prevent="showAlert"
          >{{ link.text }}</a
        >
      </li>
    </ul>
    <ul v-if="section.socialLinks" class="flex gap-x-4 footer__social">
      <li v-for="socialLink in section.socialLinks" :key="socialLink.href">
        <a
          :href="socialLink.href"
          target="_blank"
          class="text-xl text-text-color dark:text-text-color-dark hover:text-title-color dark:hover:text-title-color-dark duration-300 footer__social-link"
          @click.stop.prevent="showAlert"
        >
          <i :class="socialLink.icon"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { showAlertPropType } from "../../types/types";
export default {
  props: {
    sections: {
      type: Array,
      required: true,
    },
    showAlert: {
      type: showAlertPropType,
      required: true,
    },
  },
};
</script>

<style scoped></style>
