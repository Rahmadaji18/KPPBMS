<template>
  <div class="landing">
    <div class="first">
      <div class="kata">
        <div class="judul">
          <h1>Hello!</h1>
          <h1>Welcome To</h1>
          <h1 class="kuning">Ini Karya Kita</h1>
        </div>
        <p>Temukan penawaran layanan branding terbaikmu<br />dalam 1 platformdengan sistem <i>One Door Branding Services.</i></p>
        <button class="btnl" @click="showAlert">Schedule</button>
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
}

.kata {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
}

.kata p,
i {
  font-size: 20px;
  color: var(--putih);
  text-align: left;
  font-family: "Poppins", sans-serif;
}

.judul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: -20px;
}

.judul h1 {
  font-size: 70px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  margin-bottom: -10px;
}

.judul .kuning {
  color: var(--kuning);
}

img {
  width: 640px;
  height: auto;
}

.btnl {
  border-radius: 20px;
  border: none;
  background-color: var(--kuning);
  color: var(--biru);
  padding: 15px 14px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  align-self: flex-start;
  margin-top: 20px;
  cursor: pointer;
  transition: ease-out 0.3s;
}

.btnl:hover {
  transform: scale(0.9);
}
</style>
