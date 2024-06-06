<script lang="ts" setup>
const mapStore = useMapStore();
const layerStore = useLayerStore();

const clearAllLayer = () => {
  mapStore.getLayersList.forEach((layer) => {
    mapStore.removeLayerFromMap(layer.name);
    layerStore.setLayerTimeLine(false, "");
  });
};
</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="flex items-center justify-between">
        <div class="text-white text-body2 text-weight-regular">
          {{ $t("map_layers") }}
        </div>
        <div class="text-white text-h6">
          <q-btn @click="clearAllLayer()" no-caps size="sm" outline>{{
            $t("clearAllLayer")
          }}</q-btn>
        </div>
      </div>
    </div>
    <div class="col-12 q-mt-md">
      <q-card
        class="q-pa-sm sidebar q-mb-sm cursor-pointer"
        flat
        v-for="layer in mapStore.getLayersList"
        :key="layer.name"
      >
        <div class="flex items-center justify-between">
          <div class="q-ml-xs">
            <q-avatar rounded size="30px" class="cursor-pointer">
              <img
                :src="`http://np-digitrans-dev.centraldc.gr:8080/geoserver/www/thumbnails/gr1:${layer.name}.png`"
                class="base_map_image"
              />
            </q-avatar>
            <span class="q-ml-sm text-white">{{ layer.name }}</span>
          </div>
          <div>
            <q-btn icon-right="expand_more" size="10px" flat color="white">
              <q-menu>
                <layer-menu :layer="layer"></layer-menu>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>
