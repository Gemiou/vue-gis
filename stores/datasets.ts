import { defineStore } from "pinia";
import {
  getLayerGroups,
  getLayersGroup,
  getLayer,
  getLayerFeature,
} from "@/services/layers";
export const useDatasetsStore = defineStore("datasetsStore", {
  state: () => {
    return {
      datasetsDialog: false,
      layerGroups: [],
      layersGroup: [],
      selectedlayersGroup: "",
      layerType: "",
      layer: {},
      layerFeature: {},
    };
  },
  actions: {
    setDatasetsDialog(flag: boolean, groupName: string) {
      this.selectedlayersGroup = groupName;
      this.datasetsDialog = flag;
      this.layersGroup = [];
    },
    async setLayerGroups() {
      await getLayerGroups().then((res) => {
        this.layerGroups = res;
      });
    },
    async setLayersGroup(groupName: string) {
      await getLayersGroup(groupName).then((res) => {
        this.layersGroup = res;
      });
    },
    async setLayersType(layerType: string) {
      this.layerType = layerType;
    },

    async setlayer(layerName: string) {
      await getLayer(layerName).then((res) => {
        this.layer = res;
      });
    },
    async setLayerFeature(layerName: string) {
      if (layerName === "gr1:climate_zones") {
        return { latLonBoundingBox: { minx: -122.48605, miny: 37.830348 } };
      } else if (layerName === "gr1:gr_nomoi") {
        return { latLonBoundingBox: { minx: -122.48605, miny: 37.830348 } };
      } else if (layerName === "gr1:geo_stations") {
        return { latLonBoundingBox: { minx: -122.48605, miny: 37.830348 } };
      } else if (layerName === "gr1:sample_flight_plan") {
        return { latLonBoundingBox: { minx: 23.57484, miny: 37.830348 } };
      } else {
        return await getLayerFeature(layerName).then((res) => {
          return {
            latLonBoundingBox: {
              minx: res.latLonBoundingBox.minx,
              miny: res.latLonBoundingBox.miny,
            },
          };
        });
      }
    },
  },
  getters: {
    getDatasetsDialog: (state) => state.datasetsDialog,
    getLayergroups: (state) => state.layerGroups,
    getLayersgroup: (state) => state.layersGroup,
    getSelectedlayersGroup: (state) => state.selectedlayersGroup,
    getLayerType: (state) => state.layerType,
    getLayer: (state) => state.layer,
    getLayerFeature: (state) => state.layerFeature,
  },
});
