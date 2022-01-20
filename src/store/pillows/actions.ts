
import { ActionTree } from 'vuex';
import { PillowsState } from './types';
import { RootState } from '../types';


export const actions: ActionTree<PillowsState, RootState> = {
    async postForm(context): Promise<any> {
        if(context.state.subscriber == null){
            return
        }
        const { email, birthDate, optin } = context.state.subscriber;
        const { pillowCount } = context.state;
        try {
            const response = await fetch('https://61bb0826e943920017784bb1.mockapi.io/api/v1/suscribers', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    birthDate,
                    optin,
                    choice: pillowCount,
                })
            })
        } catch (error) {
            console.log(error)
        }
    }
};
