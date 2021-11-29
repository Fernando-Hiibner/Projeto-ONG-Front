<template>
  <v-card flat>
    <v-card v-for="(pub, index) in pubs" :key="index">
      <div class="pa-4">
        <v-row>
          <v-avatar
            ><v-img
              :src="pub.IMAGEM_PERFIL"
            ></v-img
          ></v-avatar>
          <div class="font-weight-bold font-size-14 ml-1 mb-2">{{pub.NOME}} {{pub.SOBRENOME}}</div>
        </v-row>
        <v-row>
          <v-card-text>{{pub.TEXTO}}</v-card-text>
        </v-row>
        <v-row class="fill-height" justify="center" align="center">
          <v-img
            :src="pub.IMAGEM"
          ></v-img>
        </v-row>
        <v-row class="mt-1 mb-1"><v-divider></v-divider></v-row>
      </div>
      <!--Add here the vuetify directive -->
    </v-card>
    <v-card v-intersect="infiniteScrolling"></v-card>
  </v-card>
</template>

<script>
export default {
  name: "PubInfiniteScrolling",
  data() {
    return {
      pubs: [],
      page: 0,
    };
  },
  computed: {
    url() {
      return "loadPub/"+this.page.toString();
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await this.axios.get(this.url);
      response.data.forEach((item) => {
        item.IMAGEM_PERFIL = item.IMAGEM_PERFIL.startsWith('var/www/Projeto ONG/projeto_ong_files/')? 'http://127.0.0.1:8000/' + item.IMAGEM_PERFIL : item.IMAGEM_PERFIL;
        item.IMAGEM_BANNER = item.IMAGEM_BANNER.startsWith('var/www/Projeto ONG/projeto_ong_files/')? 'http://127.0.0.1:8000/' + item.IMAGEM_BANNER : item.IMAGEM_BANNER;
      })
      this.pubs = response.data;
    },
    infiniteScrolling() {
      setTimeout(() => {
        this.page++;
        this.axios
          .get(this.url)
          .then((response) => {
            if (response.data.length >= 1) {
              response.data.forEach((item) => {
                  item.IMAGEM_PERFIL = item.IMAGEM_PERFIL.startsWith('var/www/Projeto ONG/projeto_ong_files/')? 'http://127.0.0.1:8000/' + item.IMAGEM_PERFIL : item.IMAGEM_PERFIL;
                  item.IMAGEM_BANNER = item.IMAGEM_BANNER.startsWith('var/www/Projeto ONG/projeto_ong_files/')? 'http://127.0.0.1:8000/' + item.IMAGEM_BANNER : item.IMAGEM_BANNER;
                  this.pubs.push(item)
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }, 500);
    },
  },
};
</script>
