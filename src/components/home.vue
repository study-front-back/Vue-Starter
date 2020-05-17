<template>
  <div id="home">
    {{msg}}
    <ul>
      <li><router-link to="/">home</router-link></li>
      <li><router-link to="/content1">content1</router-link></li>
      <li><router-link to="/content2">content2</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "main homepage part"
    }
  }
};
</script>

<style scoped>
</style>