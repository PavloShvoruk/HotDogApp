<template>
  <v-container>
    <v-layout align-center justify-center column fill-height>
      <v-flex v-for="(hotDog, index) in hotDogs" :key="index">
        <HotDogItem
          :hotDogName="hotDog.name"
          :hotDogDescription="hotDog.description"
          :hotDogPrice="hotDog.price"
          :hotDogImage="hotDog.memo"
        ></HotDogItem>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HotDogItem from "./HotDogItem";
import { HotDogService } from "../HotDogService.js";

export default {
  components: {
    HotDogItem
  },
  name: "HotDogsList",
  props: ["submitted"],
  data() {
    return {
      hotDogs: []
    };
  },
  watch: {
    submitted: async function() {
      this.hotDogs = await HotDogService.getHotDogs();
    }
  },
  async created() {
    try {
      this.hotDogs = await HotDogService.getHotDogs();
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
