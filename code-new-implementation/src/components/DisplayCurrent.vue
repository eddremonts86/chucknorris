<template>
  <div class="data">
    <Display :text="data.value" />
  </div>
</template>

<script>
import Display from '@/components/Display.vue';

export default {
  name: 'DisplayCurrent',
  components: { Display },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
