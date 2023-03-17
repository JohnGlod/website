<script>
import aosMixin from '~/mixins/aos'
export default {
  components: {
    TheButton: () => import('~/components/TheButton.vue'),
  },
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
  <div
    class="project"
    :data-aos="animate.name"
    data-aos-duration="1000"
    data-aos-anchor-placement="top-bottom"
    :data-aos-delay="animate.delay"
  >
    <div class="project__imagebox">
      <img
        class="project__image"
        :src="project.image.src"
        :alt="project.title"
      />
    </div>
    <div class="project__stack">{{ project.stack }}</div>
    <div class="project__descr">
      <h5 class="project__name">
        {{ project.title }}
      </h5>
      <div class="project__btns">
        <TheButton text="Live" />
        <TheButton text="Repo" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--color-sea);
  justify-content: center;

  &__imagebox {
    flex-grow: 1;
  }

  &__image {
    display: block;
    object-position: center;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  &__name {
    margin-bottom: 16px;
  }

  &__stack {
    padding: 8px;
    border: var(--border);
    width: 100%;
    text-align: center;
  }

  &__descr {
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

</style>
