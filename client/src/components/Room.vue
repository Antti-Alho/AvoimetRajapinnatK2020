<template>
  <v-app>
    <v-layout justify-center column>
      <v-card
        class="mx-auto ma-12 pa-12"
        :raised="true"
        :width="780"
      >
        <v-card-title>Room</v-card-title>
        <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">name</th>
                    <th class="text-left">points</th>
                    <th class="text-left">hand1</th>
                    <th class="text-left">hand2</th>
                    <th class="text-left">hand3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in room.users" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.points }}</td>
                    <td>{{ item.hand1 }}</td>
                    <td>{{ item.hand2 }}</td>
                    <td>{{ item.hand3 }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          <v-form>
            <v-file-input
              v-model="files"
              placeholder="Select files"
              label="File upload"
              multiple
              show-size 
              counter
              :readonly="false"
            >
              <template v-slot:selection="{ text }">
                <v-chip
                  small
                  label
                  color="primary"
                >
                  {{ text }}
                </v-chip>
              </template>
            </v-file-input>
          </v-form>

        </v-card-text>
        
        <v-card-actions>
            <v-btn
              color="primary"
              @click="submit"
            >
              Submit
            </v-btn>          
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import axios from '../plugins/axios';
import { Room } from './entity/room';

@Component({
  components: {
  },
})
export default class GameRoom extends Vue {
  private error: boolean = false;
  private errmess: string = '';
  private files: File[] = [];
  private room = new Room();

  private ajaxconfig = {
    headers: {'Content-Type': 'multipart/form-data' },
  };

  public async mounted() {
    console.log(this.$route.params.id);
    this.getRoomData();
  }

  private async getRoomData() {
    let response = await axios.get(`http://localhost:3050/api/room/${this.$route.params.id}`);
    console.log(response.data)
    this.room = response.data;
  }

  private async submit() {
    const formData = new FormData();

    this.files.forEach( (element) => {
      formData.append('file', element, element.name);
    });
    try {
      let response = await axios.post('http://localhost:3050/api/file/upload', formData, this.ajaxconfig);
      console.log(response.data)
      this.getRoomData()
    } catch (error) {
      this.error = true;
      this.errmess = 'error';
      return;
    }

  }

}
</script>