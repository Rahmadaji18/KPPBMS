<template>
  <div class="landing">
    <div class="first">
      <div class="kata">
        <div class="judul">
          <h1>Hello Everyone!</h1>
          <h1>Welcome To</h1>
          <h1 class="kuning">BMS 15</h1>
          <p style="font-size: medium; margin-top: 1rem">Ini adalah KPP BMS kami. Terima kasih BMS, kami akhirnya cukup paham tentang materi permediaan. Doakan tetap kuat di kala gempuran prkatikum. Aamiin.</p>
        </div>
      </div>
      <img :src="gambar" />
    </div>
  </div>
</template>

<script>
import gambar from "@/assets/images/Marketing.png";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default {
  name: "LandingPage",
  props: {},

  data() {
    return {
      gambar: gambar,
    };
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

<style scoped>
.landing {
  background: linear-gradient(90deg, #002855, #001635);
  align-content: center;
  margin: 0;
  padding: 100px 30px 100px;
}

.first {
  display: flex;
  width: 88%;
  margin: auto;
  padding: auto;
  align-items: center;
  justify-items: space-between;
  gap: 50px;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 0;
    width: 100%;
  }
}

.kata {
  display: flex;
  flex-direction: column;
  gap: 20px;
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

.kata p,
i {
  font-size: 20px;
  color: var(--putih);
  text-align: left;
  font-family: "Poppins", sans-serif;

  @media (max-width: 1270px) {
    font-size: 15px;
  }

  @media (max-width: 1080px) {
    font-size: 12px;
  }

  @media (max-width: 1000px) {
    font-size: 12px;
  }
  @media (max-width: 360px) {
    font-size: 12px;
  }
}

.judul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: -20px;
  @media (max-width: 1270px) {
    margin-top: -20px;
  }
}

.judul h1 {
  font-size: 60px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  margin-bottom: -10px;

  @media (max-width: 1270px) {
    font-size: 50px;
  }

  @media (max-width: 600px) {
    font-size: 40px;
  }

  @media (max-width: 360px) {
    font-size: 35px;
  }
}

.judul .kuning {
  color: var(--kuning);
  @media (max-width: 414px) {
    font-size: 33px;
    margin-top: 4px;
  }
}

img {
  width: 640px;
  height: auto;

  @media (max-width: 600px) {
    margin-top: 0.5rem;
    left: 0;
    width: 320px;
    height: auto;
  }
}

.btnl {
  border-radius: 10px;
  border: none;
  background-color: var(--kuning);
  color: var(--biru);
  padding: 5px 14px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  align-self: flex-start;
  margin-top: 20px;
  cursor: pointer;
  transition: ease-out 0.3s;

  @media (max-width: 1080px) {
    margin-top: 5px;
    font-size: 18px;
  }
}

.btnl:hover {
  transform: scale(0.9);
}
</style>
