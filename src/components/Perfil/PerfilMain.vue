<template>
  <v-container>
    <v-row justify="space-around">
      <v-card>
        <v-img
          height="200px"
          src="https://i.ytimg.com/vi/3iTxiF1Yts4/maxresdefault.jpg"
        >
          <v-card-title class="white--text">
            <v-avatar size="128">
              <img
                alt="user"
                src="http://pm1.narvii.com/7049/5613844a10ed6aa7dd5c69ae63b2e881ef99e0cer1-503-516v2_uhq.jpg"
              />
            </v-avatar>
          </v-card-title>
        </v-img>

        <v-card-title>
          <div class="font-weight-bold font-size-14 ml-4 mb-2">Lolizinha</div>
        </v-card-title>
        <v-divider></v-divider>
        <v-tabs>
          <v-tabs-slider></v-tabs-slider>
          <v-tab href="#tab-1">
            <p>Publicações</p>
          </v-tab>
          <v-tab href="#tab-2">
            <p>Sobre</p>
          </v-tab>
        </v-tabs>
        <v-card-title>Placeholder</v-card-title>
        <v-skeleton-loader
          v-bind="attrs"
          type="article, actions"
        ></v-skeleton-loader>

        <v-skeleton-loader
          v-bind="attrs"
          type="table-heading, list-item-two-line, image, table-tfoot"
        ></v-skeleton-loader>

        <v-skeleton-loader
          v-bind="attrs"
          type="card-avatar, article, actions"
        ></v-skeleton-loader>

        <v-skeleton-loader
          v-bind="attrs"
          type="date-picker"
        ></v-skeleton-loader>

        <v-skeleton-loader
          v-bind="attrs"
          type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
        ></v-skeleton-loader>

        <v-skeleton-loader
          v-bind="attrs"
          type="list-item-avatar-three-line, image, article"
        ></v-skeleton-loader>
      </v-card>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "PerfilMain",
  data: () => ({
    messages: [
      {
        from: "You",
        message: `Sure, I'll see you later.`,
        time: "10:42am",
        color: "deep-purple lighten-1",
      },
      {
        from: "John Doe",
        message: "Yeah, sure. Does 1:00pm work?",
        time: "10:37am",
        color: "green",
      },
      {
        from: "You",
        message: "Did you still want to grab lunch today?",
        time: "9:47am",
        color: "deep-purple lighten-1",
      },
    ],
  }),

  methods: {},
};
</script>
