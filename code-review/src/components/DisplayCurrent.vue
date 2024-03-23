<template>
  <div class="data"> <!-- Use a better class name --> ->
    <Display :text="data.value" />
  </div>
</template>

<script>
import Display from '@/components/Display.vue';

export default {
  name: 'DisplayCurrent', // Use a better name for this component and use multi-word name
  components: { Display },
  props: {
    data: { //What is is data?  Use a better name
      type: Object,
      required: true,
    },
  },
};
</script>
