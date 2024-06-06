<script lang="ts" setup>
import mapboxgl from "mapbox-gl";
import "../node_modules/mapbox-gl/dist/mapbox-gl.css";
import { getFeatureInfo } from "~/services/layers";
mapboxgl.accessToken =
  "pk.eyJ1IjoiZWZ0aHltaW91Z2UiLCJhIjoiY2xmMTdzbHQ0MDV1eDNvcjBndDVrZ2VvbiJ9.MdPno7H6OqeP_CNdYzYfxQ";

const mapStore = useMapStore();
const map_viewer = ref(null);
const map = ref();

const initMap = async (mapStyle) => {
  map.value = new mapboxgl.Map({
    container: map_viewer.value,
    style: `mapbox://styles/mapbox/${mapStyle}`, // Replace with your preferred map style
    center: [23.727539, 37.98381],
    zoom: 5,
    attributionControl: false,
    projection: {
      name: "mercator",
    },

    transformRequest: (url: any, resourceType: any) => {
      if (
        resourceType === "Tile" &&
        url.startsWith("http://np-digitrans-dev.centraldc")
      ) {
        return {
          url: url,
          headers: { Authorization: "Basic V01TX1VTRVI6KHdtc191c2VyKQ==" },
        };
      }
    },
  });
  // disable map rotation using right click + drag
  map.value.dragRotate.disable();
  map.value.touchZoomRotate.disableRotation();
};

const addDataLayer = (layer) => {
  map.value.addSource(layer.name, {
    type: "raster",
    tiles: layer.tiles,
    tileSize: 256,
  });
  map.value.addLayer({
    id: layer.name,
    type: "raster",
    source: layer.name,
  });
};

mapStore.$onAction(
  ({
    name, // name of the action
    store, // store instance, same as `someStore`
    args, // array of parameters passed to the action
    after, // hook after the action returns or resolves
    onError, // hook if the action throws or rejects
  }) => {
    if (name === "setMapStyle") {
      after(() => {
        const mapStyle = mapStore.getMapStyle;
        const mapLayers = mapStore.getLayersList;
        map.value.remove();

        initMap(mapStyle).then(() => {
          map.value.on("load", () => {
            mapLayers.forEach((layer) => {
              addDataLayer(layer);
            });
          });
        });
      });
    }
    if (name === "setLayerToMap") {
      after(() => {
        const layer = mapStore.getLayer;
        const mapLayer = map.value.getLayer(layer.name);
        if (typeof mapLayer === "undefined") {
          if (layer.type === "WMS") {
            addDataLayer(layer);
          }
        }
      });
    }
    if (name === "updateLayerToMap") {
      after(() => {
        const layer = mapStore.getLayer;
        const removeLayerId = mapStore.getRemoveLayerName;
        if (map.value.getLayer(removeLayerId)) {
          map.value.removeLayer(removeLayerId);
        }
        if (map.value.getSource(removeLayerId)) {
          map.value.removeSource(removeLayerId);
        }
        if (layer.type === "WMS") {
          addDataLayer(layer);
        }
      });
    }
    if (name === "removeLayerFromMap") {
      after(() => {
        const removeLayerName = mapStore.getRemoveLayerName;
        map.value.removeLayer(removeLayerName);
        map.value.removeSource(removeLayerName);
      });
    }
    if (name === "flyToLayer") {
      after(() => {
        const layer = mapStore.getLayer;

        const flyProps = {
          center: layer.center,
          zoom: 15,
        };
        map.value.flyTo({
          ...flyProps, // Fly to the selected target
          duration: 12000, // Animate over 12 seconds
          essential: true, // This animation is considered essential with
          //respect to prefers-reduced-motion
        });
      });
    }
    if (name === "setLayerPaintProperty") {
      after(() => {
        const layerPaint = mapStore.getLayerPaintProperty;
        if (layerPaint.type === "WMS") {
          map.value.setPaintProperty(
            layerPaint.layerId,
            "raster-opacity",
            layerPaint.opacity
          );
        }
      });
    }
    if (name === "setMapProperty") {
      after(() => {
        const mapProperty = mapStore.getMapProperty;
        map.value.setLayoutProperty(
          mapProperty.value,
          "visibility",
          mapProperty.visibility ? "visible" : "none"
        );
      });
    }
  }
);

onMounted(() => {
  initMap("dark-v11");
});
</script>

<template>
  <q-card flat square>
    <div ref="map_viewer" class="map_viewer"></div>
  </q-card>
</template>
