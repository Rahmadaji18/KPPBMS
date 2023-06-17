<template>
    <NavComp></NavComp>
    <LandingPage></LandingPage>
    <FormPage></FormPage>
    <trackRecord></trackRecord>
    <footerCom></footerCom>
</template>

<script>
import NavComp from "@/components/home/NavComp.vue";
import LandingPage from "@/components/schedule/LandingPage.vue";
import FormPage from "@/components/schedule/FormPage.vue";
import trackRecord from "@/components/home/trackRecord.vue";
import footerCom from "@/components/home/footerCom.vue";


export default {
  name: "ScheduleView",
  components: {
    NavComp,
    LandingPage,
    FormPage,
    trackRecord,
    footerCom
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Poppins&display=swap");
</style>
