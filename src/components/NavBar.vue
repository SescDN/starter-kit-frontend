<template>
  <div>
    <v-app-bar app clipped-right color="#004C99" dark flat>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer />
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class NavBarComponentClass extends Vue {
  @Prop() source: string | undefined;
}
</script>