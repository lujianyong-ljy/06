<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref} from 'vue'
import Nav from './views/Nav.vue';
import Footer from './components/Footer.vue';

</script>

<template>
      <Nav />
      <RouterView />
      <Footer />
</template>

<style scoped>

</style>
