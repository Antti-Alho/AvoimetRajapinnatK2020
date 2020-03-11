<template>
  <v-app>
    <v-layout justify-center column>
      <v-card
        class="mx-auto ma-12 pa-12"
        :raised="true"
        :width="600"
      >
        <v-card-title>Room</v-card-title>
        <v-card-text>
          <p>{{hand}}</p>
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

@Component({
  components: {
  },
})
export default class GameRoom extends Vue {
  private error: boolean = false;
  private errmess: string = '';
  private files: File[] = [];
  private hand: string[] = [];

  private ajaxconfig = {
    headers: {'Content-Type': 'multipart/form-data' },
  };

  private async submit() {
    const formData = new FormData();

    this.files.forEach( (element) => {
      formData.append('file', element, element.name);
    });
    try {
      this.hand = await axios.post('http://localhost:3050/api/file/upload', formData, this.ajaxconfig);
    } catch (error) {
      this.error = true;
      this.errmess = 'error';
      return;
    }

  }

}
</script>