<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      links: [
        {
          id: 1,
          url: 'mailto:john1dolgopoloff@yandex.ru',
          alt: 'Сказать привет',
          attr: {},
          src: '/email.png',
        },
        {
          id: 2,
          url: 'https://github.com/JohnGlod',
          alt: 'Мой Github',
          src: '/github.png',
          attr: { target: '_blank', rel: 'noopener noreferrer' },
        },
        {
          id: 3,
          url: '/Dolgopolov_frontend_developer.pdf',
          alt: 'Мое резюме',
          attr: {
            download: 'Dolgopolov_frontend_developer.pdf',
          },
          src: '/cv.png',
        },
      ],
    }
  },
}
</script>
<template>
  <section class="hero">
    <div class="container">
      <div class="hero__inner">
        <div class="hero__text">
          <span class="hero__subtitle">Россия, Тюмень</span>
          <div>
            <img
              width="64px"
              height="64px"
              src="/hello.png"
              alt="Привет, рад тебя видеть на этой странице!"
            />
          </div>
          <h1 class="hero__title">Я — Евгений Долгополов</h1>

          <p class="hero__descr">
            Познаю необъятные просторы Frontend'а — стремлюсь, чтобы продукт был
            удобным, качественным, красивым, доступным и отвечающим всем
            современным стандартам W3C.
          </p>

          <div class="header__links links">
            <a
              v-for="(item, id) in links"
              :key="id"
              class="links__item"
              :href="item.url"
              :rel="item.attr.rel"
              :download="item.attr.download"
              :target="item.attr.target"
            >
              <img :src="item.src" :alt="item.alt" width="32px" height="32px" />
            </a>
          </div>
        </div>
        <div class="hero__image">
          <img src="/photo.webp" alt="Фото" />
        </div>
      </div>
    </div>
  </section>
</template>

<!-- 

  animate 

  <template>
  <section class="hero">
    <div class="container">
      <div class="hero__inner">
        <div class="hero__text">
          <div
            data-aos="flip-up"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="300"
          >
            <span class="hero__subtitle">Россия, Тюмень</span>
            <div>
              <img src="/hello.png" alt="" srcset="" />
            </div>
            <h1 class="hero__title">Я — Евгений Долгополов</h1>
          </div>

          <p
            class="hero__descr"
            data-aos="flip-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="500"
          >
            Познаю необъятные просторы Frontend'а — стремлюсь, чтобы продукт был
            удобным, качественным, красивым, доступным и отвечающим всем
            современным стандартам W3C.
          </p>

          <div class="links">
            <a
              class="links__item links__item--decorated"
              :href="item.url"
              v-for="(item, id) in links"
              :key="id"
              :rel="item.attr.rel"
              :download="item.attr.download"
              :target="item.attr.target"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
              :data-aos-delay="800 + id * 200"
            >
              {{ item.title }}
            </a>
          </div>
        </div>

        <img
          class="hero__image"
          src="/photo.webp"
          alt="Фото"
          data-aos="zoom-out"
          data-aos-duration="800"
          data-aos-anchor-placement="top-bottom"
        />
      </div>
    </div>
  </section>
</template>
 -->

<style lang="scss">
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
      content: '';
      width: 16px;
      height: 16px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url('/pin.png');
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
    align-items: center;
    display: flex;
    height: min(max(40vw, 350px), 500px);
    justify-content: center;
    position: relative;
    width: min(max(40vw, 350px), 500px);
    z-index: 1;
    border: 2px solid transparent;

    img {
      object-fit: cover;
      height: 100%;
      object-position: left bottom;
      width: 100%;
    }

    &::before,
    &::after {
      background-image: linear-gradient(
        -180deg,
        #94e48d 0%,
        var(--color-green) 97%
      );
      content: '';
      height: 100%;
      position: absolute;
      transition: all 0.4s;
      transition-delay: 0.2s;
      transform: translateY(0px) translateX(0px);
      width: 100%;
      z-index: -1;
    }

    &::after {
      background-image: linear-gradient(
        -180deg,
        var(--color-yellow) 0%,
        #ffae3d 97%
      );
    }

    &:hover {
      animation-name: hoverPop;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;

      img {
        box-shadow: 2px 2px 4px 0px rgba(10, 12, 15, 0.27);
        box-shadow: 0px 0px 30px 0px rgba(10, 12, 15, 0.27);
      }

      &::before {
        animation: slick-hover-2 3s 0.4s linear infinite;
        transform: translateY(-20px) translateX(-20px);
      }

      &::after {
        animation: slick-hover 3s 0.4s linear infinite reverse;
        transform: translateY(20px) translateX(20px);
      }
    }
  }
}
</style>
