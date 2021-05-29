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
    { title: "Diálogos", icon: "mdi-chat", route: "/dialogos" },
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