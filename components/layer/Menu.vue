<script lang="ts" setup>
const props = defineProps({
  layer: Object,
});
const mapStore = useMapStore();
const layerStore = useLayerStore();
const removeLayer = (name) => {
  layerStore.setLayerTimeLine(false, "");
  mapStore.removeLayerFromMap(name);
};
</script>

<template>
  <q-card style="width: 300px">
    <q-card-section>
      <q-list dense>
        <q-item>
          <q-item-section>
            <q-item-label>{{ $t("layer_opacity") }}</q-item-label>

            <q-slider
              v-model="props.layer.opacity"
              @update:model-value="
                mapStore.setLayerPaintProperty(
                  props.layer.name,
                  props.layer.name,
                  props.layer.type,
                  props.layer.opacity
                )
              "
              :min="0"
              :max="1"
              :step="0.1"
            />
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-if="props.layer.name === 'SENTINEL_VV'"
          v-close-popup
          @click="layerStore.setLayerTimeLine(true, props.layer.name)"
        >
          <q-item-section>Timeline</q-item-section>
        </q-item>

        <q-item
          clickable
          v-close-popup
          :disable="
            props.layer.name === 'climate_zones' ||
            props.layer.name === 'geo_stations' ||
            props.layer.name === 'gr_nomoi'
          "
          @click="mapStore.flyToLayer(props.layer)"
        >
          <q-item-section>{{ $t("zoom_to") }} </q-item-section>
        </q-item>

        <q-separator class="q-my-sm"></q-separator>
        <q-item
          clickable
          v-close-popup
          @click="removeLayer(props.layer.name)"
          class="q-mt-sm"
        >
          <q-item-section class="text-red">{{
            $t("remove_it")
          }}</q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>
