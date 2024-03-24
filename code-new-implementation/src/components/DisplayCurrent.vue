<template>
  <div
    class="bg-slate-50 rounded-lg p-4 m-4 shadow-lg"
    :class="{ 'bg-red-500 text-white': data.id === 'error' }"
  >
    <Display :text="data.value" />
  </div>
</template>

<script>
import Display from "@/components/Display.vue";

export default {
  name: "DisplayCurrent",
  components: { Display },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
