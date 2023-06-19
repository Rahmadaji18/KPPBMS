<template>
  <div class="bg">
    <h1>Our Portofolio</h1>
    <div class="bgc">
      <Carousel :autoplay="2000" :itemsToShow="3.95" :wrapAround="true" :transition="500" :breakpoints="breakpoints">
        <Slide v-for="slide in images" :key="slide">
          <img class="carousel__item" :src="slide" />
        </Slide>
        <!-- <Navigation class="nav" /> -->
        <template #addons> </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

import prj1 from "@/assets/images/prj1.png";
import prj2 from "@/assets/images/prj2.png";
import prj3 from "@/assets/images/prj3.png";
import prj4 from "@/assets/images/prj4.png";
import prj5 from "@/assets/images/prj5.png";
import prj6 from "@/assets/images/prj6.png";
import prj7 from "@/assets/images/prj7.png";
import prj8 from "@/assets/images/prj8.png";
import prj9 from "@/assets/images/prj9.png";

export default defineComponent({
  name: "CarouselServices",
  components: {
    Carousel,
    Slide,
    // Pagination,
    // Navigation,
  },
  data() {
    return {
      images: [prj1, prj2, prj3, prj4, prj5, prj6, prj7, prj8, prj9],
      breakpoints: {
        200: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        500: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        800: {
          itemsToShow: 3,
          snapAlign: "center",
        },
      },
    };
  },
});
</script>

<style scoped>
.bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding-top: 70px;
  padding-bottom: 100px;
  gap: 39px;
  background-color: var(--biru);
}

.bgc {
  width: 80%;
}

.bg h1 {
  font-family: "Montserrat", sans-serif;
  font-size: 60px;
  color: var(--putih);
  margin: auto;
  text-align: center;
}

.carousel__item {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

.carousel__slide {
  padding: 10px;
}

.carousel__viewport {
  perspective: 5000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
