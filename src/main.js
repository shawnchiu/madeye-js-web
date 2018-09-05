import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import Dashboard from './components/dashboard/Dashboard.vue';
import Index from './components/index/Index.vue';
import User from './components/user/User.vue';
import LogQuery from './components/log/LogQuery.vue';
import Watch from './components/log/Watch.vue';
import Business from './components/business/Business.vue';
import Login from './components/user/Login.vue';

Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.prototype.$ELEMENT = {size: 'small', zIndex: 3000};

var router = new VueRouter({
    routes: [
        {
            path: '/index', component: Index,
            children: [
                {path: '/dashboard', component: Dashboard},
                {path: '/user', component: User},
                {path: '/logQuery', component: LogQuery},
                {path: '/logWatch', component: Watch},
                {path: '/business', component: Business}]
        },

        {path: '/login', component: Login}

    ]
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});