import Vue from 'vue';
import App from './App.vue';
import "@/assets/css/style.css";

import FormWrapper from "@/components/FormWrapper.vue";
Vue.prototype.$global = {
  previousData: [],
};

Vue.config.productionTip = false;
Vue.component("form-wrapper", FormWrapper);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
