<template>
    <div>
        <h1>Combien d'oreillers dans votre vie ?</h1>
        <ImgPillows v-bind:pillow-count="pillowCount"/>
        <div id="count">
            <button v-if="isMinCount()" v-on:click="decrement">-</button>
            <div>{{pillowCount}}</div>
            <button v-if="isMaxCount()" v-on:click="increment">+</button>
        </div>
        <router-link to="/pillows/save">Next Page</router-link>
    </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Getter } from 'vuex-class';
  import { MAX_PILLOWS, MIN_PILLOWS } from '../store/pillows/mutations';
  import ImgPillows from '@/components/ImgPillows.vue';

  const namespace: string = 'pillows';

  @Component({
  components: {
    ImgPillows,
  },
})
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
