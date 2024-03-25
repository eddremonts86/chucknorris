<template>
  <div class="flex flex-col items-center justify-start min-h-screen py-2">
    <h1 class="py-12 text-4xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
      {{ header }} : {{ jokes.length }} jokes
    </h1>
    <joke-card
      class="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800"
      v-for="joke in searchPagination"
      :key="joke.id"
      :joke="joke"
      :delete-btn="deleteBtn"
      @delete="$emit('delete', joke.id)"
    />
    <cr-btn
      v-if="showMoreBtn"
      class="my-6"
      :text="'Read more! ' + searchPagination.length + '/' + jokes.length"
      @click="readMore"
    />
  </div>
</template>

<script>
import JokeCard from "@/components/globals/JokeCard.vue";
export default {
  name: "SearchResults",
  components: {
    JokeCard,
  },
  props: {
    jokes: {
      type: Array,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    deleteBtn: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    split: 5,
  }),
  computed: {
    searchPagination() {
      return this.jokes.slice(0, this.split);
    },
    showMoreBtn() {
      return !(!this.jokes.length || this.searchPagination.length === this.jokes.length);
    },
  },
  methods: {
    readMore() {
      this.split += 5;
    },
  },
};
</script>
