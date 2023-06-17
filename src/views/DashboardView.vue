<template>
  <NavDash></NavDash>
  <div class="landing">
    <div class="first">
      <div class="kata">
        <div class="judul">
          <h1>Hello, Iki Adfi</h1>
          <h2 class="kuning">Welcome Back To</h2>
          <h2 class="kuning">Ini Karya Kita</h2>
        </div>
        <p>Temukan penawaran layanan branding terbaikmu<br />dalam 1 platform dengan sistem <i>One Door Branding Services.</i></p>
        <a href="#"><button class="btnl">Schedule</button></a>
      </div>
      <img :src="gambar" />
    </div>
  </div>
  <AboutUs />
  <OurService />
  <trackRecord> </trackRecord>
  <CarouselComp />
  <scheduleNow> </scheduleNow>
  <FAQComp />
  <footerCom></footerCom>
</template>

<script>
import AboutUs from "@/components/home/homeAboutUs.vue";
import OurService from "@/components/home/homeOurService.vue";
import FAQComp from "@/components/home/FAQComp.vue";
import CarouselComp from "@/components/home/CarouselComp.vue";
import trackRecord from "@/components/home/trackRecord.vue";
import scheduleNow from "@/components/home/scheduleNow.vue";
import footerCom from "@/components/home/footerCom.vue";
import gambar from "@/assets/images/Marketing.png";
import NavDash from "@/components/dashboard/NavDash.vue";

export default {
  name: "DashboardView",
  components: {
    AboutUs,
    OurService,
    trackRecord,
    CarouselComp,
    scheduleNow,
    FAQComp,
    footerCom,
    NavDash,
  },
  data() {
    return {
      gambar: gambar,
    };
  },
};
</script>

<style scoped>
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
  font-size: 15px;
  font-family: "Poppins", sans-serif;
}

/* Apply negative margins to the components */
NavDash,
LandDash,
AboutUs {
  margin-top: -20px;
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,700&display=swap");

/* Landing Dashboard */
.landing {
  background: linear-gradient(90deg, #002855, #001635);
  align-content: center;
  margin: 0;
  padding: 100px 30px 100px;
}

.first {
  display: flex;
  width: 88%;
  margin: auto;
  padding: auto;
  align-items: center;
  justify-items: space-between;
  gap: 50px;
}

.kata {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
}

.kata p,
i {
  font-size: 20px;
  color: var(--putih);
  text-align: left;
  font-family: "Poppins", sans-serif;
}

.judul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: -20px;
}

.judul h1 {
  font-size: 50px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  margin-bottom: 10px;
}

.judul h2 {
  font-size: 50px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  margin-bottom: -10px;
}

.judul .kuning {
  color: var(--kuning);
}

img {
  width: 640px;
  height: auto;
}

.btnl {
  border-radius: 20px;
  border: none;
  background-color: var(--kuning);
  color: var(--biru);
  padding: 15px 14px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  align-self: flex-start;
  margin-top: 20px;
  cursor: pointer;
  transition: ease-out 0.3s;
}

.btnl:hover {
  transform: scale(0.9);
}
</style>
