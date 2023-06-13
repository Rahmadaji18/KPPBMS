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
          <a href="https://api.whatsapp.com/send/?phone=6282140759677&text&type=phone_number&app_absent=0" target="_blank">Forgot Password</a>
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
          <h1 class="showcase-text">Not a Special Client?<br />Dont't Worries</h1>
          <router-link to="/signup" class="third-btn">Sign Up Here</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

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
        .post("http://localhost:8080/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          alert(res.data);
          console.log(res);
        })
        .catch((err) => {
          alert("Login Error");
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
  padding-top: 3rem;
  padding-bottom: 3rem;
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

#signin .links a {
  display: block;
  color: #002855;
  text-decoration: none;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 0.9rem;
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

/* Media Queries */
@media (min-width: 1200px) {
  #left {
    flex: 4;
  }

  #right {
    flex: 6;
  }
}
/*************************************login section ends here********************************/
</style>
