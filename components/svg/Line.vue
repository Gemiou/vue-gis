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
    <circle
      cx="10.657"
      cy="24.235"
      r="2.045"
      transform="rotate(28.55 10.657 24.235)"
      fill="currentColor"
    ></circle>
    <circle
      cx="25.427"
      cy="20.543"
      r="2.045"
      transform="rotate(28.55 25.427 20.543)"
      fill="currentColor"
    ></circle>
    <circle
      cx="18.965"
      cy="5.773"
      r="2.045"
      transform="rotate(28.55 18.965 5.773)"
      fill="currentColor"
    ></circle>
    <circle
      cx="9.734"
      cy="15.004"
      r="2.045"
      transform="rotate(28.55 9.734 15.004)"
      fill="currentColor"
    ></circle>
    <circle
      cx="27.273"
      cy="5.773"
      r="2.045"
      transform="rotate(28.55 27.273 5.773)"
      fill="currentColor"
    ></circle>
    <path
      d="M10.653 24.231l14.77-3.23 1.846-15.232M9.73 15.462c0-.37 5.847-6.308 8.77-9.231"
      stroke="currentColor"
      stroke-width=".969"
    ></path>
  </svg>
</template>
