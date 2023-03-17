<template>
  <button class="btn">
    {{ text }}
  </button>
</template>

<script setup>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 8px 16px;
  outline: none;
  background: none;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border: var(--border);
  color: var(--color-white);
  font-family: var(--font-second);
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  background: none;
  @media screen and (min-width: 767px) {
    min-width: 100px;
  }
  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  &:hover:before {
    opacity: 1;
  }
  &:active:after {
    background: transparent;
  }
  &:active {
    color: var(--color-white);
  }
  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--color-black);
    left: 0;
    top: 0;
  }
}
</style>
