<template>
  <jokes :jokes="search"
  :searchQueryHistorical="searchQuery"
  @delete="deleteJokeById" header="Search Results" />
</template>

<script>
import jokes from '@/components/Jokes.vue';
import { mapState } from 'vuex';

export default {
  name: 'SearchResults',
  components: {
    jokes,
  },
  computed: {
    ...mapState(['search', 'searchQueryHistorical']),
    searchQuery() {
      return this.searchQueryHistorical[this.searchQueryHistorical.length - 1];
    },
  },
};
</script>
