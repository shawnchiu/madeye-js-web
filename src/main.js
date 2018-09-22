// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/index';
import ElementUI from 'element-ui';
import '../element-variables.scss';
import 'element-ui/lib/theme-chalk/index.css';
// import '../theme/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$ELEMENT = {size: 'small', zIndex: 3000};


/* eslint-disable no-new */
new Vue({
  created: function () {
    this.$router.push('/index');
  },
  el: '#app',
  router,
  methods:{

  },
  render: h => h(App)
});


