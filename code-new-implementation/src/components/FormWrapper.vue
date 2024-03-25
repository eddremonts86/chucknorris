<template>
    <div class="flex flex-col md:flex-row pb-24">
      <div class="flex-col w-full md:w-1/2">
        <form
          @submit.prevent="getRandom()"
          class="bg-gray-100 p-6 rounded-lg m-2 dark:bg-gray-800 min-w-full"
        >
          <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-3">
            Generate random jokes
          </h2>
          <label for="SelectCategory" class="pb-2 dark:text-white">Select a category:</label>
          <FormCategorySelector
            class="block w-full"
            id="SelectCategory"
            name="SelectCategory"
            :selected-category="selectedCategory"
            :categories="categories"
            @update="selectedCategory = $event"
          />
          <cr-btn class="block my-5" type="submit" text="Get a random Joke" />
          <br />
          <b class="dark:text-stone-100">
            Press
            <span style="color: #229392">'Ctrl + Y'</span>
            for new joke
          </b>
        </form>
        <form
          @submit.prevent="create()"
          class="bg-gray-100 p-6 rounded-lg m-2 dark:bg-gray-800 min-w-full"
        >
          <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-3">
            Create your own jokes
          </h2>

          <label for="createJokes" class="pb-2 dark:text-white">
            Write a joke:
            <textarea
              class="block w-full rounded-xl px-3 py-4 dark:text-black"
              name="createJokes"
              id="createJokes"
              v-model="jokeContent"
            />
          </label>
          <cr-btn type="submit" text="Create" class="block my-5" />
        </form>
      </div>
      <div class="flex-col w-full md:w-1/2 justify-center items-center" v-if="joke">
        <div class="bg-gray-100 p-6 rounded-lg m-2 dark:bg-gray-700 min-w-full">
          <h2 class="text-xl font-semibold text-gray-800 dark:text-white">New joke</h2>
          <joke-card :key="joke.id" :joke="joke" @delete="deleteJokeById" />
        </div>
      </div>
    </div>
</template>

<script>
  import FormCategorySelector from '@/components/FormCategorySelector.vue'
  import JokeCard from '@/components/globals/JokeCard.vue'
  import { mapActions, mapState } from 'vuex'

  export default {
    components: {
      FormCategorySelector,
      JokeCard,
    },
    props: {
      categories: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        jokeContent: '',
        selectedCategory: '',
      }
    },
    computed: {
      ...mapState(['jokes', 'joke']),
    },
    methods: {
      ...mapActions(['fetchJokeByCategory', 'fetchRandomJoke', 'updateJokes', 'updateJoke']),
      create() {
        if (!this.jokeContent) {
          return
        }
        const joke = { value: this.jokeContent, id: Date.now().toString() }
        this.updateJoke(joke)
        this.updateJokes([joke, ...this.jokes])
        this.jokeContent = ''
      },
      async getRandom() {
        if (this.selectedCategory) {
          await this.fetchJokeByCategory(this.selectedCategory)
        } else {
          await this.fetchRandomJoke()
        }
        this.updateJokes([this.joke, ...this.jokes])
      },
      async getRandomByKeyCombination(event) {
        if (!event.ctrlKey) {
          return
        }
        if (event.code === 'KeyY') {
          event.preventDefault()
          await this.fetchRandomJoke()
          this.updateJokes([this.joke, ...this.jokes])
        }
      },
    },

    mounted() {
      window.addEventListener('keypress', this.getRandomByKeyCombination)
    },
    beforeDestroy() {
      window.removeEventListener('keypress', this.getRandomByKeyCombination)
    },
  }
</script>
