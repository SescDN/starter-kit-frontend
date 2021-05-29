import { Component, Vue } from "vue-property-decorator";
import NavBarMini from "@/components/NavBarMini.vue";
import NavBar from "@/components/NavBar.vue";
import DataTable from "@/components/DataTable.vue";
import Filters from "@/types/Filters"

@Component({
  components: {
    DataTable,
    NavBarMini,
    NavBar
  }
})
export default class TabelaCompletaClass extends Vue {
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

  private headers: {
    key: string;
    width: string;
    sortable?: boolean;
    type?: string;
    restrictToLen?: number;
    defaultSortBy?: boolean;
    defaultOrder?: string;
  }[] = [
    { key: "ID", width: "26%", sortable: true },
    { key: "Nome", width: "22%", sortable: true },
    { key: "Descrição", width: "24%", sortable: true, restrictToLen: 50 },
    {
      key: "Data",
      width: "18%",
      sortable: true,
      defaultSortBy: true,
      defaultOrder: "DESC"
    },
    { type: "actions", key: "Ações", width: "10%" }
  ];

  private filters: Filters[] = [
    {
      type: "input-date",
      key: "Date",
      min: "2017-05-04",
      max: "2019-10-28",
      label: "Data"
    },
    {
      type: "select-range",
      key: "Ações",
      defaultOption: "Selecionar valor",
      options: [
        { label: "-1000 to -501", value: { min: -1000, max: -501 } },
        { label: "-500 to -1", value: { min: -500, max: -1 } },
        { label: "0 to 499", value: { min: 0, max: 499 } },
        { label: "500 to 1000", value: { min: 500, max: 1000 } }
      ],
      label: "Orçamento"
    }
  ];

  private actions: {
    type: string;
    icon: string;
  }[] = [
    {
      type: "edit",
      icon: "edit"
    }
  ];

  private search: boolean = true;

  private items: {
    ID: string;
    Nome: string;
    Description: string;
    Date: string;
    Orçamento: number;
  }[] = [
    {
      ID: "3210",
      Nome: "Mesa Brasil Sesc",
      Description: "Melhorar o Design e Acessibilidade",
      Date: "18-03-2019",
      Orçamento: 345.54
    },
    {
      ID: "2315",
      Nome: "Sistema de Gestão Financeira",
      Description: "Alterar campos de orçamento",
      Date: "18-03-2019",
      Orçamento: 345.54
    },
    {
      ID: "6789",
      Nome: "Paineis Power BI",
      Description: "Modular dados tabulares",
      Date: "18-03-2019",
      Orçamento: 345.54
    },
    {
      ID: "2341",
      Nome: "Sesc Mais",
      Description: "Finalizar o Design sofisticado",
      Date: "18-03-2019",
      Orçamento: 345.54
    },
    {
      ID: "1201",
      Nome: "IAD",
      Description: "Agendar reunião de discussão",
      Date: "18-03-2019",
      Orçamento: 345.54
    }
  ];
}