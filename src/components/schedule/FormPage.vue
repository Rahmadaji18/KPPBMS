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
      <form action="./contactme.php" method="POST">
        <input type="text" name="name" placeholder="Name" class="contact-form-txt" required />
        <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required placeholder="Contact Number" maxlength="10" class="contact-form-email" />
        <input type="email" name="email" placeholder="Email" class="contact-form-email" required />
        <input type="text" name="company" placeholder="Company or Brand Name" class="contact-form-email" required />
        <input type="text" name="subject" placeholder="Subject (ex : collabs, complain)" class="contact-form-email" required />
        <textarea placeholder="Your Message" name="message" class="contact-form-txtarea" required></textarea>
        <input type="submit" value="Submit" name="submit" class="contact-form-btn" />
      </form>
    </div>
  </div>
</template>

<script></script>

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
  border-radius: 50px;
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
  border-radius: 50px;
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
/* .contact-form-email::placeholder {
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
}
/* .contact-form-txtarea::placeholder {
  color: #aaa;
  font-size: 1.5rem;
} */

.contact-form-btn {
  margin-left: 8.5rem;
  outline: none;
  border: none;
  border-radius: 5rem;
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
  border-radius: 50px;
  outline: none;
  margin-bottom: 20px;
  padding: 15px;
}
/* .contact-form-phone::placeholder {
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
    font-size: 57px;
  }

  .kuning {
    font-size: 57px;
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

  /* .contact-form-email::placeholder {
    font-size: 12px;
  } */
}

/* @media (max-width: 768px) {
    .satu {
        font-size: 40px;
    }

    .kuning {
        font-size: 40px;
    }

    .paragraf p {
        font-size: 16px;
        margin-left: 50px;
        margin-right: 50px;
    }
} */

@media (max-width: 480px) {
  .satu {
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
}
</style>
