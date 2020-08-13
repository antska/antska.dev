<template>
  <b-container class="flex-column">
    <b-card
      class="rounded-0 text-left my-auto"
      :class="$mq"
      body-class="h3 d-flex flex-column justify-content-between card-text"
      bg-variant="grey"
      body-text-variant="primary"
    >
      <div class="intro text-primary position-absolute z2" :class="$mq">
        <h4 class="text-center font-italic">Hi! I' m</h4>
        <h1 class="name pt-2 px-2" :class="$mq">{{ data.name }}</h1>
      </div>
      <b-card-text :class="$mq === 'xs' ? 'mt-10' : 'mt-12'">
        &lt;<span
          v-b-hover="handleHoverTitle"
          :class="isHoveredTitle ? 'gradient-hover' : ''"
          >Frontend Engineer</span
        >
        with passion about the Web and programming. Nature & sports lover.
        Currently working in
        <span
          ><a
            v-b-hover="handleHoverCompany"
            href="https://www.omilia.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-secondary"
            :class="isHoveredCompany ? 'gradient-hover text-primary' : ''"
            >Omilia ltd</a
          ></span
        >
        /&gt;
      </b-card-text>

      <div class="text-center">
        <a
          v-for="social in data.social"
          :key="social.icon"
          :href="social.link"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary h2 mr-2"
        >
          <FontAwesomeIcon :icon="['fab', social.icon]" />
        </a>
      </div>
    </b-card>
  </b-container>
</template>

<script>
import data from '~/static/data.json';

export default {
  name: 'Hero',
  data() {
    return {
      data,
      isHoveredTitle: false,
      isHoveredCompany: false,
    };
  },
  methods: {
    handleHoverTitle(hovered) {
      this.isHoveredTitle = hovered;
    },
    handleHoverCompany(hovered) {
      this.isHoveredCompany = hovered;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.card {
  min-height: 550px;
  width: 400px;
  border: 4px solid;

  &.xs {
    min-height: 400px;
    width: 250px;
  }

  &.sm {
    min-height: 450px;
    width: 300px;
  }

  &.md {
    min-height: 550px;
    width: 400px;
  }
}

.gradient-hover {
  background: #9fa2a7;
  transition: background-color 300ms linear;
}

.name {
  background: #dad299;
  background: linear-gradient(to right, #dad299, #b0dab9);
  line-height: 0.9;
  font-size: 7rem;
  white-space: nowrap;

  &.xs {
    font-size: 3.6rem;
  }

  &.sm {
    font-size: 5rem;
  }

  &.md {
    font-size: 7rem;
  }
}

.intro {
  left: -106px;

  &.xs {
    left: -28px;
  }

  &.sm {
    left: -63px;
  }

  &.md {
    left: -106px;
  }
}
</style>
