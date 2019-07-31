<template>
  <div class="hello">
    <h1>Hello World!</h1>
  </div>
</template>

<script>
import HotDogService from "../HotDogService";

export default {
  name: "HotDogsList",
  data() {
    return {
      hotDogs: []
    };
  },
  async created() {
    try {
      this.hotDogs = await HotDogService.getHotDogs();
      // eslint-disable-next-line
      console.log(this.hotDogs);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
