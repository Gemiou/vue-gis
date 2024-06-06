import { $axios } from "@/composables";

const getLayerGroups = async () => {
  return await $axios
    .get(
      `http://np-digitrans-dev.centraldc.gr:8080/geoserver/rest/layergroups.json`,
      {
        auth: {
          username: "admin",
          password: "geoserver",
        },
      }
    )
    .then((response) => {
      const layergroups = response["data"]["layerGroups"]["layerGroup"].map(
        (layer) => {
          return layer;
        }
      );

      return layergroups;
    });
};

const getLayersGroup = async (groupName: string) => {
  return await $axios
    .get(
      `http://np-digitrans-dev.centraldc.gr:8080/geoserver/rest/layergroups/${groupName}.json`,
      {
        auth: {
          username: "admin",
          password: "geoserver",
        },
      }
    )
    .then((response) => {
      if (response["data"]["layerGroup"]["publishables"]["published"].length) {
        const group =
          response["data"]["layerGroup"]["publishables"]["published"];
        return group;
      } else {
        const group = [
          response["data"]["layerGroup"]["publishables"]["published"],
        ];
        return group;
      }
    });
};

const getLayer = async (layerName: string) => {
  return await $axios
    .get(
      `http://np-digitrans-dev.centraldc.gr:8080/geoserver/rest/layers/${layerName}.json`,
      {
        auth: {
          username: "admin",
          password: "geoserver",
        },
      }
    )
    .then((response) => {
      const layer = response["data"]["layer"];
      return layer;
    });
};

const getLayerFeature = async (layerName: string) => {
  const slice_name = layerName.slice(4);
  return await $axios
    .get(
      `http://np-digitrans-dev.centraldc.gr:8080/geoserver/rest/workspaces/gr1/coveragestores/${slice_name}/coverages/${slice_name}.json`,
      {
        auth: {
          username: "admin",
          password: "geoserver",
        },
      }
    )
    .then((response) => {
      const feature = response["data"]["coverage"];
      return feature;
    });
};

const getFeatureInfo = async (e: any) => {
  let r = 6378137 * Math.PI * 2;
  let x = (e.lngLat.lng / 360) * r;
  let sin = Math.sin((e.lngLat.lat * Math.PI) / 180);
  let y = ((0.25 * Math.log((1 + sin) / (1 - sin))) / Math.PI) * r;
  let bbox = x - 50 + "," + (y - 50) + "," + (x + 50) + "," + (y + 50);
  const geoServer = {
    SERVICE: "WMS",
    REQUEST: "GetFeatureInfo",
    SRS: "EPSG:3857",
    VERSION: "1.1.1",
    BBOX: bbox,
    STYLES: "",
    LAYERS: "gr1:geo_stations",
    QUERY_LAYERS: "gr1:geo_stations",
    INFO_FORMAT: "application/json",
  };
  const url = Object.entries(geoServer)
    .map(([k, v]) => `${k}=${v}`)
    .join("&");
  const tileURL = `http://np-digitrans-dev.centraldc.gr:8080/geoserver/gr1/wms?${url}`;
  return await $axios
    .get(tileURL, {
      auth: {
        username: "admin",
        password: "geoserver",
      },
    })
    .then((response) => {
      console.log(response);
    });
};

export {
  getLayerGroups,
  getLayersGroup,
  getLayer,
  getLayerFeature,
  getFeatureInfo,
};
