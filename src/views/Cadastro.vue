<template>
  <div>
    <v-container>
      <v-content>
        <h1 class="text-center pa-5 ma-2">Cadastro Simples</h1>
        <NavBar />
        <!-- Barra lateral, que contém os itens do menu -->
        <NavBarMini :logourl="logourl" :menuitems="menuitems" />

        <v-form ref="form">
          <v-container>
            <v-card class="pa-5 ma-5 elevation-20">
              <v-row>
                <v-col cols="12" md="6">
                  <Input
                    v-for="(input, index) in inputs"
                    :key="index"
                    v-model="content"
                    :label="input.label"
                    :placeholder="input.placeholder"
                  />

                  <div class="pa-5">
                    <span>
                      O que você acha deste template?
                      <br />
                    </span>
                    <v-radio-group row>
                      <v-radio label="Gostei" value="radio-1"></v-radio>
                      <v-radio label="Não gostei" value="radio-2"></v-radio>
                    </v-radio-group>
                  </div>
                </v-col>

                <v-col cols="12" md="6">
                  <Input
                    v-for="(input, index) in inputs2"
                    :key="index"
                    v-model="content"
                    :label="input.label"
                    :placeholder="input.placeholder"
                  />

                  <v-col cols="12" md="12">
                    <v-textarea
                      name="input-7-1"
                      label="Mensagem"
                      value="Digite uma mensagem sobre o Sesc"
                    ></v-textarea>
                  </v-col>
                </v-col>

                <v-card-actions>
                  <div class="center">
                    <v-btn
                      class="ma-4 white--text text-initial"
                      color="#004C99"
                      @click="submit"
                      large
                    >Enviar</v-btn>
                    <v-btn class="ma-4 text-initial" @click="reset" outlined large>Limpar</v-btn>
                  </div>
                </v-card-actions>
              </v-row>
            </v-card>
          </v-container>
        </v-form>
      </v-content>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBarMini from "@/components/NavBarMini.vue";
import NavBar from "@/components/NavBar.vue";
import Input from "@/components/Input.vue";

@Component({
  components: {
    Input,
    NavBarMini,
    NavBar
  }
})
export default class CadastroClass extends Vue {
  private logourl: string = require("@/assets/logo.png");
  private menuitems: { title: string; icon: string; route: string }[] = [
    { title: "Login", icon: "mdi-login-variant", route: "/" },
    { title: "Cadastro", icon: "mdi-account", route: "/cadastro" },
    {
      title: "Tabs Verticais",
      icon: "mdi-animation",
      route: "/tabsverticais"
    },
    {
      title: "Tabs Horizontais",
      icon: "mdi-layers-triple",
      route: "/tabshorizontais"
    },
    { title: "Diálogos", icon: "mdi-chat", route: "/dialogo" },
    {
      title: "Tabelas",
      icon: "mdi-align-horizontal-left",
      route: "/tabelacompleta"
    },
    {
      title: "Navegação Vertical",
      icon: "mdi-menu",
      route: "/navbarvertical"
    }
  ];
  private subitems: { title: string }[] = [
    { title: "Item 1" },
    { title: "Item 2" },
    { title: "Item 3" }
  ];
  private content: string = "";
  private label: string = "";
  private placeholder: string = "";
  private inputs: { label: string; placeholder: string }[] = [
    { label: "Nome", placeholder: "Digite o nome" },
    { label: "E-mail", placeholder: "Digite o e-mail" },
    { label: "CPF", placeholder: "Digite o cpf" }
  ];
  private inputs2: { label: string; placeholder: string }[] = [
    {
      label: "Cargo",
      placeholder: "Assistente técnico, gestor, analista..."
    },
    { label: "Tempo de casa", placeholder: "Em anos..." },
    { label: "CPF", placeholder: "Digite o cpf" }
  ];

  private submit(): void {
    (this.$refs.form as Vue & { validate: () => boolean }).validate();
  }

  private reset(): void {
    (this.$refs.form as Vue & { reset: () => boolean }).reset();
  }
}
</script>

<style>
.text-initial {
  text-transform: initial;
}
.center {
  text-align: center;
}
</style>
