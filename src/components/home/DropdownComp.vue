<template>
  <div class="sub-items" @click="isOpen = !isOpen">
    <a href="#" class="tittle">
      {{ title }}
    </a>
    <svg viewBox="0 0 1030 638" width="10">
      <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="var(--biru)"></path>
    </svg>
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i" class="sub-items inside">
          <a :href="item.link">{{ item.title }}</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "dropdownComp",
  props: ["title", "items"],
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.sub-items {
  color: var(--biru);
  position: relative;
  text-align: center;
  border-bottom: transparent;
  display: flex;
  transition: 0.4s;
}

.sub-items:active {
  width: 100%;
}

a::after {
  content: " ";
  width: 0;
  height: 3px;
  background: #002855;
  position: absolute;
  left: 0;
  bottom: -6px;
  transition: 0.5s;
}

a:hover::after {
  width: 100%;
}

.sub-menu a:hover::after {
  width: 100%;
}

.sub-items a {
  text-decoration: none;
  color: var(--biru);
  font-size: 15px;
  font-weight: 600;
}

.sub-items svg {
  width: 10px;
  margin-left: 10px;
}

.sub-items .sub-menu {
  position: absolute;
  background-color: var(--kuning);
  top: calc(100% + 10px);
  left: 50%;
  transform: translate(-50%);
  width: max-content;
  border-radius: 0 0 16px 16px;
}

.sub-menu {
  padding: 10px 20px;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
}

.sub-items.inside {
  margin-bottom: 10px;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-out;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}
</style>
