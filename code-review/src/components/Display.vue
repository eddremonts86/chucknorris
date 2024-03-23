<template>
    <div> {{ text }} </div>
</template>

<script>
// it is really need it this component? it's just a wrapper for a text.
export default {
  name: 'Display',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
