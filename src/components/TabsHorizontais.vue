<template>
  <v-card class="elevation-10">
    <v-tabs>
      <v-tab v-for="tab in tabs" :key="tab.id">{{ tab.tabitem }}</v-tab>

      <v-tab-item class="min-height" v-for="texto in textos" :key="texto.id">
        <v-card flat>
          <v-card-text class="pa-5">{{ texto.texto }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class TabsHorizontaisComponentClass extends Vue {
  @Prop({ required: true }) tabs!: [];
  @Prop({ required: true }) textos!: [];
}
</script>

<style>
.min-height {
  height: 300px;
}
</style>