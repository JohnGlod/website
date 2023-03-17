<template>
  <NuxtLink class="logo" to="/">
    <img class="logo__image" src="Union.svg" alt="logo" />
    John Glod
  </NuxtLink>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--color-white);
  font-family: var(--font-second);
  font-style: normal;
  font-weight: 700;
  text-decoration: none;
  &__image {
    display: block;
    object-fit: cover;
    object-position: center;

    width: 16px;
    height: 16px;
  }
}
</style>
