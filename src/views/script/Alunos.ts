import { Component, Vue } from "vue-property-decorator"
import "reflect-metadata"
import {container} from "tsyringe"
import NavBarMini from "@/components/NavBarMini.vue"
import NavBar from "@/components/NavBar.vue"
import Tabelas from "@/components/Tabelas.vue"
import Aluno from "@/types/Aluno" 
import AlunoService from "@/services/AlunoService" 



@Component({
  components: {
    Tabelas,
    NavBarMini,
    NavBar    
  }
})

export default class AlunosClass extends Vue{
  private logourl: string = require("@/assets/logo.png");
  // itens do menu
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
  //cabeçalhos da tabela
  private headers: {
    text: string;
    align?: string;
    sortable?: boolean;
    value: string;
    }[] = [
        {
        text: "Id",
        align: "start",
        sortable: false,
        value: "id"
    },
    { text: "Nome", value: "nome" },
    { text: "Telefone", value: "telefone" }, 
    { text: "Documento", value: "documento" } 
    ];
  //alunos - //Usando tsyringe para criação de objetos resolvendo qualquer dependência que exista 
             //(isso promove o uso de injeção de dependência) 
  private alunoService: AlunoService = container.resolve(AlunoService)
  private items: Aluno[] = []
   
  created(): void{    
    this.alunoService.getAlunos()
      .then(result => {this.items = result})
  }                                
}