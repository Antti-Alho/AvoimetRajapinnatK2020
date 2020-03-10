<template>
  <v-toolbar>
    <v-toolbar-items color="#002046">
      <v-btn dark color="#002046" to='/'> home </v-btn>
      <v-btn dark color="#002046" to='/register'> Register </v-btn>
      <v-btn dark color="#002046" to='/order'>Order</v-btn>
      <v-btn dark color="#002046" to='/orders'>My orders</v-btn>
      <v-btn dark color="#002046" to='/orders'>Orders</v-btn>
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