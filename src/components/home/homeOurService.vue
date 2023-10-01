<template>
  <div class="bg" id="ourservices">
    <div class="bg2">
      <h1>Project</h1>
      <p>Project yang telah kami buat selama menjalani BMS</p>
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
        { judul: "Photography", desc: "Penjelasan dasar mengenai dasar dasar fotografi sekaligus dengan praktiknya. Dijelaskan mengenai ISO, shutter speed, dan white balance", link: "/photography", img: photo },
        { judul: "Jurnalistik", desc: "Penjelasan dasar mengenai  jurnalistik, sperti cara dan etika wawancara. Dilakukan praktikk wawancara dengan studi kasus pembukaan tower 2 ITS", link: "/videography", img: video },
        { judul: "Web Design", desc: "Pembuatan desain visual untuk desain web menggunakan figma. Studi kasus dengan membuat web halaman IT menggunakan figma", link: "/graphicsdesign", img: graphic },
        { judul: "Web Development", desc: "Penjelasan dasar pengembangan web menggunakan framework vue js dan membangun repository web di github", link: "/webdevelopment", img: web },
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
  font-weight: 800;
  font-size: 60px;
  font-family: "Montserrat", sans-serif;
  padding-bottom: -3rem;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 4rem;
    text-align: center;
  }

  @media (max-width: 830px) {
    font-size: 3rem;
    text-align: center;
  }

  @media (max-width: 420px) {
    font-size: 3rem;
    text-align: center;
  }

  @media (max-width: 360px) {
    font-size: 2rem;
    text-align: center;
  }
}

.bg2 p {
  font-size: 18px;
  color: var(--putih);
  max-width: 100%;
  text-align: center;
  align-self: center;

  @media (max-width: 1000px) {
    font-size: 18px;
    text-align: center;
  }

  @media (max-width: 830px) {
    font-size: 16px;
    text-align: center;
  }

  @media (max-width: 360px) {
    font-size: 14px;
    text-align: center;
    max-width: 100%;
  }
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
    padding: 10px;
  }

  /* .bg2 > p {
    width: 500px;
  } */

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
    padding-inline: 10px;
    justify-content: center;
  }

  .bg2 p {
    width: 100%;
  }
  .cardServe p {
    width: 200px;
  }
}
</style>
