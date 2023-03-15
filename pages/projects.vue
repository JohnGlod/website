<script>
import { uniqueId } from 'lodash'

export default {
  name: 'ProjectPage',
  components: { 'project-item': () => import('~/components/ProjectItem.vue') },
  data: () => ({
    projects: [
      {
        id: uniqueId(),
        image: {
          src: 'https://cdn.discordapp.com/attachments/396268541021782016/1085545325961424896/image.png',
          alt: 'RS-Club - приложение для поиска оффлайн друзей и коллег на карте планеты, среди людей, учащихся в rs-school.',
        },
        title:
          'RS-Club - приложение для поиска оффлайн друзей и коллег на карте планеты, среди людей, учащихся в rs-school.',
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
        animate: {
          name: 'fade-up-right',
          delay: 0,
        },
      },
      {
        id: uniqueId(),
        image: {
          src: 'https://cdn.discordapp.com/attachments/396268541021782016/1085537197429620736/image.png',
          alt: 'Online-Store - Интернет магазин',
        },
        title: 'Online-Store - Интернет магазин',
        demo: 'https://s-squad-online-store.netlify.app/',
        repo: 'https://github.com/s-squad/online-store/tree/develop',
        list: [
          'Разработать UI с использованием React + Typescript',
          'Реализовать командную работу с применением Agile-методологии',
          'Проводить код-ревью для повышения качества продукта',
        ],
        animate: {
          name: 'fade-up-left',
          delay: 1000,
        },
      },
      {
        id: uniqueId(),
        image: {
          src: '/crypto-img.webp',
          alt: 'Crypto - NFT Marketplace',
        },
        date: 'Февраль 2022 — настоящее',
        title: 'Crypto - NFT Marketplace WEB 3.0 SPA',
        demo: '#!',
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
          delay: 0,
        },
      },
      {
        id: uniqueId(),
        image: {
          src: 'https://cdn.discordapp.com/attachments/396268541021782016/1085580492058927284/image.png',
          alt: 'Songbird - приложение-викторина для распознавания птиц по их голосам.',
        },
        title:
          'Songbird - приложение-викторина для распознавания птиц по их голосам.',
        demo: 'https://rolling-scopes-school.github.io/johnglod-JSFE2022Q3/songbird/index.html',
        repo: 'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/songbird/songbird-2022q3.md',
        list: [
          'Разработать викторину на чистом JavaScript.',
          'Разработать UI согласно требованиям проекта',
          'Деплой проекта на GITHUB PAGES.',
        ],
        animate: {
          name: 'fade-up-right',
          delay: 0,
        },
      },
      {
        id: uniqueId(),
        image: {
          src: '/kam-img.webp',
          alt: 'Камчатка - анимированный лендинг',
        },
        date: 'Август 2021 — Ноябрь 2021',
        title: 'Камчатка - анимированный лендинг',
        demo: 'https://johnglod.github.io/kamchatka/',
        repo: 'https://github.com/JohnGlod/Kamchatka-code',
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
          name: 'fade-up-left',
          delay: 1000,
        },
      },
    ],
  }),
}
</script>
<template>
  <section>
    <project-item
      v-for="item in projects"
      :key="item.id"
      :project="item"
      :animate="item.animate"
    />
  </section>
</template>
