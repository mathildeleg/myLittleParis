import Vue from 'vue';
import Vuex from 'vuex';
import { profile } from './profile/index';
import { pillows } from './pillows';
import { RootState } from './types';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence<RootState>({
  storage: window.localStorage,
});

export default new Vuex.Store<RootState>({
  state: {
    version: '1.0.0', // a simple property
  },
  modules: {
    profile,
    pillows,
  },
  mutations: {

  },
  actions: {

  },
  plugins: [vuexLocal.plugin],
});
