<template>
  <v-app>
    <router-view/>
  </v-app>
</template>
<script>

export default ({
  beforeMounted() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.$vuetify.theme.dark = true;
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      this.$vuetify.theme.dark = e.matches ? true : false;
    });
  }
})
</script>

