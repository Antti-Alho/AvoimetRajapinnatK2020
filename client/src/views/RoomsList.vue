<template>
  <div class="home">
    <HelloWorld msg="Welcome ROOMS"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/Rooms.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>