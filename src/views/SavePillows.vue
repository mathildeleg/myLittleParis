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
            <button v-on:click="submitForm">Save choice</button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Action, Getter} from 'vuex-class';
    import { Component, Vue } from 'vue-property-decorator';

  const namespace: string = 'pillows';

@Component
export default class PillowsForm extends Vue {
    @Action('postForm', {namespace}) postForm: any;
    // @Getter('email', {namespace}) email: string | undefined;

    constructor() {
      super();
    }

    getEmail(event: any) {
        const emailValue = event.target.value;
        this.$store.commit('pillows/putEmail', emailValue);
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