<script lang="ts" setup>
const mapStore = useMapStore();
const mapStyle = ref("streets-v12");
const mapStyles = [
  "streets-v12",
  "outdoors-v12",
  "dark-v11",
  "satellite-streets-v12",
];
const fab1 = ref(true);
const setMapStyle = () => {
  mapStore.setMapStyle(mapStyle.value);
};
</script>

<template>
  <div class="toolbar">
    <q-fab
      v-model="fab1"
      text-color="primary"
      padding="xs"
      label-position="left"
      square
      color="white"
      icon="keyboard_arrow_up"
      direction="up"
    >
      <q-fab-action
        color="white"
        text-color="primary"
        padding="xs"
        icon="mode_edit_outline"
        square
      />
      <q-fab-action
        color="white"
        text-color="primary"
        padding="xs"
        icon="gps_fixed"
        square
      />
    </q-fab>
  </div>
</template>
