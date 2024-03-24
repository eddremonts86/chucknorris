<template>
  <div class="flex">
    <div class="bg-slate-200 pa-6 rounded-xl shadow-lg m-2 w-1/3">
      <div class="bg-blue-500 px-6 py-6 rounded-xl shadow-lg text-white font-semibold">
        <h1>Current</h1>
      </div>
      <display-current :data="data" v-if="data"></display-current>
    </div>
    <div class="bg-slate-200 pa-6 rounded-xl shadow-lg m-2 w-2/3">
      <div class="bg-blue-500 px-6 py-6 rounded-xl shadow-lg text-white font-semibold">
        <h1>Previous quotes</h1>
      </div>
      <DisplayPrev
        v-if="previousData.length"
        :previous-data="previousData"
        @deleteJoke="$emit('deleteJoke', $event)"
      ></DisplayPrev>
    </div>
  </div>
</template>

<script>
import DisplayCurrent from "@/components/DisplayCurrent.vue";
import DisplayPrev from "./DisplayPrev.vue";

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
