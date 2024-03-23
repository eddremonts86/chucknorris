/**
 * No import components in main.js, this can be an small app but it's not a good practice
 *in case multiple imports sort by name all of them, it will be ease to read and maintain
 */

import FormWrapper from "@/components/FormWrapper.vue";
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.prototype.$global = {
  /* Don't use global vue instance to store data, it will cause memory
  leak, please use Vuex, pinia or other state management tool */
  previousData: [],
};

/* Don't register the component globally if it isn't part of
a ui package or a component that is used in multiple places */
Vue.component("form-wrapper", FormWrapper);

new Vue({
  render: (h) => h(App), 
}).$mount("#app");
