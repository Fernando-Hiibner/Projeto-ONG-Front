<template>
  <div id="app">
    <perfil-app-bar/>
    <v-main>
      <perfil-main/>
    </v-main>
  </div>
</template>
<script>
import PerfilAppBar from '../components/Perfil/PerfilAppBar.vue'
import PerfilMain from '../components/Perfil/PerfilMain.vue'
  export default {
    name: 'Perfil',

    components: {
        PerfilMain,
        PerfilAppBar
    },

    data: () => ({
    }),
  }
</script>