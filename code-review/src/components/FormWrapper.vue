<template>
  <div>
    <Form :categories="categories"></Form>
  </div>
</template>

<script>
/**
 * Note : I don't see the need of this component, it's just a wrapper for the Form component.
 *
 * Component template name( Form ) should be upper case letters and
 * multi-word to avoid error/issues with html tags .like <global-form> fx.
 */

import Form from "./Form.vue";

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
