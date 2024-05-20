<template>
  <div class="value__images">
    <div class="value__orbe"></div>
    <div class="value__img">
      <img src="/src/assets/img/contact.png" alt="value" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.value__images {
  position: relative;
  display: flex;
  justify-content: center;
}

.value__orbe {
  width: 266px;
  height: 316px;
  background-color: hsl(228, 24%, 97%);
  border-radius: 135px 135px 16px 16px;
}
/* m-auto absolute overflow-hidden inset-0 */
.value__img {
  width: 250px;
  height: 300px;
  border-radius: 125px 125px 12px 12px;
  box-shadow: 0 16px 32px hsla(228, 66%, 25%, 0.25);

  position: absolute;
  overflow: hidden;
  inset: 0;
  margin: auto;
}
@media screen and (max-width: 320px) {
  .value__img {
    width: 220px;
    height: 260px;
  }
  .value__orbe {
    width: 236px;
    height: 280px;
  }
}
@media screen and (min-width: 1023px) {
  .value__orbe {
    width: 501px;
    height: 641px;
    border-radius: 258px 258px 16px 16px;
  }
  .value__img {
    width: 461px;
    height: 601px;
    border-radius: 238px 238px 12px 12px;
  }
  .value__img img {
    max-width: inherit;
    width: 490px;
  }
}
</style>
