<script>
import aosMixin from '~/mixins/aos'
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
  <article class="project">
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
          <!--           <div
            class="title"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
            :data-aos-delay="animate.delay + 400"
            data-aos-once="true"
          >
            {{ project.date }}
          </div> -->

          <h3
            class="title"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
            :data-aos-delay="animate.delay + 400"
            data-aos-once="true"
          >
            {{ project.title }}
          </h3>

          <h4
            class="subtitle"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
            :data-aos-delay="animate.delay + 600"
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
              :data-aos-delay="animate.delay + 600 + id * 100"
              data-aos-once="true"
            >
              {{ item }}
            </li>
          </ul>
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="2000"
            data-aos-once="true"
            class="links"
          >
            <a class="links__item" :href="project.demo">Демо </a>
            |
            <a
              class="links__item"
              :href="project.repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Код</a
            >
          </div>
        </div>
      </div>
    </div>
  </article>
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
    object-fit: contain;
    max-width: 560px;
    width: 100%;
    height: 350px;
    margin-bottom: var(--margin-big);
    @media screen and (min-width: 767px) {
      object-fit: cover;
      border: 4px solid #fff;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
    }
  }

  &__list {
    margin-bottom: var(--margin-lg);
    padding-left: var(--margin-lg);
    > li {
      margin-bottom: var(--margin-small);
      padding-left: 10px;
      list-style: '✅';
    }
  }
}
</style>
