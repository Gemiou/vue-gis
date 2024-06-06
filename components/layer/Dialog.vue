<script lang="ts" setup>
const layerStore = useLayerStore();
const tab = ref("info");
</script>

<template>
  <q-dialog v-model="layerStore.getLayerInfoDialog" persistent seamless>
    <q-card style="min-width: 680px; height: 95vh" class="layer_info_dialog">
      <q-toolbar>
        <div class="flex text-weight-bold items-center">
          <span class="q-ml-sm">Info layer</span>
        </div>
        <q-space></q-space>
        <q-btn
          flat
          color="primary"
          icon="close"
          @click="layerStore.setLayerInfoDialog(false)"
        />
      </q-toolbar>

      <q-separator></q-separator>

      <q-card-section>
        <p class="layer_info_title">NZ Property Titles</p>
        <q-tabs
          v-model="tab"
          class="text-black"
          shrink
          align="left"
          stretch
          indicator-color="primary"
        >
          <q-tab name="info" label="Info" no-caps class="layer_tab" />
          <q-tab name="history" label="History" no-caps />
          <q-tab name="bands" label="Bands" no-caps />
        </q-tabs>
        <q-separator></q-separator>
        <layer-info v-if="tab === 'info'" class="q-mt-md"></layer-info>
        <layer-bands v-if="tab === 'bands'" class="q-mt-md"></layer-bands>
        <layer-history v-if="tab === 'history'" class="q-mt-md"></layer-history>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
