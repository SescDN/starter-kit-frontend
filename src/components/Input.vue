<template>
  <div>
    <v-text-field class="pa-5" :label="label" :placeholder="placeholder"></v-text-field>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class InputComponentClass extends Vue {
  @Prop() value: string | undefined;
  @Prop() placeholder: string | undefined;
  @Prop() label: string | undefined;
}
</script>