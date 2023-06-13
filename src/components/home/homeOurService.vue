<template>
  <div class="bg" id="ourservices">
    <div class="bg2">
      <h1>Our Service</h1>
      <p>Kami membantu kamu membangun solusi dan branding berkualitas tinggi. Kami menyediakan layanan profesional yang dapat disesuaikan dengan kebutuhanmu.</p>
      <div class="service">
        <div v-for="serve in service" :key="serve.id" class="cardServe">
          <img :src="serve.img" />
          <h4>{{ serve.judul }}</h4>
          <p>{{ serve.desc }}</p>
          <a :href="serve.link"><button>Learn More</button></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import photo from "@/assets/images/Photo.png";
import video from "@/assets/images/Video.png";
import graphic from "@/assets/images/Graphic.png";
import web from "@/assets/images/Web.png";

export default {
  name: "OurService",
  props: {},

  data() {
    return {
      service: [
        { judul: "Photography", desc: "Pembuatan foto komersial untuk keperluan produk atau jasa dengan berbagai paket menarik dan harga terjangkau", link: "/photography", img: photo },
        { judul: "Videography", desc: "Video komersil untuk keperluan promosi produk, jasa, event, instansi, dan sebagainya. Pilih sesuai kebutuhanmu", link: "/videography", img: video },
        { judul: "Graphics Design", desc: "Pembuatan desain visual untuk mendukung brandingmu. Dari logo, packaging, stationery, hingga feed social media", link: "/graphicsdesign", img: graphic },
        { judul: "Web Development", desc: "Buat website mu dari awal atau remake dengan teknologi dan desain kekinian. Temukan kebutuhan websitemu di sini", link: "/webdevelopment", img: web },
      ],
    };
  },
};
</script>

<style scoped>
.bg {
  display: flex;
  justify-content: center;
  background-color: var(--biru);
}

.bg2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 88%;
  margin: 150px auto;
  gap: 20px;
}

.bg2 h1 {
  color: var(--kuning);
  font-size: 60px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  padding-bottom: -3rem;
}

.bg2 p {
  font-size: 18px;
  color: var(--putih);
  width: 1000px;
  text-align: center;
  align-self: center;
}

.service {
  display: flex;
  gap: 40px;
  align-self: center;
  margin-top: 2rem;
}

.cardServe {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background-color: var(--putih);
  border-radius: 20px;
  padding: 2rem 0.2rem;
  gap: 20px;
  min-width: 250px;
  transition: transform 0.2s ease 0s;
  cursor: pointer;
}

.cardServe h4 {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  color: var(--biru);
}

.cardServe p {
  font-size: 16px;
  color: var(--biru);
  width: 80%;
  line-height: 1;
}

.cardServe button {
  padding: 3px 20px;
  border: none;
  background-color: var(--biru);
  color: var(--putih);
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.cardServe:hover {
  transform: translateY(-20px);
}

.cardServe button:hover {
  transform: scale(0.9);
}

@media only screen and (max-width: 1200px) {
  .service {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    width: 600px;
    padding: 30px;
  }

  .bg2 > p {
    width: 500px;
  }

  .cardServe {
    max-width: 250px;
  }
}

@media only screen and (max-width: 600px) {
  .service {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    width: 500px;
    padding: 30px;
    justify-content: center;
  }

  .bg2 p {
    width: 200px;
  }
}
</style>
