<template>
  <div class="luara">
    <div class="about">
      <img :src="gambar" />
      <div class="kataa">
        <h1>About Us</h1>
        <p>
          Ini Karya Kita merupakan platform layanan branding satu pintu yang menyediakan berbagai macam jasa untuk mengembangkan branding desa wisata, event, instansi, UMKM dan sebagainya. Kamu juga bisa berdiskusi dan berkonsultasi terkait
          metode brandingmu bersama kami secara gratis.
        </p>
        <a href="about"><button class="btna">View More</button></a>
      </div>
    </div>
  </div>
</template>

<script scoped>
import gambar from "@/assets/images/About.png";

export default {
  name: "AboutUs",
  props: {},

  data() {
    return {
      gambar: gambar,
    };
  },
};
</script>

<style scoped>
.luara {
  background-color: var(--putih);
}

.about {
  display: flex;
  width: 100%;
  padding-inline: 10rem;
  justify-content: space-between;
  gap: 50px;
  padding-top: 100px;
  padding-bottom: 100px;
}

.kataa {
  display: flex;
  flex-direction: column;
  color: var(--biru);
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
}

.kataa h1 {
  font-size: 3rem;
  font-weight: bolder;
  font-family: "Montserrat", sans-serif;
}

.kataa p {
  font-size: 20px;
  font-family: "Poppins", sans-serif;
}

.btna {
  font-size: 1.5rem;
  border: none;
  background-color: var(--biru);
  color: var(--putih);
  padding: 5px 37px;
  border-radius: 10px;
  font-weight: bold;
  transition: ease-out 0.3s;
  cursor: pointer;
}

.btna:hover {
  transform: scale(0.9);
}

@media only screen and (max-width: 1200px) {
  .about {
    gap: 25px;
  }
}
</style>
