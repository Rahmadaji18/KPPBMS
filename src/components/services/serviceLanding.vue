<template>
  <div class="bg">
    <div class="judul">
      <h1 class="satu">{{ title1 }}</h1>
      <h1>{{ title2 }}</h1>
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "ServiceLanding",
  props: {
    title1: {
      type: String,
      default: "customtitle1",
    },
    title2: {
      type: String,
      default: "customtitle2",
    },
    description: {
      type: String,
      default: "desc",
    },
  },
};
</script>

<style scoped>
.bg {
  background-color: var(--biru);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--putih);
  height: auto;
  gap: 20px;
  padding-top: 10rem;
  padding-bottom: 8rem;
}

.bg p {
  text-align: center;
  font-size: 20px;
  width: 1000px;
}

.satu {
  color: var(--kuning);
}

.judul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.judul h1 {
  font-family: "Montserrat", sans-serif;
  font-size: 80px;
}
</style>
