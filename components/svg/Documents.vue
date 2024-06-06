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
    viewBox="0 0 27 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.75 4.714c-.422.003-.747.42-.75.745v20.367c0 .39.357.745.75.745h15.5c.393 0 .75-.355.75-.745V9.93c0-.195-.08-.39-.219-.528l-4.5-4.47a.762.762 0 00-.531-.218h-11zm.75 1.49H21V9.93c0 .39.357.745.75.745h3.75v14.406h-14V6.205zm11 1.048l1.945 1.933H22.5V7.252zm-9 5.907a.748.748 0 00-.75.745c0 .412.336.745.75.745h8c.414 0 .75-.333.75-.745a.748.748 0 00-.75-.745h-8zm0 3.974a.748.748 0 00-.75.745c0 .412.336.745.75.745h10c.414 0 .75-.333.75-.745a.748.748 0 00-.75-.745h-10zm0 3.974a.748.748 0 00-.75.745c0 .412.336.745.75.745h10c.414 0 .75-.333.75-.745a.748.748 0 00-.75-.745h-10z"
      fill="currentColor"
    ></path>
  </svg>
</template>
