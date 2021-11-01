<template>
  <v-main>
    <loading :active.sync="isLoading" loader="Bars" color="primary"></loading>
    <v-layout justify-center fill-height align-center>
        <v-card min-width="400px" min-height="300px">
        <v-form>
            <v-container class="pa-5">
            <v-text-field outlined placeholder="Nome" />
            <v-text-field outlined placeholder="Senha" />
            <v-btn color="primary" block> Entrar </v-btn>
            <v-layout justify-center align-center class="mt-2">
                <v-btn plain elevation="0" @click="dialogEsqueceuSenha = true">
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
                Um código foi enviado para o email "email do caboclo aqui" insira
                ele junto a nova senha abaixo.
            </v-card-text>
            <v-container>
                <v-row dense>
                <v-col cols="12">
                    <v-text-field
                    label="Email"
                    outlined
                    filled
                    required
                    dense
                    hide-details
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                    label="Nova senha"
                    outlined
                    filled
                    required
                    dense
                    hide-details
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                    label="Confirmar nova senha"
                    outlined
                    filled
                    required
                    dense
                    hide-details
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
                    ></v-text-field>
                </v-col>
                </v-row>
            </v-container>
            <v-card-actions>
                <v-layout justify-center align-center class="mt-2">
                <v-btn color="success" @click="mudarSenha()"> Mudar senha </v-btn>
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
                    <v-col cols="12" sm="6" md="6">
                    <v-text-field
                        label="Nome"
                        outlined
                        filled
                        required
                        dense
                        hide-details
                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                    <v-text-field
                        label="Sobrenome"
                        outlined
                        filled
                        dense
                        hide-details
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
                    ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                    <v-subheader>Data de Nascimento</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="4">
                    <v-select
                        :items="['0-17', '18-29', '30-54', '54+']"
                        label="Dia"
                        required
                        hide-details
                    ></v-select>
                    </v-col>
                    <v-col cols="12" sm="4">
                    <v-select
                        :items="['0-17', '18-29', '30-54', '54+']"
                        label="Mês"
                        required
                        hide-details
                    ></v-select>
                    </v-col>
                    <v-col cols="12" sm="4">
                    <v-select
                        :items="['0-17', '18-29', '30-54', '54+']"
                        label="Ano"
                        required
                        hide-details
                    ></v-select>
                    </v-col>
                    <v-col cols="12">
                    <v-subheader>Genero</v-subheader>
                    </v-col>
                    <v-col cols="12" sm="4">
                    <v-radio label="Masculino"></v-radio>
                    </v-col>
                    <v-col cols="12" sm="4">
                    <v-radio label="Feminino"></v-radio>
                    </v-col>
                    <v-col cols="12" sm="4">
                    <v-radio label="Outro"></v-radio>
                    </v-col>
                </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-layout justify-center align-center class="mt-2">
                <v-btn color="success" @click="registrar()"> Cadastre-se </v-btn>
                </v-layout>
            </v-card-actions>
            </v-card>
        </v-dialog>
        </v-card>
    </v-layout>
  </v-main>
</template>
<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: "LoginMain",

  data: () => ({
    dialogEsqueceuSenha: false,
    dialogRegistrar: false,

    isLoading: false,

    now: null,
  }),

  components: {
    Loading
  },

  // TODO Adicionar todas as validações de campos
  methods: {
    registrar() {
      // TODO Chamar o fluxo de registro
      this.isLoading = true;
      console.log("Oi");
    },
    mudarSenha() {
      // TODO Chamar o fluxo de mudar de senha
      this.isLoading = true;
      console.log("mudar senha");
    }
  },
};
</script>
