<template>
  <div class="data">
    <p v-for="(data, index) in prevs"> <!-- Use :key for v-for, don't use the index as a key' -->
      <Display :text="data.value" />
      <span style="color: red; cursor: pointer" @click="deleteItem(index)"> Delete </span>
    </p>
  </div>
</template>

<script>
import Display from "@/components/Display.vue";

export default {
  components: { Display }, //Use a better name for this component and use multi-word name
  data() {
    return {
      prevs: this.$global.previousData, // What prevs means? use a better name(previous fx.)
    };
  },
  methods: {
    deleteItem(index) {
      this.prevs.splice(index, 1); // This will work 99% of the time, but not always.What happen if we sort the array?
    },
  },
  props: {
    previousData: {
      type: Array,
      required: true,
    },
  },
};
</script>
