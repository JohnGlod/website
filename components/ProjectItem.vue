<script>
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
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
}
</script>

<template>
  <article class="project">
    <div class="container">
      <div class="project__inner" :data-aos="animate.name" data-aos-duration="1000" data-aos-anchor-placement="top-bottom"
        :data-aos-delay="animate.delay" data-aos-once="true">
        <a :href="project.demo" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom"
          :data-aos-delay="animate.delay + 200" data-aos-once="true">
          <img class="project__image" :src="project.image.src" :alt="project.title" />
        </a>
        <div>
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

          <h4 class="subtitle" data-aos="fade-left" data-aos-duration="800" data-aos-anchor-placement="top-bottom"
            :data-aos-delay="animate.delay + 600" data-aos-once="true">
            Цель проекта:
          </h4>

          <ul class="project__list">
            <li v-for="(item, id) in project.list" :key="id" data-aos="fade-left" data-aos-duration="800"
              data-aos-anchor-placement="top-bottom" :data-aos-delay="animate.delay + 600 + id * 100"
              data-aos-once="true">
              {{ item }}
            </li>
          </ul>
          <div data-aos="fade-left" data-aos-duration="800" data-aos-anchor-placement="top-bottom" data-aos-delay="2000"
            data-aos-once="true" class="links">
            <a class="links__item" :href="project.demo">Демо </a>
            |
            <a class="links__item" :href="project.repo" target="_blank" rel="noopener noreferrer">
              Код</a>
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
    @media screen and (min-width: 1024px) {
      display: block;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--margin-big);
  }

  &__image {
    display: block;
    object-position: center;
    object-fit: contain;
    max-width: 560px;
    width: 100%;
    height: 90%;
    margin-bottom: var(--margin-big);
    transition: transform ease-in 0.8s;

    @media screen and (min-width: 767px) {
      object-fit: cover;
      border: 4px solid #fff;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  &__list {
    margin-bottom: var(--margin-lg);
    padding-left: var(--margin-lg);

    >li {
      margin-bottom: var(--margin-small);
      padding-left: 10px;
      list-style: '✅';
    }
  }
}
</style>
