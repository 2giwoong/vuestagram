<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li
        v-if="step == 1"
        @click="$emit('increase-step')"
      >Next</li>
      <li
        v-if="step == 2"
        @click="$emit('publish-step')"
      >발행</li>
    </ul>
    <img
      src="../assets/logo.png"
      class="logo"
    />
  </div>
</template>

<script>
export default {
  name: "header",
  props: {
    step: Number,
  },
};
</script>

<style>
</style>