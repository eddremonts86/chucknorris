<template>
  <div>
    <div class="flex">
      <div class="flex-col w-1/2">
        <form @submit.prevent="create()" class="bg-slate-300 p-6 rounded-lg shadow-lg m-2">
          <label for="createJokes" class="pb-2">Create your own:</label>
          <textarea class="block w-full" name="createJokes" id="createJokes" v-model="newText" />
          <hr class="border-neutral-400 border-y-1 my-4" />
          <cr-btn type="submit" text="Create" />
        </form>
      </div>
      <div class="flex-col w-1/2">
        <form @submit.prevent="getRandom()" class="bg-slate-300 p-6 rounded-lg shadow-lg m-2">
          <label for="SelectCategory" class="pb-2">Select a category:</label>
          <FormCategorySelector
            class="block w-full"
            id="SelectCategory"
            name="SelectCategory"
            :selected-category="selectedCategory"
            :categories="categories"
            @update="selectedCategory = $event"
          />
          <hr class="border-neutral-400 border-y-1 my-4" />
          <cr-btn class="block" type="submit" text="Get a random Joke" />
          <div>
            <b>Press <span style="color: #229392">'Ctrl + Y'</span> for new joke</b>
          </div>
        </form>
      </div>
    </div>

    <Container :previous-data="previousData" :data="data" @deleteJoke="removeJoke($event)" />
  </div>
</template>

<script>
import Container from "@/components/Container.vue";
import FormCategorySelector from "@/components/FormCategorySelector.vue";
import { fetchRandom, fetchRandomByCategory } from "@/services/jokes.api";
export default {
  components: {
    FormCategorySelector,
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
      newText: "",
      selectedCategory: "",
      data: null,
      previousData: [],
    };
  },
  methods: {
    create() {
      const joke = { value: this.newText, id: Date.now().toString() };
      this.previousData = [joke, ...this.previousData];
      this.data = { value: this.newText };
      this.newText = "";
    },

    async getRandom() {
      const response = this.selectedCategory
        ? await fetchRandomByCategory(this.selectedCategory)
        : await fetchRandom();
      this.data = response;
      if (response.id !== "error") {
        this.previousData = [response, ...this.previousData];
      }
    },
    getRandomByKeyCombination(event) {
      if (!event.ctrlKey) {
        return;
      }
      if (event.code === "KeyY") {
        event.preventDefault();
        this.getRandom();
      }
    },

    removeJoke(id) {
      this.previousData = this.previousData.filter((joke) => joke.id !== id);
      if (!this.previousData.length) {
        this.data = null;
      }
    },
  },
  mounted() {
    window.addEventListener("keypress", this.getRandomByKeyCombination);
  },
  beforeDestroy() {
    window.removeEventListener("keypress", this.getRandomByKeyCombination);
  },
};
</script>
@/services/jokes.api
