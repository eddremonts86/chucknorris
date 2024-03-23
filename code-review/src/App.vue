<template>
  <div id="app">
    <img style="width: 10%" src="./assets/logo.png" />
    <form-wrapper
      :categories="['dev', 'science', 'technology', 'sport', 'history', 'food', 'vue']"
      style="margin-top: 3em"
    />
  </div>
</template>

<script>
/**
 * <img>:  Should include alt, with and height attributes or at least aspect ratio of 1:1
 * categories : Should be an external const to be share between components or at least a data value in this component
 * Template styles: Should be part of the component scoped styles, not in the template.
 * Style: create a global scss file to share css.
 */
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
