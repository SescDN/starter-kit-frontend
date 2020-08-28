<template>
  <div>
    <v-app :style="{ backgroundImage: 'url(' + image + ')' }">
      <v-container>
        <v-content>
          <div class="div-centralizado pa-5">
            <v-row no-gutters class="elevation-20" style="min-height: 370px">
              <v-col class="pa-5 blue darken-4 flex-child">
                <div class="ma-5 text-center pt-5">
                  <v-img class="ma-5" src="./../assets/logo.png" width="250" />
                </div>
              </v-col>

              <v-col class="pa-5 flex-child" style="background-color: #FFF;">
                <v-card-text>
                  <v-form>
                    <v-text-field
                      class="mt-5"
                      label="Login"
                      name="login"
                      prepend-icon="mdi-account"
                      type="text"
                    />

                    <v-text-field
                      class="mt-5"
                      id="password"
                      label="Senha"
                      name="password"
                      prepend-icon="mdi-lock"
                    />
                  </v-form>
                </v-card-text>

                <v-card-actions class="pa-5">
                  <v-btn large class="blue darken-4 white--text text-initial">Login</v-btn>
                  <v-spacer></v-spacer>
                  <span class="grey--text">Esqueci minha senha</span>
                </v-card-actions>
              </v-col>
            </v-row>
          </div>
        </v-content>
      </v-container>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoginClass extends Vue {
  private image: string = require("@/assets/background-login.jpg");
}
</script>

<style scoped>
.bg {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
}

.div-centralizado {
  /* flex container */
  width: 70%;
  margin: 20% auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: center;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  vertical-align: middle;
}

.flex-child {
  flex: 1;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}

.center-img {
  margin: 0 auto;
  align-content: center;
  justify-content: center;
}

.bg-img {
  background-color: #f2f2f2;
}

.pm-10 {
  margin-top: 25px;
  margin-bottom: 25px;
}

.text-initial {
  text-transform: initial;
  font-size: 16px;
}
</style>