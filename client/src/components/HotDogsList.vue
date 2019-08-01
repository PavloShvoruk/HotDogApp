<template>
  <v-container>
    <v-layout align-center justify-center column fill-height>
      <v-flex v-for="(hotDog, index) in hotDogs" :key="index">
        <HotDogItem
          :HotDogId="hotDog._id"
          :hotDogName="hotDog.name"
          :hotDogDescription="hotDog.description"
          :hotDogPrice="hotDog.price"
          :hotDogImage="hotDog.memo"
          @outputData="updateList"
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
      await this.updateList();
    }
  },
  methods: {
    async updateList() {
      try {
        this.hotDogs = await HotDogService.getHotDogs();
      } catch (error) {
        console.log(error);
      }
    }
  },
  async created() {
    await this.updateList();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
