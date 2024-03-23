import Vue from 'vue';
import App from './App.vue';
import FormWrapper from "@/components/FormWrapper.vue";

Vue.config.productionTip = false;

Vue.prototype.$global = {
  previousData: [],
};

Vue.component("form-wrapper", FormWrapper);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
