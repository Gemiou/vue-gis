<script lang="ts" setup>
import { useKeycloak } from "@/stores/keycloak";
const keycloakStore = useKeycloak();
const route = useRoute();
const leftDrawerOpen = ref(true);

const logout = () => {
  keycloakStore.keycloak.logout();
};
</script>

<template>
  <q-drawer
    :mini="true"
    show-if-above
    :width="180"
    v-model="leftDrawerOpen"
    class="sidebar"
  >
    <div class="absolute-top">
      <q-list dense>
        <q-item v-ripple exact class="text-white q-my-sm">
          <q-item-section side>
            <svg-logo :isActive="true"></svg-logo>
          </q-item-section>
          <q-item-section> {{ $t("eo_dashboard") }} </q-item-section>
        </q-item>
      </q-list>
      <q-separator color="white"></q-separator>
    </div>
    <q-list
      nav
      dense
      class="sidebar_list"
      style="height: calc(100% - 60px); margin-top: 60px"
    >
      <q-item
        clickable
        v-ripple
        exact
        class="sidebar_item q-mb-sm"
        :to="{ name: 'explorer' }"
        :active="route.name === 'explorer'"
      >
        <q-item-section side>
          <svg-globe :isActive="route.name === 'explorer'"></svg-globe>
        </q-item-section>
        <q-item-section> Discover </q-item-section>
      </q-item>
    </q-list>
    <div class="absolute-bottom">
      <q-item clickable v-ripple exact class="sidebar_item" @click="logout()">
        <q-item-section side>
          <q-btn dense flat icon="logout" color="white" />
        </q-item-section>
        <q-item-section> Logout </q-item-section>
      </q-item>
    </div>
  </q-drawer>
</template>
