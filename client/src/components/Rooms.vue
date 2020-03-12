<template>
  <v-app>
    <v-layout align-center justify-start column>
      <v-card
        class="mx-auto ma-12 pa-12"
        :raised="true"
        :width="600"
      >
        <v-card-title class="Blue">Rooms</v-card-title>
        <v-data-table
          :headers="headers"
          :items="rooms"
          :items-per-page=500
          :sort-by="['orderid']"
          :sort-desc="[true]"
          hide-default-footer
          class="elevation-1"
        >
 
          <template v-slot:item.join="{ item }">
            <v-btn
              color="primary"
              @click="joinRoom(item.id)"
            >
              join
            </v-btn>
          </template>
        </v-data-table>
        <v-card-actions>
          <v-btn color="primary" @click="createRoom">create room</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from '../plugins/axios';
import {Room} from './entity/room';
import router from '../../../api/src/routes/user';

@Component({
  components: {
  },
})
export default class Rooms extends Vue {
  private rooms: Room[] = [];
  private room: Room = new Room();

  private headers = [
    { text: 'Room', value: 'id' },
    { text: 'player count', value: 'users.length'},
    { text: 'Join Room', value: 'join' },
  ];

  constructor() {
    super();
    this.hae();
  }

  private async hae() {
    const response = await axios.get('http://localhost:3050/api/room');
    this.rooms = await response.data;
  }

  private async joinRoom(id: number) {
    this.rooms.forEach(async ( element ) => {
      if (element.id === id) {
        await axios.patch(`http://localhost:3050/api/room/${id}`, element);
      }
    });
    this.$router.push(`/room/${id}`);
  }

  private async createRoom() {
    const data = await axios.post('http://localhost:3050/api/room', this.room);
    this.hae()
  }
}
</script>
