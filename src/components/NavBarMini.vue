<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      color="#004C99"
      permanent
      fill-height
      app
    >
      <v-list-item class="px-2">
        <div class="ml-1 mt-2 cursor-pointer" style="width: 95px;">
          <img @click.stop="mini = !mini" :src="alterarImagem()" width="100%" />
        </div>
      </v-list-item>

      <v-divider class="white--text mt-4 mb-3"></v-divider>

      <v-list dense>
        <v-list-item v-for="item in menuitems" :key="item.title" link router :to="item.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!--
          Descomentar esse código para criar o Slot com dropdown menu
          
          <v-list-group
          no-action
          sub-group
          prepend-icon="mdi-arrow-down"
          color="#FFF"
          value="true"
          class="white--text"
        >

          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="white--text">Usuários</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(admin, i) in admins"
            :key="i"
            link
            class="white--text"
          >
            <v-list-item-title class="white--text" v-text="admin[0]"></v-list-item-title>
          </v-list-item>
        </v-list-group>-->
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class NavBarMiniComponentClass extends Vue {
  @Prop() source: string | undefined;
  @Prop({ required: true }) menuitems!: [];
  @Prop() logourl: string | undefined;

  private mini: boolean = true;
  private drawer: boolean = true;
  private admins: [string][] = [["Administrador"], ["Configurações"]];
  private sescLogoMini: string = require("@/assets/logo-mini.png");
  private sescLogo: string = require("@/assets/logo.png");

  private alterarImagem(): string {
    if (this.mini == true) {
      return this.sescLogoMini;
    } else {
      return this.sescLogo;
    }
  }
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>