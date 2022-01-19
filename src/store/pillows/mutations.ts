import { MutationTree } from 'vuex';
import { PillowsState } from './types';

export const MAX_PILLOWS = 10;
export const MIN_PILLOWS = 0;

export const mutations: MutationTree<PillowsState> = {
  increment(state) {
    if(!(state.pillowCount === MAX_PILLOWS)) {
      state.pillowCount += 1;
    }
  },
  decrement(state) {
    if(!(state.pillowCount === MIN_PILLOWS)) {
      state.pillowCount -= 1;
    }
  },
};
