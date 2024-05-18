<template>
  <footer class="footer section">
    <div class="gap-y-10 wrapper grid">
      <div>
        <a
          href="#"
          class="mb-3 gap-x-1 text-first-color text-h3-font-size font-font-semi-bold inline-flex items-center"
          >Holux <i class="bx bx-home-alt-2 text-xl"></i
        ></a>
        <p class="text-small-font-size font-font-medium">
          Our vision is to make all people <br />
          the best place to live for them.
        </p>
      </div>
      <div class="grid footer__content">
        <FooterLinks :sections="sections" />
      </div>
    </div>
    <div
      class="flex mt-20 pb-24 flex-col text-center gap-y-6 footer__info wrapper"
    >
      <span
        class="text-smaller-font-size font-font-medium text-text-color footer__copy"
      >
        &#169; Bedimcode. All rigths reserved
      </span>
      <div class="justify-center gap-x-5 footer__privacy">
        <a
          href="#"
          class="text-smaller-font-size font-font-medium text-text-color"
          >Terms & Agreements</a
        >
        <a
          href="#"
          class="text-smaller-font-size font-font-medium text-text-color"
          >Privacy Policy</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from "vue";
import FooterLinks from "./FooterLinks.vue";
export default {
  components: {
    FooterLinks,
  },
  setup() {
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

    return { sections };
  },
};
</script>

<style scoped>
.footer__content {
  grid-template-columns: repeat(2, max-content);
  gap: 2.5rem 4rem;
}
</style>
