<template>
  <NavComp></NavComp>
  <serviceLanding
    title1="Website Development"
    title2="Branding Services"
    description="Ini Karya Kita menyediakan layanan pembuatan website secara profesional untuk berbagai kebutuhan bisnis. Penggunaan teknologi terbaru yang lebih aman dan mutakhir. Serta desain website yang ekslusif dan terkini."
  />
  <aboutWeb
    judul="Pentingnya Penggunaan Website sebagai Branding"
    desc="Di era digital, mencari informasi produk & jasa sudah biasa dilakukan melalui internet. Bisnis yang memiliki website akan lebih mudah ditemukan oleh pembeli, karena website ibarat sebuah toko/kantor digital yang dapat melayani pelanggan selama 24 jam."
    harga="Mulai dari Rp1.000.000,-"
  />
  <scheduleNow />
  <CarouselSrvV />
  <footerCom />
</template>

<script>
import NavComp from "@/components/home/NavComp.vue";
import serviceLanding from "@/components/services/serviceLanding.vue";
import scheduleNow from "@/components/home/scheduleNow.vue";
import CarouselSrvV from "@/components/services/CarouselSrvV.vue";
import footerCom from "@/components/home/footerCom.vue";
import aboutWeb from "@/components/services/aboutWeb.vue";

export default {
  name: "PhotoView",
  components: {
    NavComp,
    serviceLanding,
    footerCom,
    scheduleNow,
    CarouselSrvV,
    aboutWeb,
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
