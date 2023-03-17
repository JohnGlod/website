<script>
export default {
  components: {
    TheLogo: () => import('~/components/TheLogo.vue'),
  },
  data: () => ({
    menuOpen: false,
    sections: [
      {
        title: 'home',
        url: '/',
      },
      {
        title: 'projects',
        url: '/projects',
      },
      {
        title: 'about-me',
        url: '/about',
      },
/*       {
        title: 'contacts',
        url: '/contacts',
      }, */
    ],
  }),
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <TheLogo />
        <button
          class="toggle-nav"
          aria-controls="main-menu"
          aria-label="Меню навигации"
          :aria-expanded="[menuOpen ? 'true' : 'false']"
          :class="{ open: menuOpen }"
          @click="menuOpen = !menuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav
          class="header__list"
          :class="{ open: menuOpen }"
          role="navigation"
          aria-label="Главное меню"
        >
          <ul id="main-menu" class="nav-list">
            <li v-for="(item, id) in sections" :key="id" class="nav-list__item">
              <NuxtLink :to="item.url">{{ item.title }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: var(--padding-small);
  color: var(--color-white);
  background-color: var(--color-black);
  position: fixed;
  height: 80px;
  inset: 0;
  z-index: 2;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 5%;
  }

  &__list {
    position: fixed;
    left: 0;
    top: 0px;
    height: 100vh;
    min-width: 320px;
    padding: 50px;
    transform: translateX(-100%);
    color: #fff;
    opacity: 0;
    background: rgba(255, 255, 255, 0);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(43, 43, 43, 0.568);

    &.open {
      transform: translateX(0);
      opacity: 1;
      z-index: 2;
      transition: all 0.2s ease-out;
    }

    @media screen and (min-width: 767px) {
      height: auto;
      padding: 0;
      position: static;
      background-color: var(--color-black);
      transform: translateX(0);
      display: flex;
      justify-content: space-between;
      visibility: visible;
      transition: none;
      opacity: 1;
      border: none;
    }
  }

  &__links {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (min-width: 767px) {
      position: static;
      transform: none;
    }
  }
}

.nav-list {
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: end;
    align-self: flex-end;
    position: static;
    flex-grow: 1;
  }

  &__item {
    list-style: none;
    margin-bottom: 20px;
    font-size: 2rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.45);
    font-family: 'Fira Code';
    line-height: 21px;
    color: var(--color-primary);

    @media screen and (min-width: 767px) {
      font-size: 1rem;
      margin-bottom: 0px;
      text-shadow: none;
    }

    > a {
      display: inline-flex;
      text-decoration: none;
      color: inherit;
      padding: 10px;
      border-bottom: 1px solid transparent;
      position: relative;
      width: 100%;
      &::before {
        content: '#';
        color: #2ec4b6;
      }
      &:hover {
        border-bottom: 1px solid var(--color-primary);
      }

      &.nuxt-link-active {
        font-weight: var(--font-weight-bold);
        color: #fff;
      }
    }
  }
}

.toggle-nav {
  position: absolute;
  top: 40px;
  right: 20px;
  width: 40px;
  height: 22px;
  background: none;
  box-shadow: none;
  border: none;
  outline: 0;
  cursor: pointer;
  z-index: 10;

  span {
    position: absolute;
    left: 50%;
    width: 26px;
    height: 2px;
    background-color: #fff;

    &:nth-child(1) {
      top: 0;
      transform: translateX(-50%) translateY(0);
      transition: top 0.3s cubic-bezier(0.21, 0.83, 0.26, 0.87) 0.3s,
        transform 0.3s cubic-bezier(0.21, 0.83, 0.26, 0.87);
    }

    &:nth-child(2) {
      top: 8px;
      opacity: 1;
      transform: translateX(-50%);
    }

    &:last-child {
      top: 16px;
      transform: translateX(-50%) translateY(0);
      transition: top 0.3s cubic-bezier(0.21, 0.83, 0.26, 0.87) 0.3s,
        transform 0.3s cubic-bezier(0.21, 0.83, 0.26, 0.87);
    }
  }

  &.open {
    span {
      &:nth-child(1) {
        top: 50%;
        transform: translateX(-50%) translateY(0) rotate(45deg);
        transition: top 0.3s cubic-bezier(0.21, 0.83, 0.26, 0.87),
          transform 0.3s cubic-bezier(0.21, 0.83, 0.26, 0.87) 0.3s;
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:last-child {
        top: 50%;
        transform: translateX(-50%) translateY(0) rotate(-45deg);
        transition: bottom 0.3s cubic-bezier(0.21, 0.83, 0.26, 0.87),
          transform 0.3s cubic-bezier(0.21, 0.83, 0.26, 0.87) 0.3s;
      }
    }
  }

  @media screen and (min-width: 767px) {
    display: none;
    visibility: hidden;
  }
}
</style>
