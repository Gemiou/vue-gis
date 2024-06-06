<script lang="ts" setup>
const select_comp = ref("publishers");
</script>

<template>
  <q-card class="second_sidebar full-height" square>
    <q-card-section>
      <p class="text-white text-body1">{{ $t("eo_dashboard") }}</p>

      <q-tabs
        v-model="select_comp"
        align="left"
        dense
        active-color="white"
        inline-label
      >
        <q-tab
          name="publishers"
          class="map_sidebar_tabs"
          no-caps
          :label="$t('publishers')"
          @click="select_comp = 'publishers'"
        ></q-tab>
        <q-tab
          name="layers"
          class="map_sidebar_tabs"
          no-caps
          :label="$t('map_layers')"
          @click="select_comp = 'layers'"
        ></q-tab>

        <q-tab
          name="map"
          class="map_sidebar_tabs"
          no-caps
          :label="$t('map_options')"
          @click="select_comp = 'map'"
        ></q-tab>
      </q-tabs>

      <q-separator color="grey-8" class="q-mb-md"></q-separator>
      <map-publishers v-if="select_comp === 'publishers'"></map-publishers>
      <map-layers v-if="select_comp === 'layers'"></map-layers>
      <map-basemap v-if="select_comp === 'map'"></map-basemap>
    </q-card-section>
  </q-card>
</template>
