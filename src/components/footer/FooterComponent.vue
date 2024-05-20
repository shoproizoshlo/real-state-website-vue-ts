<template>
  <footer class="footer section">
    <div class="footer__container wrapper grid">
      <div>
        <a href="#" class="footer__logo"
          >Holux <i class="bx bx-home-alt-2"></i
        ></a>
        <p class="footer__description">
          Our vision is to make all people <br />
          the best place to live for them.
        </p>
      </div>
      <div class="footer__content">
        <FooterLinks :sections="sections" />
      </div>
    </div>
    <div class="footer__info wrapper">
      <span class="footer__copy"> &#169; Bedimcode. All rigths reserved </span>
      <div class="footer__privacy">
        <a href="#">Terms & Agreements</a>
        <a href="#">Privacy Policy</a>
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
/* gap-y-10 */
.footer__container {
  row-gap: 2.5rem;
}
/* mb-3 gap-x-1 text-first-color text-h3-font-size font-font-semi-bold inline-flex items-center */
.footer__logo {
  color: var(--first-color);
  font-size: var(--h3-font-size);
  font-weight: var(--font-semi-bold);
  display: inline-flex;
  align-items: center;
  column-gap: 0.25rem;
  margin-bottom: 0.75rem;
}
/* text-xl */
.footer__logo i {
  font-size: 1.25rem;
}
/* text-small-font-size font-font-medium */
.footer__description,
.footer__link {
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
}

.footer__content {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 2.5rem 4rem;
}
/* text-h3-font-size mb-4 */

/* flex */
.footer__info,
.footer__privacy {
  display: flex;
}
/* mt-20 pb-24 flex-col text-center gap-y-6 */
.footer__info {
  padding-bottom: 6rem;
  margin-top: 5.5rem;
  flex-direction: column;
  text-align: center;
  row-gap: 1.5rem;
}
/* text-smaller-font-size font-font-medium text-text-color */
.footer__copy,
.footer__privacy a {
  font-size: var(--smaller-font-size);
  font-weight: var(--font-medium);
  color: var(--text-color);
}
/* justify-center gap-x-5 */
.footer__privacy {
  justify-content: center;
  column-gap: 1.25rem;
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
    justify-content: space-between;
  }
}
@media screen and (min-width: 1023px) {
  .footer__content {
    grid-template-columns: repeat(4, max-content);
  }
  .footer__info {
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 2rem;
  }
}
</style>
