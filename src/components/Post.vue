<template>
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{ posting.name }}</span>
    </div>
    <div
      class="post-body"
      :style="{backgroundImage : `url(${posting.postImage})`}"
    ></div>
    <div class="post-content">
      <p>좋아요 {{ posting.likes }}개</p>
      <p><strong>{{ posting.name }}</strong> {{ posting.content }}</p>
      <p class="date">{{ posting.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "post",
  props: {
    postings: Array,
    posting: Object,
  },
};
</script>

<style>
</style>