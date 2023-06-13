<template>
  <div>
    <NavComp />
    <serviceLanding
      title1="Videography"
      title2="Branding Services"
      description="Ini Karya Kita menyediakan layanan video production atau pembuatan video untuk berbagai macam kebutuhan promosi bisnis. Didukungan peralatan, model, dan tim yang profesional dengan harga yang terjangkau."
    />
    <aboutTwoImg
      judul="Kami Memproduksi Video Promosi / Profil yang Menarik & Informatif!"
      desc="Video merupakan media yang paling efektif untuk melakukan campaign, awareness, dan edukasi pasar karena memadukan antara visual dengan audio, sehingga pesan yang disampaikan akan dengan mudah ditangkap oleh audience atau calon customer potensial Kamu."
      harga="Mulai dari Rp800.000,- / Video"
    />
    <scheduleNow />
    <CarouselSrvV />
    <footerCom />
  </div>
</template>

<script>
import NavComp from "@/components/home/NavComp.vue";
import serviceLanding from "@/components/services/serviceLanding.vue";
import aboutTwoImg from "@/components/services/aboutTwoImg.vue";
import scheduleNow from "@/components/home/scheduleNow.vue";
import CarouselSrvV from "@/components/services/CarouselSrvV.vue";
import footerCom from "@/components/home/footerCom.vue";

export default {
  name: "VideoView",
  components: {
    NavComp,
    serviceLanding,
    footerCom,
    scheduleNow,
    aboutTwoImg,
    CarouselSrvV,
  },
};
</script>

<style>
.carousel__prev,
.carousel__next {
  min-height: fit-content;
  min-width: fit-content;
  border: none;
  background-color: var(--kuning);
  color: var(--biru);
  padding: 10px;
  border-radius: 20px;
  font-size: 30px;
}
</style>
