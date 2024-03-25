<template>
  <jokes :jokes="search" @delete="deleteJokeById" header="Search Results" />
</template>

<script>
import jokes from "@/components/Jokes.vue";
import { mapState } from "vuex";

export default {
  name: "SearchResults",
  components: {
    jokes,
  },
  computed: {
    ...mapState(["search"]),
  },
};
</script>
