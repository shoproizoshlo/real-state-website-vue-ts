<template>
  <section class="contact section" id="contact">
    <div class="contact__container wrapper grid">
      <OrbeImg :url="'./src/assets/img/contact.png'" />
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

@media screen and (max-width: 350px) {
  .contact__card {
    grid-template-columns: repeat(1, 100px);
    justify-content: center;
  }
}
@media screen and (min-width: 576px) {
  .contact__card {
    grid-template-columns: repeat(2, 192px);
    justify-content: center;
  }
}
@media screen and (min-width: 767px) {
  .contact__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
  .contact__card {
    justify-content: inherit;
  }
}

@media screen and (min-width: 1023px) {
  .contact__container {
    align-items: flex-start;
    column-gap: 5rem;
  }
  .contact__card {
    grid-template-columns: repeat(2, 200px);
  }
}
</style>
