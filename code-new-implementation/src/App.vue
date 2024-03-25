<template>
  <baseLayout id="app" class="overflow-hidden pb-24">
    <RouterView />
  </baseLayout>
</template>
<script>
import baseLayout from '@/layout/BaseLayout.vue';

export default {
  name: 'App',
  components: {
    baseLayout,
  },
};
</script>
