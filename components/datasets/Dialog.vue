<script lang="ts" setup>
const datasetsStore = useDatasetsStore();
const satelite_provider = ref("Sentinel2");

const selectSateliteLayers = (groupName: string) => {
  if (datasetsStore.getLayerType === "group") {
    datasetsStore.setLayersGroup(groupName);
  }
};
</script>

<template>
  <q-dialog
    @show="selectSateliteLayers('Sentinel2')"
    v-model="datasetsStore.getDatasetsDialog"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card class="q-pa-sm" style="width: 1000px; max-width: 100vw">
      <q-toolbar>
        <div class="flex items-center">
          <span class="q-ml-sm text-h5">{{ $t("add_to_map") }}</span>
        </div>
        <q-space></q-space>
        <q-btn
          flat
          color="primary"
          icon="close"
          @click="datasetsStore.setDatasetsDialog(false, '')"
        />
      </q-toolbar>
      <q-separator></q-separator>

      <q-card-section style="height: 500px">
        <div class="row q-col-gutter-lg">
          <div class="col-12">
            <p class="text-weight-normal text-h6">
              {{ $t(datasetsStore.getSelectedlayersGroup) }}
            </p>
            <q-separator class="q-my-md"></q-separator>
            <q-tabs
              class="q-mb-md"
              v-if="datasetsStore.getLayerType === 'group'"
              v-model="satelite_provider"
              no-caps
              @click="selectSateliteLayers(satelite_provider)"
              outside-arrows
              mobile-arrows
              align="left"
            >
              <q-tab name="Sentinel2" label="Sentinel 2" />
              <q-tab name="Sentinel" label="Sentinel" />
              <q-tab name="Landsat" label="Landsat" />
            </q-tabs>

            <datasets-layers></datasets-layers>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
