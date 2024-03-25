<template>
  <baseLayout  id="app">
    <RouterView />
  </baseLayout>
</template>
<script>
import baseLayout from "@/layout/BaseLayout.vue";
export default {
  name: "App",
  components: {
    baseLayout,
  },
};
</script>
