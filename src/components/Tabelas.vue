<template>
  <v-data-table :headers="headers" :items="items" :items-per-page="10" class="elevation-5"></v-data-table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class TabelasComponentClass extends Vue {
  @Prop({ required: true }) headers!: [];
  @Prop({ required: true }) items!: [];
}
</script>