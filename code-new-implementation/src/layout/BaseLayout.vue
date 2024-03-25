<template>
  <div class="flex flex-col h-screen">
    <header>
      <nav-bar />
    </header>

    <main class="bg-white dark:bg-slate-900 min-h-screen max-h-screen overflow-auto pb-16">
      <slot />
    </main>
  </div>
</template>
<script>
import NavBar from '@/components/globals/NavBar.vue';

export default {
  name: 'BaseLayout',
  components: {
    NavBar,
  },
};
</script>
