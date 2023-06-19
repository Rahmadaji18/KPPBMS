<template>
  <header>
    <div class="wrapnav">
      <div class="branding">
        <a href="/dashboard"><img src="@/assets/images/logo.png" alt="Logo" /></a>
      </div>
      <nav class="normal" v-if="!mobile">
        <div class="menu"><a href="/dashboard/about">About</a></div>
        <div class="menu drop" @click="showDrop">
          <a class="s"
            >Service
            <svg viewBox="0 0 1030 638" width="10">
              <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="var(--biru)"></path></svg
          ></a>
          <transition name="drop1">
            <div class="dropdown1" v-if="drop">
              <div class="sub menu"><a href="/dashboard/photography">Fotografi</a></div>
              <div class="sub menu"><a href="/dashboard/videography">Videografi</a></div>
              <div class="sub menu"><a href="/dashboard/graphicsdesign">Design Grafis</a></div>
              <div class="sub menu"><a href="/dashboard/webdevelopment">Web Development</a></div>
            </div>
          </transition>
        </div>
        <div class="menu"><a href="/dashboard/schedule">Schedule</a></div>
        <div class="btn" @click="logout">Logout</div>
      </nav>
      <div class="mobile" v-if="mobile">
        <div class="btn" @click="logout">Logout</div>
        <div class="icon" v-if="mobile" @click="showMobileDrop">
          <font-awesome-icon @click="toogleMobileNav" v-show="mobile" icon="bars" :class="{ 'icon-active': mobileNav }" class="ic" style="color: #002855"></font-awesome-icon>
        </div>
      </div>
      <transition name="drop1">
        <nav class="responsive" v-if="mobileDrop">
          <div class="ngaco"></div>
          <div class="reswrap">
            <div class="menu"><a href="/dashboard/about">About</a></div>
            <div class="menu drop3" @click="showDrop">
              <a class="s">
                Service
                <svg viewBox="0 0 1030 638" width="10">
                  <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="var(--kuning)"></path>
                </svg>
              </a>
              <transition name="drop1">
                <div class="dropdown1" v-if="drop">
                  <div class="sub menu"><a href="/dashboard/photography">Fotografi</a></div>
                  <div class="sub menu"><a href="/dashboard/videography">Videografi</a></div>
                  <div class="sub menu"><a href="/dashboard/graphicsdesign">Design Grafis</a></div>
                  <div class="sub menu"><a href="/dashboard/webdevelopment">Web Development</a></div>
                </div>
              </transition>
            </div>
          </div>
          <transition name="drop1">
            <div class="ngisi" v-if="drop"></div>
          </transition>
          <div class="menu1"><a href="/dashboard/schedule">Schedule</a></div>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
export default {
  name: "NavDash",
  data() {
    return {
      mobile: false,
      drop: false,
      mobileDrop: false,
    };
  },
  methods: {
    showDrop() {
      this.drop = !this.drop;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 850) {
        this.mobile = true;
        return;
      } else {
        this.mobile = false;
        this.mobileDrop = false;
        this.drop = false;
        return;
      }
    },
    showMobileDrop() {
      this.mobileDrop = !this.mobileDrop;
    },
    logout() {
      // Clear the logged-in status from localStorage
      Swal.fire({
        title: "Konfirmasi",
        text: "Apakah Kamu Yakin untuk Keluar dari Website ini?",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Batal",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Keluar",
        customClass: {
          title: "swal2-title",
          text: "swal2-textarea",
          confirmButtonText: "swal2-confirm",
          footer: "swal2-footer",
          popup: "swal-popup",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("loggedIn");
          this.$router.push("/logout");
          Swal.fire({
            title: "Berhasil Keluar",
            text: "Terima Kasih, Jangan Lupa Kembali Ya!",
            icon: "success",
            customClass: {
              title: "swal2-title",
              text: "swal2-textarea",
              confirmButtonText: "swal2-confirm",
              footer: "swal2-footer",
              popup: "swal-popup",
            },
          });
        }
      });
    },
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,700&display=swap");

header {
  display: flex;
  justify-content: center;
  background-color: var(--kuning);
  position: fixed;
  width: 100%;
  z-index: 999;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.3);

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 92%;
    height: auto;
    @media (max-width: 850px) {
      width: 64%;
      height: auto;
    }

    @media (max-width: 710px) {
      width: 63%;
      height: auto;
    }

    @media (max-width: 555px) {
      width: 61%;
      height: auto;
    }

    @media (max-width: 455px) {
      width: 60%;
      height: auto;
    }

    @media (max-width: 360px) {
      width: 50%;
      height: auto;
    }
  }
}

.wrapnav {
  display: flex;
  align-content: center;
  justify-content: space-between;
  width: 80%;
  max-width: 100%;
  font-family: Poppins, Montserrat, sans-serif;
  background-color: var(--kuning);
  padding: 10px 0;
}

.normal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: max-content;
  font-family: Poppins, Montserrat, sans-serif;
  gap: 70px;
}

.mobile {
  display: flex;
  justify-content: space-between;
  gap: 20px;

  .icon {
    display: flex;
    align-items: center;
    height: 100%;

    .ic {
      cursor: pointer;
      font-size: 24px;
      transition: 0.5s ease all;
    }
  }
}

.s {
  display: flex;
  gap: 10px;
}

.menu {
  cursor: pointer;
}
.menu a {
  list-style: none;
  color: #002855;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  position: relative;
  cursor: pointer;
}

.menu a::after {
  content: " ";
  width: 0;
  height: 3px;
  background: #002855;
  position: absolute;
  left: 0;
  bottom: -6px;
  transition: 0.5s;
}

.menu a:hover::after {
  width: 100%;
}

.drop {
  display: flex;
  flex-direction: column;
}

.dropdown1 {
  display: flex;
  flex-direction: column;
  background-color: var(--kuning);
  position: absolute;
  top: 75px;
  padding: 0 0px 12px;
  gap: 10px;
  border-radius: 0 0 10px 10px;
  z-index: -1;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.3);

  div {
    width: 80%;
  }
}

.responsive {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: var(--kuning);
  z-index: -4;
  padding: 10px 0;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.3);
  .menu1 {
    background-color: var(--biru);
    padding: 10px 50px;
    width: 70%;
    border-radius: 20px;
    padding-bottom: 15px;
    margin-top: -8px;

    a {
      list-style: none;
      color: var(--kuning);
      text-decoration: none;
      font-weight: 600;
      font-size: 15px;
      position: relative;
      cursor: pointer;
    }

    a::after {
      content: " ";
      width: 0;
      height: 3px;
      background: var(--kuning);
      position: absolute;
      left: 0;
      bottom: -6px;
      transition: 0.5s;
    }

    a:hover::after {
      width: 100%;
    }
  }

  .ngisi {
    width: 100%;
    height: 210px;
    z-index: -3;

    @media (max-width: 412px) {
      height: 235px;
    }

    @media (max-width: 360px) {
      height: 260px;
    }
  }

  .ngaco {
    position: absolute;
    top: -2px;
    height: 130px;
    background-color: var(--kuning);
    z-index: -1;
    width: 100%;
  }
  .reswrap {
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 5px;
    padding: 15px 0;

    .menu {
      background-color: var(--biru);
      padding: 10px 50px;
      width: 100%;
      border-radius: 20px;
      padding-bottom: 15px;

      a {
        color: var(--kuning);
      }

      a::after {
        background-color: var(--kuning);
      }

      .dropdown1 {
        top: 130px;
        max-width: 810px;
        background-color: transparent;
        box-shadow: none;
        z-index: -2;
        gap: 5px;

        @media (max-width: 850px) {
          width: 64%;
        }

        @media (max-width: 710px) {
          width: 63%;
        }

        @media (max-width: 555px) {
          width: 61%;
        }

        @media (max-width: 455px) {
          width: 59%;
        }

        @media (max-width: 360px) {
          width: 56%;
        }
      }
    }
  }
}

.btn {
  border-radius: 10px;
  color: white;
  background-color: #002855;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: 0.3s;
}

.btn:hover {
  transform: scale(0.9);
}

.drop1-enter-from {
  transform: translateY(-500px);
}

.drop1-enter-to {
  transform: translateY(0);
}

.drop1-enter-active,
.drop1-leave-active {
  transition: all 0.5s ease-out;
}

.drop1-leave-from {
  transform: translateY(0);
}

.drop1-leave-to {
  transform: translateY(-500px);
}
</style>
