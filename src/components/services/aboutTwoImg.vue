<template>
  <div class="bgl">
    <div class="bg">
      <div class="photo">
        <a href="https://youtu.be/dTHGLBAiUZA" target="_blank"><img :src="photo1" /></a>
        <a href="https://youtu.be/1xEMRCuUbCo" target="_blank"><img :src="photo2" /></a>
      </div>
      <div class="kata">
        <h1>{{ judul }}</h1>
        <p>{{ desc }}</p>
        <a href="https://api.whatsapp.com/send/?phone=6282140759677&text&type=phone_number&app_absent=0" target="_blank" class="btn">{{ harga }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import srv2 from "@/assets/images/srv2.png";
import srv3 from "@/assets/images/srv3.png";

export default {
  name: "aboutTwoImg",
  props: {
    judul: {
      type: String,
      default: "Judul",
    },
    desc: {
      type: String,
      default: "desc",
    },
    harga: {
      type: String,
      default: "desc",
    },
    photo1: {
      type: String,
      default: srv2,
    },
    photo2: {
      type: String,
      default: srv3,
    },
  },
};
</script>

<style scoped>
.bgl {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 850px;
}

.bg {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1160px;
  gap: 100px;
}

.photo {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.photo img {
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  transition: 0.3s;
}

.photo img:hover {
  transform: scale(0.9);
}

.kata {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: -20px;
}

.kata h1 {
  font-family: "montserrat", sans-serif;
  font-size: 48px;
  color: var(--biru);
}

.kata p {
  font-size: 24px;
}

.btn {
  border-radius: 1rem;
  color: white;
  background-color: #002855;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
  max-width: max-content;
}

.btn:hover {
  transform: scale(1.1);
}
</style>
