<template>
  <div>
    <div
      v-for="data in previousJokes"
      :key="data.id"
      class="bg-slate-50 rounded-lg p-4 m-4 shadow-lg min-h-32"
    >
      <Display :text="data.value" class="mb-2" />
      <cr-btn text="Delete" @click="deleteItem(data.id)" />
    </div>
    <div
      @click="showAll = !showAll"
      class="bg-slate-400 flex justify-center align-middle py-3 px-4 cursor-pointer"
    >
      <p>{{ showAll ? "Hide Jokes" : "Show all jokes!!" }}</p>
    </div>
  </div>
</template>

<script>
import Display from "@/components/Display.vue";

export default {
  components: { Display },
  data: () => ({
    showAll: false,
  }),
  computed: {
    previousJokes() {
      return this.showAll ? this.previousData : this.previousData.slice(0, 5);
    },
  },
  methods: {
    deleteItem(id) {
      this.$emit("deleteJoke", id);
    },
  },
  props: {
    previousData: {
      type: Array,
      required: true,
    },
  },
};
</script>
