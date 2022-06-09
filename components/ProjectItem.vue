<!-- <script lang="ts">
import Vue from "vue";
/* import aosMixin from "../mixins/aos"; */

export default Vue.extend({
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
 /*  mixins: [aosMixin], */
});
</script> -->
<script>
import aosMixin from "~/mixins/aos"
export default {
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
  mixins: [aosMixin],
}
</script>
<template>
  <section class="project">
    <div class="container">
      <div
        class="project__inner"
        :data-aos="animate.name"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-bottom"
        :data-aos-delay="animate.delay"
        data-aos-once="true"
      >
        <a
          :href="project.demo"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
          :data-aos-delay="animate.delay + 200"
          data-aos-once="true"
        >
          <img
            class="project__image"
            :src="project.image.src"
            :alt="project.title"
          />
        </a>
        <div>
          <div
            class="title"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
            :data-aos-delay="animate.delay + 400"
            data-aos-once="true"
          >
            {{ project.date }}
          </div>

          <h3
            class="title"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
            :data-aos-delay="animate.delay + 600"
            data-aos-once="true"
          >
            {{ project.title }}
          </h3>

          <h4
            class="subtitle"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="1500"
            data-aos-once="true"
          >
            Цель проекта:
          </h4>

          <ul class="project__list">
            <li
              v-for="(item, id) in project.list"
              :key="id"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
              :data-aos-delay="animate.delay + 600 + id * 200"
              data-aos-once="true"
            >
              {{ item }}
            </li>
          </ul>
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="1000"
            data-aos-once="true"
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.project {
  overflow: hidden;
  padding-top: 50px;
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
