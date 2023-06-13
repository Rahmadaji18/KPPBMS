<template>
  <RouterView />
</template>

<script>
// import HomeView from "@/views/HomeView.vue";
export default {
  name: "app",
  components: {
    // HomeView,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,700&display=swap");

:root {
  --biru: #002855;
  --kuning: #ffd460;
  --putih: #fff;
}

#app {
  box-sizing: border-box;
  margin: auto;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins, Montserrat, sans-serif;
  scroll-behavior: smooth !important;
}

/* Apply negative margins to the components */
Header,
Landing,
About {
  margin-top: -20px;
}
</style>

<!-- <style lang="scss">
#app {
  font-family: Poppins, Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style> -->
