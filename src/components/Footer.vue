<template>
  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        type="file"
        id="file"
        class="inputfile"
      />
      <label
        for="file"
        class="input-plus"
      >+</label>
    </ul>
  </div>
</template>

<script>
export default {
  name: "footer",
  methods: {
    upload(e) {
      const file = e.target.files;
      this.$emit("file-upload", file); // file-upload 이벤트를 발행
    },
  },
};
</script>

<style>
</style>