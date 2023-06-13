<template>
  <section class="counters">
    <div class="container">
      <div class="wee">
        <h1>We Are Always Innovate</h1>
      </div>
      <div>
        <vue3-autocounter class="num" ref="counter" :startAmount="0" :endAmount="1080" :duration="15" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" />
        <h2>Days<br />Experience</h2>
      </div>
      <div>
        <vue3-autocounter class="num" ref="counter" :startAmount="0" :endAmount="348" :duration="15" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" />
        <h2>Projects<br />Completed</h2>
      </div>
      <div>
        <vue3-autocounter class="num" ref="counter" :startAmount="0" :endAmount="328" :duration="15" prefix="" suffix="" separator="" decimalSeparator="" :decimals="0" :autoinit="true" />
        <h2>Total<br />Clients</h2>
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

@media (max-width: 1000px) {
  .counters .container {
    grid-template-columns: repeat(2, 1fr);
  }

  .counters .container > div:nth-of-type(1),
  .counters .container > div:nth-of-type(2) {
    border-bottom: 1px lightskyblue solid;
    padding-bottom: 20px;
  }
}
</style>
