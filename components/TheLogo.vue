<template>
  <NuxtLink class="logo" to="/">
    <img
      class="logo__image"
      src="/icon.png"
      alt="logo"
    />
  </NuxtLink>
</template>

<style lang="scss" scoped>
.logo {
  &__image {
    display: block;
    object-fit: cover;
    object-position: center;
    width: 48px;
    height: 48px;
  }
}
</style>
