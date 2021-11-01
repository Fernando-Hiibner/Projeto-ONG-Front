<template>
  <v-app-bar app color="primary" dark dense>
    <v-container fluid="true">
      <v-row dense align="center">
        <v-col cols="12" sm="1" md="1">
          <v-btn icon @click="voltarAoFeed()">
            <v-icon>mdi-arrow-left-thick</v-icon>
          </v-btn>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" md="1">
          <v-btn rounded elevation="0" color="secondary" @click="switchTheme()">
            <v-icon>mdi-theme-light-dark</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  name: "PerfilAppBar",
  methods: {
    async voltarAoFeed() {
      this.$router.push("/feed");
    },
    async switchTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
};
</script>
