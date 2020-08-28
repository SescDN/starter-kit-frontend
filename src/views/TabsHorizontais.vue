<template>
  <div>
    <v-container>
      <v-content>
        <h1 class="text-center pa-5 ma-5">Abas Horizontais</h1>
        <NavBar />
        <!-- Barra lateral, que contém os itens do menu -->
        <NavBarMini :logourl="logourl" :menuitems="menuitems" />

        <TabsHorizontais :tabs="tabs" :textos="textos"></TabsHorizontais>
      </v-content>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBarMini from "@/components/NavBarMini.vue";
import NavBar from "@/components/NavBar.vue";
import TabsHorizontais from "@/components/TabsHorizontais.vue";

@Component({
  components: {
    TabsHorizontais,
    NavBarMini,
    NavBar
  }
})
export default class TabsHorizontaisClass extends Vue {
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

  private tabs: { tabitem: string }[] = [
    { tabitem: "Aba 1" },
    { tabitem: "Aba 2" },
    { tabitem: "Aba 3" },
    { tabitem: "Aba 4" }
  ];

  private textos: { texto: string }[] = [
    { texto: "Este é o conteúdo da primeira aba" },
    { texto: "Este é o conteúdo da segunda aba" },
    { texto: "Este é o conteúdo da terceira aba" },
    { texto: "Este é o conteúdo da quarta aba" }
  ];
}
</script>