import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
// import About from './views/users.vue';
import Pillows from './views/Pillows.vue';
import SavePillows from './views/SavePillows.vue';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About,
    // },
    {
      path: '/pillows',
      name: 'pillows',
      component: Pillows,
    },
    {
      path: '/pillows/save',
      name: 'save',
      component: SavePillows,
    },
  ],
});
