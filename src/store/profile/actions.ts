
import { ActionTree } from 'vuex';
import { ProfileState, User } from './types';
import { RootState } from '../types';


export const actions: ActionTree<ProfileState, RootState> = {
  async fetchData({ commit }): Promise<any> {
    try {
      const response = await fetch('https://next.json-generator.com/api/json/get/41AeRPqnE') as any;
      const payload: User = response && response.data;
      commit('profileLoaded', payload);
    } catch (error) {
      console.log(error);
      commit('profileError');
    }
  },
};
