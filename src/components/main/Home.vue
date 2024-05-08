<template>
  <section class="home section" id="home">
    <div class="home__container container grid">
      <div class="home__data">
        <h1 class="home__title">
          Discover <br />
          Most Suitable <br />
          Property
        </h1>
        <p class="home__description">
          Find a variety of properties that suit you very easily, forget all
          difficulties in finding a residence for you
        </p>

        <form action="" class="home__search">
          <i class="bx bxs-map"></i>
          <input
            type="search"
            placeholder="Search by location..."
            class="home__search-input"
          />
          <button class="button">Search</button>
        </form>

        <div class="home__value">
          <div>
            <h1 class="home__value-number">9K <span>+</span></h1>
            <span class="home__value-description">
              Premium <br />
              Product
            </span>
          </div>
          <div>
            <h1 class="home__value-number">2K <span>+</span></h1>
            <span class="home__value-description">
              Happy <br />
              Customer
            </span>
          </div>
          <div>
            <h1 class="home__value-number">28K <span>+</span></h1>
            <span class="home__value-description">
              Awards <br />
              Winning
            </span>
          </div>
        </div>
      </div>

      <div class="home__images">
        <div class="home__orbe"></div>
        <div class="home__img">
          <img src="/src/assets/img/home.jpg" alt="home" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
