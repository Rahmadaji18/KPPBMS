<template>
  <header>
    <div class="logo">
      <router-link to="/"><img :src="logo" alt="Logo" /></router-link>
    </div>
    <nav>
      <div v-for="nav in header1" :key="nav.id">
        <li>
          <a :href="nav.ref">{{ nav.nav }}</a>
        </li>
      </div>
      <router-link to="/login" class="btn">Login</router-link>
    </nav>
  </header>
</template>

<script>
import logo from "@/assets/images/logo.png";

export default {
  name: "NavComp",
  props: {},

  data() {
    return {
      logo: logo,
      header1: [
        { nav: "About", ref: "#about" },
        { nav: "Service", ref: "#service" },
        { nav: "Schedule", ref: "#schedule" },
        { nav: "FAQ", ref: "#faq" },
      ],
    };
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
  gap: 50px;
  font-family: Poppins, Montserrat, sans-serif;
}

nav,
ul,
li {
  list-style: none;
}

nav,
li,
a {
  border-radius: 1rem;
  color: #002855;
  cursor: pointer;
  background-color: #ffd460;
  transition: ease-out 0.3s;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
}

.btn {
  border-radius: 1rem;
  color: white;
  background-color: #002855;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-weight: 500;
  text-decoration: none;
}

.btn:hover {
  transform: scale(0.9);
}

nav :hover,
li :hover,
a:hover {
  transform: scale(0.9);
}
</style>
