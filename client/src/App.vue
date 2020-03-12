<template>
  <v-app>
    <AppNavbar/>
    <router-view />
    <AppFooter/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';

export default Vue.extend({
  name: 'App',

  components: {
    AppNavbar,
    AppFooter,
  },

  data: () => ({
  }),
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background: #121314;
}

</style>
