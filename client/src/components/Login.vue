<template>
  <div class="login">
    <v-text-field
            label="Enter User E-mail"
            v-model="email"
    ></v-text-field>
     <v-text-field
            label="Enter Password"
            v-model="pass"
    ></v-text-field>
    <v-btn @click='login()'>Login</v-btn>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Login extends Vue {
  private email: string = '';
  private pass: string = '';

  private async login() {
    const jwt = await axios.post('http://localhost:3050/api/auth/login', {email: this.email, password: this.pass});
    localStorage.setItem('auth', jwt.data);
  }
}
</script>