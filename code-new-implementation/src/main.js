import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/style.css";
import "@/UI"

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
