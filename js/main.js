const app = new Vue({
  el: "#app",
  data: {
    imgUrls: [
      "./img/image1.jpg",
      "./img/image2.jpg",
      "./img/image3.jpg",
      "./img/image4.jpg"
    ],
    imgIndex: 0,
  }, // <- end data
  methods: {
    prevImg() {
      if(this.imgIndex === 0) {
        this.imgIndex = this.imgUrls.length - 1;
      } else {
        this.imgIndex--;
      }
    },
    nextImg() {
      if(this.imgIndex === this.imgUrls.length - 1) {
        this.imgIndex = 0;
      } else {
        this.imgIndex++;
      }
    },
  },  // <- end methods
});