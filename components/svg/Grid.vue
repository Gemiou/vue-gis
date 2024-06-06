<script lang="ts" setup>
const props = defineProps({
  width: String,
  height: String,
});
</script>

<template>
  <svg
    preserveAspectRatio="xMidYMid meet"
    :width="props.width"
    :height="props.height"
    viewBox="0 0 37 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="6.5" y="3.5" width="6" height="6" fill="#EAEBEB"></rect>
    <rect x="6.5" y="15.5007" width="6" height="6" fill="#EAEBEB"></rect>
    <rect x="12.5002" y="9.50012" width="6" height="6" fill="#EAEBEB"></rect>
    <rect x="12.5002" y="21.4999" width="6" height="6" fill="#EAEBEB"></rect>
    <rect x="18.4998" y="3.5" width="6" height="6" fill="#EAEBEB"></rect>
    <rect x="18.4998" y="15.5007" width="6" height="6" fill="#EAEBEB"></rect>
    <rect x="6.5" y="9.50012" width="6" height="6" fill="#989999"></rect>
    <rect x="6.5" y="21.4999" width="6" height="6" fill="#989999"></rect>
    <rect x="12.5002" y="3.5" width="6" height="6" fill="#989999"></rect>
    <rect x="12.5002" y="15.5007" width="6" height="6" fill="#989999"></rect>
    <rect x="18.4998" y="9.50012" width="6" height="6" fill="#989999"></rect>
    <rect x="18.4998" y="21.4999" width="6" height="6" fill="#989999"></rect>
    <rect x="24.4998" y="3.5" width="6" height="6" fill="#989999"></rect>
    <rect x="24.4998" y="15.5007" width="6" height="6" fill="#989999"></rect>
    <rect x="24.4998" y="9.50012" width="6" height="6" fill="#EAEBEB"></rect>
    <rect x="24.4998" y="21.4999" width="6" height="6" fill="#EAEBEB"></rect>
  </svg>
</template>
