<script lang="ts" setup>
defineProps({
  filterLayers: Array,
});
const datasetsStore = useDatasetsStore();
const mapStore = useMapStore();
const geoServer = ref({});
const tile = ref({});

const createLayer = (layer) => {
  datasetsStore.setlayer(layer.name).then(() => {
    geoServer.value = {
      REQUEST: "GetMap",
      SRS: "EPSG:3857",
      BBOX: "{bbox-epsg-3857}",
      STYLES: "",
      LAYERS: datasetsStore.getLayer.name,
      WIDTH: "768",
      HEIGHT: "300",
      FORMAT: "image/png",
      TRANSPARENT: true,
      TIME: "",
    };
    const url = Object.entries(geoServer.value)
      .map(([k, v]) => `${k}=${v}`)
      .join("&");
    const tileURL = `http://np-digitrans-dev.centraldc.gr:8080/geoserver/wms?${url}`;
    tile.value = {
      name: datasetsStore.getLayer.name,
      tiles: [tileURL],
      type: "WMS",
      created_at: datasetsStore.getLayer.dateCreated,
      dateModified: datasetsStore.getLayer.dateModified,
      timeline: true,
      opacity: 1,
      center: [],
    };
    mapStore.setLayerToMap(tile.value);
  });

  datasetsStore.setLayerFeature(layer.name).then((res) => {
    const center = [res.latLonBoundingBox.minx, res.latLonBoundingBox.miny];
    tile.value.center = center;
  });
};
const layerIsOnMap = (name: any) => {
  return (
    mapStore.getLayersList.filter((l) => {
      return `gr1:${l.name}` === name;
    }).length > 0
  );
};
</script>

<template>
  <div class="row q-col-gutter-xl q-mb-lg">
    <div class="col-3" v-for="layer in datasetsStore.getLayersgroup">
      <q-card flat style="height: 320px">
        <img
          class="q-pa-md"
          style="height: 200px"
          :src="`http://np-digitrans-dev.centraldc.gr:8080/geoserver/www/thumbnails/${layer.name}.png`"
        />
        <q-separator></q-separator>

        <q-card-section class="q-pb-none">
          <div class="text-body2">Layer</div>
          <div class="text-body2 text-weight-bold">{{ layer.name }}</div>
        </q-card-section>
        <q-card-actions class="q-mt-sm">
          <q-space></q-space>
          <q-btn
            no-caps
            size="sm"
            padding="8px"
            unelevated
            :disable="layerIsOnMap(layer.name)"
            @click="createLayer(layer)"
            :color="layerIsOnMap(layer.name) ? 'teal-7' : 'primary'"
            >{{ layerIsOnMap(layer.name) ? $t("on_map") : $t("to_map") }}
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>
