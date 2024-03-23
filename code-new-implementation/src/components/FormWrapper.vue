<template>
  <div>
    <Form :categories="categories" ></Form>
  </div>
</template>

<script>
import Form from './Form.vue';

export default {
  components: {
    Form,
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
};
</script>
