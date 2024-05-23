<template>
  <div class="logos__img">
    <img :src="url" alt="logo" />
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    sr: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    onMounted(() => {
      props.sr.reveal(".logos__img", { interval: 100 });
    });
  },
};
</script>

<style scoped>
.logos__img img {
  height: 60px;
  opacity: 0.2;
  transition: 0.3s;
}

.logos__img img:hover {
  opacity: 0.6;
}

@media screen and (min-width: 1023px) {
  .logos__img img {
    height: 100px;
  }
}
</style>
