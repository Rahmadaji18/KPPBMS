<template>
  <div class="signup">
    <div class="signup_image">
      <h1>Already Become<br />Our Special Client?</h1>
      <router-link to="/login" class="third-btn">Login Here</router-link>
    </div>
    <div class="signup_form">
      <form @submit.prevent="signup">
        <div class="house">
          <a href="/" style="color: #002855"><font-awesome-icon icon="house" style="color: #002855" /></a>
        </div>
        <h1>Register Here</h1>
        <h4>Ini Karya Kita: One Door Branding Services</h4>
        <div>
          <label>Email</label>
          <input type="email" name="email" class="text-input" placeholder="Enter Email" v-model="email" required />
        </div>
        <div>
          <label>Username</label>
          <input type="text" name="username" class="text-input" placeholder="Enter Username" v-model="username" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" class="text-input" placeholder="Enter Password" v-model="password" required />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirm_password" class="text-input" placeholder="Confirm Password" v-model="confirm_password" required />
        </div>
        <div class="btn_wrapper">
          <input style="font-weight: bold" type="submit" value="Sign Up" class="btn" required />
        </div>

        <div class="or">
          <hr class="bar" />
          <span>OR</span>
          <hr class="bar" />
        </div>
        <div class="btn_wrapper">
          <router-link to="/login" class="secondary-btn">Login Now</router-link>
        </div>

        <footer class="main-footer">
          <p>Copyright &copy; 2023, Ini Karya Kita All Rights Reserved</p>
        </footer>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $cookies from "vue-cookies";
$cookies.config("1h");
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default {
  name: "signupView",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      confirm_password: "",
      msg: "",
    };
  },
  methods: {
    async signup() {
      if (this.password !== this.confirm_password) {
        Swal.fire({
          icon: "warning",
          title: "Konfirmasi Password Gagal",
          text: "Password Tidak Cocok",
          customClass: {
            title: "swal2-title",
            text: "swal2-textarea",
            confirmButtonText: "swal2-confirm",
            footer: "swal2-footer",
            popup: "swal-popup",
          },
        });
        return;
      }
      await axios
        .post("http://localhost:8081/signup", {
          email: this.email,
          username: this.username,
          password: this.password,
          confirm_password: this.confirm_password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.msg === "Username Sudah Terdaftar!") {
            Swal.fire({
              icon: "warning",
              title: "Registrasi Gagal",
              text: "Username Sudah Terdaftar.",
              customClass: {
                title: "swal2-title",
                text: "swal2-textarea",
                confirmButtonText: "swal2-confirm",
                footer: "swal2-footer",
                popup: "swal-popup",
              },
            });
          } else if (res.data.msg === "Email Sudah Terdaftar!") {
            Swal.fire({
              icon: "warning",
              title: "Registrasi Gagal",
              text: "Email Sudah Terdaftar.",
              customClass: {
                title: "swal2-title",
                text: "swal2-textarea",
                confirmButtonText: "swal2-confirm",
                footer: "swal2-footer",
                popup: "swal-popup",
              },
            });
          } else if (res.data.msg === "Masukkan Data Terlebih Dahulu!") {
            Swal.fire({
              icon: "error",
              title: "Registrasi Gagal",
              text: "Masukkan Data Terlebih Dahulu!",
              customClass: {
                title: "swal2-title",
                text: "swal2-textarea",
                confirmButtonText: "swal2-confirm",
                footer: "swal2-footer",
                popup: "swal-popup",
              },
            });
          } else if (res.data.msg === "Signup Berhasil!") {
            Swal.fire({
              icon: "success",
              title: "Registrasi Berhasil",
              text: "Selamat! Kamu Sudah Terdaftar, Silahkan Login untuk Melanjutkan",
              customClass: {
                title: "swal2-title",
                text: "swal2-textarea",
                confirmButtonText: "swal2-confirm",
                footer: "swal2-footer",
                popup: "swal-popup",
              },
            }).then(() => {
              $cookies.set("user", res.data[0]);
              this.$router.push("/login");
            });
          }
        })
        .catch((err) => {
          Swal.fire({
            title: "Registrasi Error",
            text: "Sepertinya Ada Masalah, Coba Lagi Nanti!",
            icon: "error",
            customClass: {
              title: "swal2-title",
              text: "swal2-textarea",
              confirmButtonText: "swal2-confirm",
              footer: "swal2-footer",
              popup: "swal-popup",
            },
          });
          console.error(err);
        });
    },
  },
};
</script>

<style>
/*************************************signup section starts here********************************/
.signup {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.signup_image {
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, rgba(1, 4, 42, 0.3), rgba(0, 0, 0, 0.65)), url(../assets/images/signup1.jpg) no-repeat center center / cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
}
.signup_image h1 {
  margin-top: 30rem;
  margin-bottom: 1rem;
  color: white;
}
.signup_form {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.signup_form form {
  width: 50%;
  justify-content: center;
}
.signup_form form h1 {
  text-align: center;
  color: #002855;
}
.signup_form form h4 {
  color: #002855;
  margin-top: 0;
  text-align: center;
  padding-bottom: 1.5rem;
}
.signup_form label {
  font-size: 0.9rem;
  line-height: 1rem;
  font-weight: 500;
  float: left;
  color: #002855;
  padding-bottom: 5px;
}

.signup_form .text-input {
  margin-bottom: 1.3rem;
  width: 100%;
  border-radius: 0.5rem;
  /*background: #181818;*/
  background-color: white;
  border: 2px solid #002855;
  color: #002855;
  padding: 0.5rem 1rem;
  line-height: 1.3rem;
}
.signup_form .btn {
  border-radius: 0.5rem;
  color: white;
  background-color: #002855;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #ffd460;
  transition: ease-out 0.5s;
  padding: 0.5rem 1rem;
  font-weight: 500;
  text-decoration: none;
}

.signup_form .btn:hover {
  box-shadow: inset 20rem 0 0 0 #ffd460;
  color: #002855;
}
.signup_form .or {
  display: flex;
  flex-direction: row;
  margin: 1rem 0rem;
  align-items: center;
}

.signup_form .or .bar {
  width: 100%;
  border: none;
  height: 1px;
  background: #000;
}
.signup_form .or span {
  color: #000;
  padding: 0 0.8rem;
}
.signup_form .links,
.signup_form .or {
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.main-footer {
  text-align: center;
  font-size: 0.8rem;
  padding-top: 1rem;
  margin-bottom: 10px;
}

.main-footer a {
  color: #f96816;
  text-decoration: underline;
}
.house {
  display: block;
  justify-items: center;
  text-align: center;
  justify-content: center;
  padding-top: 1rem;
  font-size: 1.5rem;
  color: #002855;
  width: 100%;
}

/* Button */

.btn_wrapper {
  display: flex;
  justify-content: center;
}
.secondary-btn {
  outline: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  background: #ffd460;
  color: #002855;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  box-shadow: inset 0 0 0 0 #002855;
  transition: ease-out 0.5s;
}

.secondary-btn:hover {
  box-shadow: inset 30rem 0 0 0 #002855;
  color: white;
}

.third-btn {
  outline: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  background: #ffd460;
  color: #002855;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  box-shadow: inset 0 0 0 0 #ffffff;
  transition: ease-out 0.5s;
}

.third-btn:hover {
  box-shadow: inset 30rem 0 0 0 #ffffff;
  color: #002855;
}

@media (max-width: 820px) {
  header .icons #menu-bars {
    display: inline-block;
  }

  header .navbar {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
    padding: 1rem;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }

  header .navbar.active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

  header .navbar a {
    display: block;
    padding: 0.75rem;
    margin: 0.5rem;
    font-size: 1rem;
    background: #eee;
  }

  header .icons a {
    font-size: 1.2rem;
    padding: 0.5rem 1.1rem;
    border-radius: 3rem;
  }

  .home .home-slider .slide .content h3 {
    font-size: 5rem;
  }

  .hero .hero-info h1 {
    font-size: 2rem;
  }
  .stats {
    padding: 2.5rem 10%;
  }
  .stats > div h1 {
    font-size: 1.4rem;
  }

  .rental_banner {
    display: grid;
    grid-template-columns: 1fr;
    padding: 2rem;
  }

  .rental_banner .rental_banner_img,
  .rental_banner .rental_banner_info {
    width: 100%;
    padding: 1rem 5%;
  }

  .rental_banner .rental_banner_info h1 {
    padding: 0.75rem 0rem;
    font-size: 1.75rem;
  }

  .rental_banner_info p {
    font-size: 1rem;
    padding-bottom: 1rem;
  }

  .service {
    padding: 2.5rem;
    line-height: 2rem;
  }

  .service .service_info h1 {
    font-size: 1.75rem;
  }

  .service .service_img {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    line-height: 4rem;
    padding-top: 2rem;
  }
  .footer_main .footer_info {
    padding-left: 1rem;
  }
  footer .footer_secondary {
    padding-top: 1rem;
  }
  .footer_newsletter {
    margin-top: 1rem;
    width: 80%;
  }
  .card {
    grid-template-columns: 1fr 1fr;
  }
  .main_contact {
    grid-template-columns: 1fr !important;
  }
  .contact .service .service_img {
    line-height: 2.5rem;
  }
  .contact .service .service_img img {
    height: 75px;
    width: 75px;
  }
  .contact .service .service_img p {
    margin-bottom: 1rem;
  }
  .signup {
    display: grid;
    grid-template-columns: 1fr !important;
  }
  .signup_image {
    display: none !important;
  }
  .signup_form form {
    width: 65% !important;
    justify-content: center;
  }
  .goals_info {
    grid-template-columns: 1fr !important;
  }
  .goals_info .goal_img {
    display: none;
  }
}

@media (max-width: 400px) {
  header .logo {
    font-size: 1.5rem;
  }

  header .icons a {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  .hero-info h1 {
    font-size: 2rem;
  }

  .hero .hero-info form .search {
    padding: 0.75rem 1rem;
  }

  .hero .hero-info form .btn {
    padding: 0.75rem 1rem;
  }

  .hero .hero-info form .btn:hover {
    box-shadow: inset 30rem 0 0 0 black;
    color: white;
  }

  .stats {
    padding: 1rem 10%;
  }

  .stats > div h1 {
    font-size: 1.5rem;
  }

  .rental_banner .rental_banner_info h1 {
    font-size: 1.5rem;
    padding: 0.5rem 0rem;
  }

  .rental_banner_info p {
    font-size: 0.75rem;
    padding-bottom: 1rem;
  }

  .service .service_img {
    display: grid;
    grid-template-columns: 1fr;
  }

  .service {
    padding: 2.5rem;
    line-height: initial;
  }
  .footer_main .footer_newsletter label input {
    width: 50%;
  }
  footer .footer_main {
    padding: 3rem 0.5rem !important;
  }
  .card {
    grid-template-columns: 1fr;
  }
  .contact .service .service_img {
    line-height: 2rem;
  }
  .contact .service .service_img img {
    height: 50px;
    width: 50px;
  }
  .contact .service .service_img p {
    margin-bottom: 1rem;
  }
  .main_contact .map iframe {
    height: 400px;
  }
  .signup_form form {
    width: 80% !important;
    justify-content: center;
  }
  #signin,
  .or,
  .links {
    width: 90% !important;
  }
}

@media (max-width: 768px) {
  body {
    overflow: auto;
  }

  #right {
    display: none;
  }

  #left {
    justify-content: start;
    margin-top: 4vh;
  }

  #signin .logo {
    margin-bottom: 2vh;
  }

  #signin .text-input {
    margin-bottom: 0.7rem;
  }

  .main-footer {
    padding-top: 20px;
    font-size: 12px;
  }
  .signup_image h1 {
    padding: 2rem;
    color: white;
  }
  .member_info {
    grid-template-columns: 1fr !important;
  }
}
</style>
