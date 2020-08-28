<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style scoped>
#app {
  font-family: "Libre Franklin", sans-serif;
}
</style>
