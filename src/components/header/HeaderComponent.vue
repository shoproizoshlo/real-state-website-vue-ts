<template>
  <header
    class="fixed top-0 left-0 container bg-transparent z-50 transition duration-400 ease-in-out"
    :class="{ 'scroll-header': isScrolled }"
    id="header"
  >
    <nav class="h-header-height flex justify-between items-center wrapper">
      <a
        href="#"
        class="text-container-color hover:text-first-color inline-flex items-center gap-x-1 font-medium transition duration-300 ease-in-out"
        :class="{ 'text-first-color': isScrolled }"
      >
        Holux
        <i class="bx bxs-home-heart"></i
      ></a>
      <div
        class="my-0 mx-auto fixed bottom-8 inset-x-0 bg-container-color transition duration-400 ease-in-out nav__menu"
      >
        <ul class="flex justify-between items-center">
          <NavLink
            v-for="section in sections"
            :key="section.id"
            :id="section.id"
            :icon="section.icon"
            :name="section.name"
            :active="activeSection === section.id"
          />
        </ul>
      </div>

      <!--==================== THEME CHANGE BUTTON ====================-->
      <i
        class="bx cursor-pointer text-white text-base"
        :class="{
          'bx-sun': !isDarkMode,
          'bx-moon': isDarkMode,
          'change-theme': isScrolled,
        }"
        @click="toggleDarkMode"
      ></i>

      <a href="#" class="button nav__button"> Subscribe </a>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import NavLink from "./NavLink.vue";

export default defineComponent({
  components: { NavLink },
  setup() {
    const isScrolled = ref(false);
    const sections = ref([
      { id: "home", icon: "bx-home-alt-2", name: "Home" },
      { id: "popular", icon: "bx-building-house", name: "Residences" },
      { id: "value", icon: "bx-award", name: "Value" },
      { id: "contact", icon: "bx-phone", name: "Contact" },
    ]);
    const activeSection = ref("");

    const handleScroll = () => {
      isScrolled.value = window.scrollY >= 50;
      const scrollDown = window.scrollY;

      sections.value.forEach((current) => {
        const sectionElement = document.getElementById(current.id);
        if (sectionElement) {
          const sectionHeight = sectionElement.offsetHeight;
          const sectionTop = sectionElement.offsetTop - 58;

          if (
            scrollDown > sectionTop &&
            scrollDown <= sectionTop + sectionHeight
          ) {
            activeSection.value = current.id;
          }
        }
      });
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    /*=============== DARK LIGHT THEME ===============*/
    const isDarkMode = ref(false);

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      document.documentElement.classList.toggle("dark", isDarkMode.value);
      localStorage.theme = isDarkMode.value ? "dark" : "light";
    };

    onMounted(() => {
      isDarkMode.value =
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);

      if (isDarkMode.value) {
        document.documentElement.classList.add("dark");
      }
    });

    return { isScrolled, sections, activeSection, isDarkMode, toggleDarkMode };
  },
});
</script>

<style scoped>
.nav__menu {
  padding: 1.38rem 3rem;
  width: 90%;
  box-shadow: 0 8px 24px hsla(228, 66%, 45%, 0.15);
  border-radius: 1.25rem;
}
/* Change background header */
.scroll-header {
  background-color: var(--body-color);
  box-shadow: 0 1px 4px hsla(228, 4%, 15%, 0.1);
}
.scroll-header .change-theme {
  color: var(--title-color);
}

.nav__button {
  display: none;
}

/* Active link */
.active-link {
  background: linear-gradient(101deg, hsl(228, 66%, 53%), hsl(228, 66%, 47%));
  color: #fff;
  box-shadow: 0 4px 8px hsla(228, 66%, 45%, 0.25);
}

/*=============== THEME ===============*/
.change-theme {
  color: #fff;
  transition: 0.3s;
}
.change-theme:hover {
  color: var(--first-color-light);
}
</style>
