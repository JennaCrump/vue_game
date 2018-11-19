import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAmilia, faSlackHash } from "@fortawesome/free-brands-svg-icons";
import { faCertificate, faGlasses } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers
} from "@fortawesome/vue-fontawesome";

library.add(faCertificate, faAmilia, faSlackHash, faGlasses);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
