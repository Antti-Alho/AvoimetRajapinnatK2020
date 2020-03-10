<template>
  <v-app>
    <AppNavbar></AppNavbar>
    <router-view />
    <AppFooter></AppFooter>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';

@Component({
  components: {
    AppNavbar,
    AppFooter,
  },
})
export default class App extends Vue {
}
</script>
