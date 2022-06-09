<script lang="ts">
import { defineComponent } from "vue";
import TheLogo from "./TheLogo.vue";

export default defineComponent({
  components: { TheLogo },
});
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <a href="#" class="footer__name">John Glod</a>
      </div>
      <div class="footer__bottom">© Все права защищены 2022 — 2077</div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background-color: #fff;
  padding: var(--margin-lg) 0;
  &__top{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: var(--margin-small);
  }
  &__name {
    display: block;
    padding: 0 var(--margin-lg);
    color: #000;
    font-size: 2rem;
    text-decoration: none;
    font-family: "My Soul", cursive;
  }
  &__bottom {
    text-align: center;
  }
}
</style>
