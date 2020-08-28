<template>
  <v-card class="elevation-10">
    <v-tabs vertical color="#004C99">
      <v-tab v-for="tab in tabs" :key="tab.id">{{ tab.tabitem }}</v-tab>

      <v-tab-item class="min-height" v-for="texto in textos" :key="texto.id">
        <v-card flat>
          <v-card-text>{{ texto.texto }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class TabsComponentClass extends Vue {
  @Prop({ required: true }) tabs!: [];
  @Prop({ required: true }) textos!: [];
}
</script>

<style>
.min-height {
  height: 300px;
}
</style>