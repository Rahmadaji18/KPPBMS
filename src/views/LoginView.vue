<template>
  <div id="wrapper">
    <div id="left">
      <div class="house">
        <a href="/" style="color: #002855"><font-awesome-icon icon="house" style="color: #002855" /></a>
      </div>
      <div id="signin">
        <div class="logo">
          <h1>Login to<br />Ini Karya Kita</h1>
        </div>
        <form @submit.prevent="login">
          <div>
            <label>Username</label>
            <input v-model="username" type="username" name="username" required class="text-input" placeholder="Enter your Username" />
          </div>
          <div>
            <label>Password</label>
            <input v-model="password" type="password" name="password" required class="text-input" placeholder="Enter your Password" />
          </div>
          <input style="font-weight: bold" type="submit" value="Log In" class="btn primary-btn" required />
        </form>
        <div class="links">
          <a href="/forgotpassword">Forgot Password</a>
        </div>
        <div class="or">
          <hr class="bar" />
          <span>OR</span>
          <hr class="bar" />
        </div>
        <router-link to="/signup" class="secondary-btn">Create an Account</router-link>
      </div>
      <footer id="main-footer">
        <p>Copyright &copy; 2023, Ini Karya Kita All Rights Reserved</p>
      </footer>
    </div>
    <div id="right">
      <div id="showcase">
        <div class="showcase-content">
          <h1 class="showcase-text">Not a Special Client?<br />Don't Worries</h1>
          <router-link to="/signup" class="third-btn">Sign Up Here</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default {
  name: "loginView",
  props: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      axios
        .post("http://localhost:8081/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          if (res.data === "Login Success") {
            Swal.fire({
              title: "Success",
              text: "Login Successful",
              icon: "success",
              customClass: {
                title: "swal2-title",
                text: "swal2-textarea",
                confirmButtonText: "swal2-confirm",
                footer: "swal2-footer",
                popup: "swal-popup",
              },
            }).then(() => {
              localStorage.setItem("loggedIn", true);
              localStorage.setItem("username", this.username);
              // Redirect to homepage
              this.$router.push("/dashboard");
            });
          } else {
            Swal.fire({
              title: "Warning",
              text: "Incorrect Username and/or Password",
              icon: "error",
              customClass: {
                title: "swal2-title",
                text: "swal2-textarea",
                confirmButtonText: "swal2-confirm",
                footer: "swal2-footer",
                popup: "swal-popup",
              },
            });
          }
        })
        .catch((err) => {
          Swal.fire({
            title: "Error",
            text: "Login Error",
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

<style scoped>
/*****************************************login/signup Section starts*****************************************/
#wrapper {
  display: flex;
  flex-direction: row;
  max-width: 100%;
  margin: none;
  padding: none;
}

.house {
  display: block;
  justify-items: left;
  text-align: left;
  justify-content: left;
  padding-left: 2rem;
  font-size: 1.5rem;
  color: #002855;
  width: 100%;
}

#left {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

#right {
  flex: 1;
}

/* Sign In */
#signin {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-bottom: 1rem;
}

#signin form {
  width: 80%;
  padding-top: 1rem;
  padding-bottom: 2rem;
}

#signin .logo h1 {
  font-weight: 300;
  font-size: 2.5rem;
  font-weight: bolder;
  color: #002855;
  padding-top: 2rem;
}

#signin label {
  font-size: 0.9rem;
  line-height: 2rem;
  font-weight: 500;
  float: left;
  color: #002855;
}

#signin .text-input {
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

#signin .primary-btn {
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

#signin .primary-btn:hover {
  box-shadow: inset 20rem 0 0 0 #ffd460;
  color: #002855;
}

#signin,
.or,
.links {
  width: 60%;
}

#signin .links {
  margin-top: -20px;
}

#signin .links a {
  display: block;
  color: #002855;
  text-decoration: none;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 0.9rem;
  cursor: pointer;
}

#signin .links a:hover {
  display: block;
  color: #002855;
  text-decoration: none;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 0.9rem;
  font-weight: bold;
}

#signin .or {
  display: flex;
  flex-direction: row;
  margin-bottom: 1.2rem;
  align-items: center;
}

#signin .or .bar {
  width: 100%;
  border: none;
  height: 1px;
  background: #002855;
}

#signin .or span {
  color: #002855;
  padding: 0 0.8rem;
}

/* Showcase */
#showcase {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, rgba(1, 4, 42, 0.3), rgba(0, 0, 0, 0.65)), url(../assets/images/login1.jpg) no-repeat center center / cover;
  /*background: url(../image/login_img.jpg) no-repeat center center / cover;*/
  height: 100vh;
  text-align: center;
}

#showcase .showcase-text {
  font-size: 2rem;
  width: 100%;
  color: #fff;
  margin-bottom: 1rem;
}

#showcase .showcase-content {
  margin-top: 30rem;
}

#showcase .secondary-btn {
  width: 60%;
}

/* Footer */
#main-footer {
  /*color: #ccc;*/
  text-align: center;
  font-size: 0.8rem;
  max-width: 80%;
  padding-top: 1rem;
}

#main-footer a {
  color: #f96816;
  text-decoration: underline;
}

/* Button */

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

.my-title-class {
  color: #002855;
  font-weight: bold;
  /* Add your custom styles */
}

.my-content-class {
  color: #002855;
  /* Add your custom styles */
}

.my-confirm-button-class {
  background-color: #002855;
  color: white;
  /* Add your custom styles */
}

/* Media Queries */
@media (min-width: 1200px) {
  #left {
    flex: 4;
  }

  #right {
    flex: 6;
  }
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
  #signin .logo h1 {
    font-size: 30px;
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
    margin-top: 0vh;
  }

  #signin .logo {
    margin-bottom: 2vh;
  }

  #signin .text-input {
    margin-bottom: 0.7rem;
  }

  #main-footer {
    padding-top: 20px;
    font-size: 12px;
    /* padding-inline: 70px; */
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
