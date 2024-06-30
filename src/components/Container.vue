<template>
  <div>
    <!-- 포스트페이지 -->
    <div v-if="step == 0">
      <Post
        v-for="(posting, i) in postings"
        :key="i"
        :posting="postings[i]"
      />
    </div>
    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
      <Filter :image="image" />
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <Write @write="$emit('write', $event)" />
    </div>

  </div>
</template>

<script>
import Post from "./Post";
import Filter from "./Filter";
import Write from "./Write";

export default {
  name: "container",
  components: {
    Post,
    Filter,
    Write,
  },
  props: {
    postings: Array,
    step: Number,
    image: String,
  },
};
</script>

<style>
</style>