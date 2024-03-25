<template>
  <jokes :jokes="jokes" :delete-btn="true" @delete="deleteJokeById" header="Historical Jokes" />
</template>

<script>
import jokes from '@/components/Jokes.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Historical',
  components: {
    jokes,
  },
  computed: {
    ...mapState(['jokes']),
  },
  methods: {
    ...mapActions(['deleteJoke']),
    deleteJokeById(id) {
      this.deleteJoke(id);
    },
  },
};
</script>
