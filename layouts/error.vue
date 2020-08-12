<template>
  <b-container class="flex-column">
    <h1 v-if="error.statusCode === 404">Page not found 😓</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </b-container>
</template>

<script lang="ts">
export default {
  name: 'Error',
  props: { error: { type: Object, required: true } },
};
</script>
