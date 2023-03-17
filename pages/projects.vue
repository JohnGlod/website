<script>
export default {
  name: 'ProjectPage',
  components: { 'project-item': () => import('~/components/ProjectItem.vue') },
  data: () => ({
    projects: [
      {
        image: {
          src: 'https://cdn.discordapp.com/attachments/396268541021782016/1086173340839985172/image.png',
          alt: 'Portfolio website',
        },
        title: 'Portfolio website',
        demo: null,
        repo: 'https://github.com/JohnGlod/website',
        list: [],
        stack: 'NUXT AOS PWA SCSS Docker',
        animate: {
          name: 'fade-up-left',
          delay: 200,
        },
      },
      {
        image: {
          src: 'https://cdn.discordapp.com/attachments/396268541021782016/1085545325961424896/image.png',
          alt: 'RS-Club — app for finding offline friends and colleagues on the map among rs-school students.',
        },
        title:
          'RS-Club — app for finding offline friends and colleagues on the map among rs-school students.',
        demo: 'https://rs-club.vercel.app/',
        repo: 'https://github.com/evakerrigan/rs-club/pull/20',
        list: [
          'Разработать SPA с использованием React + Typescript',
          'Реализовать командную работу с применением Agile-методологии',
          'Проводить код-ревью для повышения качества продукта',
          'Разработать бекенд часть приложения, используя технологии NESTJS и MONGO DB',
          'Обеспечить интеграцию взаимодействия между бэкенд и фронтенд частями приложения',
          'Оказывать поддержку и помощь другим участникам проекта для достижения общих целей',
        ],
        stack: 'React TS YandexMap NestJS Mongo AntD TeamWork Agile Kanban',
        animate: {
          name: 'fade-up-right',
          delay: 1000,
        },
      },
      {
        image: {
          src: 'https://cdn.discordapp.com/attachments/396268541021782016/1086170775763026070/image.png', // 'https://cdn.discordapp.com/attachments/396268541021782016/1085537197429620736/image.png',
          alt: 'Online-Store - e-commerce store',
        },
        title: 'Online-Store - e-commerce store',
        demo: 'https://s-squad-online-store.netlify.app/',
        repo: 'https://github.com/s-squad/online-store/tree/develop',
        list: [
          'Разработать UI с использованием React + Typescript',
          'Реализовать командную работу с применением Agile-методологии',
          'Проводить код-ревью для повышения качества продукта',
        ],
        stack: 'React TS SCSS TeamWork Agile Kanban',
        animate: {
          name: 'fade-up-left',
          delay: 1800,
        },
      },
      {
        image: {
          src: '/crypto-img.webp',
          alt: 'Crypto - NFT Marketplace',
        },
        title: 'Crypto - NFT Marketplace WEB 3.0 SPA',
        demo: null,
        stack: 'React TS TailwindCSS JEST Storybook Solidity MoralisAPI',
        repo: 'https://github.com/JohnGlod/crypto',
        list: [
          'Разработка UIkit с использованием Storybook.',
          'Создание аунтификации пользователя с использованием Metamask.',
          'Создание, покупка и продажа NFT.',
          'Реализация темной и светлой темы приложения.',
          'Типизация проекта с использованием Typescript.',
          'Знакомство со смартконтрактами, блокчейном и их технической реализацией.',
        ],
        animate: {
          name: 'fade-up-right',
          delay: 1800,
        },
      },
      {
        image: {
          src: 'https://i.ytimg.com/vi/8xH2GjHKYj0/maxresdefault.jpg', // 'https://cdn.discordapp.com/attachments/396268541021782016/1085580492058927284/image.png',
          alt: 'Songbird — quiz app for recognizing birds by their voices.',
        },
        title: 'Songbird — quiz app for recognizing birds by their voices.',
        demo: 'https://rolling-scopes-school.github.io/johnglod-JSFE2022Q3/songbird/index.html',
        repo: 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/songbird/songbird-2022q3.md',
        list: [
          'Разработать викторину на чистом JavaScript.',
          'Разработать UI согласно требованиям проекта',
          'Деплой проекта на GITHUB PAGES.',
        ],
        stack: 'JS SCSS Vite',
        animate: {
          name: 'fade-up-left',
          delay: 2600,
        },
      },
      {
        image: {
          src: '/kam-img.webp',
          alt: 'Kamchatka - animated landing page',
        },
        title: 'Kamchatka - animated landing page',
        demo: 'https://johnglod.github.io/kamchatka/',
        repo: 'https://github.com/JohnGlod/Kamchatka-code',
        stack: 'HTML JS SCSS Gulp',
        list: [
          'Попрактиковаться в верстке, макет показался интересным и необычным.',
          'Познакомиться и применить на практике JS - aнимации (без использования сторонних библиотек).',
          'Реализовать функционал отправки рассылки письма на почту.',
          'Познакомиться и опробовать на практике сборщик Gulp.',
          'Поработать с декоративными элементами.',
          'Знакомство с методологией БЭМ.',
          'Знакомство с Git и GitHub',
        ],
        animate: {
          name: 'fade-up-right',
          delay: 2600,
        },
      },
    ],
    others: [{}, {}],
  }),
}
</script>
<template>
  <section class="projects">
    <div class="container">
      <h2
        class="title"
        data-aos="fade-up-right"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-center"
        data-aos-once="true"
      >
        projects
      </h2>
      <p
        class="subtitle projects__subtitle"
        data-aos="fade-up-right"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-center"
        data-aos-once="true"
        data-aos-delay="300"
      >
        List of my projects
      </p>
      <h3
        class="title"
        data-aos="fade-up-right"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-center"
        data-aos-delay="500"
        data-aos-once="true"
      >
        complete-apps
      </h3>
      <div class="projects__container">
        <project-item
          v-for="(item, id) in projects"
          :key="id"
          :project="item"
          :animate="item.animate"
        />
      </div>
      <!--       <h2 class="title">small-projects</h2>
      <div class="projects__container">
        <project-item
          v-for="item in others"
          :key="item.id"
          :project="item"
          :animate="item.animate"
        />
      </div> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects {
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
      top: 40%;
      left: -30px;
    }
    &::after {
      top: 5%;
      right: -10px;
    }
  }
  &__subtitle {
    margin-bottom: 70px;
  }
  &__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    grid-auto-rows: 1fr;
    margin-bottom: var(--margin-big);
  }
}
</style>
