<template>
  <section class="contact section" id="contact">
    <div class="contact__container wrapper grid">
      <!-- <div class="relative flex justify-center">
        <div class="contact__orbe"></div>
        <div class="m-auto absolute overflow-hidden inset-0 contact__img">
          <img src="/src/assets/img/contact.png" alt="contact" />
        </div>
      </div> -->
      <OrbeImg />
      <div class="contact__content">
        <div class="contact__data">
          <span class="section__subtitle"> Contact Us</span>
          <h2 class="section__title">Easy to Contact us<span>.</span></h2>
          <p class="section__description">
            Is there a problem finding your dream home? Need a guide in buying
            first home? or need a consultation on residential issues? just
            contact us.
          </p>
        </div>
        <div class="contact__card">
          <ContactCard
            v-for="(contact, index) in contactData"
            :key="index"
            :icon="contact.icon"
            :title="contact.title"
            :description="contact.description"
            :button="contact.button"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactCard from "./ContactCard.vue";
import OrbeImg from "./OrbeImg.vue";

export default {
  components: {
    ContactCard,
    OrbeImg,
  },
  setup() {
    const contactData = [
      {
        icon: "bxs-phone-call",
        title: "Call",
        description: "022.321.165.19",
        button: "Call Now",
      },
      {
        icon: "bxs-message-rounded-dots",
        title: "Chat",
        description: "022.321.165.19",
        button: "Chat Now",
      },
      {
        icon: "bxs-video",
        title: "Video",
        description: "022.321.165.19",
        button: "Video Now",
      },
      {
        icon: "bxs-envelope",
        title: "Message",
        description: "022.321.165.19",
        button: "Message Now",
      },
    ];

    return { contactData };
  },
};
</script>

<style scoped>
.contact__container {
  row-gap: 2rem;
}
.contact__card {
  display: grid;
  gap: 1.25rem 0.75rem;

  grid-template-columns: repeat(2, 1fr);
}
</style>
