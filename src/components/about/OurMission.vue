<template>
  <div class="bg">
    <div class="luar">
      <h1 class="judul">Our Mission</h1>
      <div class="atas">
        <img class="img-atas" :src="gambar" />
        <div class="kata">
          <h1 class="judul-atas">Pengembangan SDM</h1>
          <p class="capt-atas">
            Semakin berkembangnya zaman, teknologi juga semakin maju Hal ini yang mendorong Ini Karya Kita untuk bergerak bukan hanya sebagai platform yang berorientasi pada profit, tapi juga mendampingi generasi muda dalam mengembangkan
            sumber daya manusia dan memanfaatkan teknologi dengan potensi semaksimal mungkin.
          </p>
        </div>
      </div>
      <div class="bawah">
        <div class="kata">
          <h1 class="judul-bawah">Support SDG's No. 8 & 17</h1>
          <p class="capt-bawah">
            Selain sebagai layanan penyedia jasa, Ini Karya Kita punya misuntuk berpartisipasi dalam mewujudkan Sustainable Development Goals (SDGs) atau Tujuan Pembangunan Berkelanjutan yang berfokus pada peningkatan perekonomian kreatif
            dan kolaborasi untuk mencapai tujuan bersama.
          </p>
        </div>
        <div class="imgb">
          <img class="img-kiri" :src="kiri" />
          <img class="img-kanan" :src="kanan" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gambar from "@/assets/images/atas.png";
import kanan from "@/assets/images/bawah1.png";
import kiri from "@/assets/images/bawah2.png";

export default {
  name: "OurMission",
  props: {},

  data() {
    return {
      gambar: gambar,
      kanan: kanan,
      kiri: kiri,
    };
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Poppins&display=swap");

* {
  color: var(--biru);
}

.bg {
  display: flex;
  justify-content: center;
}

.luar {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  padding: 150px 0;
  gap: 70px;

  h1 {
    font-family: "Montserrat";
    font-size: 64px;
    color: var(--biru);
    font-weight: 800;
    text-align: center;
  }

  @media (max-width: 1270px) {
    font-size: 54px;
  }

  @media (max-width: 1140px) {
    font-size: 44px;
  }

  @media (max-width: 1080px) {
    font-size: 50px;
  }

  @media (max-width: 1000px) {
    font-size: 54px;
  }
}

.atas {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 30px;

  @media (max-width: 1100px) {
    flex-direction: column;
  }

  .bagi {
    width: 2px;
    height: 100%;
    background-color: var(--biru);
  }

  img {
    height: auto;
    
    @media(max-width: 400px){
      width: 95%;
    }
  }

  h1 {
    color: var(--biru);
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 32px;
    text-align: left;

    @media (max-width: 1270px) {
      font-size: 22px;
    }

    @media (max-width: 830px) {
      font-size: 18px;
    }

    @media (max-width: 360px) {
      font-size: 14px;
      img {
        height: auto;
        width: 320px;
        min-width: 100px;
      }
    }
  }

  p {
    color: var(--biru);
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    float: right;
    text-align: left;

    @media (max-width: 1270px) {
      font-size: 15px;
    }

    @media (max-width: 1150px) {
      font-size: 12px;
    }

    @media (max-width: 1000px) {
      font-size: 15px;
    }
  }
}

.kata{
  @media(max-width: 870px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    width: 80%;
  }
}

.bawah {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;

  @media (max-width: 1100px) {
    flex-direction: column;
  }

  .bagi {
    width: 2px;
    height: 100%;
    background-color: var(--biru);
  }

  .imgb {
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 20px;

    @media(max-width: 450px){
      flex-direction: column;
    }
  }
  .imgb img .img-kiri {
    @media (max-width: 360px) {
      height: auto;
      width: 240px;
      min-width: 200px;
    }
  }

  h1 {
    color: var(--biru);
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 32px;
    text-align: right;

    @media (max-width: 1270px) {
      font-size: 22px;
    }

    @media (max-width: 830px) {
      font-size: 18px;
    }

    @media (max-width: 360px) {
      font-size: 14px;
    }
  }

  p {
    color: var(--biru);
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    text-align: right;

    @media (max-width: 1270px) {
      font-size: 15px;
    }

    @media (max-width: 1150px) {
      font-size: 12px;
    }

    @media (max-width: 1000px) {
      font-size: 15px;
    }
  }
}

// .bg{
//     background-color: var(--putih);
//     display: flex;
//     justify-content: center;

//     h1{
//         @media(max-width: 1270px){
//             font-size: 54px;
//         }

//         @media(max-width: 1140px){
//             font-size: 44px;
//         }

//         @media(max-width: 1080px){
//             font-size: 50px;
//         }

//         @media(max-width: 1000px){
//             font-size: 54px;
//         }
//     }

// }

// .luar {
//     margin: 0;
//     padding: 150px 0 150px;
//     width: 80%;
//     max-width: 1200px;
// }
// .judul {
//     font-family: "Montserrat";
//     font-size: 64px;
//     color: var(--biru);
//     font-weight: 800;
//     text-align: center;
//     margin-top: -60px;
// }

// .img-atas {
//     margin-top: 90px;
// }

// .judul-atas{
//     color: var(--biru);
//     font-family: "Poppins", sans-serif;
//     font-weight: bold;
//     font-size: 32px;
//     float: right;
//     margin-top: 110px;
//     text-align: left;
//     padding-right: 298px;
// }

// .capt-atas {
//     color: var(--biru);
//     font-family: "Poppins", sans-serif;
//     font-size: 20px;
//     float: right;
//     text-align: left;
//     margin-top: -190px;
// }

// .bawah{
//     display: flex;
//     justify-content: space-between;
//     gap: 20px;
// }

// .kata{
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
// }

// .judul-bawah {
//     color: var(--biru);
//     font-family: "Poppins", sans-serif;
//     font-weight: bold;
//     font-size: 32px;
//     text-align: right;
//     float: left;
//     margin-top: 145px;
// }

// .capt-bawah {
//     color: var(--biru);
//     font-family: "Poppins", sans-serif;
//     font-size: 20px;
//     text-align: right;
//     margin-top: 20px;
//     float: left;
// }

// .img-kanan, .img-kiri {
//     float: right;
//     margin-top: 175px;
// }

// .imgb{
//     display: flex;
//     gap: 20px;
// }
</style>
