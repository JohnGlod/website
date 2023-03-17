<script>
import aosMixin from '~/mixins/aos'
export default {
  name: 'IndexPage',
  mixins: [aosMixin],
}
</script>
<template>
  <section class="hero">
    <div class="container">
      <div class="hero__inner">
        <div class="hero__text">
          <h1
            class="hero__title"
            data-aos="fade-up-right"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-center"
          >
            John is a <span class="accent">software-engineer </span> and
            <span class="accent">front-end developer</span>
          </h1>
          <p
            class="hero__descr"
            data-aos="fade-up-right"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            data-aos-once="true"
          >
            My experience in Frontend development enables me to strive for a
            product that is not only user-friendly, high-quality and compliant
            with current W3C standards.
          </p>
        </div>
        <div class="hero__image image-container">
          <picture class="image-container__animate">
            <source srcset="/photo.webp" type="image/webp"/>
            <source srcset="/photo.png" type="image/png" />
            <img src="/photo.png" alt="Photo in cyberpunk style" aria-hidden="true" />
          </picture>
          <span class="image-container__text"
            >Currently working on
            <NuxtLink to="/projects" class="accent">Portfolio</NuxtLink>
          </span>
        </div>
      </div>
      <figure
        class="hero__quote quote"
        data-aos="fade-up-right"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-center"
      >
        <blockquote>
          <p>With great power comes great electricity bill</p>
        </blockquote>
        <figcaption class="quote__author">- Dr. Who</figcaption>
      </figure>
      <div class="hero__skills skills">
        <h2 class="title">skills</h2>
        <div class="skills__inner">
          <img src="/figure.png" alt="figure" aria-hidden="true" />
          <div class="skills__container">
            <div class="lang">
              <div class="skill">
                <h5>Languages</h5>
                <p>JavaScript TypeScript</p>
              </div>
            </div>
            <div class="others">
              <div class="skill">
                <h5>Databases</h5>
                <p>PostgreSQL Mongo</p>
              </div>
              <div class="skill">
                <h5>Others</h5>
                <p>HTML CSS SCSS</p>
                <p>REST OOP Patters AJAX</p>
              </div>
            </div>
            <div class="fraime">
              <div class="skill">
                <h5>Frameworks</h5>
                <p>React [ Redux, RTK ]</p>
                <p>Angular NestJS</p>
                <p>Vue NustJS</p>
              </div>
            </div>
            <div class="tools">
              <div class="skill">
                <h5>Tools</h5>
                <p>Postman Git NVM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=""></div>
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  padding: var(--padding-section);
  color: var(--color-white);
  position: relative;
  @media screen and (min-width: 767px) {
    &::after {
      content: '';
      background-image: url('/Dots.svg');
      background-repeat: no-repeat;
      position: absolute;
      width: 86.39px;
      height: 84px;
      top: 5%;
      right: -10px;
      z-index: 1;
    }
    &::before {
      content: '';
      background-image: url('/Dots.svg');
      background-repeat: no-repeat;
      position: absolute;
      width: 86.39px;
      height: 84px;
      bottom: 40%;
      left: -30px;
      z-index: 1;
    }
  }

  &__text {
    max-width: 560px;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: var(--font-weight-bold);
    margin-bottom: var(--margin-lg);
    letter-spacing: normal;
  }

  &__descr {
    margin-bottom: var(--margin-lg);
  }

  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
    position: relative;
  }
  &__quote {
    margin: 50px auto;
    padding: 2rem;
    max-width: 700px;
    border: 1px solid var(--color-sea);
  }

  .quote {
    font-weight: 500;
    font-size: 1.5rem;
    position: relative;
    &::after,
    &::before {
      content: '';
      width: 41.47px;
      height: 28.7px;
      position: absolute;
      background-image: url('/quote.svg');
    }
    &::after {
      bottom: -12px;
      right: 50px;
    }
    &::before {
      top: -12px;
      left: 50px;
    }
    &__author {
      $height: 60px;
      position: absolute;
      bottom: -$height;
      right: 0;
      padding: 16px;
      border: 1px solid var(--color-sea);
    }
  }
  .image-container {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: var(--color-white);
    position: relative;
    &::after {
      content: '';
      background-image: url('/Dots.svg');
      position: absolute;
      width: 86.39px;
      height: 84px;
      bottom: 40%;
      right: -30px;
      z-index: 1;
    }
    &__animate {
      align-items: center;
      display: flex;
      height: min(max(40vw, 350px), 500px);
      justify-content: center;
      position: relative;
      width: min(max(40vw, 350px), 500px);
      z-index: 1;
      border: 2px solid transparent;
      margin-bottom: 30px;
      img {
        object-fit: cover;
        height: 100%;
        object-position: center;
        width: 100%;
      }

      &::before,
      &::after {
        background-image: linear-gradient(
          -180deg,
          #94e48d 0%,
          var(--color-sea) 97%
        );
        content: '';
        height: 100%;
        position: absolute;
        transition: all 0.4s;
        transition-delay: 0.2s;
        transform: translateY(0px) translateX(0px);
        width: 100%;
        z-index: -1;
      }

      &::after {
        background-image: linear-gradient(
          -180deg,
          var(--color-yellow) 0%,
          #ffae3d 97%
        );
      }

      &:hover {
        animation-name: hoverPop;
        animation-duration: 0.6s;
        animation-fill-mode: forwards;

        img {
          box-shadow: 2px 2px 4px 0px rgba(10, 12, 15, 0.27);
          box-shadow: 0px 0px 30px 0px rgba(10, 12, 15, 0.27);
        }

        &::before {
          animation: slick-hover-2 3s 0.5s linear infinite;
          transform: translateY(-20px) translateX(-20px);
        }

        &::after {
          animation: slick-hover 3s 0.5s linear infinite reverse;
          transform: translateY(20px) translateX(20px);
        }
      }
    }
    &__text {
      display: block;
      padding: 8px 32px;
      border: 1px solid var(--color-sea);
      position: relative;
      &:hover {
        &::before {
          content: '';
          width: 16px;
          height: 16px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 10px;
          background: var(--color-primary);
        }
      }
    }
  }
  .skills {
    &__inner {
      img {
        display: none;
      }
      @media screen and (min-width: 1024px) {
        display: flex;
        img {
          display: block;
        }
      }
    }
    &__container {
      @media screen and (min-width: 767px) {
        flex-grow: 1;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        grid-template-areas:
          'lang others fraime'
          '. others tools';
      }
    }
  }
  .skill {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;
    gap: 8px;
    border: 1px solid var(--color-sea);
    transition: transform ease-in-out 0.6s;
    cursor: crosshair;
    &:hover {
      transform: scale(1.05);
    }
    & > h5 {
      font-style: normal;
      font-weight: 600;
      font-size: 1.5rem;
      border-bottom: 1px solid var(--color-sea);
      margin-bottom: 16px;
      width: 100%;
      padding: 8px;
    }
  }
  .lang {
    grid-area: lang;
  }
  .others {
    grid-area: others;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .fraime {
    grid-area: fraime;
  }
  .tools {
    grid-area: tools;
  }
}
</style>
