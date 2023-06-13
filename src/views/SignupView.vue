<template>
  <div class="signup">
    <div class="signup_image">
      <div class="house">
        <a href="/" style="color: white"><font-awesome-icon icon="house" style="color: white" /></a>
      </div>
      <h1>Already Become<br />Our Special Client?</h1>
      <router-link to="/login" class="third-btn">Login Here</router-link>
    </div>
    <div class="signup_form">
      <form>
        <h1>Register Here</h1>
        <h4>Ini Karya Kita: One Door Branding Services</h4>
        <div>
          <label>Email</label>
          <input type="text" class="text-input" placeholder="Enter Email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" class="text-input" placeholder="Enter Password" />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" class="text-input" placeholder="Confirm Password" />
        </div>
        <div class="btn_wrapper">
          <a href="#" type="submit" class="btn">Sign Up</a>
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
export default {
  name: "signupView",
  props: {},
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
  margin-top: 1rem;
  text-align: center;
  padding-bottom: 0.5rem;
}
.signup_form label {
  font-size: 0.9rem;
  line-height: 2rem;
  font-weight: 500;
  float: left;
  color: #002855;
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
}
.main-footer {
  text-align: center;
  font-size: 0.8rem;
  padding-top: 3rem;
}

.main-footer a {
  color: #f96816;
  text-decoration: underline;
}
.house {
  display: block;
  justify-items: left;
  justify-content: left;
  text-align: left;
  justify-content: left;
  padding-left: 2rem;
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
/*************************************Signup section ends here********************************/
</style>
