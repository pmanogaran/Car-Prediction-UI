import Vue from 'vue'
import App from './App.vue'
import {MdButton, MdDialog, MdDivider, MdField, MdIcon, MdList, MdMenu} from "vue-material/dist/components";
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import axios from "axios";

Vue.prototype.$http = axios;
Vue.config.productionTip = false
Vue.use(MdIcon);
Vue.use(MdButton);
Vue.use(MdDialog);
Vue.use(MdField);
Vue.use(MdMenu);
Vue.use(MdList);
Vue.use(MdDivider);

new Vue({
  render: h => h(App),
}).$mount('#app')
