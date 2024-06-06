<script lang="ts" setup>
const datasetsStore = useDatasetsStore();
datasetsStore.setLayerGroups();
const selectLayersGroup = (groupName: string) => {
  if (groupName !== "Satellite_images") {
    datasetsStore.setLayersGroup(groupName);
    datasetsStore.setDatasetsDialog(true, groupName);
    datasetsStore.setLayersType("layer");
  } else {
    datasetsStore.setDatasetsDialog(true, groupName);
    datasetsStore.setLayersType("group");
  }
};
</script>

<template>
  <div>
    <div class="row">
      <div class="col-12">
        <p class="text-white text-body2 text-weight-regular">
          {{ $t("publishers") }}
        </p>
      </div>
    </div>
    <div class="row q-col-gutter-lg">
      <div class="col-12">
        <q-card
          class="q-pa-sm sidebar q-mb-sm cursor-pointer"
          flat
          @click="selectLayersGroup(layergroups.name)"
          v-for="layergroups in datasetsStore.getLayergroups"
        >
          <div class="flex items-center justify-between">
            <div class="q-ml-xs">
              <!-- <q-avatar rounded size="30px" class="cursor-pointer">
                <img
                  :src="`dashboard/img/${layergroups.name}.jpg`"
                  class="base_map_image"
                />
              </q-avatar> -->
              <span class="q-ml-sm text-white">{{ $t(layergroups.name) }}</span>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>
