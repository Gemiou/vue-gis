import { defineStore } from "pinia";
export const useMapStore = defineStore("mapStore", {
  state: () => {
    return {
      layers_list: [],
      layer: {},
      removeLayerName: "",
      layerPaintProperty: {},
      layerIndex: "",
      layerNextIndex: "",
      layerAboveIndex: "",
      mapStyle: "dark-v11",
      mapProperty: {},
    };
  },
  actions: {
    setMapStyle(style: string) {
      this.mapStyle = style;
    },

    setMapProperty(mapProperty: string) {
      this.mapProperty = mapProperty;
    },

    setLayerToMap(layer: any) {
      const layerExist = _Find(this.layers_list, layer);
      if (!layerExist) {
        this.layers_list.push(layer);
        this.layer = layer;
      }
    },

    async updateLayerToMap(layer: any) {
      this.removeLayerName = layer.name;
      this.layer = layer;
    },

    flyToLayer(layer: any) {
      this.layer = layer;
    },
    moveUp(layer: any) {
      this.layerIndex = layer;
      this.layerAboveIndex = layer;
    },
    moveDown(layer: any) {
      this.layerIndex = layer;
      this.layerNextIndex = layer;
    },
    setLayerPaintProperty(id, source, type, opacity) {
      this.layerPaintProperty = {
        layerId: id,
        source: source,
        type: type,
        opacity: opacity,
      };
    },
    removeLayerFromMap(layerName: any) {
      this.layers_list = this.layers_list.filter((layer) => {
        return layer.name !== layerName;
      });
      this.removeLayerName = layerName;
    },
  },
  getters: {
    getMapStyle: (state) => state.mapStyle,
    getMapProperty: (state) => state.mapProperty,
    getLayer: (state) => state.layer,
    getRemoveLayerName: (state) => state.removeLayerName,
    getLayersList: (state) => state.layers_list,
    getLayerPaintProperty: (state) => state.layerPaintProperty,
  },
});
