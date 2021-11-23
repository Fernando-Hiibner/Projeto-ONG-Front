<template>
  <v-main>
    <loading :active.sync="isLoading" loader="Bars" color="primary"></loading>
    <v-snackbar :timeout="3000" v-model="snackbar" :color="snackColor" top>
      {{ snackText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-layout justify-center fill-height align-center>
      <v-card min-width="400px" min-height="300px">
        <v-form>
          <v-container class="pa-5">
            <v-text-field
              outlined
              placeholder="Email"
              v-model="formEntrar.email"
            />
            <v-text-field
              outlined
              placeholder="Senha"
              type="password"
              v-model="formEntrar.password"
            />
            <v-btn color="primary" block @click="entrar()"> Entrar </v-btn>
            <v-layout justify-center align-center class="mt-2">
              <v-btn plain elevation="0" @click="requestMudarSenha()">
                Esqueceu sua senha?
              </v-btn>
            </v-layout>
            <v-divider></v-divider>
            <v-layout justify-center align-center class="mt-2">
              <v-btn color="success" @click="dialogRegistrar = true">
                Criar nova conta
              </v-btn>
            </v-layout>
          </v-container>
        </v-form>
        <v-dialog
          v-model="dialogEsqueceuSenha"
          max-width="425px"
          max-height="510px"
          persistent
        >
          <v-card>
            <v-card-title>
              <span class="text-h5">Recuperar senha</span>
              <v-spacer />
              <v-btn icon @click="dialogEsqueceuSenha = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              Um código foi enviado para o email
              <strong>{{ this.formEntrar.email }}</strong> insira ele junto a
              nova senha abaixo.
            </v-card-text>
            <v-container>
              <v-row dense>
                <v-col cols="12">
                  <v-text-field
                    label="Confirme o email"
                    outlined
                    filled
                    required
                    dense
                    hide-details
                    v-model="formMudarSenha.email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Nova senha"
                    type="password"
                    outlined
                    filled
                    required
                    dense
                    hide-details
                    v-model="formMudarSenha.password"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Código de verificação"
                    outlined
                    filled
                    required
                    dense
                    hide-details
                    v-model="formMudarSenha.verification_cod"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <v-card-actions>
              <v-layout justify-center align-center class="mt-2">
                <v-btn color="success" @click="mudarSenha()">
                  Mudar senha
                </v-btn>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog
          v-model="dialogRegistrar"
          max-width="425px"
          max-height="510px"
          persistent
        >
          <v-form ref="createUserForm" lazy-validation>
            <v-card>
              <v-card-title>
                <span class="text-h5">Cadastre-se</span>
                <v-spacer />
                <v-btn icon @click="dialogRegistrar = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-container>
                  <v-row dense>
                    <v-col cols="12">
                      <v-subheader>Tipo de conta</v-subheader>
                    </v-col>
                    <v-col cols="12">
                      <v-radio-group v-model="tipoDeConta" row dense>
                        <v-radio
                          value="Voluntario"
                          label="Voluntario"
                        ></v-radio>
                        <v-radio value="ONG" label="ONG"></v-radio>
                      </v-radio-group>
                    </v-col>
                    <template v-if="tipoDeConta === 'Voluntario'">
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          label="Nome"
                          outlined
                          filled
                          required
                          dense
                          hide-details
                          v-model="formCadastroVoluntario.nome"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          label="Sobrenome"
                          outlined
                          filled
                          dense
                          hide-details
                          v-model="formCadastroVoluntario.sobrenome"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Email"
                          outlined
                          filled
                          dense
                          hide-details
                          required
                          v-model="formCriarConta.email"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Nova senha"
                          type="password"
                          outlined
                          filled
                          dense
                          hide-details
                          required
                          v-model="formCriarConta.password"
                        ></v-text-field>
                      </v-col>
                      <!-- TODO Adicionar a data de nascimento no MVP, ai calcula a idade disso -->
                      <!-- <v-col cols="12">
                        <v-subheader>Data de Nascimento</v-subheader>
                      </v-col>
                      <v-col cols="12" sm="4">
                        <v-select
                          :items="dias"
                          label="Dia"
                          required
                          hide-details
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="4">
                        <v-select
                          :items="meses"
                          label="Mês"
                          required
                          hide-details
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="4">
                        <v-select
                          :items="anos"
                          label="Ano"
                          required
                          hide-details
                        ></v-select>
                      </v-col> -->
                      <v-col cols="12">
                        <v-text-field
                          label="Idade"
                          type="number"
                          outlined
                          filled
                          dense
                          hide-details
                          required
                          v-model="formCadastroVoluntario.idade"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-subheader>Genero</v-subheader>
                      </v-col>
                      <v-col cols="12">
                        <v-radio-group
                          v-model="formCadastroVoluntario.genero"
                          row
                          dense
                        >
                          <v-radio label="Masculino"></v-radio>
                          <v-radio label="Feminino"></v-radio>
                          <v-radio label="Outro"></v-radio>
                        </v-radio-group>
                      </v-col>
                    </template>
                    <template v-if="tipoDeConta === 'ONG'">
                      <v-col cols="12">
                        <v-text-field
                          label="Nome"
                          outlined
                          filled
                          required
                          dense
                          hide-details
                          v-model="formCadastroOng.nome"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Email"
                          outlined
                          filled
                          dense
                          hide-details
                          required
                          v-model="formCriarConta.email"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Nova senha"
                          type="password"
                          outlined
                          filled
                          dense
                          hide-details
                          required
                          v-model="formCriarConta.password"
                        ></v-text-field>
                      </v-col>
                    </template>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-layout justify-center align-center class="mt-2">
                  <v-btn color="success" @click="registrar()">
                    Cadastre-se
                  </v-btn>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-dialog>
      </v-card>
    </v-layout>
  </v-main>
</template>
<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "LoginMain",

  data: () => ({
    snackbar: false,
    snackColor: null,
    snackText: null,

    dialogEsqueceuSenha: false,
    dialogRegistrar: false,

    tipoDeConta: "Voluntario",

    isLoading: false,

    formEntrar: {
      email: null,
      password: null,
    },

    formMudarSenha: {
      email: null,
      password: null,
      verification_cod: null,
    },

    formCriarConta: {
      email: null,
      password: null,
      accountType: null,
      userInfo: null,
    },

    formCadastroVoluntario: {
      email: null,
      nome: null,
      sobrenome: null,
      idade: null,
      genero: null,
    },

    formCadastroOng: {
      email: null,
      nome: null,
    },

    dias: [],
    meses: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    anos: [],
  }),

  components: {
    Loading,
  },

  mounted() {
    for (let i = 1; i < 32; i++) {
      this.dias.push(i.toString());
    }
    // TODO Isso aqui é absolutamente tenebras, com ctz mudar no MVP
    for (let i = 1900; i < 2022; i++) {
      this.anos.push(i.toString());
    }
  },

  // TODO Adicionar todas as validações de campos
  // TODO Adicionar o auth user no MVP
  methods: {
    async requestMudarSenha() {
      this.isLoading = true;
      const { data } = await this.axios.post("requestChangePassword", {
        email: this.formEntrar.email,
      });
      if (!data || data.length === 0) {
        this.snackbar = true;
        this.snackColor = "warning";
        this.snackText = "Cheque o email inserido!";
        this.isLoading = false;
      } else if (data.type === "ERROR") {
        this.snackbar = true;
        this.snackColor = "error";
        this.snackText = data.msg;
        this.isLoading = false;
      } else if (data.type === "SUCCESS") {
        this.snackbar = true;
        this.snackColor = "success";
        this.snackText = data.msg;
        this.isLoading = false;
        this.dialogEsqueceuSenha = true;
      } else {
        this.snackbar = true;
        this.snackColor = "error";
        this.snackText = "Tente novamente!";
        this.isLoading = false;
      }
    },
    async mudarSenha() {
      console.log(this.formMudarSenha);
      this.isLoading = true;
      const { data } = await this.axios.post(
        "changePassword",
        this.formMudarSenha
      );
      if (!data || data.length === 0) {
        this.snackbar = true;
        this.snackColor = "warning";
        this.snackText = "Cheque as informações inseridas";
        this.isLoading = false;
      } else if (data.type === "ERROR") {
        this.snackbar = true;
        this.snackColor = "error";
        this.snackText = data.msg;
        this.isLoading = false;
      } else if (data.type === "SUCCESS") {
        this.snackbar = true;
        this.snackColor = "success";
        this.snackText = data.msg;
        this.isLoading = false;
        this.dialogEsqueceuSenha = true;
      } else {
        this.snackbar = true;
        this.snackColor = "error";
        this.snackText = "Tente novamente!";
        this.isLoading = false;
      }
      this.isLoading = false;
    },
    async registrar() {
      this.isLoading = true;

      let userInfo = {}

      if(this.tipoDeConta === 'Voluntario') {
        userInfo = {
          name: this.formCadastroVoluntario.nome,
          surname: this.formCadastroVoluntario.sobrenome,
          age: this.formCadastroVoluntario.idade,
          gender: this.formCadastroVoluntario.genero
        }
      }
      else if(this.tipoDeConta === "ONG") {
        userInfo = {
          name: this.formCadastroOng.nome
        }
      }

      let postDataCreateUser = {
        email: this.formCriarConta.email,
        password: this.formCriarConta.password,
        accountType: this.tipoDeConta,
        userInfo: userInfo
      }

      const { data } = await this.axios.post("createUser", postDataCreateUser);
      if (!data || data.length === 0) {
        this.snackbar = true;
        this.snackColor = "warning";
        this.snackText = "Login inválido!";
        this.isLoading = false;
      } else if (data.type === "ERROR") {
        this.snackbar = true;
        this.snackColor = "error";
        this.snackText = data.msg;
        this.isLoading = false;
      } else if (data.type === "SUCCESS") {
        this.snackbar = true;
        this.snackColor = "success";
        this.snackText = data.msg;
        this.isLoading = false;
      } else {
        this.snackbar = true;
        this.snackColor = "warning";
        this.snackText = "Login inválido!";
        this.isLoading = false;
      }
    },
    async entrar() {
      this.isLoading = true;
      const { data } = await this.axios.post("login", this.formEntrar);
      if (!data || data.length === 0) {
        this.snackbar = true;
        this.snackColor = "warning";
        this.snackText = "Login inválido!";
        this.isLoading = false;
      } else if (data.type === "ERROR") {
        this.snackbar = true;
        this.snackColor = "error";
        this.snackText = data.msg;
        this.isLoading = false;
      } else if (data.token !== null && data.token !== undefined) {
        this.isLoading = false;
        this.$router.push("/feed");
      } else {
        this.snackbar = true;
        this.snackColor = "warning";
        this.snackText = "Login inválido!";
        this.isLoading = false;
      }
    },
  },
};
</script>
