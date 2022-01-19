<template>
    <div>
        <img src="../assets/coussins/1.png" />
        <div id="count">
            <button v-if="isMinCount()" v-on:click="decrement">-</button>
            <div>{{pillowCount}}</div>
            <button v-if="isMaxCount()" v-on:click="increment">+</button>
        </div>
        <router-link to="/pillows/save">Next Page</router-link>
    </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {Action, Getter} from 'vuex-class';
  import { MAX_PILLOWS, MIN_PILLOWS } from '../store/pillows/mutations';

  const namespace: string = 'pillows';

  @Component
  export default class Pillows extends Vue {
    @Getter('pillowCount', {namespace}) pillowCount: number;

    constructor() {
      super();
    }

    increment() {
        this.$store.commit('pillows/increment');
    }

    decrement() {
        this.$store.commit('pillows/decrement');
    }

    isMaxCount() {
        return this.pillowCount < MAX_PILLOWS;
    }

    isMinCount() {
        return this.pillowCount > MIN_PILLOWS;
    }

  }
</script>
