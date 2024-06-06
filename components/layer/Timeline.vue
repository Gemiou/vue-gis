<script lang="ts" setup>
const layerStore = useLayerStore();
const mapStore = useMapStore();

const timelineData = [
  { value: 0, label: "2024-05-10" },
  { value: 1, label: "2024-05-16" },
];
const date = ref(0);
const timelineDataLabel = computed(() => `${date.value}`);
const geoServer = ref({});
const tile = ref({});
const selectDate = () => {
  const time = timelineData[date.value]["label"];
  geoServer.value = {
    REQUEST: "GetMap",
    SRS: "EPSG:3857",
    BBOX: "{bbox-epsg-3857}",
    STYLES: "",
    LAYERS: layerStore.getLayerName,
    WIDTH: "768",
    HEIGHT: "300",
    FORMAT: "image/png",
    TRANSPARENT: true,
    TIME: time,
  };
  const url = Object.entries(geoServer.value)
    .map(([k, v]) => `${k}=${v}`)
    .join("&");
  const tileURL = `http://np-digitrans-dev.centraldc.gr:8080/geoserver/wms?${url}`;
  tile.value = {
    name: layerStore.getLayerName,
    tiles: [tileURL],
    type: "WMS",
    timeline: true,
    opacity: 1,
    center: [],
    created_at: "2024-05-27 07:35:32.996 UTC",
    dateModified: "2024-06-05 10:21:20.689 UTC",
  };

  mapStore.updateLayerToMap(tile.value);
};
const closeTimeline = () => {
  layerStore.setLayerTimeLine(false, "");
};
</script>

<template>
  <q-card class="timeline_card second_sidebar">
    <q-expansion-item expand-separator dense dense-toggle default-opened dark>
      <template v-slot:header>
        <q-toolbar style="max-height: 10px !important">
          <div class="flex text-weight-bold items-center">
            <svg-timeline></svg-timeline>
            <span class="q-ml-sm"> {{ layerStore.getLayerName }}</span>
          </div>
          <q-space></q-space>
          <q-btn
            flat
            size="sm"
            color="white"
            icon="close"
            @click="closeTimeline()"
          />
        </q-toolbar>
      </template>
      <q-separator color="grey-5" class="q-my-sm"></q-separator>

      <q-card-section class="timeline_scroll q-pb-none second_sidebar">
        <q-slider
          v-model="date"
          color="green"
          class="q-px-lg text-white"
          @change="selectDate()"
          markers
          :marker-labels="timelineData"
          :label-value="timelineDataLabel"
          switch-marker-labels-side
          :min="0"
          :max="1"
        />
      </q-card-section>
    </q-expansion-item>
  </q-card>
</template>
