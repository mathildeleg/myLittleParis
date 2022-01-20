import { GetterTree } from 'vuex';
import { PillowsState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<PillowsState, RootState> = {
  pillowCount(state): number {
    return state.pillowCount;
  },
  isSubscriberFulfilled(state): boolean {
    return Boolean(state.subscriber.email && state.subscriber.birthDate && state.subscriber.optin);
  },
};
