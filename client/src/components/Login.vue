<template>
  <v-app>
    <v-layout justify-center column>
      <v-card
        class="mx-auto ma-12 pa-12"
        :raised="true"
        :width="600"
      >
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-text-field
                  label="E-mail"
                  v-model="email"
          ></v-text-field>
          <div v-show="submitted && !email" class="invalid-feedback">Email is required</div>
            <v-text-field
                  :type="false ? 'text' : 'password'"
                  label="Password"
                  v-model="pass"
          ></v-text-field>
          <div v-show="submitted && !pass" class="invalid-feedback">Password is required</div>
          <v-alert v-show="error" type="error">
            Check your email and password
          </v-alert>
          <v-card-actions>
            <v-btn color="primary" @click='login()'>Login</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-app>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Login extends Vue {
  private email: string = '';
  private pass: string = '';
  private error = false;
  private submitted = false;

  private async login() {
    this.submitted = true;
    try {
      const jwt = await axios.post('http://localhost:3050/api/auth/login', {email: this.email, password: this.pass});
      localStorage.setItem('auth', jwt.data);
      this.$router.push('/rooms');
    } catch (e) {
      this.error = true;
    }
  }
}
</script>