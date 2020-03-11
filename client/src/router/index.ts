import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CreateUser from '../views/NewUser.vue';
import RoomsList from '../views/RoomsList.vue';
import Room from '../views/Room.vue';
import Login from '../views/Loginpage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/newuser', name: 'createuser', component: CreateUser },
  { path: '/rooms', name: 'Rooms', component: RoomsList },
  { path: '/room/:id', component: Room,  name: 'room'},
  { path: '/login', name: 'login', component: Login},
];

const router = new VueRouter({
  routes,
});

export default router;
