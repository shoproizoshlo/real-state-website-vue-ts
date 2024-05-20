<template>
  <div class="value__accordion-item" :class="{ 'accordion-open': isOpen }">
    <header
      class="flex items-center cursor-pointer value__accordion-header"
      @click="toggleAccordion"
    >
      <i
        class="bx me-3 p-1 bg-first-color-lighten rounded text-lg text-first-color value__accordion-icon"
        :class="icon"
      ></i>
      <h3 class="text-small-font-size">{{ title }}</h3>
      <div
        class="ms-auto p-1 inline-flex bg-first-color-lighten text-lg text-first-color rounded-sm value__accordion-arrow"
      >
        <i class="bx bxs-down-arrow" :class="{ 'bx-rotate-180': isOpen }"></i>
      </div>
    </header>
    <div
      class="value__accordion-content"
      ref="content"
      :style="{ height: contentHeight }"
    >
      <p class="text-smaller-font-size pt-5 pe-9 pb-0 ps-11">
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
  border: 2px solid var(--border-color);

  padding: 1rem 0.75rem;
  background-color: var(--body-color);
  border-radius: 0.5rem;
}
/* flex items-center cursor-pointer */
.value__accordion-header {
  display: flex;
  align-items: center;
  cursor: pointer;
}
/* me-3 p-1 bg-first-color-lighten rounded text-lg text-first-color */
.value__accordion-icon {
  background-color: var(--first-color-lighten);
  padding: 5px;
  border-radius: 0.25rem;
  font-size: 18px;
  color: var(--first-color);
  margin-right: 0.75rem;

  transition: 0.3s;
}
/* text-small-font-size */
.value__accordion-title {
  font-size: var(--small-font-size);
}
/* me-auto p-1 inline-flex bg-first-color-lighten text-lg text-first-color rounded-sm */
.value__accordion-arrow {
  display: inline-flex;
  background-color: var(--first-color-lighten);
  padding: 0.25rem;
  color: var(--first-color);
  border-radius: 2px;
  font-size: 18px;
  margin-left: auto;

  transition: 0.3s;
}

.value__accordion-arrow i {
  transition: 0.4s;
}
/* text-smaller-font-size pt-5 pe-9 pb-0 ps-11 */
.value__accordion-description {
  font-size: var(--smaller-font-size);
  padding: 1.25rem 2.5rem 0 2.75rem;
}
.value__accordion-content {
  overflow: hidden;
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
.accordion-open .value__accordion-arrow i {
  transform: rotate(-180deg);
}

@media screen and (min-width: 1023px) {
  .value__accordion-title {
    font-size: var(--normal-font-size);
  }
  .value__accordion-item {
    padding: 1.25rem 1.25rem 1.25rem 1rem;
  }
  .value__accordion-description {
    padding-bottom: 1rem;
    font-size: var(--small-font-size);
  }
}
</style>
