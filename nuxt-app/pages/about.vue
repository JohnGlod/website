<script lang="ts">
import { defineComponent } from "vue";
import AosVue from "aos-vue";
export default defineComponent({
  components: { AosVue },
});
</script>

<template>
  <section class="about">
    <div class="container">
      <div class="about__inner">
        <aos-vue
          animation="fade-up-right"
          :duration="800"
          placement="top-bottom"
          :delay="300"
        >
          <h2 class="about__title title">Немного обо мне</h2>
        </aos-vue>

        <div class="about__col">
          <div class="about__list">
            <aos-vue
              animation="fade-up-right"
              :duration="800"
              placement="top-bottom"
              :delay="500"
            >
              <h3 class="subtitle">Ключевые навыки:</h3>
            </aos-vue>
            <ul class="list">
              <aos-vue
                animation="fade-up-right"
                :duration="1000"
                placement="top-bottom"
                :delay="600"
              >
                <li class="list__item">
                  HTML, CSS (SCSS, BEM, Materialize, Tailwind CSS, css-modules)
                </li>
              </aos-vue>
              <aos-vue
                animation="fade-up-right"
                :duration="1000"
                placement="top-bottom"
                :delay="800"
              >
                <li class="list__item">JavaScript ES6+, TypeScript</li>
              </aos-vue>
              <aos-vue
                animation="fade-up-right"
                :duration="1000"
                placement="top-bottom"
                :delay="1000"
              >
                <li class="list__item">React, Redux, Redux Toolkit</li>
              </aos-vue>
              <aos-vue
                animation="fade-up-right"
                :duration="1000"
                placement="top-bottom"
                :delay="1200"
              >
                <li class="list__item">Адаптивная и семантическая вёрстка</li>
              </aos-vue>
              <aos-vue
                animation="fade-up-right"
                :duration="1000"
                placement="top-bottom"
                :delay="1400"
              >
                <li class="list__item">Небольшой опыт с Vue, Nuxt</li>
              </aos-vue>
            </ul>
          </div>
          <div class="about__list">
            <aos-vue
              animation="fade-up-right"
              :duration="800"
              placement="top-bottom"
              :delay="1500"
            >
              <h3 class="subtitle">Прочие знания:</h3>
            </aos-vue>

            <ul class="list">
              <aos-vue
                animation="fade-up-right"
                :duration="1000"
                placement="top-bottom"
                :delay="1700"
              >
                <li class="list__item">Сборщики: Gulp, Webpack</li>
              </aos-vue>
              <aos-vue
                animation="fade-up-right"
                :duration="1000"
                placement="top-bottom"
                :delay="1900"
              >
                <li class="list__item">
                  Опыт работы с графическими редакторами: Figma, Zeplin, Avocode
                </li>
              </aos-vue>
              <aos-vue
                animation="fade-up-right"
                :duration="1000"
                placement="top-bottom"
                :delay="2100"
              >
                <li class="list__item">
                  Прочее: Git, Chrome DevTools, Postman
                </li>
              </aos-vue>
            </ul>
          </div>
          <div class="about__list">
            <aos-vue
              animation="fade-up-right"
              :duration="800"
              placement="top-bottom"
              :delay="1500"
            >
              <h3 class="subtitle">Soft-скиллы:</h3>
            </aos-vue>

            <ul class="list">
              <aos-vue
                animation="fade-up-right"
                :duration="1000"
                placement="top-bottom"
                :delay="1700"
              >
                <li class="list__item">
                  Внимание к деталям, эффективное выполнение задач
                </li>
              </aos-vue>
              <aos-vue
                animation="fade-up-right"
                :duration="1000"
                placement="top-bottom"
                :delay="1900"
              >
                <li class="list__item">Умение работать в команде</li>
              </aos-vue>
              <aos-vue
                animation="fade-up-right"
                :duration="1000"
                placement="top-bottom"
                :delay="2100"
              >
                <li class="list__item">
                  Способность учиться и адаптироваться к новым задачам
                </li>
              </aos-vue>
              <aos-vue
                animation="fade-up-right"
                :duration="1000"
                placement="top-bottom"
                :delay="2100"
              >
                <li class="list__item">
                  Отсутствие вредных привычек, энергичность, самостоятельность
                </li>
              </aos-vue>
            </ul>
          </div>
          <div class="about__list">
            <aos-vue
              animation="fade-up-right"
              :duration="1000"
              placement="top-bottom"
              :delay="2200"
            >
              <p class="about__text">
                Постоянно учусь и совершенствую свои навыки, а главное по
                настоящему люблю свое дело. Ищу место, где получу возможность
                расти и развиваться как в профессиональном так и личностном
                плане.
              </p>
            </aos-vue>
            <aos-vue
              animation="fade-up-right"
              :duration="1000"
              placement="top-bottom"
              :delay="2400"
            >
              <p class="about__text">
                Интересуюсь и слежу за современными тенденциями в frontend мире,
                постоянно развиваюсь, читаю профильную литературу и habr /
                medium, слушаю Веб- стандарты.
              </p>
            </aos-vue>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about {
  padding: var(--padding-section);

  &__col {
    columns: 2 var(--content);
  }

  &__list {
    margin-bottom: var(--margin-big);
    padding: 15px;
  }

  &__text {
    margin-bottom: var(--margin-lg);
    max-width: var(--content);
  }
}

.list__item {
  padding-left: 10px;
  margin-bottom: 10px;
  list-style: "✅";
}
</style>
