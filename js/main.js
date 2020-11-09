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
    intervalId: 0,
  }, // <- end data

  created() {
    this.startInterval();
  }, // <- end created function

  methods: {
    // scroll to the previous image
    prevImg() {
      this.imgIndex = (this.imgIndex === 0) ? this.imgUrls.length - 1 : this.imgIndex - 1;
    },
    // scroll to the next image
    nextImg() {
      this.imgIndex = (this.imgIndex === this.imgUrls.length - 1) ? 0 : this.imgIndex + 1;
    },
    // select a speficied image from dots navigation
    setImg(index) {
      this.imgIndex = index;
    },
    // start img auto-scroll
    startInterval() {
      this.intervalId = setInterval(() => {
        this.nextImg();
      }, 2500);
    },
    // stop img auto-scroll
    stopInterval() {
      clearInterval(this.intervalId);
    },
  },  // <- end methods
});