<template>
  <div>
    <img :src="gambar" />
    <p>Kamu Harus <a href="login" class="back3">Login</a> untuk Lihat Halaman ini!</p>
  </div>
</template>

<script>
import gambar from "@/assets/images/404.png";

export default {
  name: "notFound",
  components: {},
  data() {
    return {
      gambar: gambar,
    };
  },
};
</script>

<style scoped>
* {
  padding-top: 3rem;
  align-content: center;
  margin: 0;
  text-align: center;
}

.back3 {
  color: gray;
  text-decoration: none;
  font-weight: 600;
}

p {
  color: gray;
  padding-top: 0;
}

.back3:hover {
  color: #002855;
}
</style>
