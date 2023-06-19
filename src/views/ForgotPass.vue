<template>
  <div>
    <img :src="gambar" />
    <p>Kamu Lupa Password? <a href="https://api.whatsapp.com/send/?phone=6282140759677&text&type=phone_number&app_absent=0" class="back3" target="_blank">Hubungi Kami</a></p>
    <a href="login" class="btn">Kembali</a>
  </div>
</template>

<script>
import gambar from "@/assets/images/forpass.gif";

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

img {
  max-width: 400px;
  padding-bottom: 40px;
}

.back3 {
  color: gray;
  text-decoration: none;
  font-weight: 600;
}

p {
  color: gray;
  padding-top: 0;
  margin-top: -50px;
  padding-bottom: 20px;
}

.back3:hover {
  color: #002855;
}

.btn {
  border-radius: 10px;
  max-width: 10%;
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
