<template>
  <section id="contact" class="contact">
    <h1 class="heading">Get in Touch <span class="kuning">with Us</span></h1>
  </section>
  <div class="contact-in">
    <div class="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.875563079114!2d112.77278047385303!3d-7.255000492751626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f98ff91e9041%3A0x282921faefcd75f2!2sJl.%20Ploso%20Timur%20VA%20No.60%2C%20Ploso%2C%20Kec.%20Tambaksari%2C%20Surabaya%2C%20Jawa%20Timur%2060133!5e0!3m2!1sen!2sid!4v1686635733464!5m2!1sen!2sid"
        width="100%"
        height="auto"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div class="contact-form">
      <form @submit.prevent="schedule">
        <input type="text" name="nama" placeholder="Nama Lengkap" class="contact-form-txt" required v-model="nama" />
        <input type="text" name="phone" required placeholder="Nomor Handphone" class="contact-form-email" v-model="phone" />
        <input type="email" name="email" placeholder="Email" class="contact-form-email" required v-model="email" />
        <input type="text" name="company" placeholder="Nama Perusahaan / Brand" class="contact-form-email" required v-model="company" />
        <input type="text" name="subjek" placeholder="Subjek (ex : Konsultasi, etc)" class="contact-form-email" required v-model="subjek" />
        <textarea type="text" placeholder="Masukkan Pesanmu..." name="message" class="contact-form-txtarea" required v-model="message"></textarea>
        <input style="font-weight: bold" type="submit" value="Submit" class="contact-form-btn" required />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $cookies from "vue-cookies";
$cookies.config("1h");
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default {
  name: "FormPage",
  data() {
    return {
      nama: "",
      phone: "",
      email: "",
      company: "",
      subjek: "",
      message: "",
      msg: "",
    };
  },
  methods: {
    async schedule() {
      await axios
        .post("http://localhost:8081/dashboard/schedule", {
          nama: this.nama,
          phone: this.phone,
          email: this.email,
          company: this.company,
          subjek: this.subjek,
          message: this.message,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.msg === "Respon Terkirim!") {
            Swal.fire({
              icon: "success",
              title: "Responmu Terkirim",
              text: "Tunggu Tim Kami Menghubungimu Kembali Paling Lambat 2x24 Jam",
              customClass: {
                title: "swal2-title",
                text: "swal2-textarea",
                confirmButtonText: "swal2-confirm",
                footer: "swal2-footer",
                popup: "swal-popup",
              },
            }).then(() => {
              this.$router.push("/dashboard");
            });
          } else if (res.data.msg === "Email Belum Terdaftar!") {
            Swal.fire({
              icon: "warning",
              title: "Respon Gagal Terkirim",
              text: "Email yang dimasukkan Belum Terdaftar, Gunakan Email yang Sudah Terdaftar.",
              customClass: {
                title: "swal2-title",
                text: "swal2-textarea",
                confirmButtonText: "swal2-confirm",
                footer: "swal2-footer",
                popup: "swal-popup",
              },
            });
          } else if (res.data.msg === "Masukkan Data Terlebih Dahulu!") {
            Swal.fire({
              icon: "error",
              title: "Gagal Terkirim",
              text: "Masukkan Data Terlebih Dahulu!",
              customClass: {
                title: "swal2-title",
                text: "swal2-textarea",
                confirmButtonText: "swal2-confirm",
                footer: "swal2-footer",
                popup: "swal-popup",
              },
            });
          }
        })
        .catch((err) => {
          Swal.fire({
            title: "Respon Error",
            text: "Sepertinya Ada Masalah, Coba Lagi Nanti!",
            icon: "error",
            customClass: {
              title: "swal2-title",
              text: "swal2-textarea",
              confirmButtonText: "swal2-confirm",
              footer: "swal2-footer",
              popup: "swal-popup",
            },
          });
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Poppins&display=swap");
.contact {
  text-align: center;
  align-items: center;
}

.kuning {
  color: var(--kuning);
  font-size: 70px;
  font-family: "Montserrat";
  font-weight: 800;
}

.contact .heading {
  margin-bottom: 5rem;
  padding-top: 80px;
  color: var(--biru);
  font-size: 70px;
  font-family: "Montserrat";
  font-weight: 800;
}

.contact-in {
  width: 80%;
  height: 600px;
  margin: auto auto 5rem auto;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px #666;
}

.contact-map {
  width: 100%;
  height: 100%;
  flex: 50%;
}
.contact-map iframe {
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
}
.contact-form {
  width: 100%;
  height: auto;
  flex: 50%;
  text-align: left;
  padding-top: 2rem;
}
.contact-form-txt {
  margin-left: 2rem;
  width: 85%;
  height: 40px;
  color: #000;
  border: 1px solid #bcbcbc;
  border-radius: 10px;
  outline: none;
  margin-bottom: 20px;
  padding: 15px;
}
.contact-form-email {
  margin-left: 2rem;
  width: 85%;
  height: 40px;
  color: #000;
  border: 1px solid #bcbcbc;
  border-radius: 10px;
  outline: none;
  margin-bottom: 20px;
  padding: 15px;
}
/* .contact-form-txt::placeholder
		{
			color: #aaa;
            font-size: 16px;
			font-family: "Poppins", sans-serif;
			font-weight: 500;
		} */
/* .contact-form-email::placeholder
		{
			color: #aaa;
            font-size: 16px;
			font-family: "Poppins", sans-serif;
			font-weight: 500;
		} */
.contact-form-txtarea {
  margin-left: 2rem;
  width: 85%;
  height: 130px;
  color: #000;
  border: 1px solid #bcbcbc;
  border-radius: 10px;
  outline: none;
  margin-bottom: 20px;
  padding: 15px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
}
/* .contact-form-txtarea::placeholder
		{
			color: #aaa;
            font-size: 1.5rem;
		} */

.contact-form-btn {
  margin-left: 8.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--biru);
  border-style: none;
  border-color: none;
  cursor: pointer;
  height: 3.5rem;
  width: 15rem;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: #fff;
  font-size: 24px;
}
.contact-form-btn:hover {
  transform: scale(0.9);
}
.contact-form-phone {
  margin-left: 2rem;
  width: 95%;
  height: 40px;
  color: #000;
  border: 1px solid #bcbcbc;
  border-radius: 10px;
  outline: none;
  margin-bottom: 20px;
  padding: 15px;
}
/* .contact-form-phone::placeholder
		{
			color: #aaa;
            font-size: 1.5rem;
		} */

.contact {
  text-align: center;
  align-items: center;
}

.contact .heading {
  margin-bottom: 3rem;
  margin-top: -2rem;
}

@media (max-width: 900px) {
  .contact .heading {
    font-size: 3rem;
  }

  .kuning {
    font-size: 3rem;
  }

  .paragraf p {
    font-size: 16px;
    margin-left: 50px;
    margin-right: 50px;
  }

  .contact-map {
    height: 30%;
    flex: 50%;
    padding-right: 2rem;
  }

  .contact-in {
    height: 800px;
  }

  .contact-form {
    margin-top: -60px;
  }

  .contact-form-btn {
    font-size: 20px;
    height: 2.5rem;
    width: 11rem;
    margin-left: 13.5rem;
  }

  /* .contact-form-email::placeholder
		{
            font-size: 12px;
		} */
}

@media (max-width: 900px) {
  .contact .heading {
    font-size: 2rem;
  }

  .kuning {
    font-size: 2rem;
  }

  .paragraf p {
    font-size: 16px;
    margin-left: 50px;
    margin-right: 50px;
  }

  .contact-form-btn {
    margin-left: 14.5rem;
  }

  .contact-form-txt {
    width: 90%;
  }
  .contact-form-email {
    width: 90%;
  }
  .contact-form-txtarea {
    width: 90%;
  }
}
@media (max-width: 768px) {
  .contact .heading {
    font-size: 46px;
  }

  .kuning {
    font-size: 46px;
  }

  .paragraf p {
    font-size: 16px;
    margin-left: 50px;
    margin-right: 50px;
  }

  .contact-form-btn {
    margin-left: 13.5rem;
  }

  .contact-form-txt {
    width: 90%;
  }
  .contact-form-email {
    width: 90%;
  }
  .contact-form-txtarea {
    width: 90%;
  }
}

@media (max-width: 480px) {
  .contact .heading {
    font-size: 30px;
  }

  .kuning {
    font-size: 30px;
  }

  .paragraf p {
    font-size: 14px;
    margin-left: 30px;
    margin-right: 30px;
  }

  .contact-form-btn {
    margin-left: 4rem;
  }

  .contact-form-txt {
    width: 80%;
  }
  .contact-form-email {
    width: 80%;
  }
  .contact-form-txtarea {
    width: 80%;
  }
}
</style>
