<template>
  <div class="bg-body-color py-5 px-3 rounded-lg contact__card-box">
    <div class="mb-5 flex items-start gap-x-3">
      <i
        :class="`bx ${icon} p-2 bg-first-color-lighten rounded-md text-xl text-first-color`"
      ></i>

      <div>
        <h3 class="text-normal-font-size">{{ title }}</h3>
        <p class="text-smaller-font-size">{{ description }}</p>
      </div>
    </div>
    <button
      class="py-4 px-0 text-small-font-size w-full rounded bg-first-color-lighten text-first-color font-font-semi-bold shadow-none hover:bg-first-color hover:text-white"
    >
      {{ button }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    button: { type: String, required: true },
  },
};
</script>

<style scoped>
.contact__card-box {
  transition: 0.3s;
  border: 2px solid var(--border-color);
}
.contact__card-box:hover {
  box-shadow: 0 8px 24px hsla(228, 66%, 45%, 0.1);
}
</style>
