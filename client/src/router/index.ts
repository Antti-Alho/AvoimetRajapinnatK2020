import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NewUser from '../views/NewUser.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/newuser', name: 'Create User', component: NewUser },
];

const router = new VueRouter({
  routes,
});

export default router;
