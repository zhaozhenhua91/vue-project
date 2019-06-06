import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import {Layout, Menu, Icon, Dropdown, Drawer, Button, Radio} from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Dropdown);
Vue.use(Drawer);
Vue.use(Button);
Vue.use(Radio);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
