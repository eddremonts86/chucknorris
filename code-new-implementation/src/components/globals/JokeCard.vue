<template>
  <div class="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div class="flex justify-center -mt-16 md:justify-end">
      <img
        class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
        alt="Testimonial avatar"
        :src="jokeImage"
      />
    </div>

    <h2 class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
      {{ jake?.type }}
    </h2>

    <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">
      {{ joke.value }}
    </p>

    <div class="flex justify-end mt-4" v-if="deleteBtn">
      <cr-btn text="delete" @click="$emit('delete', joke.id)" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard',
  props: {
    joke: {
      type: Object,
      required: true,
    },
    deleteBtn: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    jokeImage() {
      return 'https://merakiui.com/images/components/Email-campaign-bro.svg';
    },
  },
};
</script>
