<template>
    <div> {{ text }} </div>
</template>

<script>
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
