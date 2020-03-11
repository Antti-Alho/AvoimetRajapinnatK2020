<template>
  <v-toolbar extended extension-height="0">
    <v-toolbar-items color="#002046">
      <v-btn dark color="#002046" to='/'> home </v-btn>
      <v-btn dark color="#002046" to='/newuser'> Register </v-btn>
      <v-btn dark color="#002046" to='/rooms'>rooms</v-btn>
      <v-btn dark color="#002046" to='/room/0'>rooms</v-btn>
      <v-btn dark color="#002046" to='/login'>Login</v-btn>
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