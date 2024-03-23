<template>
  <select v-model="selectedValue" id="category" >
    <option value="">Any</option>
    <option v-for="category in categories"
    :key="category"
    :value="category">
      {{ category }}
    </option>
  </select>
</template>

<script>
/**
 * Note: Should be better to create a more generic components with out references to any specific component.
 *  selectedCategory --> input
 *  categories --> options
 * 
 * Select: Should have a label, and a aria-desc of the purpose of the select.
 * ID is to general and not to be unique.
 *
 * Option: Should have a label, and a value. The value should be unique.
 *
 * @prop selectedCategory : Should fallow the same pattern as category prop.
 * also should be a data value and use the input, v-model pattern
 * instead of :selected-category="selectedCategory"
 *
 * @method watch it is not needed, use  @change='$emit("update", value)'
 * in the select input instead.
 *
 *
 */
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
};
</script>
