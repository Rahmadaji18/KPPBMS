<template>
  <div class="communicate">
    <h3>Perlu Diskusi dan Konsultasi?</h3>
    <p>Tim kreatif kami akan dengan senang hati membahas kebutuhan pembuatan branding yang sesuai dengan keinginan Kamu.</p>
    <button class="btn" @click="showAlert">Schedule Now</button>
  </div>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default {
  name: "scheduleNow",
  props: {},
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
.communicate .btn {
  border-radius: 10px;
  border: none;
  background-color: var(--kuning);
  color: var(--biru);
  padding: 5px 14px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: -20px;
  cursor: pointer;
  transition: ease-out 0.3s;

  @media (max-width: 760px) {
    padding: 5px 5px;
    font-size: 16px;
  }
}
.communicate .btn:hover {
  transform: scale(1.1);
}
.communicate {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-image: url(@/assets/images/Group37.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  color: #fff;
  min-height: 35vh;
  padding: 40px 20px 60px;
  align-self: center;
  gap: 40px;
}

.communicate h3 {
  margin-top: 6px;
  font-size: 50px;
  text-align: center;
  align-self: center;
  line-height: 1;

  @media (max-width: 1080px) {
    margin-top: 3rem;
  }

  @media (max-width: 760px) {
    font-size: 2rem;
  }
}
.communicate p {
  font-size: 25px;
  text-align: center;
  align-self: center;
  padding-inline: 16rem;
  margin-top: -30px;

  @media (max-width: 1080px) {
    font-size: 18px;
    padding-inline: 5rem;
  }

  @media (max-width: 460px) {
    font-size: 14px;
    padding-inline: 3rem;
  }
}
</style>
