<template>
  <baseLayout id="app" class="overflow-hidden">
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
