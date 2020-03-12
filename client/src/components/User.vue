<template v-slot:default>
  <v-app>
    <v-layout justify-center column>
      <v-card
        class="mx-auto ma-12 pa-12"
        :raised="true"
        :width="600"
      >
        <v-card-title>Create User</v-card-title>
        <v-card-text>
          <v-text-field
                  label="Name"
                  v-model="user.name"
          ></v-text-field>
          <div v-show="submitted && !user.name" class="invalid-feedback">name is required</div>
          <v-text-field
                  label="E-mail"
                  v-model="user.email"
          ></v-text-field>
          <div v-show="submitted && !user.email" class="invalid-feedback">Email is required</div>
            <v-text-field
                  :type="false ? 'text' : 'password'"
                  label="Password"
                  v-model="user.passhash"
          ></v-text-field>
          <div v-show="submitted && !user.passhash" class="invalid-feedback">Password is required</div>
          <v-alert v-show="error" type="error">
            {{errormess}}
          </v-alert>
          <v-card-actions>
            <v-btn color="primary" @click='createUser()'>create user</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import {User} from './entity/user';

@Component({
  components: {
  },
})
export default class CreateUser extends Vue {
  private user = new User();
  private submitted = false;
  private error = false;
  private errormess = "";

  private async createUser() {
    this.submitted = true;
    try {
      const data = await axios.post('http://localhost:3050/api/user', this.user);
      this.$router.push('/login');
    } catch (error) {
      this.error = true;
      this.errormess = error;
    }
    
  }
}
</script>





