<template>
  <v-card class="mx-auto card form" max-width="800">
    <v-card-text>
      <v-alert v-model="alertBool" :type="type">{{ alertMsg }}</v-alert>
      <v-form ref="form">
        <v-text-field v-model="name" :rules="nameRules" :counter="50" label="Name" required></v-text-field>
        <v-text-field v-model="price" type="number" min="0" label="Price"></v-text-field>

        <v-text-field
          v-model="description"
          :rules="descriptionRules"
          :counter="250"
          label="Description"
          required
        ></v-text-field>
        <!-- <v-file-input
          :rules="imageRules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick a hot dog image"
        ></v-file-input>-->
        <v-btn class="mr-4" @click="submit" text color="purple">submit</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { HotDogService } from "../HotDogService.js";

export default {
  name: "HotDogForm",
  data() {
    return {
      alertBool: false,
      submitted: true,
      alertMsg: "",
      type: "success",
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 50) || "Name must be less than 50 characters"
      ],
      description: "",
      descriptionRules: [
        v => !!v || "Description is required",
        v =>
          (v && v.length <= 250) ||
          "Description must be less than 250 characters"
      ],
      price: "",

      imageRules: [
        value =>
          !value ||
          value.size < 2000000 ||
          "Image size should be less than 2 MB!"
      ]
    };
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        await HotDogService.createHotDog({
          name: this.name,
          description: this.description,
          price: this.price
        });
        (this.name = ""), (this.description = ""), (this.price = "");
        this.alertMsg = "Hot dog created!";
        this.alertBool = true;
        this.$emit("inputData", this.submitted);
        this.snackbar = true;
        setTimeout(() => {
          this.alertBool = false;
        }, 1000);
      }
    }
  }
};
</script>

<style scoped>
.form {
  margin-top: 20px;
}
</style>