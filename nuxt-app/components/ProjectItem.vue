<script lang="ts">
import { defineComponent } from "vue";
import AosVue from "aos-vue";

export default defineComponent({
  props: {
    project: {
      type: Object,
      required: true,
    },
    animate: {
      type: Object,
      required: true,
    },
  },
  components: { AosVue },
});
</script>

<template>
  <section class="project">
    <div class="container">
      <aos-vue
        :animation="animate.name"
        :duration="1000"
        placement="top-bottom"
        :delay="animate.delay"
        :once="true"
      >
        <div class="project__inner">
          <a :href="project.demo">
            <aos-vue
              animation="zoom-in-up"
              :duration="1000"
              placement="top-bottom"
              :delay="animate.delay + 200"
              :once="true"
            >
              <img
                class="project__image"
                :src="project.image.src"
                :alt="project.title"
              />
            </aos-vue>
          </a>
          <div>
            <aos-vue
              animation="fade-left"
              :duration="800"
              placement="top-bottom"
              :delay="animate.delay + 400"
              :once="true"
            >
              <div class="title">{{ project.date }}</div>
            </aos-vue>
            <aos-vue
              animation="fade-left"
              :duration="800"
              placement="top-bottom"
              :delay="animate.delay + 600"
              :once="true"
            >
              <h3 class="title">{{ project.title }}</h3>
            </aos-vue>

            <aos-vue
              animation="fade-left"
              :duration="800"
              placement="top-bottom"
              :delay="1500"
              :once="true"
            >
              <h4 class="subtitle">Цель проекта:</h4>
            </aos-vue>

            <ul class="project__list">
              <li v-for="(item, id) in project.list" :key="id">
                <aos-vue
                  animation="fade-left"
                  :duration="800"
                  placement="top-bottom"
                  :delay="animate.delay + 600 + id * 200"
                  :once="true"
                >
                  {{ item }}
                </aos-vue>
              </li>
            </ul>
            <aos-vue
              animation="fade-left"
              :duration="800"
              placement="top-bottom"
              :delay="1000"
              :once="true"
              class="links"
            >
              <a class="links__item" :href="project.demo">Demo </a>
              |
              <a
                class="links__item"
                :href="project.repo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo</a
              >
            </aos-vue>
          </div>
        </div>
      </aos-vue>
    </div>
  </section>
</template>

<style lang="scss">
.project {
  overflow: hidden;
  &__inner {
    columns: 2 var(--content);
    margin-bottom: var(--margin-big);
  }

  &__image {
    display: block;
    object-position: center;
    object-fit: cover;
    max-width: 560px;
    width: 100%;
    height: 350px;
    margin-bottom: var(--margin-big);
    border: 2px solid #000;
  }

  &__list > li {
    margin-bottom: var(--margin-small);
    list-style-type: none;
  }
}
</style>
