<template>
  <NavDash></NavDash>
  <div class="landing">
    <div class="first">
      <div class="kata">
        <div class="judul">
          <h1 class="hello">Hello, "{{ username }}"</h1>
          <h2 class="kuning">Welcome Back To</h2>
          <h2 class="kuning">Ini Karya Kita</h2>
        </div>
        <p>Temukan penawaran layanan branding terbaikmu dalam 1 platform dengan sistem <i>One Door Branding Services.</i></p>
        <a href="/dashboard/schedule"><button class="btnl">Schedule</button></a>
      </div>
      <img :src="gambar" />
    </div>
  </div>
  <DashAbout />
  <ServiceDash />
  <trackRecord> </trackRecord>
  <CarouselComp />
  <scheduleDash> </scheduleDash>
  <FAQComp />
  <footerDash></footerDash>
</template>

<script>
import DashAbout from "@/components/dashboard/DashAbout.vue";
import ServiceDash from "@/components/dashboard/ServiceDash.vue";
import FAQComp from "@/components/home/FAQComp.vue";
import CarouselComp from "@/components/home/CarouselComp.vue";
import trackRecord from "@/components/home/trackRecord.vue";
import scheduleDash from "@/components/dashboard/scheduleDash.vue";
import footerDash from "@/components/dashboard/footerDash.vue";
import gambar from "@/assets/images/Marketing.png";
import NavDash from "@/components/dashboard/NavDash.vue";

export default {
  name: "DashboardView",
  components: {
    DashAbout,
    ServiceDash,
    trackRecord,
    CarouselComp,
    scheduleDash,
    FAQComp,
    footerDash,
    NavDash,
  },
  data() {
    return {
      gambar: gambar,
      username: "",
    };
  },
  mounted() {
    this.username = localStorage.getItem("username");
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
DashAbout {
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

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 0;
    width: 100%;
  }
}

.kata {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;

  @media (max-width: 700px) {
    width: 60%;
  }

  @media (max-width: 600px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 80%;
  }
}

.kata p,
i {
  font-size: 20px;
  color: var(--putih);
  text-align: left;
  font-family: "Poppins", sans-serif;

  @media (max-width: 1270px) {
    font-size: 15px;
  }

  @media (max-width: 1080px) {
    font-size: 12px;
  }

  @media (max-width: 1000px) {
    font-size: 12px;
  }
  @media (max-width: 360px) {
    font-size: 12px;
  }
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

  @media (max-width: 1270px) {
    font-size: 40px;
  }

  @media (max-width: 600px) {
    font-size: 30px;
  }

  @media (max-width: 360px) {
    font-size: 25px;
  }
}

.judul h2 {
  font-size: 50px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  margin-bottom: -10px;

  @media (max-width: 1290px) {
    font-size: 46px;
  }

  @media (max-width: 600px) {
    font-size: 40px;
  }

  @media (max-width: 360px) {
    font-size: 35px;
  }
}

.judul .kuning {
  color: var(--kuning);

  @media (max-width: 414px) {
    font-size: 33px;
    margin-top: 4px;
  }
}

img {
  width: 640px;
  height: auto;

  @media (max-width: 600px) {
    margin-top: 0.5rem;
    left: 0;
    width: 320px;
    height: auto;
  }
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

  @media (max-width: 1080px) {
    margin-top: 5px;
    font-size: 18px;
  }
}

.btnl:hover {
  transform: scale(0.9);
}
</style>
