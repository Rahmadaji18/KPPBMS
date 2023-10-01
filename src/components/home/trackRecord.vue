<template>
  <section class="counters">
    <div class="container">
      <div class="wee">
        <h1>We Are Always Innovate</h1>
      </div>
      <div>
        <vue3-autocounter class="num" ref="counter" :startAmount="0" :endAmount="30" :duration="5" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" />
        <h2>Days<br />Experience</h2>
      </div>
      <div>
        <vue3-autocounter class="num" ref="counter" :startAmount="0" :endAmount="5" :duration="5" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" />
        <h2>Members<br />of Group</h2>
      </div>
      <div>
        <vue3-autocounter class="num" ref="counter" :startAmount="0" :endAmount="22" :duration="5" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" />
        <h2>Total<br />BMS Group</h2>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import Vue3autocounter from "vue3-autocounter";

export default defineComponent({
  name: "trackRecord",
  components: {
    "vue3-autocounter": Vue3autocounter,
  },
});
</script>

<style scoped>
.counters {
  display: flex;
  background-image: url(@/assets/images/record.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  justify-content: center;
  padding: 50px;
  width: 100%;
}

.container {
  width: 100%;
}

.counters .container {
  display: grid;
  grid-template-columns: 500px repeat(3, 1fr);
  text-align: center;
}

.wee h1 {
  line-height: 1.2;
  text-align: left;
  width: 200px;
  margin-left: 60px;
}

.num {
  font-weight: bold;
}
h2 {
  font-size: 30px;
  font-weight: 500;
}

.counters i {
  color: #fff;
  margin-bottom: 5px;
}

.counters .num {
  font-size: 45px;
  margin: 10px 0;
}

.counters .container h1 {
  font-size: 50px;
}

@media (max-width: 1180px) {
  .counters .container h1 {
    font-size: 35px;
  }

  .counters .num {
    font-size: 35px;
    margin: 10px 0;
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
  }

  .counters {
    background-size: auto;
  }
}

@media (max-width: 1000px) {
  .counters .container {
    display: grid;
    grid-template-columns: 300px repeat(3, 1fr);
    text-align: center;
  }

  .counters {
    background-size: cover;
    background-position: center;
  }
  .counters .container h1 {
    font-size: 35px;
    text-align: center;
    margin-left: 0;
  }
}

@media (max-width: 900px) {
  .counters .container {
    display: grid;
    grid-template-columns: 200px repeat(3, 1fr);
    text-align: center;
  }

  .counters {
    background-size: cover;
    background-position: center;
  }
}

@media (max-width: 768px) {
  .counters {
    background-size: cover;
    background-position: center;
  }
  .container {
    width: fit-content;
    max-width: 1200px;
  }

  .counters .container {
    display: grid;
    grid-template-columns: 200px;
    text-align: center;
    row-gap: 40px;
  }
  .counters .container h1 {
    font-size: 50px;
  }

  .counters .num {
    font-size: 45px;
    margin: 10px 0;
  }

  h2 {
    font-size: 30px;
    font-weight: 500;
  }
}

@media (max-width: 480px) {
  .counters {
    background-size: cover;
    background-position: center;
  }

  .counters .container h1 {
    font-size: 38px;
  }

  .counters .container h2 {
    font-size: 28px;
  }

  .counters .num {
    font-size: 28px;
  }
}
</style>
