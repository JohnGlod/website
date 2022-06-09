<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <TheLogo />
        <nav>
          <ul class="header__list nav-list">
            <li class="nav-list__item">
              <NuxtLink to="/projects">Проекты</NuxtLink>
            </li>
            <li class="nav-list__item">
              <NuxtLink to="/about">Обо мне</NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="links">
          <a class="links__item" href="mailto:john1dolgopoloff@yandex.ru"
            >Email</a
          >
          <a class="links__item" href="https://t.me/Veeen">
            <img src="/tgm.svg" alt="Я в телеграмме!" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheLogo from './TheLogo.vue';

export default defineComponent({
  setup() {},
  components: { TheLogo },
});
</script>

<style lang="scss" scoped>
.header {
  padding: var(--padding-small);
  background-color: #fff;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 5%;
  }
}

.nav-list {
  display: flex;
  gap: 2rem;
  align-items: center;

  &__item {
    list-style: none;

    > a {
      display: inline-flex;
      text-decoration: none;
      color: inherit;
      padding: 10px;
      border-bottom: 1px solid transparent;
      &:hover {
        border-bottom: 1px solid #000;
      }

      &.router-link-active {
        font-weight: var(--font-weight-bold);
        color: var(--color-bg-second);
      }
    }
  }
}

</style>
