<template>
  <div
    class="py-4 lg:py-5 px-3 lg:pt-5 lg:pb-4 bg-body-color dark:bg-body-color-dark rounded-lg value__accordion-item"
    :class="{ 'accordion-open': isOpen }"
  >
    <header
      class="flex items-center cursor-pointer value__accordion-header"
      @click="toggleAccordion"
    >
      <i
        class="bx mr-3 p-1 bg-first-color-lighten dark:bg-container-color-dark rounded text-lg text-first-color dark:text-first-color-dark value__accordion-icon"
        :class="icon"
      ></i>
      <h3 class="text-small-font-size lg:text-normal-font-size-large">
        {{ title }}
      </h3>
      <div
        class="ml-auto p-1 inline-flex bg-first-color-lighten dark:bg-container-color-dark text-lg text-first-color dark:text-first-color-dark rounded-sm value__accordion-arrow"
      >
        <i class="bx bxs-down-arrow" :class="{ 'bx-rotate-180': isOpen }"></i>
      </div>
    </header>
    <div
      class="overflow-hidden value__accordion-content"
      ref="content"
      :style="{ height: contentHeight }"
    >
      <p
        class="text-smaller-font-size lg:text-small-font-size-large pt-5 pr-9 pb-0 lg:pb-4 pl-11"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref, watch, nextTick } from "vue";

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
    toggleAccordion: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const content = ref(null);
    const contentHeight = ref("0");

    const updateHeight = () => {
      if (props.isOpen && content.value) {
        nextTick(() => {
          contentHeight.value = `${content.value.scrollHeight}px`;
        });
      } else {
        contentHeight.value = "0";
      }
    };

    watch(() => props.isOpen, updateHeight);

    return { content, contentHeight };
  },
};
</script>

<style scoped>
.value__accordion-item {
  border: 2px solid;
}
.value__accordion-item {
  @apply border-border-color dark:border-border-color-dark;
}
.value__accordion-icon {
  transition: 0.3s;
}
.value__accordion-arrow {
  transition: 0.3s;
}

.value__accordion-arrow i {
  transition: 0.4s;
}

.value__accordion-content {
  height: 0;
  transition: all 0.25s ease;
}

/* Rotate icon and add shadows */
.accordion-open {
  box-shadow: 0 12px 32px hsla(228, 66%, 45%, 0.1);
}
.accordion-open .value__accordion-icon {
  box-shadow: 0 4px 4px hsla(228, 66%, 45%, 0.1);
}
.accordion-open .value__accordion-arrow {
  box-shadow: 0 2px 4px hsla(228, 66%, 45%, 0.1);
}
.accordion-open,
.accordion-open .value__accordion-icon,
.accordion-open .value__accordion-arrow {
  @apply dark:shadow-none;
}
.accordion-open .value__accordion-arrow i {
  transform: rotate(-180deg);
}
</style>
