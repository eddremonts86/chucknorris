<template>
  <div>
    <div class="p-6">
      <form-wrapper :categories="categories" style="margin-top: 3em" />
    </div>
  </div>
</template>

<script>
import formWrapper from "@/components/FormWrapper.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    formWrapper,
  },
  computed: {
    ...mapState(["categories"]),
  },
  async mounted() {
    await this.fetchCategories();
  },
  methods: {
    ...mapActions(["fetchCategories"]),
  },
};
</script>
