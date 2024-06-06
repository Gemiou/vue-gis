import { $axios } from "@/composables";

const getPublisher = async (publisher_id: string) => {
  const response = await $axios.get(`/publishers/${publisher_id}`);
  return response.data;
};

const getPublisherLayers = async (
  publisher_id: string,
  page_size: number,
  page: number,
  sort: string
) => {
  const response = await $axios.get(
    `/data/${publisher_id}/?page_size=${page_size}&sort=${sort}&page=${page}`
  );
  return response.data;
};

export { getPublisher, getPublisherLayers };
