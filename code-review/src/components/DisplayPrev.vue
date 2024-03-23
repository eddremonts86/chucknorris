<template>
  <div class="data">
    <p v-for="(data, index) in prevs" >
      <Display :text="data.value"/> <span style="color:red; cursor: pointer;" @click="deleteItem(index)">Delete</span>
    </p>
  </div>
</template>

<script>
import Display from '@/components/Display.vue';

export default {
  components: { Display },
  data() {
    return {
      prevs: this.$global.previousData,
    };
  },
  methods: {
    deleteItem(index) {
      this.prevs.splice(index, 1);
    }
  },
  props: {
    previousData: {
      type: Array,
      required: true,
    },
  },

};
</script>
