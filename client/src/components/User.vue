<template>
  <div class="createUser">
    <v-text-field
            label="Name"
            v-model="user.name"
    ></v-text-field>
    <v-text-field
            label="E-mail"
            v-model="user.email"
    ></v-text-field>
     <v-text-field
            label="Password"
            v-model="user.passhash"
    ></v-text-field>
    <v-btn @click='createUser()'>create user</v-btn>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import {User} from './entity/user';

@Component
export default class user extends Vue {
  private user = new User;

  private async createUser() {
    const data = await axios.post('http://localhost:3050/api/user', this.user);
  }
}
</script>





