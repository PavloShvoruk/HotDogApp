<template>
  <v-app>
    <v-content>
      <HotDogForm @inputData="updateList" />
      <HotDogsList :submitted="childData" />
    </v-content>
  </v-app>
</template>

<script>
import HotDogsList from "./components/HotDogsList";
import HotDogForm from "./components/HotDogForm";

export default {
  name: "App",
  components: {
    HotDogsList,
    HotDogForm
  },
  data() {
    return {
      childData: ""
    };
  },
  methods: {
    updateList(data) {
      this.childData = data;
      console.log(this.childData);
    }
  }
};
</script>
