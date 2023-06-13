<template>
  <header>
    <div class="logo">
      <a href="/"><img :src="logo" alt="Logo" /></a>
    </div>
    <nav>
      <li><a href="about">About</a></li>
      <li><DropdownComp class="dropdown" title="Service" :items="services" /></li>
      <li @click="showAlert"><a>Schedule</a></li>
      <router-link to="/login" class="btn">Login</router-link>
    </nav>
  </header>
</template>

<script>
import logo from "@/assets/images/logo.png";
import DropdownComp from "./DropdownComp.vue";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default {
  name: "NavComp",
  props: {},
  data() {
    return {
      logo: logo,
      services: [
        {
          title: "Fotografi",
          link: "/photography",
        },
        {
          title: "Videografi",
          link: "/videography",
        },
        {
          title: "Design Grafis",
          link: "/graphicsdesign",
        },
        {
          title: "Web Development",
          link: "/webdevelopment",
        },
      ],
    };
  },
  components: { DropdownComp },
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
        },
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,700&display=swap");

header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  background-color: var(--kuning);
  color: var(--biru);
  margin: 0;
  height: 70px;
  width: 100vw;
  z-index: 999;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.3);
}

.logo {
  cursor: pointer;
}
header img {
  width: 100px;
  height: auto;
}

.logo:hover {
  transform: none;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: max-content;
  gap: 50px;
  font-family: Poppins, Montserrat, sans-serif;
}

nav,
li,
a {
  list-style: none;
  color: #002855;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  position: relative;
  cursor: pointer;
}

nav li a::after {
  content: " ";
  width: 0;
  height: 3px;
  background: #002855;
  position: absolute;
  left: 0;
  bottom: -6px;
  transition: 0.5s;
}

nav li a:hover::after {
  width: 100%;
}

.btn {
  border-radius: 1rem;
  color: white;
  background-color: #002855;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: 0.3s;
}

.btn:hover {
  transform: scale(0.9);
}
</style>

<style>
.swal2-title {
  color: #002855;
}

.swal2-confirm {
  background-color: #003775 !important;
}

.swal2-confirm:focus {
  box-shadow: 0 0 0 3px #2273cf !important;
}

.swal2-footer a {
  color: #002855 !important;
  text-decoration: none !important;
}

.swal2-footer a:hover {
  color: #002855 !important;
  font-weight: bold;
  text-decoration: none !important;
}
</style>
