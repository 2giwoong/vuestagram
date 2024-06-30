<template>
  <Header
    @increase-step="increaseStep"
    @publish-step="publishStep"
    :step="step"
  />

  <Container
    @write="myWrite = $event"
    :image="image"
    :postings="postings"
    :step="step"
  />
  <button @click="more">더보기</button>

  <Footer @file-upload="handleFileUpload" />

</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import postdata from "./assets/js/postdata";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      postings: postdata,
      moreView: 0,
      step: 0,
      image: "",
      myWrite: "",
    };
  },
  components: {
    Header,
    Footer,
    Container,
  },
  methods: {
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.moreView}.json`)
        .then((getfiles) => {
          console.log(getfiles.data);
          this.postings.push(getfiles.data);
          this.moreView++;
        });
    },
    handleFileUpload(file) {
      let url = URL.createObjectURL(file[0]);
      this.image = url;
      this.step++; // 업로드 후에 다음 페이지로 이동
      console.log(url);
    },
    increaseStep() {
      this.step++;
    },
    publishStep() {
      var mypostings = {
        name: "gi woong",
        userImage: "https://picsum.photos/100?random=1",
        postImage: this.image,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.myWrite, //container에 textarea 부분에 있는게 여기에 들어가야함
        filter: "perpetua",
      };
      this.postings.unshift(mypostings); //왼쪽에 있는 this.postings array에 자료 집어넣어줌
      this.step = 0;
    },
  },
};
</script>