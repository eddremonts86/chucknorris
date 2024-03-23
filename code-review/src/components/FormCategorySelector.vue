<template>
  <select v-model="selectedValue" id="category">
    <option value="">Any</option>
    <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
  </select>
</template>

<script>
export default {
  props: {
    selectedCategory: String,
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedValue: this.selectedCategory,
    };
  },
  watch: {
    selectedValue(newValue) {
      this.$emit('update', newValue);
    },
  },
};
</script>
