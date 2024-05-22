<template>
  <div
    class="py-5 lg:pt-7 lg:pb-6 px-3 lg:px-6 bg-body-color rounded-lg contact__card-box"
  >
    <div class="mb-5 flex items-start gap-x-3 contact__card-info">
      <i
        :class="`bx ${icon} p-2 bg-first-color-lighten rounded-md text-xl text-first-color `"
      ></i>

      <div>
        <h3 class="text-normal-font-size contact__card-title">{{ title }}</h3>
        <p class="text-smaller-font-size contact__card-description">
          {{ description }}
        </p>
      </div>
    </div>
    <button class="button contact__card-button">
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
.contact__card-button {
  font-size: var(--small-font-size);
  padding: 14px 0;
  width: 100%;
  border-radius: 0.25rem;
  background: var(--first-color-lighten);
  color: var(--first-color);
  font-weight: var(--font-semi-bold);
  box-shadow: none;
}
.contact__card-button:hover {
  background-color: var(--first-color);
  color: #fff;
}
.contact__card-box:hover {
  box-shadow: 0 8px 24px hsla(228, 66%, 45%, 0.1);
}
</style>
