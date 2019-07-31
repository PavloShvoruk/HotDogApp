<template>
  <div id="app">
    <HotDogsList />
  </div>
</template>

<script>
import HotDogsList from "./components/HotDogsList.vue";

export default {
  name: "app",
  components: {
    HotDogsList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
