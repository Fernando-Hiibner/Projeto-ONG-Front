<template>
    <v-layout justify-center fill-height align-center>
        <v-card>
            <v-form>
                <v-card-title>
                    <span class='text-h5'> BEM VINDO AO ONG LINK </span>
                </v-card-title>
                <v-container class = 'pa-5'>
                    <v-text-field
                        filled
                        rounded
                        outlined
                        placeholder="Nome"
                    />
                    <v-text-field
                        filled
                        rounded
                        outlined
                        placeholder="Senha"
                    />
                    <v-btn
                        color="primary"
                    >
                        Entrar
                    </v-btn>
                    <v-card-text>Esqueceu sua senha?</v-card-text>
                </v-container>
            </v-form>
        </v-card>
    </v-layout>
</template>
<script>

export default ({
    name: "LoginMain"
})
</script>
