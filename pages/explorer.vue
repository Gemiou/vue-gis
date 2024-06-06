<script lang="ts" setup>
definePageMeta({
  name: "explorer",
  path: "/explorer",
  label: "Explorer",
  title: "explorer",
  layout: "default",
});
const layerStore = useLayerStore();
</script>

<template>
  <q-page>
    <div class="row">
      <div class="col-2">
        <map-sidebar></map-sidebar>
      </div>
      <div class="col-10">
        <app-map> </app-map>
      </div>
      <datasets-dialog></datasets-dialog>

      <layer-timeline
        class="timeline"
        v-if="layerStore.getLayerTimeLine"
      ></layer-timeline>
      <layer-dialog class="layer_info_dialog"></layer-dialog>
    </div>
  </q-page>
</template>
