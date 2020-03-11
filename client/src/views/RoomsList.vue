<template>
  <div class="roomList">
    <Rooms/>
  </div>
</template>

<script>
import Rooms from '@/components/Rooms.vue';

export default {
  name: 'rooms',
  components: {
    Rooms,
  },
};
</script>