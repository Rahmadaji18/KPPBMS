<template>
  <div class="bg">
    <div class="container">
      <h1>Frequently asked questions</h1>
      <div id="faqs">
        <div v-for="(item, index) in data" :key="index" class="faq">
          <div class="question" @click="toggleAnswer(index)">
            <h3>
              {{ item.question }}
            </h3>
            <svg width="19" height="16" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.46875 7.03125C5.75 7.3125 6.21875 7.3125 6.5 7.03125L10.75 2.78125C11.0625 2.46875 11.0625 2 10.75 1.71875L10.0625 1C9.75 0.71875 9.28125 0.71875 9 1L5.96875 4.03125L2.96875 1C2.6875 0.71875 2.21875 0.71875 1.90625 1L1.21875 1.71875C0.90625 2 0.90625 2.46875 1.21875 2.78125L5.46875 7.03125Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div class="answer" :class="{ active: activeIndex === index }">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQComp",
  props: {},
  data() {
    return {
      data: [
        {
          question: "Apa saja jenis branding yang dilayani?",
          answer: "Ini Karya Kita melayani semua jenis branding yang kamu butuhkan. Kami biasa membangun branding untuk produk, event, instansi, bahkan personal.",
        },
        {
          question: "Bagaimana saya bisa mendaftar bekerja di sini?",
          answer: "Untuk saat ini kami belum membuka pendaftaran untuk mitra atau pekerja. Tapi, jika kamu berpotensi dan tertarik untuk bergabung bersama Ini Karya Kita, kamu bisa langsung menghubungi kami.",
        },
        {
          question: "Bagaimana metode pemayarannya?",
          answer: "Metode pembayaran dapat dilakukan secara tunai ketika di tempat atau non tunai melalui rekekning bank yang akan dikirimkan via Whatsapp. Untuk DP sendiri adalah 30% dari harga yang telah disepakati.",
        },
        {
          question: "Apakah bisa custom layanan?",
          answer: "Tentu, kamu bisa menyesuaikan kebutuhan layanan branding kamu, mulai dari kualitas hingga kuantitas yang dibutuhkan. Selain itu kamu juga bisa memilih berbagai layanan untuk melengkapi brandingmu.",
        },
        {
          question: "Apakah Ini Karya Kita mengadakan pelatihan branding?",
          answer:
            "Yap, kami juga menyediakan pelatihan branding secara gratis bagi klien yang berupa instansi, organisasi, dan sejenisnya agar dapat mengelola brandingnya. Pelatihan ini juga sebagai tujuan Ini Karya Kita untuk meningkatkan pengembangan SDM.",
        },
      ],
      activeIndex: null,
    };
  },
  methods: {
    toggleAnswer(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");
.bg {
  background-color: var(--biru);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 80%;
  max-width: 1000px;
  min-width: 300px;
  margin: -20px auto 0;
  padding: 0 0.5rem;
  background-color: var(--biru);
}

h1 {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;
  color: var(--kuning);
  font-family: "Montserrat", sans-serif;
  padding-top: 2rem;
  margin-bottom: 35px;
}

#faqs {
  background: transparent;
  padding: 10px;
  margin-bottom: 80px;
}

.faq {
  margin-top: 0.5rem;
  border-radius: 10px;
}

.faq .question {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: var(--kuning);
  border-radius: 10px;
}

.faq .question h3 {
  position: relative;
  color: var(--biru);
}

.faq .question h3 svg {
  position: absolute;
  right: 5%;
  top: 30%;
  transition: 1s;
}

.faq .question.active h3 svg {
  transform: rotate(180deg);
}

.faq .answer {
  max-height: 0;
  overflow: hidden;
  transition: 1s ease;
}

.faq .answer p {
  padding: 0.5rem 1rem;
  color: white;
}

.answer.active {
  max-height: 400px;
  animation: fade 1s ease;
}

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@media only screen and (max-width: 800px) {
}
</style>
