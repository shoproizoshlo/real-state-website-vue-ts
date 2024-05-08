<template>
  <header
    class="fixed top-0 left-0 container bg-transparent z-fixed transition duration-400 ease-in-out"
    id="header"
  >
    <nav class="h-header-height flex justify-between items-center wrapper">
      <a
        href="#"
        class="text-container-color hover:text-first-color inline-flex items-center gap-x-1 font-medium transition duration-300 ease-in-out"
      >
        Holux
        <i class="bx bxs-home-heart"></i
      ></a>
      <div
        class="mx-0 my-auto fixed bottom-8 inset-x-0 bg-container-color transition duration-400 ease-in-out nav__menu"
      >
        <ul class="flex justify-between items-center">
          <NavLink id="home" icon="bx-home-alt-2" name="Home" />
          <NavLink id="popular" icon="bx-building-house" name="Residences" />
          <NavLink id="value" icon="bx-award" name="Value" />
          <NavLink id="contact" icon="bx-phone" name="Contact" />
        </ul>
      </div>

      <!--==================== THEME CHANGE BUTTON ====================-->
      <i class="bx bx-moon change-theme" id="theme-button"></i>

      <a href="#" class="button nav__button"> Subscribe </a>
    </nav>
  </header>
</template>

<script>
import NavLink from "./NavLink.vue";

export default { components: { NavLink } };
</script>

<style scoped>
.nav__menu {
  padding: 1.38rem 3rem;
  width: 90%;
  box-shadow: 0 8px 24px hsla(228, 66%, 45%, 0.15);
  border-radius: 1.25rem;
}
</style>
