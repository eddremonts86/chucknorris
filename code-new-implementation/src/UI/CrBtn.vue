<template>
  <button
    @click="handleClick"
    class="bg-blue-500 shadow-lg text-white inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "CrBtn",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>
