<template>
  <v-container>
    <v-row justify="space-around">
      <v-card>
        <v-img
          height="200px"
          :src=profileBanner
        >
          <v-card-title class="white--text">
            <v-avatar size="128">
              <img
                alt="user"
                :src=profilePicture
              />
            </v-avatar>
          </v-card-title>
        </v-img>

        <v-card-title>
          <div class="font-weight-bold font-size-14 ml-4 mb-2">{{profileInfos.NOME}} {{profileInfos.SOBRENOME}}</div>
        </v-card-title>
        <v-divider></v-divider>
        <v-tabs>
          <v-tabs-slider></v-tabs-slider>
          <v-tab href="#tab-1">
            <p>Publicações</p>
          </v-tab>
          <!-- TODO Ver isso depois -->
          <!-- <v-tab href="#tab-2">
            <p>Sobre</p>
          </v-tab> -->
        </v-tabs>
        <perfil-infinite-scrolling/>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
import PerfilInfiniteScrolling from "./PerfilInfiniteScrolling.vue"
export default {
  name: "PerfilMain",
  components: {
    PerfilInfiniteScrolling
  },
  data: () => ({
    profilePicture: null,
    profileBanner: null,
    profileInfos: null,
  }),
  async mounted() {
    this.profilePicture = this.$store.getProfilePicture;
    this.profileBanner = this.$store.getProfileBanner;
    console.log("profileBanner", this.profileBanner)

    this.profileInfos = this.$store.getProfileInfos;
  },
  methods: {},
};
</script>
