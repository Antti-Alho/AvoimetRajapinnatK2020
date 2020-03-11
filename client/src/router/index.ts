import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NewUser from '../views/NewUser.vue';
import RoomsList from '../views/RoomsList.vue';
import Login from '../views/Loginpage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/newuser', name: 'Create User', component: NewUser },
  { path: '/rooms', name: 'Rooms', component: RoomsList },
  { path: '/login', name: 'login', component: Login},
];

const router = new VueRouter({
  routes,
});

export default router;
