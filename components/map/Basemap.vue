<script lang="ts" setup>
const mapStore = useMapStore();
const select_style = ref("dark-v11");

const styles = [
  { name: "Streets", value: "streets-v12", img: "streets" },
  { name: "Outdoors", value: "outdoors-v12", img: "outdoors" },
  { name: "Dark", value: "dark-v11", img: "dark" },
  { name: "Satellite", value: "satellite-streets-v12", img: "satelite" },
];

const mapLayers = ref([
  { name: "country-label", value: "country-label", visibility: true },
  {
    name: "settlement--major-label",
    value: "settlement-major-label",
    visibility: true,
  },
  {
    name: "settlement-minor-label",
    value: "settlement-minor-label",
    visibility: true,
  },
  { name: "water", value: "water", visibility: true },
  { name: "building", value: "building", visibility: true },
]);

const setMapStyle = (style: string) => {
  select_style.value = style;
  mapStore.setMapStyle(style);
};
const setMapProperty = (property: any) => {
  property.visibility = !property.visibility;
  mapStore.setMapProperty(property);
};
</script>

<template>
  <div class="row">
    <div class="col-12">
      <p class="text-white text-body1">{{ $t("map_options") }}</p>
      <p class="text-white text-body2">{{ $t("map_style") }}</p>
      <q-card
        :class="select_style === style.value ? 'active_base_map_image' : ''"
        class="q-pa-sm sidebar q-mb-sm cursor-pointer"
        flat
        @click="setMapStyle(style.value)"
        v-for="style in styles"
        :key="style.value"
      >
        <div class="flex items-center justify-between">
          <div class="q-ml-xs">
            <!-- <q-avatar rounded size="30px" class="cursor-pointer">
              <img
                :src="`dashboard/img/${style.img}.png`"
                class="base_map_image"
              />
            </q-avatar> -->
            <span class="q-ml-sm text-white">{{ style.name }}</span>
          </div>
        </div>
      </q-card>
      <p class="text-white text-body2 q-mt-lg">{{ $t("map_layers") }}</p>
      <q-card
        class="q-pa-sm sidebar q-mb-sm cursor-pointer"
        @click="setMapProperty(mapLayer)"
        v-for="mapLayer in mapLayers"
        :key="mapLayer.value"
        flat
      >
        <div class="flex items-center justify-between">
          <div class="q-ml-xs">
            <q-avatar rounded size="30px" class="cursor-pointer">
              <q-icon
                :name="mapLayer.visibility ? 'visibility' : 'visibility_off'"
                color="white"
              ></q-icon>
            </q-avatar>
            <span class="q-ml-sm text-white">{{ $t(mapLayer.name) }}</span>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>
