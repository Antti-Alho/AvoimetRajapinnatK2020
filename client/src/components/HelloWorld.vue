<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-btn :onclick=hae()>asd</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Room extends Vue {
  @Prop() private msg!: string;

  private async hae() {
    const data = await axios.get('http://localhost:3050/api/room');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
