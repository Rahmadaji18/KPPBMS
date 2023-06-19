<template>
  <NavDash></NavDash>
  <serviceLanding
    title1="Graphics Design"
    title2="Branding Services"
    description="Ini Karya Kita menyediakan layanan desain grafis untuk menciptakan identitas branding yang kuat. Seperti feed instagram, logo, package, dan masih banyak lagi dengan harga yang terjangkau."
  />
  <DashDesign
    judul="Desain Branding Lebih dari Sebuah Identitas"
    desc="Desain grafis adalah bagaimana bisnis menunjukkan identitas sekaligus kesan pertama yang akan dilihat orang ketika mereka melihat sebuah brand. Karena hal tersebut, penting bagi bisnis untuk memiliki branding visual yang merepresentasikan identitas suatu perusahaan dan produk, agar meninggalkan kesan yang baik terhadap calon pelanggan."
    harga="Mulai dari Rp25.000,- / Desain"
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
import DashDesign from "@/components/dashboard/DashDesign.vue";

export default {
  name: "DesignDash",
  components: {
    NavDash,
    serviceLanding,
    footerCom,
    scheduleNow,
    CarouselSrvV,
    DashDesign,
  },
};
</script>

<!-- <style>
    .carousel__prev,
    .carousel__next {
      min-height: fit-content;
      min-width: fit-content;
      border: none;
      /* background-color: var(--kuning);
      color: var(--biru); */
      padding: 10px;
      border-radius: 20px;
      font-size: 30px;
    }
    </style> -->
