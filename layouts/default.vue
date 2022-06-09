<script>
export default {
  components: {
    'the-header-vue': () => import('~/components/TheHeader.vue'),
    'the-footer-vue': () => import('~/components/TheFooter.vue'),
  },
}
</script>

<template>
  <div class="wrapper">
    <the-header-vue />
    <main class="main">
      <Nuxt />
    </main>
    <the-footer-vue />
  </div>
</template>




