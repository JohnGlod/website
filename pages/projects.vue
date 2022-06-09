<script>
export default {
  name: 'ProjectPage',
  data() {
    return {
      projects: [
        {
          id: 1,
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
          id: 2,
          image: {
            src: '/kam-img.webp',
            alt: 'Камчатка - анимированный лендинг ',
          },
          date: 'Август 2021 — Ноябрь 2021',
          title: 'Камчатка',
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
    }
  },
  components: { 'project-item': () => import('~/components/ProjectItem.vue') },
}
</script>
<template>
  <div>
    <project-item
      v-for="item in projects"
      :key="item.id"
      :project="item"
      :animate="item.animate"
    />
  </div>
</template>
