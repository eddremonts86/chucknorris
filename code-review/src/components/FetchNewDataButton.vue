<template>
  <div>
    <span>
      <b>Press <span style="color: #229392">'Ctrl + Y'</span> for new joke</b> <!-- Don't use inline styles'-->
    </span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    currentData: { // Should be a better name
      type: Object,
      required: true,
    },
    selectedCategory: {  // Should be a better name
      type: String,
      required: false,
    },
  },
  methods: {
    fetchNewData(event) {// Use a better name for this function
      // Refactor, split and export this function to a global service. So you can re-use it in other components.
      const self = this; // no needed
      if (event.key === "y" || event.key === "Y") {
        const apiUrl = self.selectedCategory
          ? `https://api.chucknorris.io/jokes/random?category=${self.selectedCategory}`
          : "https://api.chucknorris.io/jokes/random";

        axios
          .get(apiUrl)
          .then((response) => {
            self.$parent.data = response.data; // don't use $parent in a component, use $emit instead.
            self.$global.previousData.push(response.data); // don't use $global in a component, use (this.data) instead.
          })
          .catch((error) => {
            console.error("Error fetching data:", error); // Create a global way to handle all the app errors
          });
      }
    },
  },

// Use a Mixin to share this code between components.
  mounted() {
    window.addEventListener("keypress", this.fetchNewData);
  },
  beforeDestroy() {
    window.removeEventListener("keypress", this.fetchNewData);
  },
};
</script>
