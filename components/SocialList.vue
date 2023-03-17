<template>
  <div>
    <ul class="social-list">
      <li v-for="socialItem in social" :key="socialItem.icon">
        <a :href="socialItem.href" :title="socialItem.title">
          <img :src="socialItem.icon" alt="write me" width="32" height="32" />
        </a>
      </li>
    </ul>
  </div>
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

<style lang="scss" scoped>
.social-list {
  display: none;
  @media screen and (min-width: 1400px) {
    display: block;
    position: fixed;
    top: 30%;
    left: 60px;
    z-index: 10;
    list-style: none;
    &::after {
      content: '';
      width: 150px;
      height: 2px;
      position: absolute;
      top: -80px;
      left: -60px;
      transform: rotate(90deg);
      background-color: var(--color-sea);
    }
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
}
</style>
