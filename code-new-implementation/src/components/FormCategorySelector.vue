<template>
  <select v-model="selectedValue" id="category">
    <option value="">Any</option>
    <option v-for="category in categories" :key="category" :value="category">
      {{ formatText(category) }}
    </option>
  </select>
</template>

<script>
import { capitalizeFirstLetter } from "@/utils/helpers";
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
      this.$emit("update", newValue);
    },
  },
  methods: {
    formatText(string) {
      return capitalizeFirstLetter(string);
    },
  },
};
</script>
