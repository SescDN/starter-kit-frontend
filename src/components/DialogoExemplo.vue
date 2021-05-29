<template src="./../views/html/DialogoExemplo.html"> </template>
<style src="./../views/css/DialogoExemplo.css"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";  

@Component
export default class DialogoExemploClass extends Vue{
    private dialog: boolean = false;
}
</script>