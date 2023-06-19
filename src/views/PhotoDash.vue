<template>
  <NavDash></NavDash>
  <serviceLanding
    title1="Photography"
    title2="Branding Services"
    description="Ini Karya Kita menyediakan layanan fotografi terlengkap mulai dari katalog foto produk, event, tempat, dan masih banyak lagi. Didukungan peralatan, model, dan tim yang profesional dengan harga yang terjangkau."
  />
  <DashPhoto
    judul="Dapatkan Foto Terbaik untuk Branding Terbaikmu"
    desc="Memiliki konten estetik dengan kualitas terbaik merupakan salah satu faktor yang terpenting dalam bisnis. Dengan memiliki foto produk yang profesional calon pelanggan akan lebih percaya terhadap produk dari sebuah brand. Selain foto produk, kami juga menyediakan foto lain untuk mengabadikan momenmu."
    harga="Mulai dari Rp10.000 / Foto"
  />
  <scheduleNow />
  <CarouselSrvV />
  <footerCom />
</template>

<script>
import NavDash from "@/components/dashboard/NavDash.vue";
import serviceLanding from "@/components/services/serviceLanding.vue";
import scheduleNow from "@/components/home/scheduleNow.vue";
import CarouselSrvV from "@/components/services/CarouselSrvV.vue";
import footerCom from "@/components/home/footerCom.vue";
import DashPhoto from "@/components/dashboard/DashPhoto.vue";

export default {
  name: "PhotoDash",
  components: {
    NavDash,
    serviceLanding,
    footerCom,
    scheduleNow,
    CarouselSrvV,
    DashPhoto,
  },
};
</script>
