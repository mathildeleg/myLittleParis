import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { PillowsState } from './types';
import { RootState } from '../types';

export const state: PillowsState = {
  pillowCount: 0,
};

const namespaced: boolean = true;

export const pillows: Module<PillowsState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
