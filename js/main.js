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
      this.imgIndex = (this.imgIndex === 0) ? this.imgUrls.length - 1 : this.imgIndex - 1;
    },
    nextImg() {
      this.imgIndex = (this.imgIndex === this.imgUrls.length - 1) ? 0 : this.imgIndex + 1;
    },
    setPhoto(index) {
      this.imgIndex = index;
    }
  },  // <- end methods
});