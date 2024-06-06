import { $axios } from "@/composables";

const getFilters = async () => {
  const response = await $axios.get(`/filters`);
  return response.data;
};

const getFilter = async (value: any) => {
  const response = await $axios.post(`/filters`, value);
  return response.data;
};

const search = async (values: any) => {
  const response = await $axios.post(`/search`, values);
  return response.data;
};

export { getFilters, getFilter, search };
