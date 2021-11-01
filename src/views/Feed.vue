<template>
  <div id="app">
    <feed-app-bar/>
    <v-main>
      <feed-main/>
    </v-main>
  </div>
</template>

<script>
import FeedAppBar from '../components/Feed/FeedAppBar.vue'
import FeedMain from '../components/Feed/FeedMain.vue'
  export default {
    name: 'Home',

    components: {
      FeedAppBar,
      FeedMain
    },

    data: () => ({
    }),
  }
</script>
