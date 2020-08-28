<template>
  <div>
    <v-container>
      <v-content>
        <h1 class="text-center pa-5 ma-5">Diálogos</h1>
        <NavBar />
        <NavBarMini :menuitems="menuitems" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, sit assumenda tempora, distinctio, veniam recusandae incidunt aliquid dolore quas voluptas itaque cum sed similique pariatur eum? Repellat quaerat ex nostrum!</p>
        <Dialogos />
      </v-content>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// @ts-ignore
import Dialogos from "@/components/dialogos/Dialogos.vue";
import NavBarMini from "@/components/NavBarMini.vue";
import NavBar from "@/components/NavBar.vue";

@Component({
  components: {
    Dialogos,
    NavBarMini,
    NavBar
  }
})
export default class DialogosClass extends Vue {
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