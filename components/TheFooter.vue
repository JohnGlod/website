<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <h3>Media:</h3>
        <ul class="social-list">
          <li v-for="socialItem in social" :key="socialItem.icon">
            <a :href="socialItem.href" :title="socialItem.title">
              <img :src="socialItem.icon" alt="write me" width="32" height="32" />
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__bottom">
        © Copyright 2022 — 2077. Made by
        <a href="https://github.com/JohnGlod" class="accent" target="_blank">John Glod</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      social: [
        {
          icon: `../../Github.svg`,
          href: 'https://github.com/JohnGlod',
          title: 'Github',
        },
        {
          icon: `../../Telegram.svg`,
          href: 'https://t.me/Veeen',
          title: 'Telegram',
        },
        {
          icon: `../../Email.svg`,
          title: 'Email',
          href: 'evgeniidolgopolov@outlook.com',
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.footer {
  background-color: var(--color-black);
  padding: var(--margin-lg) 0;
  color: var(--color-white);

  &__top {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--margin-small);
    flex-direction: column;
    margin-bottom: var(--margin-small);
  }

  .social-list {
    display: flex;
    list-style: none;
    gap: var(--margin-lg);

    img {
      object-fit: cover;
      object-position: center;
    }

    li {
      transition: transform ease-in-out 0.6s;
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  &__bottom {
    text-align: center;
  }
}
</style>
