<template>
  <v-hover v-slot:default="{ hover }" close-delay="200">
    <v-card class="mx-auto card" max-width="800" :elevation="hover ? 16 : 2">
      <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

      <v-card-title>
        <v-layout align-start justify-start column fill-height>
          <div>{{ hotDogName }}</div>
          <span class="grey--text subtitle-1">Price: {{ hotDogPrice }}$</span>
        </v-layout>
      </v-card-title>

      <v-card-actions>
        <v-btn text color="purple">Share</v-btn>
        <v-btn text color="purple">Explore</v-btn>
        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-card-text>
            <span class="text--primary">{{ hotDogDescription }}</span>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "HotDogItem",
  props: {
    hotDogName: String,
    hotDogDescription: String,
    hotDogPrice: Number,
    hotDogImage: String
  },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
  cursor: pointer;
}
</style>