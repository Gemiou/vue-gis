import { defineStore } from "pinia";
import { fetchStatus } from "@/services/overview";
import { getFiltersService } from "@/services/global";
export const useGlobalStore = defineStore("globalStore", {
  state: () => {
    return {
      status: [] as any,
      filters: [] as any,
    };
  },
  actions: {
    async setFilters(filters: any) {
      await getFiltersService(filters).then((res) => {
        this.filters = res;
      });
    },
    async setStatus() {
      await fetchStatus().then((res) => {
        this.status = res;
      });
    },
  },
  getters: {
    getFilters: (state) => state.filters,
    getMonitorStatus: (state) => state.status,
  },
});
