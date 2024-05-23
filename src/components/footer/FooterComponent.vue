<template>
  <footer class="footer section">
    <div class="gap-y-10 md:justify-between footer__container wrapper grid">
      <div>
        <a
          href="#"
          class="mb-3 gap-x-1 text-first-color dark:text-first-color-dark text-h3-font-size font-font-semi-bold inline-flex items-center footer__logo"
          >Holux <i class="bx bx-home-alt-2 text-xl"></i
        ></a>
        <p class="text-small-font-size font-font-medium footer__description">
          Our vision is to make all people <br />
          the best place to live for them.
        </p>
      </div>
      <div class="grid gap-y-10 gap-x-16 footer__content">
        <FooterLinks :sections="sections" />
      </div>
    </div>
    <div
      class="flex mt-20 pb-24 lg:pb-8 flex-col lg:flex-row text-center lg:justify-between gap-y-6 footer__info wrapper"
    >
      <span
        class="text-smaller-font-size text-text-color dark:text-text-color-dark gont-font-medium footer__copy"
      >
        &#169; Bedimcode. All rigths reserved
      </span>
      <div class="flex gap-x-5 justify-center footer__privacy">
        <a
          href="#"
          class="text-smaller-font-size text-text-color dark:text-text-color-dark gont-font-medium"
          >Terms & Agreements</a
        >
        <a
          href="#"
          class="text-smaller-font-size text-text-color dark:text-text-color-dark gont-font-medium"
          >Privacy Policy</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
import { ref, onMounted } from "vue";
import FooterLinks from "./FooterLinks.vue";
export default {
  components: {
    FooterLinks,
  },
  props: {
    sr: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const sections = ref([
      {
        title: "About",
        links: [
          { text: "About Us", href: "#" },
          { text: "Features", href: "#" },
          { text: "News & Blog", href: "#" },
        ],
      },
      {
        title: "Company",
        links: [
          { text: "How We Work?", href: "#" },
          { text: "Capital", href: "#" },
          { text: "Security", href: "#" },
        ],
      },
      {
        title: "Support",
        links: [
          { text: "FAQs", href: "#" },
          { text: "Support center", href: "#" },
          { text: "Contact Us", href: "#" },
        ],
      },
      {
        title: "Follow us",
        socialLinks: [
          { href: "https://www.facebook.com/", icon: "bx bxl-facebook-circle" },
          { href: "https://www.instagram.com/", icon: "bx bxl-instagram-alt" },
          { href: "https://www.pinterest.com/", icon: "bx bxl-pinterest" },
        ],
      },
    ]);

    onMounted(() => {
      props.sr.reveal(".footer__container");
      props.sr.reveal("..footer__info", { delay: 500 });
    });

    return { sections };
  },
};
</script>

<style scoped>
.footer__content {
  grid-template-columns: repeat(2, max-content);
}

@media screen and (max-width: 320px) {
  .footer__content {
    gap: 2.5rem;
  }
}
@media screen and (min-width: 576px) {
  .footer__content {
    grid-template-columns: repeat(3, max-content);
  }
}
@media screen and (min-width: 767px) {
  .footer__container {
    grid-template-columns: repeat(2, max-content);
  }
}
@media screen and (min-width: 1023px) {
  .footer__content {
    grid-template-columns: repeat(4, max-content);
  }
}
</style>
