<template>
  <div class="upload-image"></div>
  <div class="write">
    <textarea
      @input="$emit('write', $event.target.value)"
      class="write-box"
      placeholder="글을 작성하세요"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "write",
};
</script>

<style>
</style>