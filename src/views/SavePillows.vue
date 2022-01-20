<template>
    <div id="container">
        <div id="container-form">
            <form>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-on:change="getEmail">
                <label for="birthdate">Date of birth</label>
                <input type="date" name="birthdate" id="birthdate" v-on:change="getBirthDate">
                <div id="container-optin">
                    <label for="optin">I agree to...</label>
                    <input type="checkbox" name="optin" id="optin" v-on:change="getOptin">
                </div>
            </form>
            <button v-on:click="submitForm" v-if="isSubscriberFulfilled">Save choice</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Action, Getter } from 'vuex-class';
    import { Component, Vue } from 'vue-property-decorator';

    const namespace: string = 'pillows';

    @Component
    export default class PillowsForm extends Vue {
    @Action('postForm', {namespace}) postForm: any;
    @Getter('isSubscriberFulfilled', {namespace}) isSubscriberFulfilled: boolean;

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

<style lang="css">
*, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

#container{
    display: flex;
    justify-content: center;
    align-content: center;
}

form{
    display: flex;
    flex-direction: column;
}

#email, #birthdate{
    background-color: orange;
    color: white;
    border: 1px solid orange;
    border-radius: 10px;
}

label{
    font-weight: bold;
    margin: 10px;
}

button{
    border-radius: 10px;
    width: 100px;
    padding: 5px;
    background-color: orange;
    border: 1px solid orange;
    color: white;
    font-weight: bold;
}

#container-optin{
    margin: 10px;
}

</style>