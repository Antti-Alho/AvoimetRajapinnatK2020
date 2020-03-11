<template v-slot:default>
     <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Room</th>
          <th class="text-left">Players</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="room in rooms" v-bind:key="room.id">
          <td>{{ id }}</td>
        </tr>
      </tbody>
  </v-simple-table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import {Room} from './entity/room';

@Component({
  components: {
  },
})
export default class Rooms extends Vue {
  private rooms: Room[] = [];

  private async hae() {
    const data = await axios.get('http://localhost:3050/api/room');
    // console.log(data.data);
    this.rooms = data.data;
    // console.log(this.rooms);
  }
}
</script>
