<template>
  <v-layout>
    <v-hover v-slot:default="{ hover }" close-delay="200">
      <v-card class="mx-auto card" max-width="800" :elevation="hover ? 16 : 2">
        <v-img src="../assets/hot-dog.png" height="200px"></v-img>

        <v-card-title>
          <v-layout align-start justify-start column fill-height>
            <div>{{ hotDogName }}</div>
            <span class="grey--text subtitle-1">Price: {{ hotDogPrice }}$</span>
          </v-layout>
        </v-card-title>

        <v-card-actions>
          <v-btn text color="purple" @click.stop="dialog = true">Edit</v-btn>
          <v-btn text color="purple" @click="deleteHotDog">Delete</v-btn>
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
    <v-dialog v-model="dialog" max-width="800">
      <v-card>
        <v-card-text>
          <v-form ref="form">
            <v-text-field label="Name" v-model="name" :rules="nameRules" :counter="50" required></v-text-field>
            <v-text-field label="Price" v-model="price"></v-text-field>

            <v-text-field
              label="Description"
              v-model="description"
              :rules="descriptionRules"
              :counter="250"
              required
            ></v-text-field>
            <!-- <v-file-input
          :rules="imageRules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick a hot dog image"
            ></v-file-input>-->
            <v-btn class="mr-4" text color="purple" @click="updateHotDog">Update</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { HotDogService } from "../HotDogService.js";

export default {
  name: "HotDogItem",
  props: {
    HotDogId: String,
    hotDogName: String,
    hotDogDescription: String,
    hotDogPrice: Number,
    hotDogImage: String
  },
  data() {
    return {
      show: false,
      dialog: false,
      name: this.hotDogName,
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 50) || "Name must be less than 50 characters"
      ],
      description: this.hotDogDescription,
      descriptionRules: [
        v => !!v || "Description is required",
        v =>
          (v && v.length <= 250) ||
          "Description must be less than 250 characters"
      ],
      price: this.hotDogPrice
    };
  },
  methods: {
    async updateHotDog() {
      if (this.$refs.form.validate()) {
        await HotDogService.updateHotDog(this.HotDogId, {
          name: this.name,
          description: this.description,
          price: this.price
        });
        this.dialog = false;
        this.$emit("outputData", this.dialog);
      }
    },
    async deleteHotDog() {
      await HotDogService.deleteHotDog(this.HotDogId);
      this.$emit("outputData", this.dialog);
    }
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
  cursor: pointer;
}
</style>