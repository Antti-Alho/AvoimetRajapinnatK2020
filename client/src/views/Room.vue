<template>
  <div class="room">
    <GameRoom/>
  </div>
</template>

<script>
import GameRoom from '@/components/Room.vue';

export default {
  name: 'room',
  components: {
    GameRoom,
  },
};
</script>