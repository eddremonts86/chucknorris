import {
  fetchCategories,
  fetchRandom,
  fetchRandomByCategory,
  fetchSearch,
} from "@/services/jokes.api";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    joke: null,
    jokes: [],
    search: [],
    searchQuery: null,
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
    setJoke(state, joke) {
      state.joke = joke;
    },
    setJokes(state, jokes) {
      state.jokes = [...new Set(jokes)];
    },
    setSearch(state, search) {
      state.search = search;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      const categories = await fetchCategories();
      commit("setCategories", categories);
    },

    async fetchJokeByCategory({ commit }, category) {
      const joke = await fetchRandomByCategory(category);
      commit("setJoke", joke);
    },

    async fetchRandomJoke({ commit }) {
      const joke = await fetchRandom();
      commit("setJoke", joke);
    },

    async fetchJokes({ commit }, jokes) {
      commit("setJokes", jokes);
    },

    async fetchSearch({ commit, state }) {
      const search = await fetchSearch(state.searchQuery);
      commit("setSearch", search.result);
      commit("setSearchQuery", null);
      commit("setJokes", [...search.result, ...state.jokes]);
    },

    async fetchSearchQuery({ commit }, searchQuery) {
      commit("setSearchQuery", searchQuery);
    },

    updateJokes({ commit }, jokes) {
      commit("setJokes", jokes);
    },

    updateJoke({ commit }, joke) {
      commit("setJoke", joke);
    },

    deleteJoke({ commit, state }, id) {
      const jokes = state.jokes.filter((joke) => joke.id !== id);
      commit("setJokes", jokes);
    },
  },
});
