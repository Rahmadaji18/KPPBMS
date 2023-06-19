<template>
  <div class="bg2">
    <div class="bg">
      <div class="judul">
        <h1 class="satu">{{ title1 }}</h1>
        <h1>{{ title2 }}</h1>
      </div>
      <p>{{ description }}</p>
    </div>
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

<style scoped lang="scss">
.bg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--putih);
  height: auto;
  gap: 20px;
  padding-top: 10rem;
  padding-bottom: 8rem;
  width: 80%;
  max-width: 1200px;
}

.bg2{
  display: flex;
  justify-content: center;
  background-color: var(--biru);
}

.bg p {
  text-align: center;
  font-size: 20px;

  @media(max-width: 1270px){
    font-size: 15px;
  }

  @media(max-width: 1080px){
    font-size: 12px;
  }

  @media(max-width: 1000px){
    font-size: 15px;
  }
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
  text-align: center;

  @media(max-width: 1270px){
    font-size: 60px;
  }

  @media(max-width: 1140px){
    font-size: 50px;
  }

  @media(max-width: 1080px){
    font-size: 45px;
  }
  
  @media(max-width: 1000px){
    font-size: 50px;
  }
}
</style>
