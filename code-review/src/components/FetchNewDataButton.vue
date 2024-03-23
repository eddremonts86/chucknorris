<template>
  <div>
    <span><b>Press <span style="color:#229392;">'Ctrl + Y'</span> for new joke</b></span>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    currentData: {
      type: Object,
      required: true,
    },
    selectedCategory: {
      type: String,
      required: false,
    },
  },
  methods: {
    fetchNewData(event) {
      const self = this;
      if (event.key === 'y' || event.key === 'Y') {
        const apiUrl = self.selectedCategory ? `https://api.chucknorris.io/jokes/random?category=${self.selectedCategory}` : 'https://api.chucknorris.io/jokes/random';

        axios.get(apiUrl)
          .then((response) => {
            self.$parent.data = response.data;
            self.$global.previousData.push(response.data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }
    },
  },
  mounted() {
    window.addEventListener('keypress', this.fetchNewData);
  },
  beforeDestroy() {
    window.removeEventListener('keypress', this.fetchNewData);
  },
};
</script>
