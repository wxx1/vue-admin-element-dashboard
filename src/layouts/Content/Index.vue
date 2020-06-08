<template>
  <div class="home">
    <v-header></v-header>
    <v-main></v-main>
  </div>
</template>

<script>
import vHeader from './Header.vue';
import vMain from './Main.vue';
export default {
  components: {
    vHeader,
    vMain
  }
}
</script>

<style>
.home {
  width: 100%;
  height: 100%;
}
</style>