<template>
  <header
    class="fixed top-0 left-0 w-full bg-transparent z-50 transition duration-400 ease-in-out header"
    :class="{ 'scroll-header': isScrolled }"
    id="header"
  >
    <nav class="flex justify-between items-center nav wrapper">
      <a
        href="#"
        class="text-white hover:text-first-color inline-flex items-center gap-x-1 font-medium transition duration-300 ease-in-out nav__logo"
      >
        Holux
        <i class="bx bxs-home-heart text-base"></i
      ></a>
      <div class="nav__menu">
        <ul class="flex justify-between items-center lg:gap-x-12 nav__list">
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
        class="bx change-theme"
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
.nav {
  height: var(--header-height);
}

.nav__button {
  display: none;
}

/* Change background header */
.scroll-header {
  background-color: var(--body-color);
  box-shadow: 0 1px 4px hsla(228, 4%, 15%, 0.1);
}
.scroll-header .nav__logo {
  color: var(--first-color);
}
.scroll-header .change-theme {
  color: var(--title-color);
}

/*=============== THEME ===============*/
.change-theme {
  font-size: 1.25rem;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
}
.change-theme:hover {
  color: var(--first-color);
}

@media screen and (max-width: 1023px) {
  .nav__menu {
    margin: 0 auto;
    position: fixed;
    bottom: 2rem;
    left: 0;
    right: 0;
    background-color: var(--container-color);
    padding: 1.38rem 3rem;
    width: 90%;
    border-radius: 1.25rem;
    box-shadow: 0 8px 24px hsla(228, 66%, 45%, 0.15);
    transition: 0.4s;
  }
  .scroll-header .change-theme {
    color: var(--title-color);
  }
}
@media screen and (min-width: 400px) {
  .nav__menu {
    width: 342px;
  }
}
@media screen and (max-width: 320px) {
  .nav__menu {
    padding: 1.3rem 1.5em;
  }
}
@media screen and (min-width: 1023px) {
  .nav {
    height: calc(var(--header-height) + 1.5rem);
  }
  .nav__menu {
    width: inherit;
    margin-left: auto;
  }
  .nav__button {
    display: inline-block;
  }
  .change-theme {
    margin: 0 3rem;
    color: var(--text-color-light);
  }
}
</style>
