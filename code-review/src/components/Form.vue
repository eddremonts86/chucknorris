<template>
  <div>
    <form @submit.prevent="create" style="margin-bottom: 0.75rem">
      <!-- Don't use inline styles'-->
      <label for="category">Create your own:</label>
      <input type="text" v-model="newText" /><!-- Don't data model name that generic'-->
      <button type="submit">Create</button>
    </form>

    <form @submit.prevent="fetchRandom" style="margin-bottom: 0.75rem">
      <!-- Don't use inline styles'-->
      <label for="category">Select a category:</label>
      <FormCategorySelector
        :selected-category="selectedCategory"
        :categories="categories"
        @update="selectedCategory = $event"
      ></FormCategorySelector>
      <button type="submit">Get a random Joke</button>
    </form>
    <FetchNewDataButton
      :selected-category="selectedCategory"
      :current-data="data"
      @fetch="fetchRandom"
    ></FetchNewDataButton>
    <Container :previous-data="this.previousData" :data="data" />
  </div>
</template>

<script>
import Container from "@/components/Container.vue";
import FetchNewDataButton from "@/components/FetchNewDataButton.vue";
import axios from "axios";
import FormCategorySelector from "@/components/FormCategorySelector.vue";

export default {
  components: {
    FormCategorySelector,
    FetchNewDataButton, // create a global component to share it between components and use a proper name instead of <FormCategorySelector>
    Container, // create a global component to share it between components and use a proper name instead of <Container>
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return { // In general all this data values need a better names.)
      newText: "",
      selectedCategory: "",
      data: {
        value: "",
      },
      previousData: [],
    };
  },
  methods: {
    create() { // All this code isn't needed,
      this.$global.previousData.push({ value: this.newText }); // don't use $global in a component, use (this.data) instead.
      this.data = { value: this.newText };
      this.previousData = this.$global.previousData; // don't use $global in a component, use (this.data) instead.
    },
    fetchRandom() { // Refactor, split and export this function to a global service. So you can re-use it in other components.
      const apiUrl = this.selectedCategory
        ? `https://api.chucknorris.io/jokes/random?category=${this.selectedCategory}`
        : "https://api.chucknorris.io/jokes/random";
      axios
        .get(apiUrl)
        .then((response) => {
          this.$global.previousData.push(response.data); // don't use $global in a component, use (this.data) instead.
          this.data = response.data;
        })
        .catch((error) => {
          console.error("Error fetching joke:", error); // Create a global way to handle all the app errors
        });
      this.previousData = this.$global.previousData; // don't use $global in a component, use (this.data) instead.
    },
  },
};
</script>
