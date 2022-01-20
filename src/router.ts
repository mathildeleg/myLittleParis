import Vue from 'vue';
import Router from 'vue-router';
import Pillows from './views/Pillows.vue';
import SavePillows from './views/SavePillows.vue';

Vue.use(Router);

export default new Router({
  routes: [
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
