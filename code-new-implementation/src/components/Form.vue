<template>
  <div>
    <form @submit.prevent="create" style="margin-bottom:0.75rem;">
      <label for="category">Create your own:</label>
      <input type="text" v-model="newText">
      <button type="submit">Create</button>
    </form>

    <form @submit.prevent="fetchRandom" style="margin-bottom:0.75rem;">
      <label for="category">Select a category:</label>
      <FormCategorySelector :selected-category="selectedCategory" :categories="categories" @update="selectedCategory = $event"></FormCategorySelector>
      <button type="submit">Get a random Joke</button>
    </form>
    <FetchNewDataButton :selected-category="selectedCategory" :current-data="data" @fetch="fetchRandom"></FetchNewDataButton>
    <Container :previous-data="this.previousData" :data="data" />
  </div>
</template>

<script>
import Container from '@/components/Container.vue';
import FetchNewDataButton from '@/components/FetchNewDataButton.vue';
import axios from 'axios';
import FormCategorySelector from '@/components/FormCategorySelector.vue';

export default {
  components: {
    FormCategorySelector,
    FetchNewDataButton,
    Container,
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      newText: '',
      selectedCategory: '',
      data: {
        value: '',
      },
      previousData: [],
    };
  },
  methods: {
    create() {
      this.$global.previousData.push({ value: this.newText });
      this.data = { value: this.newText };
      this.previousData = this.$global.previousData;
    },
    fetchRandom() {
      const apiUrl = this.selectedCategory ? `https://api.chucknorris.io/jokes/random?category=${this.selectedCategory}` : 'https://api.chucknorris.io/jokes/random';
      axios.get(apiUrl)
        .then((response) => {
          this.$global.previousData.push(response.data);
          this.data = response.data;
        })
        .catch((error) => {
          console.error('Error fetching joke:', error);
        });
      this.previousData = this.$global.previousData;
    },
  },
};
</script>
