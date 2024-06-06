<script lang="ts" setup>
let miniDrawer = ref(false);
</script>

<template>
  <q-layout view="hHh LpR fFf" class="body">
    <app-sidebar :mini-drawer="miniDrawer"></app-sidebar>
    <q-page-container>
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>
