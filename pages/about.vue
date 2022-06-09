<script>
import aosMixin from '~/mixins/aos'
export default {
  name: 'AboutPage',
  data: () => ({
    links: [
      {
        id: 1,
        url: 'mailto:john1dolgopoloff@yandex.ru',
        title: 'Сказать привет',
        attr: {},
      },
      {
        id: 2,
        url: 'https://github.com/JohnGlod',
        title: 'Github',
        attr: { target: '_blank', rel: 'noopener noreferrer' },
      },
      {
        id: 3,
        url: '/Dolgopolov_frontend_developer.pdf',
        title: 'CV',
        attr: {
          download: 'Dolgopolov_frontend_developer.pdf',
        },
      },
    ],
  }),
  mixins: [aosMixin],
}
</script>

<template>
  <section class="about">
    <div class="container">
      <div class="about__inner">
        <h2
          class="title about__title"
          data-aos="fade-up-right"
          data-aos-duration="800"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="300"
        >
          Немного обо мне
        </h2>

        <div class="about__col">
          <div class="about__list">
            <h3
              class="subtitle"
              data-aos="fade-up-right"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="500"
            >
              Ключевые навыки:
            </h3>
            <ul class="list">
              <li
                class="list__item"
                data-aos="fade-up-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="600"
              >
                HTML, CSS (SCSS, BEM, Materialize, Tailwind CSS, css-modules)
              </li>

              <li
                class="list__item"
                data-aos="fade-up-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="800"
              >
                JavaScript ES6+, TypeScript
              </li>

              <li
                class="list__item"
                data-aos="fade-up-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="1000"
              >
                React, Redux, Redux Toolkit
              </li>

              <li
                class="list__item"
                data-aos="fade-up-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="1200"
              >
                Адаптивная и семантическая вёрстка
              </li>

              <li
                class="list__item"
                data-aos="fade-up-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="1400"
              >
                Небольшой опыт с Vue, Nuxt
              </li>
            </ul>
          </div>
          <div class="about__list">
            <h3
              class="subtitle"
              data-aos="fade-up-right"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="1500"
            >
              Прочие знания:
            </h3>

            <ul class="list">
              <li
                class="list__item"
                data-aos="fade-up-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="1700"
              >
                Сборщики: Gulp, Webpack
              </li>

              <li
                class="list__item"
                data-aos="fade-up-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="1900"
              >
                Опыт работы с графическими редакторами: Figma, Zeplin, Avocode
              </li>

              <li
                class="list__item"
                data-aos="fade-up-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="2100"
              >
                Прочее: Git, Chrome DevTools, Postman
              </li>
            </ul>
          </div>
          <div class="about__list">
            <h3
              class="subtitle"
              data-aos="fade-up-right"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="1500"
            >
              Soft-скиллы:
            </h3>

            <ul class="list">
              <li
                class="list__item"
                data-aos="fade-up-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="1700"
              >
                Внимание к деталям, эффективное выполнение задач
              </li>
              <li
                class="list__item"
                data-aos="fade-up-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="1900"
              >
                Умение работать в команде
              </li>

              <li
                class="list__item"
                data-aos="fade-up-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="2100"
              >
                Способность учиться и адаптироваться к новым задачам
              </li>
              <li
                class="list__item"
                data-aos="fade-up-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="2200"
              >
                Отсутствие вредных привычек, энергичность, самостоятельность
              </li>
            </ul>
          </div>
          <div class="about__list">
            <p
              class="about__text"
              data-aos="fade-up-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="2200"
            >
              Постоянно учусь и совершенствую свои навыки, а главное по
              настоящему люблю свое дело. Ищу место, где получу возможность
              расти и развиваться как в профессиональном так и личностном плане.
            </p>
            <p
              class="about__text"
              data-aos="fade-up-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="2400"
            >
              Интересуюсь и слежу за современными тенденциями в frontend мире,
              постоянно развиваюсь, читаю профильную литературу и habr / medium,
              слушаю Веб- стандарты.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about {
  padding: var(--padding-section);

  &__col {
    columns: 2 var(--content);
  }

  &__list {
    margin-bottom: var(--margin-big);
    padding: 15px;
  }

  &__text {
    margin-bottom: var(--margin-lg);
    max-width: var(--content);
  }
}

.list__item {
  padding-left: 10px;
  margin-bottom: 10px;
  list-style: '✅';
}
</style>
