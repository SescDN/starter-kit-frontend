<template>
  <div>
    <v-container>
      <v-content>
        <nav>
          <!--Side Menu Icon-->
          <v-app-bar flat color="#004C99" fill-height app>
            <v-app-bar-nav-icon class="white--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>
              <v-img src="./../assets/logo.png" width="95"></v-img>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <!--Dropdown Menu-->
            <div class="text-center">
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn text class="white--text" v-on="on">
                    <v-icon left>mdi-chevron-down</v-icon>
                    <span class="text-initial">Menu</span>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="item in menuitems"
                    :key="item.title"
                    link
                    router
                    :to="item.route"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
            <!-- Botão sair -->
            <v-btn text color="white">
              <span class="text-initial">Sair</span>
              <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
          </v-app-bar>
          <!--Side Menu-->
          <v-navigation-drawer temporary v-model="drawer" app color="#004C99">
            <v-container>
              <v-row class="mt-0">
                <v-col align="center">
                  <v-img src="./../assets/logo.png" width="95"></v-img>
                </v-col>
              </v-row>
            </v-container>

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
            </v-list>
          </v-navigation-drawer>
        </nav>
      </v-content>
    </v-container>
  </div>
</template>

<style scoped>
.text-initial {
  text-transform: initial;
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class NavBarVerticalComponentClass extends Vue {
  @Prop({ required: true }) menuitems!: [];

  private drawer: boolean = false;
}
</script>