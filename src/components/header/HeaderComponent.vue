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
      <div class="nav__menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#home" class="nav__link">
              <i class="bx bx-home-alt-2"></i>
              <span>Home</span></a
            >
          </li>
          <li class="nav__item">
            <a href="#popular" class="nav__link">
              <i class="bx bx-building-house"></i>
              <span>Residences</span></a
            >
          </li>
          <li class="nav__item">
            <a href="#value" class="nav__link">
              <i class="bx bx-award"></i>
              <span>Value</span></a
            >
          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link">
              <i class="bx bx-phone"></i>
              <span>Contact</span></a
            >
          </li>
        </ul>
      </div>

      <!--==================== THEME CHANGE BUTTON ====================-->
      <i class="bx bx-moon change-theme" id="theme-button"></i>

      <a href="#" class="button nav__button"> Subscribe </a>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
