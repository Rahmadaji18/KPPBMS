<template>
  <footer class="footer">
    <div class="footer_main">
      <div class="footer_info">
        <H2>Contact Us</H2>
        <p>Jalan Ploso Timur VA No.60, Kec. Tambaksari, Surabaya, Indonesia<br />Email : inikaryakita20@gmail.com<br />Phone : (+62)-8214-0759-677</p>
      </div>
      <div class="footer_link">
        <h2>Useful Links</h2>
        <div class="link_column">
          <div>
            <a href="/">Home</a>
            <a href="about">About Us</a>
            <a href="#ourservices">Our Service</a>
            <a href="#latestprojects">Latest Project</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>
      <div class="footer_schedule">
        <h2>Schedule Now</h2>
        <p>
          Jika kamu tertarik dengan layanan <br />
          branding kami, segera jadwalkan untuk berdiskusi bersama secara gratis.
        </p>
        <a> <button class="btn" @click="showAlert">Schedule Now</button></a>
      </div>
    </div>
    <div class="footer_secondary">
      <p>Copyright &copy; 2023 Ini Karya Kita. All right reserved.</p>
    </div>
  </footer>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default {
  name: "footerCom",
  props: {},
  methods: {
    showAlert() {
      // Use sweetalert2
      Swal.fire({
        icon: "error",
        title: "Kamu Harus Login/Signup",
        text: "Menu ini hanya bisa digunakan jika kamu sudah melakukan login/signup",
        footer: '<a href="login">Login Sekarang</a>',
        confirmButtonText: "Okey",
        customClass: {
          title: "swal2-title",
          text: "swal2-textarea",
          confirmButtonText: "swal2-confirm",
          footer: "swal2-footer",
          popup: "swal-popup",
        },
      });
    },
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  background-color: #ffffff;
  color: #002e5f;
  /*padding:2rem;*/
  padding: auto 7%;
  line-height: 1.5rem;
}

.footer h2 {
  font-size: 32px;
  margin-bottom: 20px;
}

.footer .footer_main {
  border-bottom: 1px solid white;
  display: flex;
  /* flex-direction: row; */
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem 0.5rem;
}

.footer_main {
  width: 1200px;
  justify-items: center;
}

.footer_main div {
  width: 300px;
}

.footer_main .footer_info p {
  font-size: 0.9rem;
  margin-top: -10px;
  color: #002e5f;
}
.footer_main .footer_info a,
.footer_link .link_column a {
  text-decoration: none;
  color: #002e5f;
}

.footer_main .footer_info a,
.footer_link .link_column a:hover {
  text-decoration: none;
  font-weight: bold;
  color: #002e5f;
}

.footer_info {
  text-align: left;
}
.link_column {
  /*border: 1px solid red;*/
  display: flex;
  justify-content: space-between;
  text-align: left;
  align-self: center;
  margin-top: -10px;
}
.footer_link .link_column > div {
  display: grid;
  padding-right: 2rem;
}

.footer_secondary {
  padding-inline: 24px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  background-color: #ffd460;
  height: 80px;
  width: 100%;
}

.footer_secondary p {
  /*align-items: center;*/
  text-align: center;
  /* font-weight: bolder; */
  color: #002e5f;
}
.footer_secondary p i {
  cursor: pointer;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 50%;
  background-color: white;
  color: black;
}
.footer_secondary p i:hover {
  color: white;
  background-color: black;
}

.footer_schedule {
  display: flex;
  flex-direction: column;
}

.footer_schedule p {
  text-align: left;
  margin-top: -10px;
  /* align-self: center; */
}

/* .footer_schedule .btn{
    outline: none;
    border: none;
    border-radius: 10px;
    background: #002e5f;
    cursor: pointer;
    height: 50px;
    width: 240px;
    box-shadow: 0 .2rem .5rem rgba(0,0,0,.3);
    transition: transform 0.3s;
    color: #ffffff;
    font-size: 24px;
} */

.btn {
  border: none;
  background-color: var(--biru);
  color: var(--putih);
  padding: 8px 15px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
  font-weight: bold;
  font-size: 24px;
}
.footer_schedule .btn:hover {
  transform: scale(0.9);
}
@media (max-width: 900px) {
  .footer .footer_main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 30px;
    /* padding: 2rem 0.5rem; */
  }

  .btn {
    font-size: 16px;
  }

  .footer h2 {
    font-size: 28px;
    text-align: left;
  }
  .footer_main .footer_info {
    padding-left: 0;
  }

  .footer .footer_secondary {
    padding-top: 0;
  }
  .footer_secondary p {
    font-size: 12px;
    text-align: center;
    color: #002e5f;
  }
}
@media (max-width: 480px) {
  .footer .footer_main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 30px;
    /* padding: 2rem 0.5rem; */
  }

  .footer_main .footer_info {
    padding-left: 0;
  }

  .btn {
    font-size: 16px;
  }

  .footer h2 {
    font-size: 28px;
    text-align: left;
  }
}
</style>
