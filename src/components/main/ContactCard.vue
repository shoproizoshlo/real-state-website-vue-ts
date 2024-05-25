<template>
  <div
    class="py-5 lg:pt-7 lg:pb-6 px-3 lg:px-6 bg-body-color dark:bg-body-color-dark rounded-lg contact__card-box"
  >
    <div class="mb-5 flex items-start gap-x-3 contact__card-info">
      <i
        :class="`bx ${icon} `"
        class="p-2 bg-first-color-lighten dark:bg-container-color-dark rounded-md text-xl text-first-color dark:text-first-color-dark"
      ></i>

      <div>
        <h3 class="text-normal-font-size contact__card-title">{{ title }}</h3>
        <p class="text-smaller-font-size contact__card-description">
          {{ description }}
        </p>
      </div>
    </div>
    <button class="button contact__card-button" @click.stop.prevent="showAlert">
      {{ button }}
    </button>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
export default {
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    button: { type: String, required: true },
    showAlert: {
      type: Function as PropType<(payload: MouseEvent) => void>,
      required: true,
    },
  },
};
</script>

<style scoped>
.contact__card-box {
  transition: 0.3s;
  border: 2px solid;
}
.contact__card-box {
  @apply border-border-color dark:border-border-color-dark dark:hover:shadow-none;
}
.contact__card-button {
  font-size: var(--small-font-size);
  padding: 14px 0;
  width: 100%;
  border-radius: 0.25rem;
  background: var(--first-color-lighten);
  /* color: var(--first-color); */
  font-weight: var(--font-semi-bold);
  box-shadow: none;
}
.contact__card-button {
  @apply bg-first-color-lighten hover:bg-first-color dark:bg-container-color-dark dark:hover:bg-first-color-dark text-first-color hover:text-white dark:text-first-color-dark dark:hover:text-white;
}
.contact__card-button:hover {
  /* background-color: var(--first-color); */
  /* color: #fff; */
}
.contact__card-box:hover {
  box-shadow: 0 8px 24px hsla(228, 66%, 45%, 0.1);
}
</style>
