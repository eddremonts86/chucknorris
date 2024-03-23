<template>
  <div id="container-wrapper">
    <div style="width: 50%">
      <h1 style="font-size: 14px; color:#229392;">Current</h1>
      <display-current :data="data"></display-current>
    </div>
    <div style="width: 50%">
      <h1 style="font-size: 14px; color:#229392;">Previous quotes</h1>
      <DisplayPrev :previous-data="previousData"></DisplayPrev>
    </div>

  </div>
</template>

<script>
import DisplayCurrent from '@/components/DisplayCurrent.vue';
import DisplayPrev from './DisplayPrev.vue';

export default {
  components: {
    DisplayPrev,
    DisplayCurrent,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    previousData: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style>
#container-wrapper {
  display: flex;
}

.two-columns {
  flex-direction: row;
  justify-content: space-between;
}
</style>
