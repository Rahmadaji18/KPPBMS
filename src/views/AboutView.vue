/* eslint-disable */

<template>
  <NavComp></NavComp>
  <LandingPage></LandingPage>
  <OurMission></OurMission>
  <OurTeam></OurTeam>
  <footerCom></footerCom>
</template>

<script>
import NavComp from "@/components/home/NavComp.vue";
import LandingPage from "@/components/about/LandingPage.vue";
import OurMission from "@/components/about/OurMission.vue";
import OurTeam from "@/components/about/OurTeam.vue";
import footerCom from "@/components/home/footerCom.vue";

export default {
  name: "AboutView",
  components: {
    NavComp,
    LandingPage,
    OurMission,
    OurTeam,
    footerCom,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Poppins&display=swap");
</style>
