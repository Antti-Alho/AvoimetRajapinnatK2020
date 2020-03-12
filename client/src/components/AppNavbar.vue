<template>
  <v-toolbar dark extended extension-height="0">
    <v-toolbar-items color="#002046">
      <v-btn dark to='/'> Bro Poker </v-btn>
      <v-btn dark to='/newuser'> Register </v-btn>
      <v-btn dark to='/rooms'>rooms</v-btn>
      <v-btn dark to='/login'>Login</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang='ts'>
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component
export default class AppNavbar extends Vue {
  private loggedIn: boolean = false;
  private admin: boolean = false;
}
</script>