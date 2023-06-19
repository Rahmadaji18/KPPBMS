import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue3Autocounter from "vue3-autocounter";
import VueSweetalert2 from "vue-sweetalert2";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret, faHouse, faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faHouse, faFacebook, faInstagram, faLinkedin, faBars);

createApp(App).use(store).use(router).use(VueSweetalert2).component("font-awesome-icon", FontAwesomeIcon, "vue3-autocounter", Vue3Autocounter).mount("#app");
