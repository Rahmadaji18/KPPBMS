<template>
  <div class="bgl">
    <div class="bg">
      <a href="https://www.instagram.com/i_torta.cookiespuffs/" target="_blank"><img :src="photo" /></a>
      <div class="kata">
        <h1>{{ judul }}</h1>
        <p>{{ desc }}</p>
        <a @click="showAlert" class="btn">{{ harga }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import srv1 from "@/assets/images/srv1.png";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default {
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
    photo: {
      type: String,
      default: srv1,
    },
  },
  methods: {
    showAlert() {
      // Use sweetalert2
      Swal.fire({
        icon: "error",
        title: "Kamu Harus Login/Signup",
        text: "Menu ini hanya bisa digunakan jika kamu sudah melakukan login/signup",
        footer: '<a href="login">Login Sekarang</a>',
        confirmButtonText: "Okey",
        customClass: {
          title: "swal2-title",
          text: "swal2-textarea",
          confirmButtonText: "swal2-confirm",
          footer: "swal2-footer",
          popup: "swal-popup",
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.bgl {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 100px 0;
}

.bg {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 80%;
  gap: 100px;

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
}

img {
  border-radius: 30px;
  width: 400px;
  transition: 0.3s;

  @media (max-width: 480px) {
    width: 320px;
  }

  @media (max-width: 400px) {
    width: 250px;
  }
}

img:hover {
  transform: scale(0.9);
}

.kata {
  display: flex;
  flex-direction: column;
  margin-top: -20px;
  gap: 30px;
  width: 50%;

  @media (max-width: 700px) {
    width: 60%;
  }

  @media (max-width: 600px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 80%;
  }
}

.kata h1 {
  font-family: "montserrat", sans-serif;
  font-size: 48px;
  color: var(--biru);

  @media (max-width: 1270px) {
    font-size: 38px;
  }

  @media (max-width: 1140px) {
    font-size: 28px;
  }

  @media (max-width: 1080px) {
    font-size: 38px;
  }

  @media (max-width: 1000px) {
    font-size: 38px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 30px;
    text-align: center;
  }

  @media (max-width: 400px) {
    font-size: 28px;
    text-align: center;
  }
}

.kata p {
  font-size: 24px;

  @media (max-width: 1270px) {
    font-size: 20px;
  }

  @media (max-width: 1080px) {
    font-size: 18px;
  }

  @media (max-width: 1000px) {
    font-size: 20px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    text-align: center;
  }

  @media (max-width: 400px) {
    font-size: 16px;
    text-align: center;
  }
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

  @media (max-width: 1000px) {
    align-self: center;
    position: center;
  }

  @media (max-width: 480px) {
    align-self: center;
    position: center;
  }

  @media (max-width: 400px) {
    align-self: center;
    position: center;
  }
}

.btn:hover {
  transform: scale(1.1);
}
</style>
