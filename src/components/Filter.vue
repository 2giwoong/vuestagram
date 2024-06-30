<template>
  <div
    class="upload-image"
    :style="`background-image:url(${image})`"
  ></div>
  <div class="filters">
    <div class="filter-1"></div>
    <div class="filter-1"></div>
    <div class="filter-1"></div>
    <div class="filter-1"></div>
    <div class="filter-1"></div>
  </div>
</template>

<script>
export default {
  name: "filter",
  props: {
    image: String,
  },
};
</script>
