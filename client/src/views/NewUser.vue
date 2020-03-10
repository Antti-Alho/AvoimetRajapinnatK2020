<template>
  <div class="create user">
    <user/>
  </div>
</template>

<script>
import user from '@/components/User.vue';

export default {
  name: 'create user',
  components: {
    user,
  },
};
</script>