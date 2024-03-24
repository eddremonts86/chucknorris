<template>
  <div id="app">
    <header class="bg-gray-200 p-6 flex justify-between">
      <img class="aspect-w-16" width="200px" src="./assets/logo.png" alt="logo" />
      <input
        class="rounded-xl border-2 border-gray-300 p-2"
        type="text"
        placeholder="Search"
        v-model="search"
        @keyup.enter="searchJokes()"
      />
    </header>
    <div class="p-6">
      <form-wrapper :categories="categories" style="margin-top: 3em" />
    </div>
  </div>
</template>

<script>
import formWrapper from "@/components/FormWrapper.vue";
import { fetchCategories, fetchSearch } from "@/services/jokes.api";
export default {
  name: "App",
  components: {
    formWrapper,
  },
  data() {
    return {
      categories: [],
      jokes: [],
      search: null,
    };
  },
  async mounted() {
    this.categories = await fetchCategories();
  },
  methods: {
    async searchJokes() {
      console.log(this.search);
      this.jokes = await fetchSearch(this.search);
      console.log(this.jokes);
    },
  },
};
</script>
