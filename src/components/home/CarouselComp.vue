<template>
  <div class="bg">
    <h1>Latest Project</h1>
    <div class="carousel">
      <button @click="prevSlide" class="btn">&lt;</button>
      <div class="carousel-slide">
        <img :src="currentImage" alt="Slide" />
        <img :src="currentImage1" alt="Slide" />
        <img :src="currentImage2" alt="Slide" />
      </div>
      <button @click="nextSlide" class="btn">></button>
    </div>
    <div class="bgblt">
      <div v-for="(blt, index) in images" :key="index" :class="{ blt: true, active: index === currentIndex }"></div>
    </div>
  </div>
</template>

<script>
import prj1 from "@/assets/images/prj1.png";
import prj2 from "@/assets/images/prj2.png";
import prj3 from "@/assets/images/prj3.png";
import prj4 from "@/assets/images/prj4.png";
import prj5 from "@/assets/images/prj5.png";
import prj6 from "@/assets/images/prj6.png";
import prj7 from "@/assets/images/prj7.png";
// import { thisExpression } from "@babel/types";

export default {
  name: "CarouselComp",
  props: {},

  data() {
    return {
      images: [prj1, prj2, prj3, prj4, prj5, prj6, prj7],
      currentIndex: 0,
      totImages: 7,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
    currentImage1() {
      if (this.currentIndex >= this.totImages - 1) {
        return this.images[0];
      }
      return this.images[this.currentIndex + 1];
    },
    currentImage2() {
      if (this.currentIndex + 1 >= this.totImages - 1) {
        return this.images[this.currentIndex - 5];
      }
      return this.images[this.currentIndex + 2];
    },
  },
  methods: {
    prevSlide() {
      if (this.currentIndex == 0) {
        this.currentIndex = 6;
      } else {
        this.currentIndex = this.currentIndex - 1;
      }
    },
    nextSlide() {
      if (this.currentIndex == 6) {
        this.currentIndex = 0;
      } else {
        this.currentIndex = this.currentIndex + 1;
      }
    },
  },
};
</script>

<style scoped>
.bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding-top: 70px;
  padding-bottom: 70px;
  gap: 39px;
}

.bg h1 {
  font-family: "Montserrat", sans-serif;
  font-size: 60px;
  color: var(--biru);
}

.carousel {
  display: flex;
  align-items: center;
  gap: 20px;
}

.bgblt {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.blt {
  background-color: gray;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
}

.blt.active {
  background-color: var(--biru);
}

.btn {
  min-height: fit-content;
  min-width: fit-content;
  border: none;
  background-color: var(--biru);
  color: var(--kuning);
  padding: 5px;
  border-radius: 20px;
  font-size: 30px;
}

.carousel-slide {
  display: flex;
  gap: 20px;
}

.carousel-slide img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}
</style>
