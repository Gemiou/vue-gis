<script lang="ts" setup>
const mapStore = useMapStore();
const columns = [
  {
    name: "published",
    required: true,
    label: "Published (UTC)",
    align: "left",
    sortable: true,
  },
  {
    name: "numberTyles",
    align: "center",
    label: "Features",
    field: "Features",
    sortable: true,
  },
  {
    name: "provider",
    align: "center",
    label: "Provider",
    field: "Provider",
    sortable: true,
  },

  {
    name: "coordinate_system",
    align: "center",
    label: "Coordinate System",
    field: "Coordinate System",
    sortable: true,
  },
  {
    name: "actions",
    align: "center",
    label: "",
    field: "",
    sortable: false,
  },
];
const timelineData = ref([
  {
    metadata: {
      parent_id: "gr1:S2A_N0509_R093_T34SFJ_20230319T111918_PRE_PROCESS",
      name: "gr1:S2A",
      date: "20230319T111918",
      published: "2023-03-19",
      type: "raster",
      format: "WMS",
      created_at: "19 Mar 2024",
      opacity: 1,
      provider: "Neuropublic",
      center: [-73.935242, 40.73061],
      numberTyles: "22K",
      thumbnail:
        "https://tiles-cdn.koordinates.com/services/tiles/v4/thumbnail/layer=106410.353849,style=auto/1200x630.png",
    },
    geoServer: {
      REQUEST: "GetMap",
      SRS: "EPSG:3857",
      BBOX: "{bbox-epsg-3857}",
      STYLES: "",
      LAYERS: "gr1:S2A_N0509_R093_T34SFJ_20230319T111918_PRE_PROCESS",
      WIDTH: "768",
      HEIGHT: "300",
      FORMAT: "image/png",
      TRANSPARENT: true,
    },
  },
  {
    metadata: {
      parent_id: "gr1:S2A_N0509_R093_T34SFJ_20230319T111918_PRE_PROCESS",
      name: "gr1:S2B",
      date: "20230319T111918",
      published: "2023-03-20",
      type: "raster",
      format: "WMS",
      created_at: "20 Mar 2024",
      opacity: 1,
      provider: "Neuropublic",
      center: [-73.935242, 40.73061],
      numberTyles: "22K",
      thumbnail:
        "https://tiles-cdn.koordinates.com/services/tiles/v4/thumbnail/layer=106410.353849,style=auto/1200x630.png",
    },
    geoServer: {
      REQUEST: "GetMap",
      SRS: "EPSG:3857",
      BBOX: "{bbox-epsg-3857}",
      STYLES: "",
      LAYERS: "gr1:S2B_N0509_R093_T34SFJ_20230801T095834_PRE_PROCESS",
      WIDTH: "768",
      HEIGHT: "300",
      FORMAT: "image/png",
      TRANSPARENT: true,
    },
  },
]);

const createLayer = (metadata: any, geoServer: any) => {
  if (metadata.format === "WMS") {
    const url = Object.entries(geoServer)
      .map(([k, v]) => `${k}=${v}`)
      .join("&");
    const tileURL = `http://np-digitrans-dev.centraldc.gr:8080/geoserver/wms?${url}`;
    const tile = {
      id: geoServer.LAYERS,
      parent_id: metadata.parent_id,
      tiles: [tileURL],
      thumbnail: metadata.thumbnail,
      name: metadata.name,
      type: "WMS",
      created_at: metadata.created_at,
      timeline: metadata.timeline,
      opacity: metadata.opacity,
      center: metadata.center,
    };
    mapStore.setLayerToMap(tile);
  }
};
const layerIsOnMap = (layer: any) => {
  return (
    mapStore.getLayersList.filter((l) => {
      return l.id === layer;
    }).length > 0
  );
};
</script>

<template>
  <div class="row">
    <div class="col-12">
      <q-table
        flat
        bordered
        :rows="timelineData"
        :columns="columns"
        separator="cell"
        dense
        row-key="name"
      >
        <template v-slot:header="props">
          <q-tr :props="props" class="bg-grey-4">
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              <span class="text-weight-bold">{{ col.label }}</span>
            </q-th>
          </q-tr>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="published" :props="props">
              {{ props.row.metadata.published }}
            </q-td>
            <q-td key="numberTyles" :props="props">
              {{ props.row.metadata.numberTyles }}
            </q-td>
            <q-td key="provider" :props="props">
              {{ props.row.metadata.provider }}
            </q-td>
            <q-td key="coordinate_system" :props="props">
              {{ props.row.geoServer.SRS }}
            </q-td>
            <q-td key="actions" :props="props">
              <q-btn
                :color="
                  layerIsOnMap(props.row.geoServer.LAYERS) ? 'teal' : 'primary'
                "
                no-caps
                unelevated
                size="sm"
                :icon-right="
                  layerIsOnMap(props.row.geoServer.LAYERS) ? 'done' : 'add'
                "
                label="Map"
                @click.stop="
                  createLayer(props.row.metadata, props.row.geoServer)
                "
              >
              </q-btn>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>
</template>
