<template>
  <v-app-bar
    app
    color="primary"
    dark
    dense
  >
    <v-container fluid=true>
      <v-row
        dense
        align="center"
      >
        <v-col
          cols="12"
          md="3"
        >
          <v-autocomplete
            filled
            hide-details
            dense
            rounded
            background-color="secondary"
            prepend-inner-icon="mdi-magnify"
            prepend-icon="mdi-home"
          >
          </v-autocomplete>
        </v-col>
        <v-col
          cols="12"
          md="6"
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
            <!-- TODO Não sera possivel terminar no MVP -->
            <!-- <v-tab href="#tab-2">
              <v-icon>mdi-account-group</v-icon>
            </v-tab>
            <v-tab href="#tab-3">
              <v-icon>mdi-earth</v-icon>
            </v-tab> -->
          </v-tabs>
        </v-col>
        <v-col
          cols="12"
          md="2"
        >
          <v-chip
            pill
            color="secondary"
            text-color="white"
            @click="abrirPerfil()"
          >
            <v-avatar left>
              <v-img :src=profilePicture></v-img>
            </v-avatar>
            {{profileInfos.NOME}}
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
    </v-container>
  </v-app-bar>
</template>

<script>

export default {
  name: 'FeedAppBar',

  data: () => ({
    profilePicture: null,
    profileInfos: null,
  }),
  mounted() {
    this.profilePicture = this.$store.getProfilePicture;
    this.profileInfos = this.$store.getProfileInfos;
  },
  methods: {
    async switchTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    abrirPerfil() {
      this.$router.push("/perfil");
    }
  }
};
</script>