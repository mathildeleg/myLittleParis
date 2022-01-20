<template>
    <div>
        <div>
            <form>
                <label for="email">Email</label>
                <input type="email" name="email" v-on:change="getEmail">
                <label for="birthdate">Date of birth</label>
                <input type="date" name="birthdate" id="birthdate" v-on:change="getBirthDate">
                <label for="optin">I agree to...</label>
                <input type="checkbox" name="optin" id="optin" v-on:change="getOptin">
            </form>
            <button v-on:click="submitForm" v-if="isSubscriberFulfilled">Save choice</button>
        </div>
    </div>
</template>

<script lang="ts">
    import {State, Action, Getter} from 'vuex-class';
    import { Component, Vue } from 'vue-property-decorator';
    import { PillowsState } from '@/store/pillows/types';

    const namespace: string = 'pillows';

    @Component
    export default class PillowsForm extends Vue {
    @Action('postForm', {namespace}) postForm: any;
    @Getter('isSubscriberFulfilled', {namespace}) isSubscriberFulfilled: boolean;
    @State('pillows') pillows: PillowsState;

    constructor() {
      super();
    }

    isEmailValid(email: string) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*))@((\[[0-9]\.{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    getEmail(event: any) {
        const emailValue = event.target.value;
        if(this.isEmailValid(emailValue)) {
            this.$store.commit('pillows/putEmail', emailValue);
        } else {
            console.log('error for email');
        }
    }

    getBirthDate(event: any) {
        const birthDateValue = event.target.value;
        this.$store.commit('pillows/putBirthDate', birthDateValue);
    }

    getOptin(event: any) {
        const optinValue = event.target.checked;
        this.$store.commit('pillows/putOptin', optinValue);
    }

    submitForm() {
        this.postForm();
    }

}
</script>