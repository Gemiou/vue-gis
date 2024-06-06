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
    viewBox="0 0 37 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.437 11.976l9.847-7.087 2.526 9.671 8.96 6.653c-5.06 1.593-15.23 4.87-15.428 5.235-.2.366-4.02-9.496-5.905-14.472z"
      fill="currentColor"
      fill-opacity=".4"
      stroke="currentColor"
      stroke-width="1.093"
      stroke-linejoin="round"
    ></path>
    <circle
      cx="18.746"
      cy="5.141"
      r="2.315"
      transform="rotate(28.55 18.746 5.14)"
      fill="currentColor"
    ></circle>
    <circle
      cx="21.528"
      cy="14.562"
      r="2.315"
      transform="rotate(28.55 21.528 14.562)"
      fill="currentColor"
    ></circle>
    <circle
      cx="30.127"
      cy="20.559"
      r="2.315"
      transform="rotate(28.55 30.127 20.56)"
      fill="currentColor"
    ></circle>
    <circle
      cx="13.872"
      cy="26.213"
      r="2.315"
      transform="rotate(28.55 13.872 26.213)"
      fill="currentColor"
    ></circle>
    <circle
      cx="8.681"
      cy="11.527"
      r="2.315"
      transform="rotate(28.55 8.681 11.527)"
      fill="currentColor"
    ></circle>
  </svg>
</template>
