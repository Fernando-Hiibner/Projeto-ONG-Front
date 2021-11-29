<template>
  <v-app>
    <router-view/>
  </v-app>
</template>
<script>

export default ({
  mounted() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.$vuetify.theme.dark = true;
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      this.$vuetify.theme.dark = e.matches ? true : false;
    });
    if(this.$store.getUser === null) {
      this.$router.push('/login');
    }
    else {
      this.$router.push('/feed');
    }
  }
})
</script>

