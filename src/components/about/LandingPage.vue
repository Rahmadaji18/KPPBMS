<template>
  <div class="bg">
    <div class="landing">
      <div class="header">
        <h1 class="satu">Best Solution</h1>
        <h1 class="dua">One Door Branding</h1>
        <h1 class="tiga">Services Innovation</h1>
      </div>
      <div class="paragraf">
        <p>
          Ini Karya Kita dimulai dari sebuah kolaborasi-kolaborasi proyek kreatif digital sejak tahun 2021, karena memiliki visi yang sama untuk dapat membantu lebih banyak bisnis di Indonesia. Akhirnya terwujudlah sebuah Branding Services
          Agency yang mengedepankan estetika dan autentika.
        </p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Poppins&display=swap");

.bg {
  display: flex;
  justify-content: center;
  background: linear-gradient(90deg, #002855, #001635);
  align-content: center;
  padding: 150px 0 100px;
}

.landing {
  width: 90%;
  max-width: 1200px;
}

.header {
  text-align: center;

  h1 {
    @media (max-width: 1270px) {
      font-size: 60px;
    }

    @media (max-width: 1140px) {
      font-size: 50px;
    }

    @media (max-width: 1080px) {
      font-size: 45px;
    }

    @media (max-width: 1000px) {
      font-size: 50px;
    }
  }
}

.satu {
  color: var(--putih);
  font-size: 70px;
  font-family: "Montserrat";
  font-weight: 800;
}

.dua {
  color: var(--kuning);
  font-size: 70px;
  font-family: "Montserrat";
  font-weight: 800;
}

.tiga {
  color: var(--putih);
  font-size: 70px;
  font-family: "Montserrat";
  font-weight: 800;
}

.paragraf p {
  color: var(--putih);
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  text-align: center;
  margin-top: 30px;

  @media (max-width: 1270px) {
    font-size: 15px;
  }

  @media (max-width: 1080px) {
    font-size: 12px;
  }

  @media (max-width: 1000px) {
    font-size: 15px;
  }
}
</style>
