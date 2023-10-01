<template>
  <NavComp></NavComp>
  <LandingPage />
  <trackRecord> </trackRecord>
  <OurService />
  <CarouselComp />
  <footerCom></footerCom>
</template>

<script>
import NavComp from "@/components/home/NavComp.vue";
import LandingPage from "@/components/home/LandingPage.vue";
import OurService from "@/components/home/homeOurService.vue";
import CarouselComp from "@/components/home/CarouselComp.vue";
import trackRecord from "@/components/home/trackRecord.vue";

import footerCom from "@/components/home/footerCom.vue";

export default {
  name: "HomeView",
  components: {
    NavComp,
    LandingPage,
    OurService,
    trackRecord,
    CarouselComp,
    footerCom,
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
NavComp,
LandingPage,
AboutUs {
  margin-top: -20px;
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,700&display=swap");
</style>
