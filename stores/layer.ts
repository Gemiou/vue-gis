import { defineStore } from "pinia";
export const useLayerStore = defineStore("layerStore", {
  state: () => {
    return {
      layerInfoDialog: false,
      layerName: "",
      layerTimeLine: false,
    };
  },
  actions: {
    setLayerInfoDialog(flag: boolean) {
      this.layerInfoDialog = flag;
    },
    setLayerTimeLine(flag: boolean, name: string) {
      this.layerTimeLine = flag;
      this.layerName = name;
    },
  },
  getters: {
    getLayerInfoDialog: (state) => state.layerInfoDialog,
    getLayerTimeLine: (state) => state.layerTimeLine,
    getLayerName: (state) => state.layerName,
  },
});
