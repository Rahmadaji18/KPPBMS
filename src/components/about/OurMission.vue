<template>
    <div class="luar">
        <div class="header">
            <h1 class="judul">Our Mission</h1>
        </div>
        <div class="atas">
            <img class="img-atas" :src="gambar" />
            <h1 class="judul-atas">Pengembangan SDM</h1>
            <p class="capt-atas">Semakin berkembangnya zaman, teknologi juga semakin maju.<br> Hal ini yang mendorong Ini Karya
                Kita untuk bergerak bukan <br> hanya sebagai platform yang berorientasi pada profit, tapi juga <br>
                mendampingi generasi muda dalam mengembangkan sumber <br> daya manusia dan memanfaatkan teknologi dengan potensi <br>
                semaksimal mungkin.
            </p>
        </div>
        <div class="bawah">
            <img class="img-kanan" :src="kanan" />
            <img class="img-kiri" :src="kiri" />
            <h1 class="judul-bawah">Support SDG's Number 8 & 17</h1>
            <p class="capt-bawah">
                Selain sebagai layanan penyedia jasa, Ini Karya Kita punya misi<br>untuk berpartisipasi
                dalam mewujudkan Sustainable Development <br> Goals (SDGs) atau Tujuan Pembangunan Berkelanjutan
                yang <br> berfokus pada peningkatan perekonomian kreatif dan kolaborasi <br> untuk mencapai tujuan bersama.
            </p>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Poppins&display=swap');

.luar {
    background-color: var(--putih);
    margin: 0;
    padding: 150px 30px 150px;
    margin-left: 130px;
    margin-right: 130px;
    padding-bottom: 350px;
}
.judul {
    font-family: "Montserrat";
    font-size: 64px;
    color: var(--biru);
    font-weight: 800;
    text-align: center;
    margin-top: -60px;
}

.img-atas {
    margin-top: 90px;
    margin-left: -25px;
}

.judul-atas{
    color: var(--biru);
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 32px;
    float: right;
    margin-top: 110px;
    text-align: left;
    padding-right: 298px;
}

.capt-atas {
    color: var(--biru);
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    float: right;
    text-align: left;
    margin-top: -190px;
}

.judul-bawah {
    color: var(--biru);
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 32px;
    text-align: right;
    margin-left: 150px;
    float: left;
    margin-top: 145px;
}

.capt-bawah {
    color: var(--biru);
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    text-align: right;
    margin-top: 20px;
    margin-left: -50px;
    float: left;
}

.img-kanan, .img-kiri {
    float: right;
    margin-top: 175px;
}

.img-kiri {
    margin-right: 30px;
}


</style>