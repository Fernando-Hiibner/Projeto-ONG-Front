<template>
  <v-container fluid="true">
    <v-row>
      <v-col cols="12">
        <v-card class="pa-5">
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-avatar size="256">
                <v-img
                  src = "https://i.pinimg.com/originals/5d/c2/76/5dc2763e70460b9056ea97038ba04acd.jpg"
                  lazy-src="https://i.pinimg.com/originals/5d/c2/76/5dc2763e70460b9056ea97038ba04acd.jpg"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-card-title> YAMETE KUDASAI </v-card-title>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "PerfilMain",
  data: () => {},

  methods: {},
};
</script>
