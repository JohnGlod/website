<template>
  <NuxtLink class="logo" to="/">
    <img class="logo__image" src="/logo.png" alt="logo" />
  </NuxtLink>
</template>

<style lang="scss" scoped>
.logo {
  &__image {
    display: block;
    width: 48px;
    height: 48px;
    object-fit: cover;
    object-position: center;
  }
}
</style>

