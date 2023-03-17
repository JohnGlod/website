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
    facts: [
      'I confident that nothing is impossible',
      'I live in the best city in the world',
      'Born in Siberia',
      'I read scientific articles on physics',
      'Familiar with astronomy, not astrology',
      'I love the cyberpunk genre',
      'Like to share knowledge',
    ],
    description: [
      'With over 2 years of experience, I love reactivity and static types.',
      "I enjoy developing high quality, visually appealing applications that pique user interest. I'm always ready to take on a challenge, I'm happy to expand my skills and collaborate with others.",
      'Ready to bring ambition and value to you biz? I am your dev!',
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
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="300"
          data-aos-once="true"
        >
          about-me
        </h2>
        <p
          class="subtitle"
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="500"
          data-aos-once="true"
        >
          Who am i?
        </p>
        <div class="about__col">
          <div class="about__item">
            <p
              v-for="(item, index) in description"
              :key="index"
              class="about__text"
              data-aos="fade-up-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
              :data-aos-delay="0 + index * 200"
              data-aos-once="true"
              data-text="dev"
            >
              {{ item }}
            </p>
          </div>
          <picture class="about__item">
            <source srcset="/evgeniy.webp" type="image/webp" />
            <source srcset="/evgeniy.png" type="image/png" />
            <img
              class="image"
              src="/evgeniy.png"
              alt="Photo in cyberpunk style"
              aria-hidden="true"
            />
          </picture>
        </div>
      </div>
      <div>
        <h3
          class="title"
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="1500"
          data-aos-once="true"
        >
          my-fun-facts
        </h3>
        <div class="about__list">
          <ul class="list">
            <li
              v-for="(item, index) in facts"
              :key="index"
              class="list__item"
              data-aos="fade-up-right"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
              :data-aos-delay="2000 + index * 200"
              data-aos-once="true"
            >
              {{ item }}
            </li>
          </ul>
          <img src="/figure.png" alt="figure" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.about {
  padding: var(--padding-section);
  position: relative;

  @media screen and (min-width: 1023px) {
    &::before,
    &::after {
      content: '';
      background-image: url('/Dots.svg');
      background-repeat: no-repeat;
      position: absolute;
      width: 86.39px;
      height: 84px;
    }
    &::before {
      bottom: 0%;
      left: -30px;
    }
    &::after {
      top: 5%;
      right: -10px;
    }
  }
  &__col {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column-reverse;
    @media screen and (min-width: 767px) {
      flex-direction: row;
    }

    gap: var(--margin-big);
  }

  &__list {
    margin-bottom: var(--margin-big);
    display: flex;
    flex-wrap: wrap;
    gap: var(--margin-lg);
    img {
      display: none;
    }
    @media screen and (min-width: 1023px) {
      img {
        display: block;
      }
    }
  }

  &__text {
    margin-bottom: var(--margin-lg);
    padding: 0;
    word-wrap: break-word;
    &::first-letter {
      text-transform: uppercase;
      color: var(--color-primary);
      font-weight: var(--font-weight-bold);
      font-size: 1.5rem;
    }
  }
  &__item {
    flex-basis: 50%;
    position: relative;
    @media screen and (min-width: 1023px) {
      &:last-child {
        &::before {
          content: '';
          background-image: url('/Dots.svg');
          position: absolute;
          width: 86.39px;
          height: 84px;
          top: -50px;
          left: -30px;
          z-index: 1;
          background-repeat: no-repeat;
        }
        &::after {
          content: '';
          width: 86.39px;
          height: 84px;
          position: absolute;
          bottom: -50px;
          right: -30px;
          background-image: url('/Dots.svg');
          background-repeat: no-repeat;
          height: 91px;
        }
      }
    }
  }
}
.image {
  object-fit: cover;
  height: 100%;
  object-position: center;
  width: 100%;
}

.list {
  padding: 15px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: var(--margin-lg);

  &__item {
    padding: 10px;
    border: var(--border);
    color: var(--color-sea);
  }
  @media screen and (min-width: 1023px) {
    flex-basis: 60%;
  }
}
</style>
