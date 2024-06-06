<script setup lang="ts">
import Keycloak from "keycloak-js";
import { useKeycloak } from "@/stores/keycloak";
const config = useRuntimeConfig();
const keycloakStore = useKeycloak();
const state = reactive({
  loggedIn: false,
});

const initOptions = {
  url: config.public.keycloakUrl,
  realm: config.public.keycloakRealm,
  clientId: config.public.keycloakClientId,
};
const keycloak = new Keycloak(initOptions);
keycloak
  .init({ pkceMethod: "S256", responseMode: "query", onLoad: "check-sso" })
  .then((auth) => {
    if (!auth) {
      keycloak.login();
    } else {
      keycloakStore.setup(keycloak);
      state.loggedIn = true;
    }
  });
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
