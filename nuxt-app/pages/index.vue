<script lang="ts">
import { defineComponent } from "vue";
import AosVue from "aos-vue";
export default defineComponent({
  components: { AosVue },
  data() {
    return {
      links: [
        {
          id: 1,
          url: "mailto:john1dolgopoloff@yandex.ru",
          title: "Сказать привет",
          attr: {},
        },
        {
          id: 2,
          url: "https://github.com/JohnGlod",
          title: "Github",
          attr: { target: "_blank", rel: "noopener noreferrer" },
        },
        {
          id: 3,
          url: "/Dolgopolov_frontend_developer.pdf",
          title: "CV",
          attr: {
            download: "Dolgopolov_frontend_developer.pdf",
          },
        },
      ],
    };
  },
});
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero__inner">
        <div class="hero__text">
          <aos-vue
            animation="flip-up"
            :duration="800"
            placement="top-bottom"
            :delay="300"
          >
            <span class="hero__subtitle">Россия, Тюмень</span>
            <div>
              <img src="/hello.png" alt="" srcset="" />
            </div>
            <h1 class="hero__title">Я — Евгений Долгополов</h1>
          </aos-vue>

          <aos-vue
            animation="slide-up"
            :duration="1000"
            :delay="500"
            placement="top-bottom"
          >
            <p class="hero__descr">
              Познаю необъятные просторы Frontend'а — стремлюсь, чтобы продукт
              был удобным, качественным, красивым, доступным и отвечающим всем
              современным стандартам W3C.
            </p>
          </aos-vue>
          <div class="links">
            <a
              class="links__item links__item--decorated"
              :href="item.url"
              v-for="(item, id) in links"
              :key="id"
              :rel="item?.attr?.rel"
              :download="item?.attr?.download"
              :target="item?.attr?.target"
            >
              <aos-vue
                animation="fade-left"
                :duration="800"
                placement="top-bottom"
                :delay="800 + id * 200"
              >
                {{ item.title }}
              </aos-vue>
            </a>
          </div>
        </div>
        <aos-vue animation="zoom-out" :duration="800" placement="top-bottom">
          <img class="hero__image" src="/photo.webp" alt="Фото" />
        </aos-vue>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  padding: var(--padding-section);

  &__text {
    max-width: 560px;
  }

  &__title {
    font-size: 3rem;
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--margin-lg);
    letter-spacing: normal;
  }

  &__subtitle {
    position: relative;
    font-weight: var(--font-weight-bold);

    &::after {
      position: absolute;
      top: 0;
      right: -25px;
      content: "";
      width: 16px;
      height: 16px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url("/pin.png");
    }
  }

  &__descr {
    margin-bottom: var(--margin-lg);
  }

  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
    position: relative;
  }

  &__image {
    display: block;
    object-fit: cover;
    object-position: left bottom;
    border-radius: 50%;
    width: min(max(40vw, 350px), 500px);
    height: min(max(40vw, 350px), 500px);
  }
}
</style>
