<template>
  <div class="communicate">
    <h3>Perlu Diskusi dan Konsultasi?</h3>
    <p>
      Tim kreatif kami akan dengan senang hati membahas kebutuhan pembuatan branding <br />
      yang sesuai dengan keinginan Kamu.
    </p>
    <a href="#"><button class="btn">Schedule Now</button></a>
  </div>
</template>

<script>
export default {
  name: "scheduleNow",
  props: {},
};
</script>

<style scoped>
.communicate .btn {
  outline: none;
  border: none;
  border-radius: 1rem;
  background: #ffd460;
  font-size: 1.5rem;
  cursor: pointer;
  height: 3.5rem;
  width: 12rem;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
  color: #002e5f;
  margin-top: -20px;
}
.communicate .btn:hover {
  transform: scale(1.1);
}
.communicate {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-image: url(@/assets/images/Group37.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  color: #fff;
  min-height: 35vh;
  padding: 40px 20px 60px;
  align-self: center;
  gap: 40px;
}

.communicate h3 {
  margin-top: 6px;
  font-size: 50px;
  text-align: center;
  align-self: center;
}
.communicate p {
  font-size: 25px;
  text-align: center;
  align-self: center;
  padding-bottom: 20px;
  margin-top: -30px;
  line-height: 1;
}
</style>
