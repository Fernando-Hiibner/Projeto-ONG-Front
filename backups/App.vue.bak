<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      dense
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="1"
        >
          <v-icon
            x-large
          >
            mdi-home
          </v-icon>
        </v-col>
        <v-col
          cols="12"
          sm="2"
        >
          <v-autocomplete
            filled
            hide-details
            dense
            rounded
            background-color="secondary"
            prepend-inner-icon="mdi-magnify"
          >
          </v-autocomplete>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-tabs
            background-color="primary"
            centered
            dark
          >
            <v-tabs-slider></v-tabs-slider>
            <v-tab href="#tab-1">
              <v-icon>mdi-home</v-icon>
            </v-tab>
            <v-tab href="#tab-2">
              <v-icon>mdi-account-group</v-icon>
            </v-tab>
            <v-tab href="#tab-3">
              <v-icon>mdi-earth</v-icon>
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col
          cols="12"
          sm="1"
        ></v-col>
        <v-col
          cols="12"
          sm="1"
        >
          <v-chip
            pill
            color="secondary"
            text-color="white"
          >
            <v-avatar left>
              <v-icon>mdi-account-circle</v-icon>
            </v-avatar>
            Convidado
          </v-chip>
        </v-col>
        <v-col
          cols="12"
          md="1"
        >
          <v-btn
            rounded
            elevation="0"
            color="secondary"
            @click="switchTheme()"
          >
            <v-icon>mdi-theme-light-dark</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
  methods: {
    async switchTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
};
</script>
