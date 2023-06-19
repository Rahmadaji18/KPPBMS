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
        <a href="/dashboard/about"><button class="btna">View More</button></a>
      </div>
    </div>
  </div>
</template>

<script scoped>
import gambar from "@/assets/images/About.png";

export default {
  name: "DashABout",
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
  justify-content: center;
  background-color: var(--putih);
  padding: 100px 0;
}

.about {
  display: flex;
  width: 100%;
  padding-inline: 10rem;
  justify-content: space-between;
  gap: 50px;
  align-items: center;
  justify-items: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    padding-inline: 6rem;
  }
  @media (max-width: 830px) {
    flex-direction: column;
    width: 100%;
    padding-inline: 4rem;
  }

  @media (max-width: 420px) {
    flex-direction: column;
    width: 100%;
    padding-inline: 2rem;
  }

  @media (max-width: 360px) {
    flex-direction: column;
    width: 100%;
    padding-inline: 1rem;
  }
}

.kataa {
  display: flex;
  flex-direction: column;
  color: var(--biru);
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  @media (max-width: 1080px) {
    width: 100%;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 600px) {
    width: 100%;
    align-items: center;
  }

  @media (max-width: 360px) {
    width: 100%;
    align-items: center;
  }
}

.kataa h1 {
  font-size: 5rem;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 1000px) {
    font-size: 4rem;
    text-align: center;
  }

  @media (max-width: 830px) {
    font-size: 3rem;
    text-align: center;
  }

  @media (max-width: 420px) {
    font-size: 3rem;
    text-align: center;
  }

  @media (max-width: 360px) {
    font-size: 2rem;
    text-align: center;
  }
}

.kataa p {
  font-size: 20px;
  font-family: "Poppins", sans-serif;

  @media (max-width: 1000px) {
    font-size: 18px;
    text-align: center;
  }

  @media (max-width: 830px) {
    font-size: 16px;
    text-align: center;
  }

  @media (max-width: 360px) {
    font-size: 14px;
    text-align: center;
  }
}

img {
  position: relative;
  max-width: 640px;
  width: 50%;
  height: auto;
  right: 20px;

  @media (max-width: 1270px) {
    right: 0;
    max-width: 480px;
    min-width: 480px;
  }

  @media (max-width: 600px) {
    right: 0;
    max-width: 320px;
    min-width: 320px;
  }
}
.btna {
  font-size: 1.5rem;
  border: none;
  background-color: var(--biru);
  color: var(--putih);
  padding: 5px 15px;
  width: 100%;
  border-radius: 10px;
  font-weight: bold;
  transition: ease-out 0.3s;
  cursor: pointer;

  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 830px) {
    font-size: 16px;
  }

  @media (max-width: 360px) {
    width: 100%;
    font-size: 16px;
  }
}

.btna:hover {
  transform: scale(0.9);
}
</style>
