<script>
import aosMixin from '~/mixins/aos'
export default {
  name: 'AboutPage',
  mixins: [aosMixin],
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
    mainSkills: [
      'HTML, CSS (SCSS, BEM, Materialize, Tailwind CSS, css-modules)',
      'Адаптивная и семантическая вёрстка',
      'JavaScript ES6+, TypeScript',
      'React, Redux, Redux Toolkit',
      'Изучаю Angular и его экосистему',
      'Unit-тестирование',
      'HTTP, ООП, Паттерны',
    ],
    anotherSkills: [
      'Builders: Webpack, Vite',
      'Backend: NodeJS, NestJS',
      'Data base: MongoDB',
    ],
    softSkills: [
      'Внимание к деталям, эффективное выполнение задач',
      'Готовность быстро адаптироваться к новым технологиям и изменяющимся требованиям проекта',
      'Умение работать в команде',
      'Аналитическое и критическое мышление',
      'Готовность к обучению и участию в процессах развития как самого себя, так и других членов команды',
      'Отсутствие вредных привычек, энергичность, самостоятельность',
    ],
    description: [
      'Я - молодой и амбициозный разработчик, который готов к новым вызовам и не боится экспериментировать.',
      'Если вы ищете кого-то, кто может привнести в вашу жизнь что-то новое, давайте поговорим и посмотрим, куда это нас приведет!',
      'Мои знания позволяют мне разрабатывать качественные, функциональные и привлекательные современные приложения, который будет находить отклик у пользователей',
      'Я готов взять на себя любые задачи, чтобы расширить свой опыт, и работать в команде, чтобы обменяться опытом и научиться новому. Если вы ищете  разработчика, который готов добавить свой вклад и амбиции в ваш бизнес, то я именно тот, кто вам нужен!',
    ],
  }),
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
          data-aos-once="true"
        >
          Немного обо мне
        </h2>
        <p
          v-for="(item, index) in description"
          :key="index"
          class="about__text"
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
          :data-aos-delay="0 + index * 200"
          data-aos-once="true"
        >
          {{ item }}
        </p>
        <div class="about__col">
          <div class="about__list">
            <h3
              class="subtitle"
              data-aos="fade-up-right"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="500"
              data-aos-once="true"
            >
              Ключевые навыки:
            </h3>
            <ul class="list">
              <li
                v-for="(item, index) in mainSkills"
                :key="index"
                class="list__item"
                data-aos="fade-up-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                :data-aos-delay="600 + index * 200"
                data-aos-once="true"
              >
                {{ item }}
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
              data-aos-once="true"
            >
              Прочие знания:
            </h3>

            <ul class="list">
              <li
                v-for="(item, index) in anotherSkills"
                :key="index"
                class="list__item"
                data-aos="fade-up-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                :data-aos-delay="1800 + index * 200"
                data-aos-once="true"
              >
                {{ item }}
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
              data-aos-once="true"
            >
              Soft-скиллы:
            </h3>

            <ul class="list">
              <li
                v-for="(item, index) in softSkills"
                :key="index"
                class="list__item"
                data-aos="fade-up-right"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-bottom"
                :data-aos-delay="1800 + index * 200"
                data-aos-once="true"
              >
                {{ item }}
              </li>
            </ul>
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
    @media screen and (min-width: 767px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__list {
    margin-bottom: var(--margin-big);
    padding: 15px;
  }

  &__text {
    margin-bottom: var(--margin-lg);
    padding: 0;
  }
}

.list__item {
  padding-left: 10px;
  margin-bottom: 10px;
  list-style: '✅';
}
</style>
