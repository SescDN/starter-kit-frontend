<template>
  <div>
    <v-container>
      <v-content>
        <h1 class="text-center pa-5 ma-5">Navegação Vertical</h1>
        <NavBarVertical :menuitems="menuitems" />
      </v-content>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBarVertical from "@/components/NavBarVertical.vue";

@Component({
  components: {
    NavBarVertical
  }
})
export default class NavBarVerticalClass extends Vue {
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
}
</script>