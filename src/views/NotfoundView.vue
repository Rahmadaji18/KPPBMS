<template>
  <div class="notfound">
    <img src="@/assets/images/404.png" width="485px" />
    <p>Kamu Harus<a href="login" class="back3">Login</a>untuk Lihat Halaman ini!</p>
  </div>
</template>

<script>
export default {
  name: "notFound",
  components: {},
};
</script>

<style scoped>
.notfound {
  background: linear-gradient(90deg, #002855, #001635);
  align-content: center;
  margin: 0;
  padding: 100px 30px 100px;
}

.back3 {
  color: white;
}

.back3:hover {
  font-weight: bold;
}
</style>
